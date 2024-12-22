// console.log("hi");

import  {WebSocketServer} from "ws"

const wss = new WebSocketServer({port: 8080});

//event handler
wss.on("connection" , function(socket){ //app.get()
    console.log("User Connected");
    

    setInterval(()=>{
        socket.send("Hello");
    },5000)
  
socket.on("message" , (e)=>{k
   if(e.toString()=="ping"){
    socket.send("pong");
   }
    
})

   
})



