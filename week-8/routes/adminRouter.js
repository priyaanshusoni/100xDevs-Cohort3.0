const express = require("express");
const Router = express.Router;
const {AdminModel,CourseModel} = require("../db")
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {adminMiddleware} = require("../middleware/admin");
dotenv.config();
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;




adminRouter.post("/signup",async function(req,res){
    const { email, password , firstName , lastName } = req.body;

   

    try{

       
    if(!email || !password || !firstName || !lastName ){
        return res.status(400).json({
            message : "Please fill all fields !"
        })
    }

    const hashedPassword =  await bcrypt.hash(password ,5);
   

 await  AdminModel.create({
    firstName : firstName,
    lastName : lastName,
    email : email,
    password : hashedPassword
   })
  
  return  res.status(200).json({
    message : "Admin Signed up succesfully !"
   })


} catch(error){
   return   res.json({
        message : error
      })
}

})




adminRouter.post("/signin", async function(req,res){
    const {password , email} = req.body;

   try{
    const admin = await AdminModel.findOne({
        email : email,
         
    })

        if(!admin) {
            return res.status(400).json({
                message : "No Admin found "
            })
        }

        const passwordMatch = await bcrypt.compare(password , admin.password); // The first aegument should be a plain text & the second argument must be a hashed password from database
        if(passwordMatch){
            const token = jwt.sign({
                id:admin._id
            },JWT_ADMIN_SECRET);

          //Do Cookie Logic
            return res.json({
                message : token
            })
        }

        else{
            return res.status(403).json({
                message : "Incorrect Credentials !"
            })
        }

    

   }catch(error){
         return res.json({
            message : error
         })
   }
})


adminRouter.post("/course",adminMiddleware,async function(req,res){
   
      const adminId = req.adminId;
      const {title,description , price , imageURL} = req.body;


  if(!title || !description || !price || !imageURL){
    return res.status(400).json({
        message : "Please add required info for the course"
    })
  }


      await CourseModel.create({
        title: title,
        description : description,
        imageURL : imageURL,
        price : price,
        creatorId : adminId


      })

      return res.status(200).json({
        message : "Course Succesfully added!"
      })
})







adminRouter.put("/course",function(req,res){
    res.json({
        message : "admin update course endpoint"
    })
})
adminRouter.get("/course",function(req,res){
    res.json({
        message : "admin get course endpoint"
    })
})









module.exports =  adminRouter
