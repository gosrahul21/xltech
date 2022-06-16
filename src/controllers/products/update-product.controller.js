const Product = require('../../models/schemas/product.schema');
const mongoose = require('mongoose');

const updateProductById = async (req,res)=>{
    try {
        const productId = req.params.productId;
        console.log(productId)
        console.log(req.body)
        const updatedProduct = await Product.findByIdAndUpdate(new mongoose.Types.ObjectId(productId),
         req.body,
        {new: true, upsert: true})
        .lean();
        return res.status(201).send(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = updateProductById;