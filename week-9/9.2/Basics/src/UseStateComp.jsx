// import {React,useState} from 'react'

// function UseStateComp() {

//     const [toggleMessage , setToggleMessage] = useState(true)
//   return (
//     <div>
//     <div>
//         <button onClick={()=>{
//             setToggleMessage(!toggleMessage)
//         }}>Toggle Message !</button>


      
//     </div>

//    {toggleMessage ?  <div>
//        This is a toggle Message
//     </div> : "" }

//     </div>
//   )
// }

// export default UseStateComp

import {React,useState} from 'react'

function UseStateComp() {

    const [notification , setNotification] = useState(0)
  return (
    <div>
    <div>
        <button onClick={()=>{
            setNotification((n)=> n+1);
        }}>Send Notification!</button>


      
    </div>

   {notification ?  <div>
      {notification}
    </div> : "" }

    </div>
  )
}

export default UseStateComp
