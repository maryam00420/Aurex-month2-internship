import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const [formMode, setFormMode] = useState(null); // null | "add" | product being edited

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=30");
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  function goToProducts() {
    setSelectedId(null);
    setFormMode(null);
  }

  function goToAdd() {
    setSelectedId(null);
    setFormMode("add");
  }

  async function addProduct(values) {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to add product");
      const data = await res.json();
      setProducts([{ ...data, ...values, id: Date.now() }, ...products]);
      setFormMode(null);
    } catch (err) {
      alert(err.message);
    }
  }

  async function updateProduct(id, values) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to update product");
      setProducts(products.map((p) => (p.id === id ? { ...p, ...values } : p)));
      setFormMode(null);
    } catch (err) {
      alert(err.message);
    }
  }

  async function deleteProduct(id) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  const categories = [...new Set(products.map((p) => p.category))];

  const visibleProducts = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const activePage = formMode === "add" ? "add" : "products";

  if (selectedId !== null) {
    return (
      <div className="container">
        <Navbar active="products" onProducts={goToProducts} onAdd={goToAdd} />
        <ProductDetail
          id={selectedId}
          fallback={products.find((p) => p.id === selectedId)}
          onBack={goToProducts}
        />
      </div>
    );
  }

  if (formMode !== null) {
    const editing = formMode !== "add";
    return (
      <div className="container">
        <Navbar active={activePage} onProducts={goToProducts} onAdd={goToAdd} />
        <ProductForm
          initial={editing ? formMode : null}
          submitLabel={editing ? "Update Product" : "Add Product"}
          onSubmit={(values) =>
            editing ? updateProduct(formMode.id, values) : addProduct(values)
          }
          onCancel={goToProducts}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar active="products" onProducts={goToProducts} onAdd={goToAdd} />

      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
      </div>

      {loading && <p className="status">Loading products...</p>}
      {error && <p className="status error">Error: {error}</p>}
      {!loading && !error && (
        <ProductList
          products={visibleProducts}
          onView={setSelectedId}
          onEdit={setFormMode}
          onDelete={deleteProduct}
        />
      )}
    </div>
  );
}

export default App;