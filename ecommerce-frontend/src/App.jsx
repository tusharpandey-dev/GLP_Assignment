import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const searchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/search/product?query=${query}`
      );
      let data = res.data.data;

      if (maxPrice) data = data.filter(p => p.price <= maxPrice);

      if (sort === "price") data.sort((a, b) => a.price - b.price);
      if (sort === "rating") data.sort((a, b) => b.rating - a.rating);

      setProducts(data);
    } catch (err) {
      console.error(err);
      alert("Backend not running!");
    }
  };

  return (
    <div className="container">
      <h1>📱 Electronics Search</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search iPhone, cheap phone, red color..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchProducts}>Search</button>
      </div>

      <div className="filters">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="price">Price Low → High</option>
          <option value="rating">Rating High → Low</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="grid">
        {products.map((p) => (
          <div key={p.productId} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="price">₹{p.price}</p>
            <p>⭐ {p.rating}</p>
            <p className={p.stock > 0 ? "stock" : "out"}>
              {p.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
