// A Promise in Js is an object that represents the eventual completion (or failure ) of an asynchronous operation and its resulting value.
// promisified version of setimeout 

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));

//     //returning an object of the Promise  class
// }

// function callback(){
//     console.log("3 seconds have passed !");
// }



// setTimeoutPromisified(3000).then(callback);
// setInterval(() => {
    
// }, );

const { log } = require("console");
const fs = require("fs");

function random(resolve){ // resolve is also a function
//    resolve();

 setTimeout(resolve , 3000);

   // whenever this resolve function gets called it will call whatever passed in to .then(...)


}

let p = new Promise(random)
console.log(p);



// using the eventual value returned by the promise 
function callback(){
    console.log("Promised resolved ");
}

p.then(callback)



