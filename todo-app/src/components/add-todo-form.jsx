import { useState } from "react";

export function AddTodoForm({ onSave }) {
  const [title, setTitle] = useState("");

  function handleClick() {
    if (title) {
      onSave(title);
      setTitle("");
    }
  }
  return (
    <div className="card">
      <div className="input-controls">
        <input
          type="text"
          placeholder="Enter todo title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
}
