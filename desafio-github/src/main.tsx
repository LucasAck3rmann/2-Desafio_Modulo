import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Removendo a importação de './index.css' que não é mais necessária com styled-components

// Renderiza o componente principal no elemento root
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
