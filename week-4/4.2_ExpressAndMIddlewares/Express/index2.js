const express = require("express");






const user = {
name: "John",
kidneys: [{
    healthy: false
}]
}

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

const app =  express();

app.use(express.json());

app.get("/",function(req,res){
    const johnkidneys = users[0].kidneys;

    const NumberOfKidneys = johnkidneys.length;

    let NumberOfHealthyKidneys = 0;

    for(let i=0;i<NumberOfKidneys;i++){
        if(johnkidneys[i].healthy){
            NumberOfHealthyKidneys+=1;
        }
    }



    const UnhealthyKidneys = NumberOfKidneys - NumberOfHealthyKidneys;

 res.json({
    johnkidneys,
    NumberOfHealthyKidneys,
    UnhealthyKidneys,
 })


})


app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy; // in post request we send data in body not as query as we send in get 
    users[0].kidneys.push({
        healthy: isHealthy
    })
    
    
    res.json({
        msg:"done"
    })//
})


app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
         users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg:"Updated"
    })
}

)


app.delete("/",function(req,res){
    //you should return a 411 
    //only if atleast one unhealthy kidney is there do this else return 411
   if(IsThereleastOneunHealthyKidney()){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: "true"
            })
        }
    }


   


    res.json({
        msg: "updated !"})
   }

   

        else{
            res.status(411).json({
                msg: "you have no bad kidneys"
            })
        }
})


function IsThereleastOneunHealthyKidney(){
    const atleastOneunHealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneunHealthyKidney = true;
        }
    }

    return atleastOneunHealthyKidney;
}

app.listen(3001);




