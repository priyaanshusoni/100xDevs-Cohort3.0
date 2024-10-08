//File Based Authentication 

const express = require("express");
const fs = require("fs");
const path = require("path")
const jwt = require("jsonwebtoken");
const jwt_secret = "ilovekiara"

const app = express();


app.use(express.json());




function readFile(){

    try{

        const fileData = fs.readFileSync("./users.json" , "utf-8")

         return JSON.parse(fileData);

    } catch{
        return [];
    }

 
     


}
function writeFile(users){

    try{

       fs.writeFileSync("./users.json" , JSON.stringify(users,null,2) , "utf-8")

        

    } catch(e){
        console.log(e);
    }

}




app.use((req,res,next)=> {
    console.log("Request Came", req.method);

    next();
})





// express {
//     json(){
//         return function (req,res,next);
//     }
// }

const filepath = path.join(__dirname,"../public/index.html");

app.get("/",function(req,res){
    res.sendFile(filepath)
})








app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let users = readFile();

   const foundUser = users.find((u)=>u.username==username);

   if(!foundUser){
    users.push({
        username: username,
        password: password,
    })


    writeFile(users);



     return res.status(200).send("You are Signed Up Succesfully !")

   }

    else{
      return   res.status(400).send("User With Same Username Already Exists");
    }
   

});



app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const users = readFile();

    const token = jwt.sign(username,jwt_secret)

    const foundUser = users.find((u)=> u.username==username && u.password==password);

    if(foundUser){

        return res.status(200).send(token);
    }

    else{
       return  res.send("User not exists !");
    }
})



app.get("/admin",function(req,res){
    res.send(users);
})

// Here I will create an auth middleware before hitting the "/me" endpoint
//This middleware will check if a user requesting by "/me" is logged in or not & end the request there only before going to the 
// me end point . Coolll ! 

function auth(req,res,next){

    try{
        const token = req.headers.token;

        const users = readFile();
    
        const decodedUsername = jwt.verify(token , jwt_secret);
    
        const foundUser = users.find((u)=>u.username==decodedUsername);
        if(foundUser){
            req.username = decodedUsername; // adding a key "username" to req object so that i can simply use it in the next() function
    
            next();
        } 
    } catch{
          
        return res.status(404).send("You are not logged In , Please Login Before Accesssing !")
    }
   

    
    
}











app.get("/me",auth,function(req,res){
   

    const users = readFile();

    const foundUser = users.find((u)=> u.username == req.username)
      
   
    

 
    
       return res.send(foundUser);
    

    
})









app.listen(3000);


