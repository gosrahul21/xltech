

const auth = (req,res,next)=>{
    try {
        // get token
        // decode the token
        
        // find user details from the token

        // if no user found then send user not found response

        // assign user to request object

        next();
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
};


