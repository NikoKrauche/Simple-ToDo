import React from 'react';

import styles from './footer.module.css';
import {
  StateActive,
  SelectAll,
  SelectActive,
  SelectCompleted,
  ClearCompleted,
  CountActive,
} from '../types';

interface Props {
  stateActive: StateActive;
  selectAll: SelectAll;
  selectActive: SelectActive;
  selectCompleted: SelectCompleted;
  clearCompleted: ClearCompleted;
  countActive: CountActive;
}

export const Footer = ({
  stateActive,
  countActive,
  selectAll,
  selectActive,
  selectCompleted,
  clearCompleted,
}: Props) => {
  return (
    <footer className={styles.footer}>
      <span className={styles.todoCount}>{countActive()} items left!</span>
      <ul className={styles.filters}>
        <li>
          <a
            className={stateActive === 'all' ? styles.selected : ''}
            href='#/'
            onClick={() => selectAll()}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={stateActive === 'active' ? styles.selected : ''}
            href='#/active'
            onClick={() => selectActive()}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={stateActive === 'completed' ? styles.selected : ''}
            href='#/completed'
            onClick={() => selectCompleted()}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className={styles.clearCompleted}
        onClick={() => clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
};
