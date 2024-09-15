const fs = require("fs");
const { readFile } = require("fs/promises");

let p = new Promise(random);

function random(resolve){ // resolve is a function 
    //   resolve(); // immedietly resolved 

    setTimeout(resolve,3000);
}
const contents = readFile('a.txt', 'utf-8' , callback).then(data=>console.log(data));