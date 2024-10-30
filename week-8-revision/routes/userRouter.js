
const {Router} = require("express");
const {UserModel , adminModel , CourseModel , PurchaseModel} =require("../db");

// const Router = express.Router;
const userRouter = Router();


userRouter.post("/signup", async (req,res)=>{
    const {email , password , firstName , lastName} = req.body;


    try{
        await UserModel.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password
        })

        return res.status(200).json({
            message : "You are Signed Up Succesfully !"
        })
    }catch(error){
        return res.status(400).json({
            message : error
        })
    }
   


})
userRouter.post("/signin", (req,res)=>{
    res.json({
        message : "signin endpoint"
    }) 
})
userRouter.get("/purchases", (req,res)=>{
    res.json({
        message : "purchases endpoint"
    })
})


module.exports = userRouter