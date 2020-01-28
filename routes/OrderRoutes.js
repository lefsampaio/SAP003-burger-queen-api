const { Router } = require('express');
const OrderController = require('../controllers/OrderController');

const router = Router();
router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.addOrder);
router.get('/:id', OrderController.getOrder);
router.put('/:id', OrderController.updatedOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;


