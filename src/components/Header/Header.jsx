import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { THIRD } from '../../colors/Colors.js';
import { SNavbar } from '../Style.jsx';
import { ModalWindow } from '../Modal/Modal.jsx';
import { Button } from '../Button/Index.jsx';
import { Link } from 'react-router-dom';
import { maskTelefone, unmaskTelefone } from '../../services/Validations.js';
import { BuscaCotas } from '../../services/Requests/BuscaCotas.js';

export const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [telefone, setTelefone] = useState('')
  const [listaCotas, setListaCotas] = useState();
  const [isOpen, setIsOpen] = useState();
  const data = props.data

  const getCotas = () => {
    BuscaCotas(unmaskTelefone(telefone))
      .then(
        (response) => {
          // eslint-disable-next-line 
          if (response.status == 200) {
            setListaCotas(response.data)
            setModalVisible(true)
            setIsOpen(true)
          }
          else {
            alert('tivemos um erro por aqui, tente novamente!')
          }
        }
      )
  }
  const btnClose = () => {
    setModalVisible(false)
    setIsOpen(false)
    setListaCotas(null)
  }
  return (
    <>
      <SNavbar style={{ background: THIRD }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">LOGODAEMPRESA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Link className='nav-link' to="/">Página inicial</Link>

              <Link to={'/sorteios'} className="btn-sorteio ">
                Sorteios
                <NavDropdown d="navbarScrollingDropdown">
                  {
                    data &&
                    data.map((x, y) =>
                      <Link key={y} style={{ color: "#533483", fontWeight: "500" }} data-rr-ui-dropdown-item="" className="dropdown-item" tabIndex="0" to={"/sorteio/" + x.id}>
                        {x.titulo}
                      </Link>
                    )
                  }

                  <NavDropdown.Divider />
                  <Link style={{ color: "#89898a", fontWeight: "400" }} data-rr-ui-dropdown-item="" className="dropdown-item" tabIndex="0" to="/sorteio/finalizados">
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
                value={maskTelefone(telefone)}
              />
              <div className="search-cotas">
                <Button label="Buscar Números" onClick={getCotas}>Buscar Números</Button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </SNavbar>

      {isOpen && listaCotas && <ModalWindow visible={modalVisible} btnClose={btnClose} idSorteio={null} telefone={telefone} listaCotas={listaCotas}></ModalWindow>}
    </>
  );
}