const fs = require("fs");


function print(err, data){

    if(err)
        console.log("File Not Found");

    else
        
    console.log(data);
    
}


fs.readFile('a.txt' ,'utf-8',print);  //aynchronously 

fs.readFile('b.txt' , 'utf-8' , print); //asynchronously



console.log('Done!'); 





