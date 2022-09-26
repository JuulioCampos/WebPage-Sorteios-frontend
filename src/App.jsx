import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container.js";
import { ModalWindow } from "./components/Modal/Modal.jsx";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Index } from "./pages/Home/Index.jsx";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Index></Index>
        <ModalWindow></ModalWindow>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
