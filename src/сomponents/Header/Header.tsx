import React from 'react';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header} data-testid='header'>
      <h1>todos</h1>
    </header>
  );
};
