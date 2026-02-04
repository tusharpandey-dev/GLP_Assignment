const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const searchRoutes = require("./routes/search.routes");
const seedProducts = require("./services/seed.service");

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());

app.use("/api/v1", productRoutes);
app.use("/api/v1", searchRoutes);
seedProducts();



