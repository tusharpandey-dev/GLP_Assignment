const { products } = require("./data.store");

module.exports = function seedProducts() {
  if (products.length) return;

  const brands = ["Apple","Samsung","OnePlus"];
  const colors = ["Red","Blue","Black"];
  const storage = ["64GB","128GB","256GB"];

  for (let i = 1; i <= 1000; i++) {
    products.push({
      id: i,
      title: `${brands[i%3]} Phone ${i}`,
      description: "High performance smartphone",
      brand: brands[i%3],
      price: 10000 + Math.random()*70000,
      rating: 3 + Math.random()*2,
      unitsSold: Math.floor(Math.random()*10000),
      stock: Math.floor(Math.random()*50),
      metadata: {
        color: colors[i%3],
        storage: storage[i%3]
      }
    });
  }
};
