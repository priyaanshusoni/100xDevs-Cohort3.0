// creating a middleware that logs each incoming request's HTTP method , URL , and timestamp to the console.

const express = require("express");

const app = express();

function middlewares(req,res,next){
    const date = new Date();

    
    console.log(`Method is ${req.method}`);
    console.log(`URL is ${req.url}`);
    console.log(`Timestap is ${date.toLocaleTimeString()}`);
    
    next();
    
}


app.get("/",middlewares,function(req,res){
    
       res.send("Hello Check Your Console");
})


app.listen(3000);