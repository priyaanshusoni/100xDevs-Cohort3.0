const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET




function adminMiddleware(req,res,next){
    
      try{
        const token = req.headers.token;

        const decodedInfo = jwt.verify(token,JWT_ADMIN_SECRET);

        if(decodedInfo && decodedInfo.role=='admin'){
            req.adminId = decodedInfo.id;
         
           
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


module.exports = adminMiddleware;