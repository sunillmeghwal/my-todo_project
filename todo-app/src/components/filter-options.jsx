export function TodoFilterOptions({ onChange, value }) {
  return (
    <div className="todo-filter-tabs">
      <button
        className={value === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        All
      </button>
      <button
        className={value === "pending" ? "active" : ""}
        onClick={() => onChange("pending")}
      >
        Pending
      </button>
      <button
        className={value === "completed" ? "active" : ""}
        onClick={() => onChange("completed")}
      >
        Completed
      </button>
    </div>
  );
}
