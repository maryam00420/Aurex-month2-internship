import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    onAdd(text.trim());
    setText("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;