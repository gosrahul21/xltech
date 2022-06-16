const route = require('express').Router();
const createUser = require('../controllers/auth/create-user');
const loginUser = require("../controllers/auth/login-user");
const auth = require('../resources/middlewares/auth.middleware')

// signup
route.post('/signup', createUser);

// login 
route.post('/login',loginUser);

router.get('/token',auth, )


module.exports = route;