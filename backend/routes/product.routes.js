const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.post("/product", controller.addProduct);
router.put("/product/meta-data", controller.updateMetadata);

module.exports = router;
