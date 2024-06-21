import express from 'express'


const app = express();
const port = 4200;


app.get('/' , (req,res)  =>{
    const {email , password} = req;
    res.send('Hello World');
})




app.listen(port , () =>{
    console.log(`Server is running on port ${port}`)
})