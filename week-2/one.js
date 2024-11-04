const { log } = require("console");
const fs = require("fs");
const { type } = require("os");



function main(fileName){
    fs.readFile(fileName, "utf-8",function(err,data){
      
        let total =0;
        data = data.split(' ');
        console.log(data);
       
        for(let i=0;i<data.length;i++){
            if(data[i]===" "){
                 total++;

            }
        }

        console.log(total+1);
    })



}



main("a.txt");