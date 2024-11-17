const {Command} = require("commander");
const path = require("path")
const fs = require("fs");
const { log, error } = require("console");
// Input -> node CommanderCLI.js a.txt

//OutPut - You have 10 words in this file

const filepath = path.join(__dirname + "/a.txt");
// console.log(filepath);


const program = new Command();
program.version('1.0.0')
program
.option('-h' , 'Commander CLI to perform file based tasks')
.command('count')
.description('Counting no of words present in a file')
.action(async (filename)=>{

    try{
        await fs.readFile("./a.txt" , "utf-8" , (err , data)=>{
            if(err){
                console.log(err);
                
            }
            else{
               const words = data.trimStart().trimEnd().split(" ");

               console.log("Words present in file is " + words.length);
               
                
            }

        })
    }catch(error){
        console.log(error);
        
    }
  
})


program.parse();
