const mongoose = require("mongoose");

const mongodbURI = 'mongodb://localhost:27017/xltech'
mongoose.connect(mongodbURI).then(()=>{
    console.log("mongodb connection successfully established");
}).catch((err)=>{
    console.log(`mongodb connection failed with error ${err}`);
})

