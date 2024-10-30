const {Router} =  require("express");
const {UserModel , adminModel , CourseModel , PurchaseModel} =require("../db");

const courseRouter = Router();

//showing user all the available courses on our website 
courseRouter.get("/preview" , (req,res)=>{
res.json({
    message : "course preview endpoint"
})
})





//when a user wants to purchase a course
courseRouter.post("/purchase" , (req,res)=>{
    res.json({
        message : "course purchase endpont"
    })

})

module.exports = courseRouter
