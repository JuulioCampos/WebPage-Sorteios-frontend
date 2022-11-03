import { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { createSorteio } from "../../../services/Requests/CriaSorteio";
import { CancelButton, CardCollapsed, DivButton, DivForm, InputImageLabel} from "./Styles";
import { Icon } from "../../Icons/Index";
import { PRIMARY } from "../../../colors/Colors";
import { Button } from "../../Button/Index";

export const CadastroSorteio = (props) => {
  const [dataSorteio, setDataSorteio] = useState({});
  const [tituloSorteio, setTituloSorteio] = useState({});
  const [valorPremio, setValorPremio] = useState({});
  const [compraMin, setCompraMin] = useState({});
  const [valorPromo, setvalorPromo] = useState({});
  const [qtdPromo, setQtdPromo] = useState({});
  const [valorCota, setValorCota] = useState({});
  const [descricao, setDescricao] = useState({});
  const [tipoPremio, setTipoPremio] = useState({});
  const [principal, setPrincipal] = useState({});
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();

  const constroiRequisicao = () => {
    setDataSorteio({
      user_id: localStorage.getItem("id"),
      tituloSorteio,
      valorPremio,
      compraMin,
      valorPromo,
      qtdPromo,
      valorCota,
      descricao,
      tipoPremio,
      principal,
      img1,
      img2,
      img3,
      img4,
    });

    createSorteio(dataSorteio).then((r) => console.log(r.data));
  };
  return (
    <>
      <CardCollapsed className="card card-body">
        <Row className="d-flex justify-content-center">
          <h1 className="text-left text-md-center mt-2 pt-1">
            Cadastro de sorteios
          </h1>
          <Col sm={8}>
            <DivForm className="mb-5 pb-5">
              <Form method="post" encType="multipart/form-data">
                <Row>
                  <Col xs={12} md={8}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nome do sorteio</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          setTituloSorteio(e.target.value);
                        }}
                        type="text"
                        placeholder="Nome sorteio"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>valor prêmio</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          setValorPremio(e.target.value.replace(",", "."));
                        }}
                        type="number"
                        placeholder="R$"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} className={""}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Valor Cota</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          setValorCota(e.target.value.replace(",", "."));
                        }}
                        type="number"
                        placeholder="R$"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Compra miníma</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          setCompraMin(e.target.value);
                        }}
                        type="number"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Valor Promo</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          setvalorPromo(e.target.value.replace(",", "."));
                        }}
                        type="number"
                        placeholder="R$"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Qtd. Promo</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          setQtdPromo(e.target.value);
                        }}
                        type="number"
                        placeholder=""
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Descrição"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="screva uma breve descrição do prêmio"
                        style={{ height: "150px" }}
                        onChange={(e) => {
                          setDescricao(e.target.value);
                        }}
                      />
                    </FloatingLabel>
                  </Col>
                  <br />
                  <Col xs={8} className={"mt-3"}>
                    <Form.Label>Tipo de prêmio</Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setTipoPremio(e.target.value);
                      }}
                    >
                      <option hidden>Escolha aqui</option>
                      <option value={1}>Carro / Moto</option>
                      <option value={2}>Eletrônico</option>
                      <option value={3}>Imóvel</option>
                      <option value={4}>Dinheiro</option>
                    </Form.Select>
                  </Col>
                  <Col xs={4} className={"mt-3"}>
                    <Form.Label>Principal?</Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setPrincipal(e.target.value);
                      }}
                    >
                      <option hidden>Escolha aqui</option>
                      <option value={0}>Não</option>
                      <option value={1}>Sim</option>
                    </Form.Select>
                  </Col>
                  <Form.Group
                    controlId="formFileMultiple"
                    className="mb-3 mt-3"
                  >
                    <hr />
                    <Form.Label>Adicione imagens ao Sorteio:</Form.Label>
                    <Row>
                      <Col xs={3} className={"mt-3"}>
                        <InputImageLabel
                          className={
                            (img1 ? "ok " : "notok ") +
                            "text-center form-control btn border"
                          }
                        >
                          Add&nbsp;
                          <Icon
                            color={PRIMARY}
                            iconName={"fa-solid fa-upload"}
                          ></Icon>
                          <input
                            hidden
                            type="file"
                            className="form-control col-3"
                            onChange={(e) => {
                              setImg1(e.target.files[0]);
                            }}
                          />
                        </InputImageLabel>
                      </Col>
                      <Col xs={3} className={"mt-3"}>
                        <InputImageLabel
                          className={
                            (img2 ? "ok " : "notok ") +
                            "text-center form-control btn border"
                          }
                        >
                          Add&nbsp;
                          <Icon
                            color={PRIMARY}
                            iconName={"fa-solid fa-upload"}
                          ></Icon>
                          <input
                            hidden
                            type="file"
                            className="form-control col-3"
                            onChange={(e) => {
                              setImg2(e.target.files[0]);
                            }}
                          />
                        </InputImageLabel>
                      </Col>
                      <Col xs={3} className={"mt-3"}>
                        <InputImageLabel
                          className={
                            (img3 ? "ok " : "notok ") +
                            "text-center form-control btn border"
                          }
                        >
                          Add&nbsp;
                          <Icon
                            color={PRIMARY}
                            iconName={"fa-solid fa-upload"}
                          ></Icon>
                          <input
                            hidden
                            type="file"
                            className="form-control col-3"
                            onChange={(e) => {
                              setImg3(e.target.files[0]);
                            }}
                          />
                        </InputImageLabel>
                      </Col>
                      <Col xs={3} className={"mt-3"}>
                        <InputImageLabel
                          className={
                            (img4 ? "ok " : "notok ") +
                            "text-center form-control btn border"
                          }
                        >
                          Add &nbsp;
                          <Icon
                            color={PRIMARY}
                            iconName={"fa-solid fa-upload"}
                          ></Icon>
                          <input
                            hidden
                            type="file"
                            className="form-control col-3"
                            onChange={(e) => {
                              setImg4(e.target.files[0]);
                            }}
                          />
                        </InputImageLabel>
                      </Col>
                    </Row>
                  </Form.Group>
                  <hr className="mt-3 pt-2 mb-0 pb-0"></hr>
                  <DivButton className="text-center d-lg-flex">
                    <Col xs={12} lg={6} className={"mt-3"}>
                      <CancelButton>Cancelar</CancelButton>
                    </Col>
                    <Col xs={12} lg={6} className={"mt-3"}>
                      <Button onClick={constroiRequisicao}>
                        Criar Sorteio
                      </Button>
                    </Col>
                  </DivButton>
                </Row>
              </Form>
            </DivForm>
          </Col>
        </Row>
      </CardCollapsed>
    </>
  );
};
