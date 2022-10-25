import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, NavLink } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <NavLink to="/" role="button">
        <span>Home | </span>
      </NavLink>
      <NavLink to="/greeting" role="button">
        <span>Greeting message</span>
      </NavLink>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
