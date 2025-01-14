import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Clock() {

    // a clock with a start & stop function
    const [count , setCount] = useState(0)
    let timer = useRef()

   

  

  return (

    
    <div>

      <h1>Time Elpased : {count} Seconds</h1>
      <button onClick={()=>{
       let start = setInterval(()=>{
        setCount((c)=>{
         
           return  c+1
        }

        
        );
      
       timer.current = start;
       },1000)
      }}>Start</button>
      <button onClick={()=>{
       clearInterval(timer.current)
      }}>Stop</button>
      
    </div>
  )
}

export default Clock
    