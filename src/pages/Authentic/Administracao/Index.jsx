import React, { useEffect, useState } from "react"
import { TokenContext } from "../../../providers/Token"
import { ValidaToken } from "../../../services/Requests/ValidaToken";
import { useNavigate } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import { DivButton, DivForm } from "./Styles";
import { WHITE } from "../../../colors/Colors";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button } from "../../../components/Button/Index";
import { createSorteio } from "../../../services/Requests/CriaSorteio";


export const Administracao = () => {
    const { token, setToken } = React.useContext(TokenContext)
    const navigate = useNavigate();
    const [dataSorteio, setDataSorteio] = useState({})
    const [tituloSorteio, setTituloSorteio] = useState({})
    const [valorPremio, setValorPremio] = useState({})
    const [compraMin, setCompraMin] = useState({})
    const [valorPromo, setvalorPromo] = useState({})
    const [qtdPromo, setQtdPromo] = useState({})
    const [valorCota, setValorCota] = useState({})
    const [descricao, setDescricao] = useState({})
    const [tipoPremio, setTipoPremio] = useState({})
    const [principal, setPrincipal] = useState({})
    const [imagens, setImagens] = useState()

    useEffect(() => {
        if (!token) {
            localStorage.setItem('token', JSON.stringify(''))
        }

        ValidaToken(token).then(r => {
            if (!(r.status == 200)) {
                setToken(undefined)
                localStorage.setItem('token', JSON.stringify(undefined));
            }
        }).catch(e => {
            localStorage.setItem('token', JSON.stringify(undefined));
            setToken(undefined)
        })
    }, [])

    if (!token || token == '') {
        navigate('/')
        return
    }

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
            imagens
        })
        createSorteio(dataSorteio).then(r => console.log(r.data))
        console.log(dataSorteio)

    }
    return (
        <Row className="d-flex justify-content-center">
            <h1 className="text-left text-md-center mt-2 pt-1" style={{ color: WHITE }}>Cadastro de sorteios</h1>
            <Col sm={8}>
                <DivForm className="mb-5 pb-5">
                    <Form method="post" enctype="multipart/form-data">
                        <Row>
                            <Col xs={12} md={8}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nome do sorteio</Form.Label>
                                    <Form.Control onChange={(e) => { setTituloSorteio(e.target.value) }} type="text" placeholder="Nome sorteio" />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>valor prêmio</Form.Label>
                                    <Form.Control onChange={(e) => { setValorPremio(e.target.value.replace(',', '.')) }} type="number" placeholder="R$" />
                                </Form.Group>
                            </Col>
                            <Col xs={6} className={''}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Valor Cota</Form.Label>
                                    <Form.Control onChange={(e) => { setValorCota(e.target.value.replace(',', '.')) }} type="number" placeholder="R$" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Compra miníma</Form.Label>
                                    <Form.Control onChange={(e) => { setCompraMin(e.target.value) }} type="number" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Valor Promo</Form.Label>
                                    <Form.Control onChange={(e) => { setvalorPromo(e.target.value.replace(',', '.')) }} type="number" placeholder="R$" />
                                </Form.Group>
                            </Col>
                            <Col xs={6} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Qtd. Promo</Form.Label>
                                    <Form.Control onChange={(e) => { setQtdPromo(e.target.value) }} type="number" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                <FloatingLabel controlId="floatingTextarea2" label="Descrição">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="screva uma breve descrição do prêmio"
                                        style={{ height: '150px' }}
                                        onChange={(e) => { setDescricao(e.target.value) }}
                                    />
                                </FloatingLabel>
                            </Col>
                            <br />
                            <Col xs={8} className={'mt-3'}>
                                <Form.Label>Tipo de prêmio</Form.Label>
                                <Form.Select onChange={(e) => { setTipoPremio(e.target.value) }} >
                                    <option hidden>Escolha aqui</option>
                                    <option value={1}>Carro / Moto</option>
                                    <option value={2}>Eletrônico</option>
                                    <option value={3}>Imóvel</option>
                                    <option value={4}>Dinheiro</option>

                                </Form.Select>
                            </Col>
                            <Col xs={4} className={'mt-3'}>
                                <Form.Label>Principal?</Form.Label>
                                <Form.Select onChange={(e) => { setPrincipal(e.target.value) }} >
                                    <option hidden>Escolha aqui</option>
                                    <option value={0}>Não</option>
                                    <option value={1}>Sim</option>
                                </Form.Select>
                            </Col>
                            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
                                <hr />
                                <Form.Label>Adicione imagens ao Sorteio:</Form.Label>
                                <Form.Control onChange={(e) => { setImagens(e.target.files) }} type="file" multiple />
                            </Form.Group>
                            <hr className="mt-3 pt-2 mb-0 pb-0"></hr>
                            <DivButton className="text-center">
                                <Col xs={12} lg={6} className={'mt-3'}>
                                    <Button>Cancelar</Button>
                                </Col>
                                <Col xs={12} lg={6} className={'mt-3'}>
                                    <Button onClick={constroiRequisicao}>Criar Sorteio</Button>
                                </Col>
                            </DivButton>
                        </Row>
                    </Form>
                </DivForm>

            </Col>
        </Row>
    )

}