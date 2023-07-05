const mongoose = require('mongoose')

const Product = require('./models/product')


mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));



// const p = new Product({
//     name: 'Miyazaki Mangos',
//     price: 0.99,
//     category: 'fruit'
// })


// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Robust Banana',
        price: 1.0,
        category: 'Fruit'
    },
    {
        name: 'Red pulp Guava',
        price: 3.99,
        category: 'fruit'
    },

    {
        name: 'Military class Pomegranate',
        price: 5.99,
        category: 'fruit'
    },
    {
        name: 'Kalajamun',
        price: 0.29,
        category: 'fruit'
    },
    {
        name: 'Miyazaki Mangos',
        price: 0.99,
        category: 'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })