import { useState, useEffect } from "react";

function ProductDetail({ id, fallback, onBack }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to load product");
        const data = await res.json();
        setProduct({ ...data, ...fallback });
      } catch (err) {
        if (fallback) {
          setProduct(fallback);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  return (
    <div className="detail">
      <button className="btn" onClick={onBack}>
        ← Back to products
      </button>

      {loading && <p className="status">Loading product...</p>}
      {error && <p className="status error">Error: {error}</p>}

      {product && !loading && (
        <div className="detail-body">
          {product.thumbnail && (
            <img src={product.thumbnail} alt={product.title} />
          )}
          <div>
            <h2>{product.title}</h2>
            <p className="cat">{product.category}</p>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            {product.rating && <p>Rating: {product.rating}</p>}
            {product.stock && <p>Stock: {product.stock}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;