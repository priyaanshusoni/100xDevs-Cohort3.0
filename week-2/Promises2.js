

// The real operation that we want to promisify
function doAsyncOp(resolve){
setTimeout(resolve, 3000);
}





function setTimeoutPromisified(){
    return new Promise(doAsyncOp)
}

const p= setTimeoutPromisified();

function cb(){
    console.log("Promise Resolved & 3 seconds have passed!");
}

p.then(cb);