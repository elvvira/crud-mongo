const ProductModel = require('../schemes/product.scheme');
const { v4 } = require('uuid');
const controller = {};

controller.allProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    res.status(200).send(allProducts);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la base de datos' });
  }
};
controller.productById = async (req, res) => {
  try {
    const productById = await ProductModel.findById(req.params.id);
    res.status(200).send(productById);
  } catch (err) {
    res.status(500).send({ error: 'Error al encontrars en la base de datos' });
  }
};

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

controller.changeProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (!user) {
    return res.status(409).send('User not exist');
  }
  await ProductModel.updateOne({ _id: product.id });
  await product.save();
  res.send('Product update');
};
controller.deleteProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (!product) {
    return res.status(409).send('user not exist');
  }
  await ProductModel.deleteOne({ _id: user.id });
  res.send('User deleted');
};
module.exports = controller;
