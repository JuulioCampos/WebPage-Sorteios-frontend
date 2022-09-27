import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from "react-router-dom"
import Container from "react-bootstrap/esm/Container.js";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Index as Home } from "./pages/Home/Index.jsx";
import { Index as Sorteio } from "./pages/Sorteio/Index.jsx";
import { Index as Sorteios } from "./pages/Sorteios/Index.jsx";
import { Index as Contato } from "./pages/Contato/Index.jsx";
import { useEffect, useState } from "react";
import { Api } from "./services/Api";


export const App = () => {
  
const [listaSorteios, setListaSorteios] = useState();

useEffect(() => {
  if (!listaSorteios) {
    const url = "/api/busca-sorteios";
    Api
      .get(url, {
      })
      .then((response) => setListaSorteios(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }
}, [listaSorteios])

return (
    <>
      <Header data={listaSorteios} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio/:sorteio" element={<Sorteio />} />
          <Route path="/sorteios/" element={<Sorteios data={listaSorteios}/>} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </>
  );
}

