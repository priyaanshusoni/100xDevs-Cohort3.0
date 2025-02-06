 import React from 'react'
 import ToggleBulbState from './ToggleBulbState'
 import BulbState from './BulbState'
 import { useState } from 'react';
 function LightBulb() {

   return (

    // bulb on is a prop to the BulbState Component 
    //setBulbOn is a prop to the ToggleBulbState component
     <div>
       {/* <BulbState bulbOn = {bulbOn}/>
       <ToggleBulbState setBulbOn = {setBulbOn} /> */}
       <BulbState />
       <ToggleBulbState/>
     </div>
   )
 }
 
 export default LightBulb
 