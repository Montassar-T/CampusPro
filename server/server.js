import express from 'express';
// require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4200;


app.get('/' , (req,res)  =>{
    res.send('Hello World');
})



app.get('/login' , (req,res)=>{
    res.send("zina marty")

})



app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`)
})