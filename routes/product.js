const router = require('express').Router()
const productController = require('../controllers/product')
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');



//REQUETTE POST
router.post('/', multer, auth, productController.createProduct);

// get all products
router.get('/', auth, productController.getAllProducts);

//find by one 
router.get('/:id', auth, productController.getProductByProductId)

//modifier un produit
router.put('/:id', auth, productController.putProduct);

//supprimer u produit
router.delete('/:id', auth, productController.deletProduct);




module.exports = router;