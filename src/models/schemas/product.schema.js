const mongoose = require('mongoose');

// ( Name, image, Desc, Price, Quantity, Total price

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        // required: true
    },

    price: {
        type: Number,
        required: true
    },

    Quantity: {
        type: Number,
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('product', ProductSchema);