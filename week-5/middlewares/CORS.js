// CORS = cross origin resource sharing  

// CORS is a security feature implemented by web browsers that controls,
// how resources on a web server can be requested from another domain.
// It's crucial mechanism for managig cross-origin requests and ensuring secure interactions between different origins on web.

// in node.js by default crs requests are blocked  



// 1. Create a backend server in node.js that returns the sum endpoint 
// 2. Write an HTML file that hits this backend server using the fetch API.

const express = require("express");

const app = express();

app.use(express.json());
app.post("/sum",function(req,res){
    const a = req.body.a;
    const b = req.body.b;

    const ans = parseInt(a) + parseInt(b);


    res.json({
        ans : ans,
    })
})


app.listen(3000);