import React from 'react'
import LightBulb from './LightBulb'
import BulbState from './BulbState'
import ToggleBulbState from './ToggleBulbState'
import { useState } from 'react'


// Context API 
export const BulbContext = React.createContext();



function App() {

 
  
  const [bulbOn , setBulbOn] =useState(true);
  return (
    <div>
{/* Top level app component which rendered a bulb component  */}
   <BulbContext.Provider value={{
    bulbOn : bulbOn,
    setBulbOn : setBulbOn
   }}> 
   {/* now thse these to bulbOn & setbulbOn variables will be accessible to all the nested components */}

   <LightBulb/>
   </BulbContext.Provider>
  
  {/* This Light Bulb Component has two childrens Bulbstate & TOggleBulbState */}

      
    </div>
  )
}



export default App

