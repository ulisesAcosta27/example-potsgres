const { Product } = require("../models/products.models");

const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.findAll();
    res.status(200).json(getAllProducts);
  } catch (error) {
    console.log(error);
  }
};

const createProducts = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const createProducts = await Product.create({ name, description, price });
    res.status(200).json(createProducts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createProducts
}
