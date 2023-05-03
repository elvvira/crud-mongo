const express = require('express');
const controller = require('../controllers/product.controller');

const userRoutes = express.Router();

// userRoutes.get('/', controller.allUsers);
userRoutes.post('/', controller.createProduct);

// userRoutes.delete('/:id', controller.deleteUser);
// userRoutes.patch('/:id', controller.changeUser);
// userRoutes.get('/:id', controller.usersById);

module.exports = userRoutes;
