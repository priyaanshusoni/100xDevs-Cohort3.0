import React, { useState } from "react"
import Post from "./Post";
function App() {


 

  let posts = [{
    name : "Harkirat" ,
    subtitle : "34000 followers" ,
     Time : 4,
     imgURL : "https://imgs.search.brave.com/mixLSRGOFuTh5rlkryzs9pctHn8CIFSfMt3AUVDlyJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL01l/WV9mR05yalZMVjBQ/Vk9CTjdkUld6TUJT/MHk0MVlHbTU1TE9h/SjAyY1hWODJhN05w/OXBZeHhoSEZxZFlk/bmNFeTFJMmNZUj1z/MjQwLWMtay1jMHgw/MGZmZmZmZi1uby1y/ag"
  },{
    name : "Akshay Saini" ,
    subtitle : "45000 followers" ,
     Time : 7,
     imgURL : "https://imgs.search.brave.com/fjQce2T7X0ZRRz2rlS_EzWEBNzY-46xvYKjIzHqWfaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aGFzaG5vZGUuY29t/L3Jlcy9oYXNobm9k/ZS9pbWFnZS91cGxv/YWQvdjE2MzA1OTcy/NzcyNzAvVGZmZjd1/aXhKLnBuZz93PTUw/MCZoPTUwMCZmaXQ9/Y3JvcCZjcm9wPWZh/Y2VzJmF1dG89Y29t/cHJlc3MsZm9ybWF0/JmZvcm1hdD13ZWJw"
  },

  {
    name : "Hitesh Choudhary" ,
    subtitle : "56000 followers" ,
     Time : 7,
     imgURL : "https://imgs.search.brave.com/ngobjiR-gNYTVnukRBecMdqsC5oKUGtgq9hX13_bJK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aGFzaG5vZGUuY29t/L3Jlcy9oYXNobm9k/ZS9pbWFnZS91cGxv/YWQvdjE3MjY2NzI1/NDM0NDIvY2ExYjA1/ZWMtYzg5Yi00MjMx/LTg5ODgtMGM1MDVj/MTA5ODdjLnBuZz93/PTUwMCZoPTUwMCZm/aXQ9Y3JvcCZjcm9w/PWZhY2VzJnc9NTAw/Jmg9NTAwJmZpdD1j/cm9wJmNyb3A9ZW50/cm9weSZhdXRvPWNv/bXByZXNzLGZvcm1h/dCZmb3JtYXQ9d2Vi/cCZhdXRvPWNvbXBy/ZXNzLGZvcm1hdCZm/b3JtYXQ9d2VicA"
  },





];

  const [postsData , setPostsData] = useState(posts);
  const [postCount , setPostCount] = useState(1)
  
  


  function addPost(){
    setPostsData([
      ...postsData ,
      {
        name : "Striver" ,
        subtitle : "78000 followers" ,
         Time : 7,
         imgURL : "https://yt3.googleusercontent.com/ytc/AIdro_mdPFTT7VuJHQkvzW9gjJxvSV3bBDpEVNw8dWOmHjTT5g=s160-c-k-c0x00ffffff-no-rj"
      }
    ])
  }
 


  // const {name , subtitle , Time , imgURL} = postsData[1];
  // console.log(name + subtitle + Time + imgURL);
  return (

    
    <div style={{  backgroundColor : "#ecf0f1",  height : "100vh" }}>
    <button    onClick={addPost}>Add Post</button>
   
      <div style={{display : "flex",justifyContent : "center"}}>
     
      <div>

       {postsData.length ? postsData.map((x)=> <Post key={x.name}   name = {x.name} Time = {x.Time} imgURL = {x.imgURL} subtitle = {x.subtitle}  />) : ""}
       
      </div>
      </div>
    
    </div>
   
     
  )
}





export default App;

