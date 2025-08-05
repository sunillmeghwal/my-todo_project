import { TodoItem } from "./todo-item";

export function TodoList({ items, onDelete, onStatusChange }) {
  return (
    <div className="todo-list-items">
      {items.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
