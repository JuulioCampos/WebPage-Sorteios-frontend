import Modal from 'react-bootstrap/Modal';
import { maskTelefone } from '../../services/Validations';
import { Button } from "../Button/Index";

import { SDiv, SDivSeparator, SModalBody } from './Style';
export const ModalWindow = (props) => {
    const data = (props.listaCotas)
    return (
        <Modal show={props.visible} onHide={props.btnClose}  animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Suas cotas</Modal.Title>
            </Modal.Header>
            <SModalBody>
                {
                    data.map((x, y) =>
                        <SDivSeparator key={y} className={x.status !== 'pago' ? 'waiting' : 'allrite' }>
                            <h4><b>Sorteio:</b> {x.sorteio.titulo}</h4>
                            <SDiv>
                                <p><b>Nome comprador:</b> {x.usuario.nome}</p>
                                <p><b>Telefone:</b> {maskTelefone(x.usuario.telefone)}</p>
                                <p><b>{x.status !== 'pago' ? 'Cotas reservadas: ': 'Cotas compradas'}</b><div style={
                                                                        {
                                                                            overflowWrap: 'anywhere', 
                                                                            lineHeight: 'normal',
                                                                            maxHeight: '300px',
                                                                            overflow: 'auto'
                                                                        }
                                                                        }>{x.cotas_compradas}</div>   </p>
                                <p><b>Forma de pagamento:</b> {'PIX'}</p>
                                <p><b>Status: </b>{x.status !== 'pago' ? 'Não pago': 'Pago'}</p>
                                <p><b>{x.status !== 'pago' ? '': 'Comprovante: '}</b>{x.status !== 'pago' ? <a href={x.url_pagamento} target='_blank'> Clique aqui para pagar</a> : <a href={x.url_pagamento} target='_blank'> Clique aqui</a>}</p>
                            </SDiv>
                        </SDivSeparator>)
                }
            </SModalBody>
            <Modal.Footer>
                <Button label="Fechar" onClick={props.btnClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}