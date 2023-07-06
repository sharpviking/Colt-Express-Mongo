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
app.use(express.urlencoded({ extended: true }))


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/$(newProduct._id})`)
})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)

    res.render('products/show', { product })
})



app.listen(3000, () => {
    console.log('APP is LISTENING on PORT 3000...!')
})