import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { DARKTHEME } from './colors/Colors';
import { BrowserRouter } from "react-router-dom"
import { ListaCotasProvider } from './providers/ListaSorteios';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode style={{ background: DARKTHEME }}>
    <ListaCotasProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ListaCotasProvider>
  </React.StrictMode>
);

