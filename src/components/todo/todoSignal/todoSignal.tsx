import React from 'react'
 
import { Signal, useSignal } from '@preact/signals-react'
import { Todo, TodoListItemProp } from '../todo'
 
const TodoListItem = ({ todo }: TodoListItemProp) => {
  const checked = useSignal(todo.completed)
  return (
    <li>
      <input
        type='checkbox'
        checked={checked.value}
        onChange={(event) => {
          checked.value = event.target.checked
        }}
      />
      &nbsp;{todo.title}
    </li>
  )
}
const TodoList = ({ todos }: { todos: Signal<Todo[]> }) => {
  return (
    <ul className='p-2 text-left'>
      {todos.value.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </ul>
  )
}
 
export default function SignalTodoListComponent() {
  const todos = useSignal<Todo[]>([])
  return (
    <div>
      <h2>Todo List (Signal)</h2>
      <TodoList todos={todos} />
      <input
        type='text'
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            todos.value = [
              ...todos.value,
              {
                id: todos.value.length,
                title: (event.target as HTMLInputElement).value,
                completed: false
              }
            ];
            (event.target as HTMLInputElement).value = '';
          }
        }}
      />
      <button>Add</button>
    </div>
  )
}
