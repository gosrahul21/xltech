const express = require('express');
require('./models');
require('dotenv').config();
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/products', require('./routes/product.route'));
app.use('/api/auth', require('./routes/auth.route'));

const port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.send("hello world")
})

app.listen(port, (err)=>{
    if(!err){
        console.log(`connection established at port ${port}`)
    }else
        console.log(`connection failed`);
})

