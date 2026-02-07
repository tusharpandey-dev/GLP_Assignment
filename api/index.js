const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");

const productRoutes = require("../routes/product.routes");
const searchRoutes = require("../routes/search.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", productRoutes);
app.use("/api/v1", searchRoutes);

module.exports = serverless(app);
