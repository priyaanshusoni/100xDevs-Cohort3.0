const express = require("express");

/*
Assignment #1 - Trying to code a todo app and store data into the array
*/
const app = express();


app.use(express.json());

let todos = [];

/**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */


app.post("/todos/create",function(req,res){

    const todo = req.body.todo;

    const id = parseInt(req.body.id);


    const newTodo = {
        title : todo,
        id: id,
        isCompleted : false,
    }

    todos.push(newTodo);

   

    res.send("Todo Added Succefully !");
    
})


app.delete("/todos/delete/:id",function(req,res){

    
   const id = parseInt(req.params.id);
    // const id = parseInt(req.body.id);


    const newTodo = todos.filter((x)=> x.id!==id)

    todos = newTodo;

   

    res.send("Todo Deleted Succefully !");
    
})

app.get("/todos/read",function(req,res){
    if(todos.length==0){
        res.json({
            msg: "No Todo to Show!"
        })
    }
    res.json({
        todos
    })
})

app.delete("/todos/deleteall",function(req,res){

    
   todos = [];
   
   res.send("All the Todos Deleted Succesfully")
})




app.post("/todos/mark/:id",function(req,res){
    const Todoid = req.params.id;
    let TodoFound = false;
   for(let i=0;i<todos.length;i++){
           if(todos[i].id==Todoid){
            todos[i].isCompleted = true;
            TodoFound = true;
           }
   }

   if(!TodoFound){
    res.json({
        msg: " Todo is not found with this particular id :"+ req.params.id,
    })
   }

   else{
    res.json({
        msg: "Todo Marked Succesfullly"
    })
   }


})











app.listen(3000,()=>{
    console.log("Server running on Port 3000");
})