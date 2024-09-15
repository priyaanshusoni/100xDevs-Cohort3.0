// function waitfor3s(resolve){
//     setTimeout(resolve,3000);
// }


// function main(){
//     console.log("main is called");
    
// }

// waitfor3s(main);


// function random( _,reject){

//     setTimeout(reject,3000);
    

// }

// function print(){
//     console.log("print is printed by promise ");
    
// }

// let p = new Promise(random);

// console.log(p.then(print).catch(print));


function random(resolve){ // resolve is a function 
    //   resolve(); // immedietly resolved 

    setTimeout(resolve,3000);
}

let p = new Promise(random);

function callback(){
    console.log("promise made");
    
}

p.then(callback);
