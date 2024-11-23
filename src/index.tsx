import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './сomponents/App.tsx';

const app = () => {
  const container = document.getElementById('root')!;
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};

app();
