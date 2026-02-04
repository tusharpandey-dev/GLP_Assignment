const { v4: uuidv4 } = require("uuid");

class StoreService {
  constructor() {
    this.products = [];
  }

  add(product) {
    product.productId = uuidv4();
    this.products.push(product);
    return product.productId;
  }

  updateMetadata(id, metadata) {
    const product = this.products.find(p => p.productId === id);
    if (!product) return null;
    product.metadata = { ...product.metadata, ...metadata };
    return product;
  }

  getAll() {
    return this.products;
  }
}

module.exports = new StoreService();
