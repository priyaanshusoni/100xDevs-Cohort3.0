const {Router} =  require("express");
const {UserModel , adminModel , CourseModel , PurchaseModel} =require("../db");
const userMiddleware = require("../middleware/userMiddleware");
const courseRouter = Router();

//showing user all the available courses on our website 
courseRouter.get("/preview" , async (req,res)=>{
    try{
       const courses =  await CourseModel.find({});

        return res.json({
            message : courses
        })
    }catch(error){
        return res.json({
            message : error
        })
    }

 
})





//when a user wants to purchase a course
courseRouter.post("/purchase" , userMiddleware, async (req,res)=>{
   const userId = req.userId;
   const {courseId, title} = req.body;

   try{
   await  PurchaseModel.create({
        courseId : courseId,
        userId : userId
    })

    return res.json({
        message : "You have succesfuly bought this course !"
    })
    

   }catch(error){
    console.log(error);
   }
})

module.exports = courseRouter
