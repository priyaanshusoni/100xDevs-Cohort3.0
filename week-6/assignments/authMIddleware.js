//assignment -> Create a middleware called "auth" that verifies if a user is logged in or not and ends the requet early if the user isn't logged in.
var path = require("path")

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const jwtSecret = "jwtSecret";

let users = [];


app.use(express.json());
// app.use(auth);

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
           return  res.json({
                msg: "User Already Exists!"
            })
        }
    }

    let newUser = {
        username : username,
        password : password,
    }

    users.push(newUser);

    res.json({
        msg : "You are Signed Up Succesfully !"
    })

     
});

//to avoid cors

app.get("/",function(req,res,next){
    res.sendFile(path.join(__dirname,"../public/index.html"));
})
app.post("/signin",function(req,res){
    // this is where my token will be generated   
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({
        username: username,
        passowrd : password,
    },jwtSecret);

    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
         return    res.json({
                token
            })
        }
    }
   
  
    res.json({
        msg : "user doesn't Exists"
    })


     
});

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedInfromation = jwt.verify(token,jwtSecret);
    if(decodedInfromation){
        req.username = decodedInfromation.username;
        req.password = decodedInfromation.password;
      return next();
    }

    else{
       return   res.send("User Not Exists")
    }
}

app.get("/me", auth, (req, res) => {
    const username = req.username;
    const passowrd = req.passowrd;

    console.log(username);
    console.log(passowrd);
    res.send({
       username,
       passowrd
    })
})

function logger(req,res,next){
    console.log(req.method + "Request came");
   return next();
}
        


app.get("/me",logger,auth,function(req,res){
     
     

        let foundUser=null;

     for(let i=0;i<users.length;i++){
        if(users[i].username==req.username)
           foundUser = users[i];
            break;
     }

     
      res.json({
        foundUser
      })

    

});

app.listen(3002);           