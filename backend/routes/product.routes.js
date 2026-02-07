const express = require("express");
const router = express.Router();
const { products } = require("../services/data.store");

// Add product
router.post("/product", (req, res) => {
  const id = products.length + 1;
  const product = { id, ...req.body };
  products.push(product);
  res.json({ productId: id });
});

// Update metadata
router.put("/product/meta-data", (req, res) => {
  const { productId, Metadata } = req.body;
  const product = products.find(p => p.id == productId);
  if (!product) return res.status(404).send("Product not found");

  product.metadata = { ...product.metadata, ...Metadata };
  res.json(product);
});

module.exports = router;
