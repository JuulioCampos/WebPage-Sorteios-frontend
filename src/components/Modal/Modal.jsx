import Modal from 'react-bootstrap/Modal';
import { Button } from "../Button/Index";

import { SDiv, SDivSeparator, SModalBody } from './Style';
export const ModalWindow = (props) => {
    const data = (props.listaCotas)
    return (
        <Modal show={props.visible} onHide={props.btnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Suas cotas</Modal.Title>
            </Modal.Header>
            <SModalBody>
                {
                    data.map((x, y) =>
                        <SDivSeparator key={y}>
                            <h4><b>Sorteio:</b> {x.titulo}</h4>
                            <SDiv>
                                <p><b>Nome comprador:</b> {x.nome}</p>
                                <p><b>Telefone:</b> {x.telefone}</p>
                                <p><b>Cotas adquiridas:</b> {x.cotas.join(' - ') }</p>
                                <p><b>Forma de pagamento:</b> {x.forma_pagamento}</p>
                            </SDiv>
                        </SDivSeparator>)
                }
            </SModalBody>
            <Modal.Footer>
                <Button label="Fechar" onClick={props.btnClose}>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}