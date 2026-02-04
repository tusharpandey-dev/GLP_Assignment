class Product {
  constructor({ title, description, rating, stock, price, mrp, currency }) {
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.stock = stock;
    this.price = price;
    this.mrp = mrp;
    this.currency = currency;
    this.metadata = {};
    this.sales = Math.floor(Math.random() * 5000);
    this.createdAt = new Date();
  }
}

module.exports = Product;
