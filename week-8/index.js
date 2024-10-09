const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { userRouter } = require("./routes/userRouter");
dotenv.config();

const app = express();

app.use(express.json());

app.use("/user",userRouter)
app.use("/course",courseRouter);


//to see all courses

app.get("/courses",function(req,res){
    res.json({
        message : "courses endpoint"
    })
})




//to seea user's course

