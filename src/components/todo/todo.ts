export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoListItemProp {
  todo: Todo;
}

export interface TodoListProp {
  todos: Todo[];
}
