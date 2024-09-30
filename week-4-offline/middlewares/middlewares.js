const express = require("express");

const app = express();



//function returns a boolean if the age of the person is more than 14 

// function isOldEnough(age){
//     if(age>=14)
//     return true;
//     else 
//     return false; 
// }



function isOldEnoughMiddlewares(req,res,next){
    const age = req.query.age;
    if(age>=14)
    next();
    else 
     res.status(411).json({
         msg: "Sorry ! you're not allowed"
        }); 
} 

//we can also define middlewares like this -> 
// app.use(isOldEnoughMIddlewares)
app.get("/ride1" ,isOldEnoughMiddlewares, function(req,res){
    // if(isOldEnough(req.query.age))
    res.json({
        msg : "You have succesfully riden the ride1"
    })

//     else 
//     res.status(411).json({
//  msg: "Sorry ! you're not allowed"
// })
})
app.get("/ride2" , isOldEnoughMiddlewares, function(req,res){
    // if(isOldEnough(req.query.age))
    res.json({
        msg : "You have succesfully riden the ride2"
    })

//     else 
//     res.status(411).json({
//  msg: "Sorry ! you're not allowed"
// })
})



app.listen(3000);

