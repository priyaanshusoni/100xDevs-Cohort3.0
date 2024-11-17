import React, { useEffect } from 'react'
//If there is an error in any particular element only that componet should crash not the whole website 

function ErrorBoundry() {
  return (
    <div>
      <Card1/>
      <Card2/>
    </div>
  )
}

export default ErrorBoundry



function Card1(){
     
     throw new Error("Error While Rendering");
    return <div style={{backgroundColor:"red" , borderRadius:20 , padding:20 , margin:20}}>
        Hi there
    </div>
}


function Card2(){
    return <div style={{backgroundColor :"red" , borderRadius:20 , padding :20 , margin:20}}>
        hello
        </div>
}