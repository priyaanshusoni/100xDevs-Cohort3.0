import React from "react"
import { useState,useEffect } from "react"

function App() {
  
let [counterVisible , setCounterVisible] = useState(true)




useEffect(()=>{
  setInterval(()=>{
    setCounterVisible(c=>!c)
  },5000);

},[])

  return (
    <>
    <div>


      {counterVisible ?   <Counter/> :null }
    
    Hi There
   

    </div>
    
    </>
  )
}








function Counter() {

const [count ,setCount] = useState(0);




useEffect(function(){
  setInterval(()=>{
    setCount(count=>count+1);
  },1000)

  console.log("Mounted");

},[]);

  function increaseCount(){
      // setCount(count+1);

  }
  function DecreaseCount(){
      setCount(count-1);

  }
  

  return (
    <>
     <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={DecreaseCount}>Decrease Cout</button>
     </div>
    </>
  )
}



export default App;


