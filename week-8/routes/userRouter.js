const express = require("express");
const Router = express.Router;
const userRouter = Router();
const {UserModel , PurchaseModel, CourseModel} = require("../db");
const bcrypt = require("bcrypt");
const {z} = require("zod");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {userMiddleware} = require("../middleware/user");
dotenv.config();
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;





userRouter.post("/signup",async function(req,res){


   const { email, password , firstName , lastName } = req.body;

  

        try{


        if(!email || !password || !firstName || !lastName ){
            return res.status(400).json({
                message : "Please fill all fields !"
            })
        }

        const hashedPassword =  await bcrypt.hash(password ,5);
    
     await  UserModel.create({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : hashedPassword
       })

      return  res.status(200).json({
        message : "You're Signed up succesfully!"
       })


    } catch(error){
       return   res.json({
            message : error
          })
    }

})



userRouter.post("/signin",async function(req,res){

    const {password , email} = req.body;

   try{
    const user = await UserModel.findOne({
        email : email,
         
    })

        if(!user) {
            return res.status(400).json({
                message : "No User found "
            })
        }

        const passwordMatch = await bcrypt.compare(password , user.password); // The first aegument should be a plain text & the second argument must be a hashed password from database
        if(passwordMatch){
            const token = jwt.sign({
                id:user._id
            },JWT_USER_SECRET);

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



//to last endpoint for the user to see all of their purchases 
 
userRouter.get("/purchases",userMiddleware,async function(req,res){
   const userId = req.userId;

    try{

     const purchases=  await PurchaseModel.find({
            userId : userId,
           
         })


       const courses =   await CourseModel.find({
            _id : purchases.map((x)=> x.courseId)
         })





         if(courses){

    
       return res.json({
         courses
       })
    }




    }catch(error){
        return res.json({
            message : error
        })
    }




})






module.exports =  userRouter
