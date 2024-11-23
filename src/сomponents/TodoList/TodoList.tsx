import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

import styles from './todoList.module.css';
import {
  Todo,
  ToggleTodo,
  DeleteTodo,
  StateActive,
  AllTodos,
  UpdateTodo,
} from '../types.ts';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  stateActive: StateActive;
  allTodos: AllTodos;
  updateTodo: UpdateTodo;
}

const expectedList = (lists: Todo[], state: StateActive) => {
  switch (state) {
    case 'active':
      return lists.filter((item) => item.complete === false);
    case 'completed':
      return lists.filter((item) => item.complete === true);
    case 'all':
    default:
      return lists;
  }
};

export const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
  stateActive,
  allTodos,
  updateTodo,
}: Props) => {
  const lists = expectedList(todos, stateActive);

  return (
    <main className={styles.main} data-testid='main'>
      <div>
        <input
          className={styles.toggleAll}
          type='checkbox'
          data-testid='toggle-all'
          onChange={() => allTodos()}
        />
        <label className={styles.toggleAllLabel} htmlFor='toggleAll'>
          Toggle All Input
        </label>
      </div>
      <ul className={styles.todoList}>
        {lists.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </main>
  );
};
