import React, { useState } from 'react';
import { Todo, ToggleTodo, DeleteTodo, UpdateTodo } from '../types';

import styles from './todoList.module.css';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
}

export const TodoListItem = ({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    if (editText.trim() !== '') {
      updateTodo(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <li className={todo.complete ? styles.completed : null}>
      <div className='view'>
        <input
          className={styles.toggle}
          type='checkbox'
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {isEditing ? (
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className={styles.edit}
            onDoubleClick={handleDoubleClick}
          />
        ) : (
          <label
            className={styles.todoItemLabel}
            style={{
              textDecoration: todo.complete ? 'line-through' : undefined,
            }}
            onDoubleClick={handleDoubleClick}
          >
            {todo.text}
          </label>
        )}
        <button
          className={styles.destroy}
          onClick={() => deleteTodo(todo)}
        ></button>
      </div>
    </li>
  );
};
