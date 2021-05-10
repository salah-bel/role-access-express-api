const express = require('express');
const app = express();
var cors = require('cors')
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const path = require('path');
// bdd setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/product-mondb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



// MIDDELWARES
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
//BODYPARSER
app.use(express.json());

// routes
app.use('/api/product', productRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;