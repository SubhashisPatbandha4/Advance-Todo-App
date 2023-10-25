import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';


const root =document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,root
);

