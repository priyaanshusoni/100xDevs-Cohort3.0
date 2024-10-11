
const express = require("express");

const Router = express.Router;
const {userMiddleware} = require("../middleware/user");
const {PurchaseModel, CourseModel} = require("../db");

const courseRouter = Router();









//when a user want to purchase a course 
courseRouter.post("/purchase",userMiddleware, async function(req,res){
    const userId = req.userId;

   const courseId = req.body.courseId;

   try{

    //check if a user has actually paid the price  
    await PurchaseModel.create({
        userId : userId,
        courseId : courseId,
    })

    return res.json({
        message : "You have succesfully bought this course !"
    })
   } catch(error){

    return res.json({
        message : error
    })

   }

})

//to see all courses

courseRouter.get("/preview",async function(req,res){
   // this endpoint does not needs to be authenticated now , because we are just showing users available courses on our websites & their preview 
   
  try{
    const courses = await CourseModel.find({}); // give me all the courses
    return res.json({
        courses
    })

  } catch(error){
   return res.json({
    message : error
   })
       
  }
  

})




module.exports = courseRouter;