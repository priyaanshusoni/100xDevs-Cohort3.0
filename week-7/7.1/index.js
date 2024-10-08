// const express = require("express");

// const {UserModel, TodOModel, TodoModel} = require("./db");
// const JWT = require("jsonwebtoken");
// const { default: mongoose } = require("mongoose");
// const jwt_secret = "ilovekiara"

// const app = express();
// app.use(express.json());

// mongoose.connect("mongodb+srv://admin:9509542525@cluster0.ugqlz.mongodb.net/todo-priyanshu");

// app.post("/signup",async function(req,res){
//     const email = req.body.email;
//     const password = req.body.password;
//     const name = req.body.name;

//    await UserModel.create({
//        email: email,
//        password: password,
//        name : name
//     }) // it will return a promise  


//      res.json({
//         messege: "You are logged In"
//      })
    
     
// })
// app.post("/signin", async function(req,res){
// const email = req.body.email;
// const password = req.body.password;

// const user = await UserModel.findOne({
//     email : email,
//     password : password
// })


// console.log(user);
// if(user){
//     const token = JWT.sign({
//         id: user._id

//     },jwt_secret);
//     res.json({
//         token: token
//     })
// } else{
//     res.status(403).json({
//         messege : "Incorrect Credentials"
//     })
// }


// })
// app.post("/todo",async function(req,res){
// const todo = req.body.todo;
// const done = req.body.done;
// const id = JWT.verify()

// await TodoModel.create({
//  todo: todo,
//  done : done

// })
// })

// app.get("todos",function(req,res){

// })

// app.listen(3000);


const express = require("express");

const mongoose = require("mongoose");
const app = express();

const jwt = require("jsonwebtoken");
const jwt_secret = "ilovekiara";


const {UserModel , TodoModel} = require("./db");

mongoose.connect("mongodb+srv://admin:9509542525@cluster0.ugqlz.mongodb.net/todo-priyanshu");


app.use(express.json());






app.post("/signup",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    if(!email || !password || !name ){
        return res.status(400).json({
            message : "Please fill all three fields !"
        })
    }

    await UserModel.create({
       email : email,
         password : password,
         name: name,
    })

    return res.json({
        message : "You are Signed Up !"
    })

})
app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

const user = await UserModel.findOne({
    email : email,
    password : password,
})

console.log(user);

if(user){
    const token = jwt.sign({
        id : user._id,

    },jwt_secret);
   return  res.json({
    message : token
   }) 
}

else{
    return res.status(403).json({
        message : "Incorrect credentials"
    })
}
         

})


function auth(req,res,next){
    const decodedInfo = jwt.verify(req.headers.token , jwt_secret);
 
     if(decodedInfo){
        req.id = decodedInfo.id;
        next();
     }

     else{
        return res.status(404).json({
            message : "you don't have valid credentials"
        })
     }


}








//an endpoint to create a todo 
app.post("/todo",auth, async function(req,res){

const Title = req.body.Title;
const id = req.id;


TodoModel.create({
    Title : Title,
    userId : id,
})

 

return res.json({
    message : "todo created"
})




})
app.get("/todos",auth,async function(req,res){


const id = req.id;

const users = await TodoModel.findOne({
    userId : id,

})

if(users){
    return res.json({
       users
    },)
}
else{
    return res.status(403).json({
        message : "Invalid Credentials"
    })
}


})


app.listen(3000);











