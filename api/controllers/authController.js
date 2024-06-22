const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcyrpt");



const login = async (req , res)=>{
    const {email , password} = res.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const foundUser = await User.findOne({email}).exec();

    if(!foundUser){
        return res.status(401).json({message:'User does not exist'});
    }

    const match = await bcrypt.compare(password, foundUser.password );
    if(!match){return res.status(401).json({message:"Wrong password"})}

    const accesToken = jwt.sign(
        {
            UserInfo:{
                id:foundUser_id,
            },
        },
        process.env.ACCES_TOKEN_SECRET,
        {expiresIn:"1h"},
    );
    const refreshToken = jwt.sign(
        {
            UserInfo:{
                id:foundUser_id,
            },
        },
        process.env.REFRESH_ACCES_TOKEN,
        {expiresIn:"7d"},
    );
    res.cookie('jwt', refreshToken,{
        httpOnly:true,
        secure:true,
        sameSite: 'None', //cross site cookie
        maxAge: 1000 * 60 *60 *24 *7
    })
    res.json({
        accesToken,
        email:foundUser.email,
    });
};