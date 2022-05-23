const {
  getAllProducts,
  createProducts,
} = require("../controllers/products.controllers");
const router = require("express").Router();

router.get("/api", getAllProducts);
router.post("/api", createProducts);


module.exports = router;
