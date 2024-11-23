import React, { useState } from 'react';
import styles from './addTodoForm.module.css';
import { AddTodo } from '../types.ts';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (text.trim() === '') {
        return;
      }
      addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        className={styles.newTodo}
        id='todo-input'
        type='text'
        data-testid='text-input'
        placeholder='What needs to be done?'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <label className={styles.visuallyHidden} htmlFor='todo-input'>
        New Todo Input
      </label>
    </div>
  );
};
