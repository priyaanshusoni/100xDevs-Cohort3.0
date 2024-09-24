const express = require("express");


const app = express();

let requestCount =0;

function countIncreaser(){
    requestCount++;
    console.log(requestCount);
    
}

// but when I use app.use() middleware then i don't need to pass middleware function in app.get() , this middleware will automatically be called whenever someone tries to hit any route on my HTTP server.




app.get("/sum/:a/:b",countIncreaser,function(req,res){
   
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