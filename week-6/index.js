const express = require("express");
const app = express();
app.use(express.json());
let users = [];
//this function should return a random long string or token 
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
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
//this should return me a token 
 let token = generateToken();
const username = req.body.username;
const password = req.body.password;

const user = users.find(function(u){
    if(u.username==username && u.password==password){
        return true;
    }

    else{
        return false;
    }
})

if(user){
    user.token = token;
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
    const token = req.headers.token;

let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].token==token){
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



