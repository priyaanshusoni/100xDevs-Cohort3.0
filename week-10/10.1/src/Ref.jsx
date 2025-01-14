import React, { useRef } from 'react'
//Learning about useRef 



//useRef => it let's you create a reference to a value , such that when u change the value , the component DOES NOT RE-RENDER
function Ref() {
   const inputRef = useRef();
    // function focusOnInput(){
    //     document.getElementById("name").focus() = Ugly way of getting references
    // }
    function focusOnInput(){
       inputRef.current.focus()
    
     }

  return (


    <div>
      <p>Signup</p>
      <input ref={inputRef}  type="text" id="name" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button> 

    </div>
  )
}

export default Ref
