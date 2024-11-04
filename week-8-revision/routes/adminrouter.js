const {Router}  =  require("express");
const {UserModel , adminModel , CourseModel , PurchaseModel} =require("../db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const adminMiddleware = require("../middleware/adminMiddleware");
dotenv.config();
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
adminRouter.post("/signup",  async (req,res)=>{
    const {email , password , firstName , lastName} = req.body;
   
    const hashedPassword = await bcrypt.hash(password,5); // using hashedPassword to store into the database

    try{
        await adminModel.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : hashedPassword,
        })

        return res.status(200).json({
            message : "You are Signed Up Succesfully !"
        })
    }catch(error){
        return res.status(400).json({
            message : error
        })
    }
   

})
adminRouter.post("/signin", async (req,res)=>{
    try{
        const {email , password} = req.body;

   

        const admin=  await adminModel.findOne({ // It will return either the admin or undefined
         email : email,
        })
     
        if(!admin){
            return res.status(401).json({
                message : "No User Found !"
            })

        }

        const passwordMatch = await bcrypt.compare(password , admin.password);
        

        if(!passwordMatch){
            return res.status(403).json({
                message : "Incorrect Credentails !"
            })
        }

        else{
          const token = jwt.sign({
            id : admin._id,
            role : 'admin'
          },JWT_ADMIN_SECRET);

          return res.json({
            message : token
          })

        }
    }catch(error){
        return res.status(401).json({
            message : error
        })
}
})
adminRouter.post("/course",adminMiddleware, async (req,res)=>{

    try{

      const adminId = req.adminId
        const {title , description ,price , imageURL ,} = req.body;


        if(!title || !description || !price || !imageURL){
            return res.status(400).json({
                message : "Please add required info for the course"
            })
          }
        await CourseModel.create({
          title : title,
          description : description,
          price : price,
          imageURL : imageURL,
          creatorId : adminId
      
        })

        return res.json({
            message : "Course Created Succesfully !"
        })
    }catch(error){
        console.log(error);
        return res.status(403).json({
            message : error
        })
    }
 

})
adminRouter.get("/course",adminMiddleware, async (req,res)=>{
    const adminId = req.adminId;
    try{
        const course = await CourseModel.find({
            creatorId : adminId
        })
       
        if(course.length==0){
            return res.json({
                messsage : "No Courses created"
            })
        }
            else{
                return res.json({
                    message : course
                })
            }
        

    }catch(error){
        console.log(error);
    }
  
})
adminRouter.put("/course", adminMiddleware,async (req,res)=>{
   const adminId = req.adminId;

   try{
    const {title , description , imageURL , price , courseId} = req.body;

    const course = await CourseModel.findOneAndUpdate({
        _id: courseId,
        creatorId : adminId // creator should only be able to update his course only 

    },{
        title : title,
        description : description,
        price : price,
        imageURL : imageURL,
      
    })

    // if(course==null){
    //     return res.json({
    //         message : "No course access found !"
    //     })
    // }

    return res.json({
        message : "course updated succesfully !",
        courseId : course._id
    })

   }catch(error){
         console.log(error);
       
   }
})


module.exports = adminRouter
 