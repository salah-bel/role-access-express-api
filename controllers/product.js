const Product = require('../models/Product');

// all products 
exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then((product) => res.status(202).json(product))
        .catch(err => res.status(403).json({ msgErr: err.message }))
};

// post product
exports.createProduct = (req, res, next) => {
        const productObject = JSON.parse(req.body.product);
        const product = new Product({
            ...productObject,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        });


        product.save()
            .then(() => res.status(201).json({ msg: 'produit engeristré' }))
            .catch(err => res.status(402).json({ error: err.message }))

    }
    // get product by id
exports.getProductByProductId = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((product) => res.status(200).json(product))
        .catch(err => res.status(401).json(err))
}

// modifier product 
exports.putProduct = (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
}

//delete product
exports.deletProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
}