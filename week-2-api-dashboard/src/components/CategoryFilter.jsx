function CategoryFilter({ categories, value, onChange }) {
  return (
    <select
      className="category"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;