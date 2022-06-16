const route = require('express').Router();
const createUser = require('../controllers/auth/create-user');
const loginUser = require("../controllers/auth/login-user");


// signup
route.post('/signup', createUser);

// login 
route.post('/login',loginUser);


module.exports = route;