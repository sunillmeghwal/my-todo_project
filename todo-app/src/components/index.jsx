import { useState } from "react";
import { AddTodoForm } from "./add-todo-form";
import { TodoList } from "./todo-list";
import { TodoFilterOptions } from "./filter-options";
import AddTodoTitle from "./todo-title";

export function TodoApp() {
  const [todos, setTodos] = useState([]);

  const [filterStatus, setFilterStatus] = useState("all");

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function updateTodoStatus(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  let filteredTodos = [...todos];

  if (filterStatus === "pending") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  } else if (filterStatus === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  }

  return (
    <div>
      <AddTodoTitle />
      <AddTodoForm onSave={addTodo} />
      <div className="card">
        <TodoFilterOptions
          value={filterStatus}
          onChange={(value) => setFilterStatus(value)}
        />
        <h2>Todo List ({filteredTodos.length})</h2>
        <TodoList
          items={filteredTodos}
          onDelete={deleteTodo}
          onStatusChange={updateTodoStatus}
        />
      </div>
    </div>
  );
}
