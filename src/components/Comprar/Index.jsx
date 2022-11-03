import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Swal from "sweetalert2"
import { DadosUsuarioContext } from "../../providers/DadosUsuario"
import { PageAtualCompraContext } from "../../providers/PageAtualCompra"
import { Api } from "../../services/Api"
import { Button } from "../Button/Index"
import { CancelButton, Pre, QrCode } from "./Style"

export const ComprarPage = (props) => {
    const { dadosUsuario } = React.useContext(DadosUsuarioContext)
    const { setPageAtualCompra } = React.useContext(PageAtualCompraContext)
    const [pix, setPix] = useState()
    function Comprar() {
        Api
            .post("/api/cria-pix", {
                data: dadosUsuario
            })
            .then((response) => {
                 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Obaa! \n Sua compra foi concluída, só pagar o QR e aguardar seu prêmio!',
                showConfirmButton: false,
                timer: 3500
            })
                setPix(response.data)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Não conseguimos realizar sua compra no momento. Tente novamente: EPC-01',
                  })
                setPix({ erro: 404, messagem: 'not exists' })
            });
    }
    const valor = 'R$ ' + ((parseFloat(dadosUsuario.quantidade) * parseFloat(dadosUsuario.sorteio.valor_cota.replace(',', '.'))).toFixed(2)).replace('.', ',')
    return (
        <div>
            <Container>
                <div>
                    <label htmlFor="">Nome</label>
                    <input className="form-control" id={'nome-user'} type="text" value={dadosUsuario.user.nome} disabled />
                    <label htmlFor="cpf-user">CPF</label>
                    <input className="form-control" id={'cpf-user'} type="text" value={dadosUsuario.user.cpf} disabled />
                    <label htmlFor="value-to-price">Valor a pagar</label>
                    <input className="form-control" id={'value-to-price'} type="text" value={valor} disabled />
                    <label htmlFor="sorteio_name">Sorteio</label>
                    <input className="form-control" id={'sorteio_name'} type="text" value={dadosUsuario.sorteio.titulo} disabled />
                </div>
                {
                    pix &&
                    pix.qrcode && 
                    <QrCode>
                        <h4 className="text-center pt-3">QRCODE PIX</h4>
                        <img style={{ width: '350px' }} src={ pix['qrcode']} alt="" srcset="" />
                        <p>Copie aqui</p>
                        <Pre>
                            {pix['codigo_pix']}
                        </Pre>
                    </QrCode>
                }

                <hr />
                <Row className="div-comprar">
                    <Col className={"d-flex justify-content-start"}  sm={6} xs={6}>
                        <CancelButton onClick={() => setPageAtualCompra(0)} >Trocar telefone</CancelButton>
                    </Col>
                    <Col className={"d-flex justify-content-end"}  sm={6} xs={6}>
                        {!pix && <Button  onClick={Comprar} >Pagar Agora!</Button>}
                        {pix && pix.qrcode && <Button onClick={props.modalClose} >Fechar</Button>}
                    </Col>
                </Row>
            </Container>
        </div>

    )
}