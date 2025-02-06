import React from 'react'
import { useContext } from 'react'
// import { BulbContext } from './App'
import { BulbContext } from './App2'
function ToggleBulbState() {

    const {setBulbOn} = useContext(BulbContext);
  return (
    <div>

     <button onClick={()=>{
        setBulbOn((c)=>!c)
     }}>Toggle the bulb</button>
      
    </div>
  )
}

export default ToggleBulbState
