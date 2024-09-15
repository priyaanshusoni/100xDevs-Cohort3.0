const express = require("express");

const app =  express();

//creating an HTTP server 

function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
       ans+=i;
    }

    return ans;
}

app.get("/" , function(req,res){

    const n = req.query.n;
    res.send("Hello Patient your sum is "+n);
})


app.listen(4000);


