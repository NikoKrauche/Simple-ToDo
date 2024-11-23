import React, { useState } from 'react';

import { Header } from './Header/Header.tsx';
import { TodoList } from './TodoList/TodoList.tsx';
import { AddTodoForm } from './AddTodoForm/AddTodoForm.tsx';
import { Footer } from './Footer/Footer.tsx';

import styles from './app.module.css';
import { Todo, StateActive } from './types.ts';

const App = () => {
  const getToDo = () => {
    const storedTodos = localStorage.getItem('todo');
    if (storedTodos) {
      return JSON.parse(storedTodos) as Todo[];
    }
    return [] as Todo[];
  };

  const [todos, setTodos] = useState(getToDo());
  const [stateActive, setActive] = useState('all');

  const saveToDo = (todo: Todo[]) => {
    const json = JSON.stringify(todo);
    localStorage.setItem('todo', json);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    saveToDo(newTodos);
  };

  const allTodos = () => {
    const allCompleted = todos.every((todo) => todo.complete);

    const newTodos = todos.map((todo) => {
      if (allCompleted) {
        return {
          ...todo,
          complete: false,
        };
      }
      return {
        ...todo,
        complete: true,
      };
    });
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    const date = new Date();
    const id = date.getTime();
    const newTodo = { id, text, complete: false };

    setTodos([...todos, newTodo]);
    saveToDo([...todos, newTodo]);
  };

  const updateTodo = (id: number, newText: string) => {
    const result = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(result);
    saveToDo(result);
  };

  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
    saveToDo(newTodos);
  };

  const selectAll = () => setActive('all');
  const selectActive = () => setActive('active');
  const selectCompleted = () => setActive('completed');
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };
  const countActive = () => {
    const result = todos.filter((todo) => !todo.complete);
    return result.length;
  };

  return (
    <div className={styles.app}>
      <Header />
      <AddTodoForm addTodo={addTodo} />
      {todos.length > 0 && (
        <>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            allTodos={allTodos}
            stateActive={stateActive as StateActive}
          />
          <Footer
            stateActive={stateActive as StateActive}
            selectAll={selectAll}
            selectActive={selectActive}
            selectCompleted={selectCompleted}
            clearCompleted={clearCompleted}
            countActive={countActive}
          />
        </>
      )}
    </div>
  );
};

export default App;
