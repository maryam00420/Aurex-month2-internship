import ProductCard from "./ProductCard";

function ProductList({ products, onView, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p className="status">No products match your search.</p>;
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;