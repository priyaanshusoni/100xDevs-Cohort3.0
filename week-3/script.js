
let todos= [];

 let ctr=1;


function addTodo(){

  

const inputtxt= document.querySelector("input").value.trim();

if(inputtxt===""){
  alert("Input daal bhai ");
  return;
}
todos.push({
    title: inputtxt,
  })
  render();
}

function deleteTodo() {
  
  render();
}

function createTodoComponent(todo){

  const currentCtr = ctr;

  // creating new div element 
 
       const div = document.createElement('div');
       div.setAttribute("id",'todo-'+currentCtr);

       //creating new H4 element 
      const h4 = document.createElement('h4');
      h4.innerText = todo.title;

      //creating new delete button element 
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.setAttribute('class','delete-btn');
  deleteButton.setAttribute('onclick',`deleteTodo('todo-${currentCtr}')`);
 

  //creating new edit button element 
   const editButton = document.createElement('button');
   editButton.innerText = 'Edit';
   editButton.setAttribute('class','edit-btn');
  editButton.setAttribute("onclick",`editTodo(${currentCtr})`);


  //creating checkbox 
 
   const checkbox = document.createElement("input");
   checkbox.setAttribute("type" ,"checkbox");
   checkbox.setAttribute("class" , "task-checkbox");

  ctr++;
   div.appendChild(checkbox);
   div.appendChild(h4);
   div.appendChild(editButton);
   div.appendChild(deleteButton);
  
  
 

  return div;

}

function render() {
   document.querySelector(".task").innerHTML = "";
  for(let i=0;i<todos.length;i++){
    const element = createTodoComponent(todos[i]);
  document.querySelector(".task").appendChild(element);
  document.querySelector("input").value="";
}


}





function deleteTodo(index){
 const deletediv= document.getElementById(index);
 const parentelement = deletediv.parentNode;
 parentelement.removeChild(deletediv);


}





