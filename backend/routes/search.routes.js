const express = require("express");
const router = express.Router();
const controller = require("../controllers/search.controller");

router.get("/search/product", controller.searchProducts);

module.exports = router;
