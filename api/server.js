require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const corsOptions= require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectDb = require("./config/dbConn");
const PORT = process.env.PORT || 4200 ;
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json())



app.use("/" , express.static(path.join(__dirname , "public")))

app.use("/", require('./routes/root'))







app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`)
})