const Product = require('../../models/schemas/product.schema');


const createProduct = async (req,res)=>{
    try {
        // Name, image, Desc, Price, Quantity, Total price
        const { name, image, description, price, quantity, totalPrice } = req.body;
        const productDto = { name, image, description, price, quantity, totalPrice };
        const product = await Product.create(productDto);
        return res.status(201).send(product);
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

module.exports = createProduct;


