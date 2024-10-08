// function generateToken(){
//     const a = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,0];

//     let token = "";
//     for(let i=0;i<15;i++){
        
//         token+= a[Math.floor(Math.random()*14)];
//     }

//     return token;
// }


// console.log(generateToken());

const fs = require("fs")
function readFile(){

    

        // const fileData = fs.readFileSync("./users.json" , "utf-8" )
            
        //           if(!fileData){
        //             return []
        //           }
          
        //         return JSON.parse(fileData);
        
        //     }
       
}   

//             function writeFile(users){

//                 try{
            
//                     fs.writeFileSync("./users.json" , users , "utf-8")
            
                    
            
//                 } catch(e){
//                     console.log(e);
//                 }
            
//             }




 
     
// users = [
//     {
//         1 : 45,
//         2 : 56
//     }
// ]




// writeFile(users)

const jwt = require("jsonwebtoken");


const username = "harkirat";

const token = jwt.sign({
    username : username
},"123",{
    expiresIn:60
});
console.log(token);
const decodedUsername = jwt.verify(token,"123");
console.log(decodedUsername.username);

