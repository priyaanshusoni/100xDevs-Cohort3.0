
import { useState } from 'react'


function App() {

  const [todos , setTodos] = useState([
    {
      task : " Go to Gym"
    },
    {
      task : "Go to Gym 2"
    } , 
    {
      task : "Go to gym 3"
    }
  ])
 function addTodos(){
  const todo = document.getElementById("todo").value;
  const obj = {
    task : todo
  }
  
  setTodos([...todos , obj])
 }
  return (

     <div>
    <div>
        <input type="text" name="" id="todo"  placeholder='Task..'/>
        <button onClick={()=>{
           addTodos()
        }}>Add Task</button>
    </div>

          {todos.map((x)=>{
            return   <h1>{x.task}</h1>
           
          })}

    </div>

  
    

      



    
  )
}

export default App
