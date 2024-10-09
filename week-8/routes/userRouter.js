const express = require("express");

const Router = express.Router;

const userRouter = Router();


userRouter.post("/signup",function(req,res){
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


userRouter.get("/courses",function(req,res){
    res.json({
        message : "courses details endpoint"
    })
})



module.exports = {
    userRouter,
}