const Product = require("../models/product.model");
const store = require("../services/store.service");

exports.addProduct = (req, res) => {
  try {
    const product = new Product(req.body);
    const id = store.add(product);
    res.json({ productId: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMetadata = (req, res) => {
  try {
    const updated = store.updateMetadata(req.body.productId, req.body.Metadata);
    if (!updated) return res.status(404).json({ error: "Product not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
