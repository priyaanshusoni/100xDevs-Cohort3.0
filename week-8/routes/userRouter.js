const express = require("express");
const Router = express.Router;
const userRouter = Router();
const {UserModel} = require("../db");



userRouter.post("/signup",async function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    try{

        if(!email || !password || !firstName || !lastName ){
            return res.status(400).json({
                message : "Please fill all fields !"
            })
        }
    
     await  UserModel.create({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
       })

       res.status(200).json({
        message : "You're Signed up succesfully!"
       })


    } catch(error){
          res.json({
            message : error
          })
    }

    res.json({
        message : "signup endpoint"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        message : "signin endpoint"
    })
})
//to purchase a course
userRouter.post("/purchases",function(req,res){
    res.json({
        message : "purchase endpoint"
    })

})







module.exports =  userRouter
