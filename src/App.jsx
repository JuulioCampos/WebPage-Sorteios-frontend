import { Index } from "./components/pages/Index.jsx";
import { Header } from "./components/pages/Header.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container.js";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Index></Index>
      </Container>
    </>
  );
}

export default App;
