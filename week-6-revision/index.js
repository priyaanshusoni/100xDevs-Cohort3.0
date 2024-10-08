//File Based Authentication 

const express = require("express");
const fs = require("fs");

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







function generateToken(){
    const a = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,0];

    let token = "";
    for(let i=0;i<15;i++){
        
        token+= a[Math.floor(Math.random()*14)];
    }

    return token;
}


// express {
//     json(){
//         return function (req,res,next);
//     }
// }

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

    const token = generateToken();

    const foundUser = users.find((u)=> u.username==username && u.password==password);

    if(foundUser){

        if(foundUser.token){
            return res.send("You are Already Signed In ")
        }
        

        foundUser.token = token;

        console.log(foundUser);

          writeFile(users);

        return res.status(200).send(token);
    }

    else{
       return  res.send("User not exists !");
    }
})



app.get("/admin",function(req,res){
    res.send(users);
})


app.get("/me",function(req,res){
    const token = req.headers.token;

    const users = readFile();

    let foundUser = users.find((u)=>u.token ==token)

    if(foundUser){
       return res.send(foundUser);
    }

    else{
        res.status(404).send("User Not Found !")
    }
})









app.listen(3000);


