import React, { useState } from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Blogs from './Blogs'
import Class12Programe from './Class12Programe'
import LandingPage from './LandingPage'

function App() {

 


  return (

   
    <div>
      
   <BrowserRouter>
   <Routes>

   <Route path='/' element = {<LandingPage/>}/>
  <Route path='blogs' element = {<Blogs/>}/>
  <Route path='/neet/online-coaching-class-12' element = {<Class12Programe/>}/>

   </Routes>
   </BrowserRouter>
      
    </div>
  )
}

export default App

