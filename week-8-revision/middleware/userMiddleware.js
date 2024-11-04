const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET




function userMiddleware(req,res,next){
    
      try{
        const token = req.headers.token;

        const decodedInfo = jwt.verify(token,JWT_SECRET);

        if(decodedInfo && decodedInfo.role=='user'){
            req.userId = decodedInfo.id;
           
            next();
        }

        else{
            return res.status(403).json({
                message : "Token Invalid or you're not signed in"
            })
        }



      }catch(error){
        return res.status(403).json({
            message : error
        })
      }
}


module.exports = userMiddleware;