const store = require("./store.service");
const Product = require("../models/product.model");

function seedProducts() {
  const colors = ["red", "blue", "black", "white"];
  const storage = ["64GB", "128GB", "256GB"];
  const models = ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"];

  for (let i = 0; i < 1000; i++) {
    const model = models[Math.floor(Math.random() * models.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const storeSize = storage[Math.floor(Math.random() * storage.length)];

    const product = new Product({
      title: model,
      description: `${model} ${storeSize} ${color} colour`,
      rating: (Math.random() * 2 + 3).toFixed(1),
      stock: Math.floor(Math.random() * 200),
      price: Math.floor(Math.random() * 50000 + 30000),
      mrp: Math.floor(Math.random() * 60000 + 40000),
      currency: "INR"
    });

    product.metadata = {
      storage: storeSize,
      color: color,
      model: model
    };

    store.add(product);
  }

  console.log("✅ 1000 products seeded");
}

module.exports = seedProducts;
