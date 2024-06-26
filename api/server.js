require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const corsOptions= require("./config/corsOptions");
// const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT  ;
app.use(cors(corsOptions));
// app.use(cookieParser());
app.use(express.json())

connectDB();

app.use("/", express.static(path.join(__dirname , "public")))

app.use("/", require('./routes/root'))
app.use("/auth", require("./routes/authRoutes"));
app.use("*", (req,res)=>{
    res.status(404)
    if(req.accepts("html")){
        res.sendfile(path.join(__dirname ,"views/404.html"))
    }else if(req.accepts("json")){
        res.send({message:"404 not found"});
    }else{
res.type("txt").send("404 not found");
    }
});


mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });     

  });
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });