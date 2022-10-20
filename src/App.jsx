import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom"
import Container from "react-bootstrap/esm/Container.js";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Index.jsx";
import { Sorteio } from "./pages/Sorteio/Index.jsx";
import { TodosSorteios } from "./pages/Sorteios/Index.jsx";
import { Contato } from "./pages/Contato/Index.jsx";
import { ListaCotasContext } from "./providers/ListaSorteios";
import { Login } from "./pages/Login/Index";
import { Administracao } from "./pages/Authentic/Administracao/Index";
import { HomeDiv } from "./colors/Default";


export const App = () => {
  const { listaSorteios } = React.useContext(ListaCotasContext)
  const { waitLoad} = React.useContext(ListaCotasContext)
  if (waitLoad) {
    return (<div className="Loading-page"><img src="https://acegif.com/wp-content/uploads/loading-4.gif" alt="carregando..." /></div>)
  }
  if (listaSorteios) {
    return (
      <>
      <HomeDiv>
        <Header data={listaSorteios} />
        <Container>
          <Routes>
            <Route path="/" element={<Home data={listaSorteios} />} />
            <Route path="/sorteio/:sorteio" element={<Sorteio data={listaSorteios} />} />
            <Route path="/sorteios/" element={<TodosSorteios data={listaSorteios} />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/admin-rifa" element={<Login />} />
            <Route path="/administracao" element={<Administracao />} />

            {/* 404 */}
            <Route path="*" element={<TodosSorteios data={listaSorteios} />} />
          </Routes>
        </Container>
        <Footer></Footer>
      </HomeDiv>
      </>
    )
  }
  return (
    <>
      <Header data={listaSorteios} />
      <div className="Loading-page"><img src="https://acegif.com/wp-content/uploads/loading-4.gif" alt="carregando..." /></div>
    </>
  )
}
