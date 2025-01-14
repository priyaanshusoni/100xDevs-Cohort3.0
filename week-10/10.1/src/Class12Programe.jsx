import React from 'react'
import { useNavigate } from 'react-router-dom'

function Class12Programe() {

  const navigate = useNavigate();


  return (
    <div>
      <h1>Neet coaching for class 12</h1>
      <button onClick={()=>{
        navigate("/")
      }}>Go back to landing page</button>
    </div>
  )
}

export default Class12Programe
