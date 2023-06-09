const mongoose = require('mongoose');
const ProductScheme = mongoose.Schema({
  _id: String,
  name: String,
  size: String,
  price: Number
});

const ProductModel = mongoose.model('shirts', ProductScheme);

module.exports = ProductModel;
