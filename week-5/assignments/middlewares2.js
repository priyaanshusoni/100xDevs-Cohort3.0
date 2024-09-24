// assignment task -> Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");


const app = express();

let requestCount =0;

function countIncreaser(req,res,next){
    requestCount++;
    console.log(requestCount);

    next();
    
}


app.get("/endpoint",function(req,res){
    
    res.json({
        RequestsCount : requestCount,
    })
})



// but when  I use app.use() middleware then i don't need to pass middleware function in app.get() , this middleware will automatically be called whenever someone tries to hit any route on my HTTP server.
//all the app.get() methods will be included after app.use()





app.use(countIncreaser);


app.get("/sum/:a/:b", function(req,res){
   
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