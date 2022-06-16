const Product = require('../../models/schemas/product.schema');


const deleteProductById = async (req,res)=>{
    try {
        const productId = req.params.productId;
        const deleteProduct = await Product.findByIdAndDelete(productId);
        res.status(201).send(deleteProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = deleteProductById;