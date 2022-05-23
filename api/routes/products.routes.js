const {
  getAllProducts,
  createProducts,
} = require("../controllers/products.controllers");
const router = require("express").Router();

router.get("/", getAllProducts);
router.post("/", createProducts);


module.exports = router;
