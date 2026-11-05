function TaskFilter({ filter, onChange }) {
  const options = ["all", "active", "completed"];

  return (
    <div className="filters">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={filter === option ? "filter-btn active" : "filter-btn"}
          onClick={() => onChange(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;