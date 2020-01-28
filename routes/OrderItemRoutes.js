const { Router } = require('express');
const OrderItemController = require('../controllers/OrderItemController');

const router = Router();
router.get('/', OrderItemController.getAllOrderItens);
router.post('/', OrderItemController.addOrderItem);
router.get('/:id', OrderItemController.getOrderItem);
router.put('/:id', OrderItemController.updatedOrderItem);
router.delete('/:id', OrderItemController.deleteOrderItem);

module.exports = router;