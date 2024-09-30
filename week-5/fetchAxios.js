// axios vs fetch 

const axios = require("axios");

//1. Fetch 

async function main(){
   const response = await  fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await response.json();
   console.log(data.length);
}


//Post  

async function fetchPost(){
    const response = await  fetch("https://httpdump.app/dumps/922b1881-bbb1-4424-97ae-45c02d2e2635",{
        method: "POST",
        body :{
            name: "harkirat",
            password: "123123"
        },
        headers:{
            Authorization : "Bearer 123"
        }

    });
    const data = await response.text();
    console.log(data);
 }

main();
fetchPost();



// using axios 


async function main2(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos"); 
    console.log(response.data.length); //axios automatically convert my response to json it will convert based on the incoming data , i dont have to do it explicitly as i did in fetch

}


//post

async function axiousPost(){
    const response = await axios.post("https://httpdump.app/dumps/922b1881-bbb1-4424-97ae-45c02d2e2635",{
        headers : {
            
            Authorization : "Bearer 1234"
        },

        data: {
              name: "Priyanshu",
              age: "21"
        }
    }); 
    console.log(response.data.length); //axios automatically convert my response to json it will convert based on the incoming data , i dont have to do it explicitly as i did in fetch

}

main2();
axiousPost();



