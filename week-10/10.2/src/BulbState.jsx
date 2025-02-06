import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { BulbContext } from './App2'
function BulbState() {

    // const [bulbOn , setBulbOn] =useState(true);

// Now this swtBulbOn needs to be present in Toggle button component somehow to use it to toggle the 
//bulb state , this is where "rolling up" of states comes into the picture


// Accessing data from Context API --> 
const {bulbOn} = useContext(BulbContext)
  return (
    <div>
     {bulbOn ?
     <img style={{width : 180 , height : 180}} src='https://media.gettyimages.com/id/1356408845/photo/illuminated-led-light.jpg?s=612x612&w=0&k=20&c=1khfWUZwacTXPl78atZQjjW7P4bpEjYls2K4r_wWeew='></img>
      : 
      
      <img style={{width : 180 , height : 180}}  src='https://imgs.search.brave.com/oP_IFkin2LeoC5ogSIY9npVSRk2FMeSzs_Rfmxws3H8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ncmVlbi1lbmVy/Z3ktdGhlbWUtdHVy/bmVkLW9mZi1saWdo/dC1idWxiLWdyZWVu/LWJhY2tncm91bmRf/MTgzMjcwLTI0ODku/anBnP3NlbXQ9YWlz/X2h5YnJpZA'></img>
      }
    </div>
  )
}

export default BulbState
