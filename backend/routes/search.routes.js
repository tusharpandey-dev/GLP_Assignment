const express = require("express");
const router = express.Router();
const { searchProducts } = require("../services/ranking.engine");

router.get("/search/product", (req, res) => {
  const query = req.query.query || "";
  const results = searchProducts(query);
  res.json({ data: results.slice(0, 20) });
});

module.exports = router;
