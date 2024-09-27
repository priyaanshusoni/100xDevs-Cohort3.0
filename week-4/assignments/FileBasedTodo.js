const path = require("path");

const express=  require("express");

const fs = require("fs");


const app = express();

app.use(express.json());




const todosfilepath = path.join(__dirname+ "/Todos.json");
// console.log(todosfilepath);

function readTodosFromFile(){

    try{
        const filedata = fs.readFileSync(todosfilepath,"utf-8");
        //   console.log(filedata);
        //    console.log(JSON.parse(filedata));
           return JSON.parse(filedata);
    }catch{
        return [];
    }

    
       
    
}
function writetodosFromFile(todos){

    try{
        fs.writeFileSync(todosfilepath , JSON.stringify(todos,null,2),"utf-8");
    } catch(e){
        console.log(e);
    }  
}




app.post("/todos/create",function(req,res){
    const todo = req.body.todo;

    const id = parseInt(req.body.id);

    let todos = readTodosFromFile();

    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
          return  res.status(400).send("Todo Already Exists with this id"+id);
        }
    }

    const newtodos = {
        Title : todo,
        id : id,
        isCompleted : false,
    }
    todos.push(newtodos);

    writetodosFromFile(todos);

    res.status(200).send("Todos Added to the File");
    
})
app.post("/todos/delete/:id",function(req,res){

    const id = parseInt(req.params.id);

    const updatedTodos = todos.filter((x)=>x.id!=id);

    todos = updatedTodos;

    writetodosFromFile(todos);

    res.status(200).send(`Todo with todo-id ${id} deleted succesfully`);

})
app.post("/todos/deleteall",function(req,res){
todos = [];
writetodosFromFile(todos);

res.status(200).send("All Todos Deleted Succesfully")
})

app.post("/todos/mark/:id",function(req,res){

 const id = parseInt(req.params.id);

  let isFound = false;
  let todos = readTodosFromFile();

  for(let i=0;i<todos.length;i++){

   if(todos[i].id==id){
    isFound = true;
    todos[i].isCompleted = true;
   }

  }

  if(!isFound){
    return res.status(404).send("Todo not exists!");
  }

  writetodosFromFile(todos);

res.status(200).send(`ToDo with todo-id ${id} updated succesfully !`);


})
app.get("/todos/read",function(req,res){

let todos = readTodosFromFile();

if(todos.length==0){
    res.status(200).send("No todos to show!")
}

res.status(200).send(todos);
})


app.listen(3000);