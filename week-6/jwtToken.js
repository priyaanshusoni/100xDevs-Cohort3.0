const express = require("express");
const JWT_SECRET = "priyanshucreatedjwt"
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());


let users = [];




  

app.post("/signup" , function(req,res){
       const username = req.body.username;
       const password = req.body.password;

    for(let i=0;i<users.length;i++){
               if(users[i].username==username){
                  res.json({
                    msg : "The user with same username already Exists"
                  })
               }

               else if(users[i].username==username && users[i].password===password){
                res.json({
                    msg : "This user Already Exists !"
                })
               }
    }

       let newUser = {
        username : username,
        password : password,
       }

    users.push(newUser);

    res.send("You are signed up now")

})

app.post("/signin" , function(req,res){
//this should return me a token a jwt token that i willl create 

const username = req.body.username;
const password = req.body.password;

 let token = jwt.sign({
    username : username,
 },JWT_SECRET);            // this sort of created the token 

// this jwt.sign() takes two arguments 
//1. what do you want to encode ( in our case it is username) 

//2. what is your secret that you are using to sign this specific token
  
 
const user = users.find(function(u){
    if(u.username==username && u.password==password){
        return true;
    }

    else{
        return false;
    }
})

if(user){
    // user.token = token;
    res.json({
        msg: token
    })
}

else{
    res.json({
     msg: "Invalid username & passowrd "
    })
}


 

})


app.get("/me",function(req,res){
    const token = req.headers.token; //jwt
     const decodedInfromation = jwt.verify(token,JWT_SECRET); // {username : "priyanshusoni"}

     const username = decodedInfromation.username;
let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            foundUser
        });
    }

    else{
        res.json({
            msg : "user not found !"
        })
    }
})

app.listen(3000);



