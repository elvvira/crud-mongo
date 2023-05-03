const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Rutas
const productRoutes = require('./routes/product.routes');

// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

// Uso de rutas
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.error('Connection error');
  }
  app.listen(
    process.env.PORT,
    console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`)
  );
};

startServer();
