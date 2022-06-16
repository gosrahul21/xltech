const Product = require('../../models/schemas/product.schema');


const getProductById = async (req,res)=>{
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if(!product)
            res.status(404).send("Not found product with id "+productId);
        res.status(201).send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {getProductById};