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
import { Link } from 'react-router-dom';
import { Api } from '../../services/Api.js';
import Fade from 'react-bootstrap/Fade'

export const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [telefone, setTelefone] = useState('')
  const [listaCotas, setListaCotas] = useState();
  const [isOpen, setIsOpen] = useState();
  const [dropdownOpen, setDropdownOpen] = useState();

  const data = props.data
  const showDropdown = (e) => {
    setDropdownOpen(!dropdownOpen);
  }
  const hideDropdown = e => {
    setDropdownOpen(false);
  }
  const getCotas = () => {
    if (telefone.length > 10 && telefone.length < 13 && listaCotas == null) {

      const url = "/api/busca-cotas/" + telefone;
      Api
        .get(url, {
          // put the rest of your config here
        })
        .then((response) => setListaCotas(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
    setModalVisible(true)
    setIsOpen(true)
  }
  const btnClose = () => {
    setModalVisible(false)
    setIsOpen(false)
    setListaCotas(null)
  }
  return (
    <>
      <SNavbar style={{ background: DARK }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">LOGODAEMPRESA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Link  className='nav-link' to="/">Página inicial</Link>
              
              <Link to={'/sorteios'} className="btn-sorteio ">
                Sorteios
                <NavDropdown show={dropdownOpen} d="navbarScrollingDropdown">
                  {
                  data &&
                    data.map((x, y) =>
                      <Link style={{ color: "#533483", fontWeight: "500" }} data-rr-ui-dropdown-item="" className="dropdown-item" tabindex="0" key={y} to={"/sorteio/" + x.id}>
                          {x.titulo}
                      </Link>
                    )
                  }

                  <NavDropdown.Divider />
                  <Link style={{ color: "#89898a", fontWeight: "400" }} data-rr-ui-dropdown-item="" className="dropdown-item" tabindex="0" to="/sorteio/finalizados">
                      Finalizados
                  </Link>
              </NavDropdown>
              </Link>
              <Link className='nav-link' to={'/contato'}>Contato</Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Seu telefone"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
              />
              <Button label="Buscar Números" onClick={getCotas}></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </SNavbar>

      {isOpen && listaCotas && <ModalWindow visible={modalVisible} btnClose={btnClose} idSorteio={null} telefone={telefone} listaCotas={listaCotas}></ModalWindow>}
    </>
  );
}