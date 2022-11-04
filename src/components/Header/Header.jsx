import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PRIMARY } from "../../colors/Colors.js";
import { Input, Navbar, SearchCotas } from "./Styles";
import { ModalWindow } from "../Modal/Modal.jsx";
import { Button } from "../Button/Index.jsx";
import { Link } from "react-router-dom";
import { maskTelefone, unmaskTelefone } from "../../services/Validations.js";
import { BuscaCotas } from "../../services/Requests/BuscaCotas.js";
import Swal from "sweetalert2";
import { BoxShadow } from "../../colors/Styles.js";

export const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [listaCotas, setListaCotas] = useState();
  const [isOpen, setIsOpen] = useState();
  const data = props.data;

  const getCotas = () => {
    if (telefone.length > 10) {
      let timerInterval
      Swal.fire({
        title: "Aguarde",
        html: "Estamos buscando suas compras!",
        timer: 100000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }
      });
      BuscaCotas(unmaskTelefone(telefone))
        .then((response) => {
          // eslint-disable-next-line
          if (response.status == 200) {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Compras encontradas!'
            })
            setListaCotas(response.data);
            setModalVisible(true);
            setIsOpen(true);
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Olha, não encontramos nenhuma conta :(",
            });
          }
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Aparentemente você não comprou números. Se isso estiver errado, entre em contato com o suporte!",
          });
        });
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você precisa digitar um telefone antes!",
      });
    }
  };
  const btnClose = () => {
    setModalVisible(false);
    setIsOpen(false);
    setListaCotas(null);
  };
  return (
    <>
      <Navbar style={{ background: PRIMARY, position: 'fixed', zIndex: 99, width: '100%', top: '0', boxShadow: BoxShadow + 20 }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand  className="pt-0 pb-0 pr-3 mr-3" href="/"><img className={'mr-2 pr-5'} width={60} src={'/logo.png'} alt="FS" srcset="/logo.png" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Link className="nav-link" to="/">
                Página inicial
              </Link>

              <Link to={"/sorteios"} className="btn-sorteio ">
                Sorteios
                <NavDropdown style={{padding: "0 5px",position: 'relative', top: '1px'}} d="navbarScrollingDropdown">
                  {data &&
                    data.map((x, y) => (
                      <Link
                        key={y}
                        style={{ color: "#533483", fontWeight: "500" }}
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        tabIndex="0"
                        to={"/sorteio/" + x.id}
                      >
                        {x.titulo}
                      </Link>
                    ))}

                  <NavDropdown.Divider />
                  <Link
                    style={{ color: "#89898a", fontWeight: "400" }}
                    data-rr-ui-dropdown-item=""
                    className="dropdown-item"
                    tabIndex="0"
                    to="/sorteio/finalizados"
                  >
                    Finalizados
                  </Link>
                </NavDropdown>
              </Link>
              <Link className="nav-link" to={"/contato"}>
                Contato
              </Link>
            </Nav>
            <Form className="d-flex">
              <Input
                type="search"
                placeholder="Seu telefone"
                className="form-control"
                aria-label="Search"
                onChange={(e) => setTelefone(e.target.value)}
                value={maskTelefone(telefone)}
              />
              <SearchCotas className="search-cotas">
                <Button label="Buscar Números" onClick={getCotas}>
                  Buscar Números
                </Button>
              </SearchCotas>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isOpen && listaCotas && (
        <ModalWindow
          visible={modalVisible}
          btnClose={btnClose}
          idSorteio={null}
          telefone={telefone}
          listaCotas={listaCotas}
        ></ModalWindow>
      )}
    </>
  );
};
