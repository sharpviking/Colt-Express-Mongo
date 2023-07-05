const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product')


mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})



app.listen(3000, () => {
    console.log('APP is LISTENING on PORT 3000...!')
})