const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
{
        email:{
            type:string,
            required:true,
            unique:true,

        },
        password:{
            type:string,
            require:true
        }
    
},{timestamps:true}
);

module.exports = mongoose.model("User", userSchema)


