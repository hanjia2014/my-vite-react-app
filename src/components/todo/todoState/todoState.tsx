import React, { useState } from "react";
import { Todo, TodoListItemProp, TodoListProp } from "../todo";

const TodoListItem = ({ todo }: TodoListItemProp) => {
  const [checked, setChecked] = useState(todo.completed);
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
      &nbsp;{todo.title}
    </li>
  );
};

const TodoList = ({ todos }: TodoListProp) => {
  return (
    <ul className="p-2 text-left">
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default function StateTodoListComponent() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
      <h2>Todo List (State)</h2>
      <TodoList todos={todos} />
      <input
        type="text"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setTodos([
              ...todos,
              {
                id: todos.length,
                title: (event.target as HTMLInputElement).value,
                completed: false,
              },
            ]);
            (event.target as HTMLInputElement).value = "";
          }
        }}
      />
      <button>Add</button>
    </div>
  );
}
