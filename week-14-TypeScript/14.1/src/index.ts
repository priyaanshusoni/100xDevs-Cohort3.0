// let x:number =1;

// console.log(x);



function greeting(firstname : string){
 console.log("Hello" + firstname);
 
}


greeting("Abhay");


//write a function that calculates sum of two functions & returns it 

function sum(a : number , b : number){
     return a+b;
}

console.log(sum(4,5));


function isLegal(age : number) : boolean {

    if(age >= 18)
    return true;
    else
    return false;
     
}

console.log(isLegal(19));



// create a functon that takes another function as input and runs it after two second !

function runAfterOneSecond(){
    console.log("Two Seconds Passed !");
    
}

function run(fn : ()=> void){
    
     setTimeout(() => {
       fn();
     }, 2000);
}

run(runAfterOneSecond);



