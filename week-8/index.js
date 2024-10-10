const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const  userRouter  = require("./routes/userRouter");
const  courseRouter  = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");
dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();

app.use(express.json());

app.use("/user",userRouter) //all the routes that start with /users will be handled by userRouter
app.use("/course",courseRouter); //all the route starts with / course are handleled by courserouter
app.use("/admin",adminRouter); //all the route starts with / course are handleled by courserouter





async function main(){
    await mongoose.connect(DATABASE_URL);
    app.listen(PORT);
    console.log(`App is litening on port ${PORT}`);
}


main();
