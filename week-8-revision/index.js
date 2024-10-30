const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
const DB_URL = process.env.DB_URL;
console.log(PORT + DB_URL);
const app = express();
const userRouter = require("./routes/userRouter")
const courseRouter = require("./routes/courseRouter")
const adminRouter =  require("./routes/adminrouter")

app.use(express.json())
app.use("/users",userRouter);
app.use("/course", courseRouter);
app.use("/admin",adminRouter);













async function main() {
 await mongoose.connect(DB_URL);
 app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
 })
}


main();