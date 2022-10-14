import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { DARKTHEME } from './colors/Colors';
import { BrowserRouter } from "react-router-dom"
import { ListaCotasProvider } from './providers/ListaSorteios';
import { CountCotasProvider } from "./providers/CountCotas";
import { DadosUsuarioProvider } from "./providers/DadosUsuario";
import { PageAtualCompraProvider } from "./providers/PageAtualCompra";
import { TokenProvider } from "./providers/Token";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ListaCotasProvider>
    <React.StrictMode style={{ background: DARKTHEME }}>
      <BrowserRouter>
        <CountCotasProvider>
          <DadosUsuarioProvider>
            <PageAtualCompraProvider>
              <TokenProvider>
              <App />
              </TokenProvider>
            </PageAtualCompraProvider>
          </DadosUsuarioProvider>
        </CountCotasProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ListaCotasProvider>
);

