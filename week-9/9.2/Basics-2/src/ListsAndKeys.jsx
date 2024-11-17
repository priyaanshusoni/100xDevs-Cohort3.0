import React from 'react'


 
function ListsAndKeys() {
    const todos = [
        {
            title : "Go To Gym",
            done : false
        },{
            title : "Eat Food",
            done : true
        }
    ]


  return (
    <div>
     {todos.map((x)=>{
        return <div key={x.title}>{x.title} - {x.done ? "Done" : "Not Done Yet" } </div>
     })}
    </div>
  )
}

export default ListsAndKeys
