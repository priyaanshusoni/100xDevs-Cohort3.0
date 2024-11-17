import React from 'react'

function App() {
  return (
    <div style={{display:"flex"}}>
      <Card children={<div>Go Go</div>}/>
      <Card children="Hello There"/>
      <Card>
      <div style={{color:"white"}}>

          Search Anything <br />
         <input type="text" />
           </div>
  
     </Card> 

    </div>
  )
}

function Card({children}){
  return (
    <div style={{background : "black" , borderRadius:10 , color:"white" , margin : 10 , padding : 10 }}>
      {children}
    </div>
  )
}

export default App 
