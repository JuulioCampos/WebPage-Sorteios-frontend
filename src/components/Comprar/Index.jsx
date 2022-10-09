import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { DadosUsuarioContext } from "../../providers/DadosUsuario"
import { PageAtualCompraContext } from "../../providers/PageAtualCompra"
import { Api } from "../../services/Api"
import { escondeCpf } from "../../services/Validations"
import { Button } from "../Button/Index"
import { CancelButton } from "./Style"

export const ComprarPage = (props) => {
    const { dadosUsuario } = React.useContext(DadosUsuarioContext)
    const { setPageAtualCompra } = React.useContext(PageAtualCompraContext)
    const [pix, setPix] = useState()
    function Comprar() {
        console.log('passou')
        Api
            .post("/api/cria-pix", {
                data: dadosUsuario
            })
            .then((response) => {
                setPix(response.data)
            })
            .catch((err) => {
                setPix({ erro: 404, messagem: 'not exists' })
            });
    }
    const valor = 'R$ ' + ((parseFloat(dadosUsuario.quantidade) * parseFloat(dadosUsuario.sorteio.valor_cota.replace(',', '.'))).toFixed(2)).replace('.', ',')
    if (pix['qrcode']) {
        console.log()
    }
    return (
        <div>
            <Container>
                <div>
                    <label htmlFor="">Nome</label>
                    <input className="form-control" id={'nome-user'} type="text" value={dadosUsuario.user.nome} disabled />
                    <label htmlFor="cpf-user">CPF</label>
                    <input className="form-control" id={'cpf-user'} type="text" value={escondeCpf(dadosUsuario.user.cpf)} disabled />
                    <label htmlFor="value-to-price">Valor a pagar</label>
                    <input className="form-control" id={'value-to-price'} type="text" value={valor} disabled />
                    <label htmlFor="sorteio_name">Sorteio</label>
                    <input className="form-control" id={'sorteio_name'} type="text" value={dadosUsuario.sorteio.titulo} disabled />
                </div>
                {
                    pix['qrcode'] &&
                    <div>
                        <h4 className="text-center pt-3">QRCODE PIX</h4>
                        <img style={{ width: '350px' }} src={ pix['qrcode']} alt="" srcset="" />
                    </div>
                }

                <hr />
                <Row className="div-comprar">
                    <Col sm={6} xs={6}>
                        <CancelButton onClick={() => setPageAtualCompra(0)} >Voltar</CancelButton>
                    </Col>
                    <Col sm={6} xs={6}>
                        {!pix && <Button onClick={Comprar} >Comprar</Button>}
                        {pix && <Button onClick={Comprar} >Fechar</Button>}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}