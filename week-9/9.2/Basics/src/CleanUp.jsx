/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

function CleanUp() {
    const [timer , setShowtimer] = useState(true);

    useEffect(()=>{
       
        
        setInterval(()=>{
            setShowtimer(currentValue => !currentValue);

        },5000);
    })
  return (
    <div>
     { timer &&  <Timer/>}
    </div>
  )
}

function Timer(){
    const [seconds , setSeconds] = useState(0);

    useEffect(()=>{
     
        
       let clock =  setInterval(()=>{
            console.log("from inside timer");
          setSeconds((c)=> c+ 1)
        },1000);


        return function(){
            clearInterval(clock)
        } // this will run only after unmounting not on every render 
    },[]);

    return <div>{seconds} Seconds Have Elapsed</div>
}

export default CleanUp
