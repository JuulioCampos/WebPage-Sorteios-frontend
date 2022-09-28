import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { DARKTHEME } from './colors/Colors';
import { BrowserRouter } from "react-router-dom"
import { ListaCotasProvider } from './providers/ListaSorteios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode style={{ background: DARKTHEME}}>
    <ListaCotasProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ListaCotasProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
