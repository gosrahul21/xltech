const express = require('express');
const { body, validationResult } = require("express-validator");


const createProduct = require('../controllers/products/create-product.controller');
const deleteProductById = require('../controllers/products/delete-product.controller');
const {getProductById} = require('../controllers/products/get-product.controller');
const updateProductById = require('../controllers/products/update-product.controller');

const route = express.Router();

route.get('/:productId', getProductById);

route.post('/', 
body('name').isString().notEmpty(), 
body('image').isURL().notEmpty(), 
body('description').notEmpty(),  
body('quantity').isNumeric().notEmpty(),
body('totalPrice').isNumeric().notEmpty(),
body('price').isNumeric().notEmpty(),
(req,res,next)=>{
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: err.array()
        });
    }
    next();
},
createProduct );

// update productById
route.patch('/:productId',
body('name').isString().optional(), 
body('image').isURL().optional(), 
body('description').optional(),  
body('quantity').isNumeric().optional(),
body('totalPrice').isNumeric().optional(),
body('price').isNumeric().optional(),
(req,res,next)=>{
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: err.array()
        });
    }
    next();
},
updateProductById);

// delete product by id
route.delete('/:productId',deleteProductById);


module.exports = route;