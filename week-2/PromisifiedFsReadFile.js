// Promisified version of setTimeout  /

const { log } = require("console");

function setTimeoutPromisified(resolve){
    setTimeout(() => {
        resolve();
    }, 5000);
}


function main(){
    return new Promise(setTimeoutPromisified)
}

const p = main();

function cb(){
    console.log("cb Called !");
}



p.then(cb)


