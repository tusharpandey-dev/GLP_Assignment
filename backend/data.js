const products = [];

const brands = ["Apple", "Samsung", "OnePlus"];
const colors = ["Red", "Blue", "Black"];
const storage = ["64GB", "128GB", "256GB"];

for (let i = 1; i <= 500; i++) {
  products.push({
    id: i,
    title: `${brands[i % 3]} Phone ${i}`,
    description: `Smartphone with ${storage[i % 3]} storage`,
    price: Math.floor(10000 + Math.random() * 70000),
    rating: (3 + Math.random() * 2).toFixed(1),
    unitsSold: Math.floor(Math.random() * 5000),
    stock: Math.floor(Math.random() * 20),
    metadata: {
      color: colors[i % 3],
      storage: storage[i % 3]
    }
  });
}

module.exports = products;
