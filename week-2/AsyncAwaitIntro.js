const { log } = require("console");
// const fs = require("fs");
const fs = require("fs").promises;



async function main(){
    await cleanFile("c.txt");
    console.log("Done cleaning File");
}

// async function cleanFile(path){
   
//      await fs.readFile(path , "utf-8" , (err , data)=>{
//          if(data){
           
//             const trimmedData = data.trimStart().trimEnd();

//             fs.writeFile(path , trimmedData , (err)=>{
//          if(err){
//             return console.log(err);
//          }
//          else{
//             console.log(" file was saved !");
//          }
//     })
   
            



//          }
//          else{
//             console.log(err);
//          }
//     })   
// }

// main();




//promisified fs readfile & fs writeFile



async function main(){
    await cleanFile("c.txt");
    console.log("Done cleaning File");
}

async function cleanFile(path){
   
   const data =  await fs.readFile(path , "utf-8")  
    
    
    const trimmedData = data.trimStart().trimEnd();

   await fs.writeFile(path , trimmedData);
   console.log("File was Saved");
}

main();