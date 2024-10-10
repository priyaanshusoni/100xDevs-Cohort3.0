
const express = require("express");

const Router = express.Router;

const courseRouter = Router();









//when a user want to purchase a course 
courseRouter.post("/purchase",function(req,res){
    res.json({
        message : "course purchase endpoint"
    })
})

//to see all courses

courseRouter.get("/preview",function(req,res){
    res.json({
        message : "preview courses endpoint"
    })
})




module.exports = courseRouter;