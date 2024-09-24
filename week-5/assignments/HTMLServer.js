const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());

app.use(cors()); // allowing fetch requests from any domain 


app.post("/sum",function(req,res){
    const a = req.body.a;
    const b = req.body.b;

    const ans = parseInt(a) + parseInt(b);

    console.log(ans);
    res.json({
        ans : ans,
    });
})


app.listen(3000);