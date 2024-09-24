const express = require("express");


const app = express();


// app.get("/sum",function(req,res){
    
//     const a = req.query.a;
//     const b = req.query.b;

//     const ans = a+b;

//     res.json({
//         ans : ans
//     })
// })
app.get("/sum/:a/:b",function(req,res){
    
    const a = req.params.a;
    const b = req.params.b;

    const ans = parseInt(a)+ parseInt(b);

    res.json({
        ans : ans
    })
})
app.get("/multiply",function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    const ans = a*b;

    res.json({
        ans : ans
    })
})
app.get("/divide",function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    const ans = a/b;

    res.json({
        ans : ans
    })
})
app.get("/substract",function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    const ans = a-b;

    res.json({
        ans : ans
    })
})









app.listen(3000);