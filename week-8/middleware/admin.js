const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;



function adminMiddleware(req,res,next){

   const token = req.headers.token;

   const decodedInfo = jwt.verify(token,JWT_ADMIN_SECRET);

   if(decodedInfo){
    req.adminId = decodedInfo.id;
    
     next();
   }

   else{
    res.status(404).json({
        message : "Token Invalid or you are not signed in"
    })
   }
}

module.exports = {
    adminMiddleware
}