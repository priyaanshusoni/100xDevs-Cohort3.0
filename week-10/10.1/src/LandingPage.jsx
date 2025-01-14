import React from 'react'
import { Link } from 'react-router-dom'
import Class12Programe from './Class12Programe'
function LandingPage() {
  return (
    <div>
      <h1>Welcome to Allen</h1>

     <Link to="/neet/online-coaching-class-12"><h3>Class 12 programe</h3></Link>
    
    </div>
  )
}

export default LandingPage
