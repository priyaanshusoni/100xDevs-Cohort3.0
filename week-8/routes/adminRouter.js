const express = require("express");

const Router = express.Router;

const {AdminModel} = require("../db")
const adminRouter = Router();



adminRouter.post("/signup",function(req,res){
    res.json({
        message : "signup endpoint"
    })
})
adminRouter.post("/signin",function(req,res){
    res.json({
        message : "signin endpoint"
    })
})


adminRouter.post("/course",function(req,res){
    res.json({
        message : "admin create course endpoint"
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
