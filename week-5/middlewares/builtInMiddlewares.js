// the first built in middle ware is express.json()



const express = require("express");


const app = express();













// In express if you want to send json data
//you need to first parse the json data 
// and now it's the job of the middleware na !!!!!! that I send you a & b in body now it's job of the middleware to parse it 

app.use(express.json()); // express.json() is a function which returns another function that we need to pass as as an argument in app.use()
//that's why we are passing express.json() in app.use instead of app.use(express.json)

/* ex-> let express = {
    json : function (){

        return function(req,res,next)
    }
} */ 


app.post("/sum", function(req,res){
   
    const a = req.body.a; //it will be a json object and my express.json() will parse it to a value 
    const b = req.body.b;

    const ans = parseInt(a)+ parseInt(b);

    res.json({
        ans : ans
    })
})


app.listen(3000);