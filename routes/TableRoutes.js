const { Router } = require('express');
const TableController = require('../controllers/TableController');

const router = Router();
router.get('/', TableController.getAllTables);
router.post('/', TableController.addTable);
router.get('/:id', TableController.getTable);
router.put('/:id', TableController.updatedTable);
router.delete('/:id', TableController.deleteTable);

module.exports = router; 