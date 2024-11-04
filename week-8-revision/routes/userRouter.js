
const {Router} = require("express");
const {UserModel , adminModel , CourseModel , PurchaseModel} =require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userMiddleware = require("../middleware/userMiddleware");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
// const Router = express.Router;
const userRouter = Router();
userRouter.post("/signup", async (req,res)=>{
    const {email , password , firstName , lastName} = req.body;
   
    const hashedPassword = await bcrypt.hash(password,5); // using hashedPassword to store into the database

    try{
        await UserModel.create({
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
userRouter.post("/signin",async (req,res)=>{

    try{
        const {email , password} = req.body;

   

        const user=  await UserModel.findOne({ // It will return either the user or undefined
         email : email,
        })
     
        if(!user){
            return res.status(401).json({
                message : "No User Found !"
            })

        }

        const passwordMatch = await bcrypt.compare(password , user.password);
        

        if(!passwordMatch){
            return res.status(403).json({
                message : "Incorrect Credentails !"
            })
        }

        else{
          const token = jwt.sign({
            id : user._id,
            role : 'user'
          },JWT_SECRET);

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
userRouter.get("/purchases", userMiddleware, async (req,res)=>{
   const userId = req.userId;


   try{
    const purchasedCourses = await PurchaseModel.find({
        userId : userId
    })

    
   
        const courses =await  CourseModel.find({
            _id : purchasedCourses.map((x)=>x.courseId)
        })
    

        if(courses){
           return res.json({
            message : courses
           })
        }

        else{
            return res.json({
                message : "No purchased Courses !"
            })
        }

   }catch(error){
    console.log(error);
     return res.json({
        message : error
     })
   }
})


module.exports = userRouter