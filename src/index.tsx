import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar_ from '../src/componentes/navbar/navbar';
import Footer from '../src/componentes/footer/footer';
import './index.css';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar_ />
    <App />
    <Footer />
  </React.StrictMode>
);