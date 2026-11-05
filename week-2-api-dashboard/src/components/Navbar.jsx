function Navbar({ active, onProducts, onAdd }) {
  return (
    <nav className="navbar">
      <h1 className="brand">Product Dashboard</h1>
      <div className="nav-links">
        <button
          className={active === "products" ? "nav-btn active" : "nav-btn"}
          onClick={onProducts}
        >
          Products
        </button>
        <button
          className={active === "add" ? "nav-btn active" : "nav-btn"}
          onClick={onAdd}
        >
          Add Product
        </button>
      </div>
    </nav>
  );
}

export default Navbar;