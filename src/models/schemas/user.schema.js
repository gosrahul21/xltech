const mongoose = require('mongoose');

// ( Name, image, Desc, Price, Quantity, Total price

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('user', UserSchema);