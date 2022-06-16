const {body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require('../../models/schemas/user.schema');
const bcrypt = require('bcryptjs');

const generateToken = async (payload) =>{
    try {
        console.log(process.env.JWTSECRET);
        const token = await jwt.sign(payload,process.env.JWTSECRET,{expiresIn:'24h'});
        return token;
    } catch (error) {
        throw error;
    }
}


const loginUser = async (req,res)=>{
    try {
        // name, email, password
        const {email, password} = req.body;
        // const user = await User.create({ email, password },{password:0}).toObject();
        // find user by id
        const user = await User.findOne({email}).lean();
        // compare password 
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual)
        {
            return res.status(401).send({error : "Invalid username/passworld"});
        } 
        // generate token
        const jwtToken = await generateToken({email});
        return res.status(201).send({...user, token: jwtToken});
    } catch (error) {
        console.log("error occured in creating user ",error);
        return res.status(500).send("internal Server Error");
    }
}


module.exports = loginUser;