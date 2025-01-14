import React, { useState } from 'react'
import {BrowserRouter , Outlet, Route , Routes} from "react-router-dom"
import Blogs from './Blogs'
import Class12Programe from './Class12Programe'
import LandingPage from './LandingPage'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Ref from './Ref'
import Clock from './Clock'
function AppLayout(){
  return (
    <div>
      <Header/>

      <Outlet/>
    </div>
  )
}
function App() {

 


  return (

   
    <div>

    
      
   <BrowserRouter>
   <Routes>

   <Route path='/' element = {<AppLayout/>}>
  <Route path='/' element = {<LandingPage/>}/>
  <Route path='/signup' element = {<Ref/>}/>
  <Route path='/clock' element = {<Clock/>}/>
  <Route path='blogs' element = {<Blogs/>}/>
  <Route path='/neet/online-coaching-class-12' element = {<Class12Programe/>}/>
  <Route path='*' element = {<ErrorPage/>}/>
  </Route>
   </Routes>
   </BrowserRouter>
      
    </div>
  )
}

export default App

