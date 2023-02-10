const express = require('express');
const router = express.Router();
const product = require('../models/product');
const {
    getAllProducts,
    createNewProduct,
    deleteProduct, 
    updateProduct  
}  = require('../controllers/productsController');

router.route('/').get(getAllProducts);
router.route('/create').post(createNewProduct);
router.route('/:id').put(updateProduct);
router.route('/:id').delete(deleteProduct);

module.exports = router;