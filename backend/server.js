const express = require("express");
const cors = require("cors");
const products = require("./data");

const app = express();
app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());

function parseQuery(q) {
  q = q.toLowerCase();
  return {
    cheap: q.includes("cheap") || q.includes("sasta"),
    color: ["red", "blue", "black"].find(c => q.includes(c)),
    storage: q.match(/\d+gb/)?.[0]?.toUpperCase(),
    keyword: q.split(" ")[0]
  };
}

function score(p, intent) {
  let s = 0;
  if (p.title.toLowerCase().includes(intent.keyword)) s += 40;
  if (intent.color && p.metadata.color.toLowerCase() === intent.color) s += 20;
  if (intent.storage && p.metadata.storage === intent.storage) s += 20;
  if (intent.cheap && p.price < 30000) s += 30;
  s += p.rating * 10;
  s += Math.log(p.unitsSold + 1);
  if (p.stock > 0) s += 15; else s -= 100;
  return s;
}

app.get("/api/v1/search/product", (req, res) => {
  const intent = parseQuery(req.query.query || "");
  const results = products
    .map(p => ({ ...p, score: score(p, intent) }))
    .sort((a, b) => b.score - a.score);

  res.json({ data: results.slice(0, 30) });
});

app.listen(5000, () => console.log("🚀 Backend running on 5000"));
