const jwt = require("jsonwebtoken");

//decode , verify & generate 


const value = {
    name : "priyanshu",
    accountNumber : 123123123
}

//jwt 

const token = jwt.sign(value , "secret");

console.log(token);



//this token has been generated using this secret & hence this token 
//can only be verified using this "secret" .




const a = jwt.decode(token);

console.log(a);

console.log(jwt.verify(token,"secret"));

//Q. what is someone has my token then he can easily decode it on jwt.io website and get to know my details , the answer to this is 

// -> No , He can only decode it but can not verify it , because in order to verify he needs to have my "secret" key also that only I have .


// const b =jwt.sign({
//     "name": "priyanshu",
//     "accountNumber": 123123123,
// },"secretiotte");

// console.log(b);

// console.log(jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJpeWFuc2h1IiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MjczNTAyODV9.kd-0ImiflUP6bvsl8ERpMNeDZMg-U7hytfEisdKoeW4","secret"));



