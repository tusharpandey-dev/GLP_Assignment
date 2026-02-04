const Fuse = require("fuse.js");
const store = require("../services/store.service");
const processQuery = require("../services/query.service");
const rank = require("../services/ranking.service");

exports.searchProducts = (req, res) => {
  try {
    const query = req.query.query || "";
    const intent = processQuery(query);

    const products = store.getAll();

    const fuse = new Fuse(products, {
      keys: ["title", "description"],
      threshold: 0.4
    });

    const fuzzyResults = fuse.search(query).map(r => r.item);
    const ranked = rank(fuzzyResults, intent);

    res.json({ data: ranked.slice(0, 20) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
