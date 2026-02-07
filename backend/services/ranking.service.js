const { products } = require("./data.store");

function parseQuery(q) {
  q = q.toLowerCase();
  return {
    cheap: q.includes("sasta") || q.includes("cheap"),
    color: ["red","blue","black"].find(c => q.includes(c)),
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

function searchProducts(query) {
  const intent = parseQuery(query);
  return products
    .map(p => ({ ...p, score: score(p, intent) }))
    .sort((a,b)=>b.score-a.score);
}

module.exports = { searchProducts };
