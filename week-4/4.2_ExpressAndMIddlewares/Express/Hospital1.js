
const express = require("express");

const app = express();


app.use(express.json());
// const user = {
//     name: "John",
//     kidneys: [{
//         healthy: false
//     }]
//     }
    
const users = [{
        name: "John",
        kidneys: [{
            healthy: false
        }]
}];



app.get("/" , function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKIdneys = johnKidneys.length;
    console.log(numberOfKIdneys);
   
    let NumberOfHealthyKidneys = 0;

    for(let i=0;i<numberOfKIdneys;i++){
        if(johnKidneys[i].healthy){
            NumberOfHealthyKidneys+=1;
        }
    }
 let UnhealthyKidneys = numberOfKIdneys- NumberOfHealthyKidneys;

    res.json({
        johnKidneys,
        NumberOfHealthyKidneys,
        UnhealthyKidneys
    })
}) 
    
app.post("/" , function(req,res){
  const isHealthy = req.body.isHealthy;

  users[0].kidneys.push({
    healthy: isHealthy
  })

  res.json({
    msg:"done"
})

  }) 
    
app.put("/" , function(req,res){
     for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = false;
     }

     res.json({
        msg: "Put !"
     })
}) 




    
app.delete("/" , function(req,res){

    if(IsThereleastOneunHealthyKidney()){
    let freshkidneys = users[0].kidneys.filter((x)=>x.healthy!=false);

         
    res.json({
        msg: "fresh kidneys implanted!",
        freshkidneys
    })
    }


    else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }




  
})

function IsThereleastOneunHealthyKidney(){
    let atleastOneunHealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneunHealthyKidney = true;
        }
    }

    return atleastOneunHealthyKidney;
}
    








app.listen(3000);
