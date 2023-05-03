const express = require('express');
const controller = require('../controllers/product.controller');

const productRoutes = express.Router();

productRoutes.get('/', controller.allProducts);
productRoutes.post('/', controller.createProduct);

// productRoutes.delete('/:id', controller.deleteUser);
// productRoutes.patch('/:id', controller.changeUser);
productRoutes.get('/:id', controller.productById);

module.exports = productRoutes;
