function ProductCard({ product, onView, onEdit, onDelete }) {
  return (
    <div className="card">
      {product.thumbnail ? (
        <img src={product.thumbnail} alt={product.title} />
      ) : (
        <div className="no-image">No image</div>
      )}
      <h3>{product.title}</h3>
      <p className="cat">{product.category}</p>
      <p className="price">${product.price}</p>
      <div className="card-actions">
        <button className="btn" onClick={() => onView(product.id)}>
          View
        </button>
        <button className="btn" onClick={() => onEdit(product)}>
          Edit
        </button>
        <button className="btn danger" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;