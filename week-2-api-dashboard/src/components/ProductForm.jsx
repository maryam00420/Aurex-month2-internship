import { useState } from "react";

function ProductForm({ initial, submitLabel, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [price, setPrice] = useState(initial?.price ?? "");
  const [category, setCategory] = useState(initial?.category || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (title.trim() === "") newErrors.title = "Title is required";
    if (price === "" || Number(price) <= 0) newErrors.price = "Enter a valid price";
    if (category.trim() === "") newErrors.category = "Category is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSaving(true);
    await onSubmit({
      title: title.trim(),
      price: Number(price),
      category: category.trim().toLowerCase(),
      description: description.trim(),
    });
    setSaving(false);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{submitLabel}</h2>

      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {errors.title && <p className="field-error">{errors.title}</p>}

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {errors.price && <p className="field-error">{errors.price}</p>}

      <label>Category</label>
      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      {errors.category && <p className="field-error">{errors.category}</p>}

      <label>Description</label>
      <textarea
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="card-actions">
        <button className="btn" type="submit" disabled={saving}>
          {saving ? "Saving..." : submitLabel}
        </button>
        <button className="btn danger" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProductForm;