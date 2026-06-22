const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const PRICE_FILE = "./price.json";
const PRODUCTS_FILE = "./products.json";

// Create files if not exist
if (!fs.existsSync(PRICE_FILE)) {
  fs.writeFileSync(
    PRICE_FILE,
    JSON.stringify({ price: "210" }, null, 2)
  );
}

if (!fs.existsSync(PRODUCTS_FILE)) {
  fs.writeFileSync(
    PRODUCTS_FILE,
    JSON.stringify([], null, 2)
  );
}

// =====================
// PRICE API
// =====================

app.get("/price", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(PRICE_FILE, "utf8")
  );

  res.json(data);
});

app.post("/price", (req, res) => {
  const data = {
    price: req.body.price,
  };

  fs.writeFileSync(
    PRICE_FILE,
    JSON.stringify(data, null, 2)
  );

  res.json({
    success: true,
    price: data.price,
  });
});

// =====================
// PRODUCTS API
// =====================

app.get("/products", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(PRODUCTS_FILE, "utf8")
  );

  res.json(products);
});

app.post("/products", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(PRODUCTS_FILE, "utf8")
  );

  products.push({
    name: req.body.name,
    price: req.body.price,
  });

  fs.writeFileSync(
    PRODUCTS_FILE,
    JSON.stringify(products, null, 2)
  );

  res.json({
    success: true,
  });
});

app.delete("/products/:index", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(PRODUCTS_FILE, "utf8")
  );

  const index = parseInt(req.params.index);

  products.splice(index, 1);

  fs.writeFileSync(
    PRODUCTS_FILE,
    JSON.stringify(products, null, 2)
  );

  res.json({
    success: true,
  });
});

// =====================

app.listen(5000, () => {
  console.log("✅ Server Running on Port 5000");
});