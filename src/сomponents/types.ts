export interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

export type StateActive = 'all' | 'active' | 'completed';

export type ToggleTodo = (selectedTodo: Todo) => void;
export type AllTodos = () => void;
export type AddTodo = (text: string) => void;
export type UpdateTodo = (id: number, text: string) => void;
export type DeleteTodo = (text: Todo) => void;

export type SelectAll = () => void;
export type SelectActive = () => void;
export type SelectCompleted = () => void;
export type ClearCompleted = () => void;
export type CountActive = () => number;
