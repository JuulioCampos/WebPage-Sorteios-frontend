import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DARK } from '../../colors/Colors.js';
import { SNavbar } from '../Style.jsx';
import { ModalWindow } from '../Modal/Modal.jsx';
import { Button } from '../Button/Index.jsx';

export const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const btnClose = () => setModalVisible(false);
  const btnShow = () => setModalVisible(true);
  const dataPesquisa = {
    'a': 1,
    'b': 2,
  }
  return (
    <>
      <SNavbar style={{ background: DARK }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">LOGODAEMPRESA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1">Página inicial</Nav.Link>
              <NavDropdown title="Últimos sorteios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Sorteio Moto </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Sorteio Iphone 14</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Finalizados
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Contato</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Seu telefone"
                className="me-2"
                aria-label="Search"
              />
              <Button label="Buscar Números" onClick={btnShow}></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </SNavbar>

      <ModalWindow visible = {modalVisible} btnClose = {btnClose} data = {dataPesquisa}></ModalWindow>
    </>
  );
}