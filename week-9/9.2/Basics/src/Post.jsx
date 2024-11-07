import React from 'react'

function Post({name , subtitle , Time , imgURL}) {
  
    return  <div style={{
        width :200 ,
        backgroundColor:"white" , 
        borderRadius : 10 , 
        borderColor : "grey" ,
         borderWidth : 1,
         padding : 20}}>
      <div style={{display : "flex"}}>
       <img src={imgURL} alt=""
       
        style={{
          width : 40,
          height : 40,
          borderRadius : 20,
    
        }}
       />
    
       <div style={{fontSize : 12 , marginLeft : 10 , }}>
        <b>
       {name}
        </b> 
        <div>
        {subtitle}
        </div>
    
        {Time  ? <div style={{display: "flex"}}>
        <div>{Time}m</div>
        <img src="https://imgs.search.brave.com/QJXpqfZEFHfir-wYi8Uek_E9B4qBre_K0zqdHkxz3ns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0" alt="" 
        
        style={{
          width:18,
          height : 18
        }}
        />
    
    </div> : ""}
       </div>
    
      
        
      </div>
    
    <div>
    Want to know how to win big? Check out how these folks won $6000 in bounties.
    </div>
    
    
    </div>
      

}

export default Post
