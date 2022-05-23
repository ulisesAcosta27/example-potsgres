const {
  getAllProducts,
  createProducts,
} = require("../controllers/products.controllers");
const router = require("express").Router();

router.get("/products", getAllProducts);
router.post("/products", createProducts);


module.exports = router;
