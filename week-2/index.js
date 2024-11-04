const { log } = require("console");
const fs = require("fs");

const contents = fs.readFileSync('a.txt', 'utf-8');

console.log(contents);
const contents2 = fs.readFileSync('b.txt', 'utf-8');

console.log(contents2);



// fs module gives to type of functions -> read file function & read file sync function 

function sum(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}



function op(a,b,op){
    

    let ans = op(a,b);
    return ans;
}




console.log(op(5,6,sum));
console.log(op(5,6,mul));




















