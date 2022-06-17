const jwt = require('jsonwebtoken');

const auth = async (req,res,next)=>{
    try {
        // get token
        const token = req.headers.authorization.split(' ')[1];

        // decode the token
        const decodedToken = await jwt.verify(token, process.env.JWTSECRET);
        // find user details from the token
        if(!decodedToken)
            res.status(404).send("Token invalid")
        const {email} = decodedToken;

        // if no user found then send user not found response
        
        // assign user to request object

        next();
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
};


