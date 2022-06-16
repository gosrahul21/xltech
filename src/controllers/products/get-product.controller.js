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


const getProducts = async (req,res) => {
    try {
        const {limit, page} = req.query;
        const skippedProducts = limit*(page-1);
        const  products = await Product.find({})
        .skip(skippedProducts)
        .limit(limit);

        const productCount = await Product.find({}).count();

        return res.send({products, productCount });
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}


module.exports = {getProductById, getProducts };