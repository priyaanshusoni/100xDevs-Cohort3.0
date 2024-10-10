const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_USER_SECRET = process.env.JWT_USER_SECRET;



function userMiddleware(req,res,next){

   const token = req.headers.token;

   const decodedInfo = jwt.verify(token,JWT_USER_SECRET);

   if(decodedInfo){
    req.userId = decodedInfo.id;
    
     next();
   }

   else{
    res.status(404).json({
        message : "Token Invalid or you are not signed in"
    })
   }
}

module.exports = {
    userMiddleware
}