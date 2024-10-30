const {Router}  =  require("express");
const {UserModel , adminModel , CourseModel , PurchaseModel} =require("../db");
const adminRouter = Router();

adminRouter.post("/signup", (req,res)=>{
    res.json({
        message : " admin signup endpoint"
    })
})
adminRouter.post("/signin", (req,res)=>{
    res.json({
        message : "admin signin endpoint"
    }) 
})
adminRouter.post("/course", (req,res)=>{
    res.json({
        message : "admin course endpoint"
    })
})
adminRouter.get("/course", (req,res)=>{
    res.json({
        message : "admin course endpoint"
    })
})
adminRouter.put("/course", (req,res)=>{
    res.json({
        message : "admin course endpoint"
    })
})


module.exports = adminRouter
