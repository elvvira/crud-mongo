const path = require('path');
const fs = require('fs');
const ProductModel = require('../schemes/product.scheme');
const usersFile = path.resolve(__dirname, '../../data/user.json');
const { v4 } = require('uuid');

const controller = {};

controller.allProducts = (req, res) => {};
controller.productsById = (req, res) => {};

controller.createProduct = async (req, res) => {
  const { name, size, price } = req.body;
  const newProduct = new ProductModel({
    _id: v4(),
    name,
    size,
    price
  });
  await newProduct.save();
  res.send('Product saved');
};

controller.deleteProduct = (req, res) => {};
controller.changeProduct = (req, res) => {};

module.exports = controller;
