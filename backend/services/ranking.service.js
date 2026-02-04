function rank(products, intent) {
  return products.map(p => {
    let score = 0;

    if (p.title.toLowerCase().includes("iphone")) score += 20;
    score += p.rating * 5;
    score += Math.log(p.sales + 1);
    if (p.stock > 0) score += 10;

    if (intent.cheap) score += (100000 - p.price) / 1000;
    if (intent.latest && p.metadata?.model?.includes("16")) score += 15;
    if (intent.color && p.description.includes(intent.color[0])) score += 10;

    return { ...p, score };
  }).sort((a, b) => b.score - a.score);
}

module.exports = rank;
