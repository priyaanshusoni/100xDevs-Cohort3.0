//creating an HTTP server 
const express = require("express");


const app = express();

app.listen(3000);

function sum(n){
    let ans=0;

    for(let i=1;i<=n;i++){
        ans+=i;
    }

    return ans;
}

app.get("/",function(req,res){
    const n = req.query.n; //query parameters 

    const ans = sum(n);

    res.send("Hi your answer is: "+ ans);



    // res.send("Hi There");
   
})






