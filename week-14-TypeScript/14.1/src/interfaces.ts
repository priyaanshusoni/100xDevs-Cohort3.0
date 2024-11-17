// How to pass an object as an argument to a function in ts ? 
//which has string ,number , boolean as it's keys !

function hello(user : {
 name : string,
 age : number
}){
    console.log("Hello" + user.name);
    
}

hello({
    name  : "Priyanshu",
    age : 21
})


// another ex 


let user2 : {
    firstname : string
    age : number
} = {
     firstname : "harkirat",
     age : 21
}

// but these above syntaxes are not very much readable , this is where interfaces comes into picture , same as class in c++ 

// Defining an Interface **************************************************

interface Animal {
     name : string,
     run : boolean,
     eat : boolean 
}


function zoo(animal : Animal){

     console.log(animal.eat + " " + animal.name + animal.run);
     
}



let dog : Animal = {
     name : "tommy",
     run : true ,
     eat : true
}

zoo(dog)

// Assignment 1 


interface User {
    firstName : string ,
    lastName : string ,
    email : string,
    age : number
}


function validAge(user : User){
    if(user.age >=18 ) console.log("Is Eligible");
    else console.log("Not Eligible");
    
}


validAge({
    firstName : "Aman",
    lastName : "Soni",
    email : "djj",
    age : 21
})
