import  { useEffect, useState } from 'react'

function UseEffect2() {

    const [currentTab , setcurrenttab] = useState(1);

   const [tabData , setTabData] = useState("");

   let [loading , setLoading] = useState(true);



    useEffect(()=>{
     
     const fetchData =   async ()=>{
       setLoading(true);
        
        //send the backend request to get data for this tab
        // console.log("Send Data to backend for this current tab"+currentTab);
       const response =  await fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab);
        const data = await response.json();
         console.log(data);
         setLoading(false)
         setTabData(data)
        }

        fetchData();

       

    },[currentTab])
  return (

    <div>
      
        <button onClick={()=>{
            setcurrenttab(1);
        }}   style={{color : currentTab == 1 ? "red" : "black"}}  >Todo#1</button>
        <button onClick={()=>{
            setcurrenttab(2);
        }} style={{color : currentTab == 2 ? "red" : "black"}} >Todo#2</button>
        <button onClick={()=>{
            setcurrenttab(3);
        }} style={{color : currentTab == 3 ? "red" : "black"}} >Todo#3</button>
        <button onClick={()=>{
            setcurrenttab(4);
        }} style={{color : currentTab == 4 ? "red" : "black"}} >Todo#4</button>




     {
        loading ? <p><b>Loading....</b></p>: 

        <div>
         
         <p>{tabData.title}</p>
         <p>Status : { tabData.completed ? "Done" : "Pending"}</p>
        </div>
    

     }

    </div>
  )
}

export default UseEffect2
