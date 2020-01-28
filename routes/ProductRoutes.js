const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();
router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.addProduct);
router.get('/:id', ProductController.getProduct);
router.put('/:id', ProductController.updatedProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;