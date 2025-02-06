import React from 'react'
import { useNavigate } from 'react-router-dom'

function Class12Programe() {

  const navigate = useNavigate();


  return (
    <div>
      <h1>Neet coaching for class 12</h1>
      <button onClick={()=>{
        navigate("/")
        
       //The difference between useNavigation() 
       //and <Link> is that <Link> is used when we want to render a specific component or navigate to a route when a user clicks on the link. On the other hand, useNavigation() is used to programmatically navigate to a route immediately in response to an event,
       // such as a button click or any other user interaction, without requiring the user to click on a link.
      }}>Go back to landing page</button>
    </div>
  )
}

export default Class12Programe
