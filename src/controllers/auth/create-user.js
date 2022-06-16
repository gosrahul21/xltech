const {body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require('../../models/schemas/user.schema');


const createUser = async (req,res)=>{
    try {
        // name, email, password
        const {name, email, password, role} = req.body;
        console.log(name,email,role)
        // create password 
        const hashPassword = await bcrypt.hash(password,5);

        const user = await User.create({name, email,role,  password: hashPassword });
        return res.status(201).send(user);
    } catch (error) {
        console.log("error occured in creating user ",error);
        return res.status(500).send("internal Server Error");
    }
}


module.exports = createUser;