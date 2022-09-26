import Modal from 'react-bootstrap/Modal';
import { Button } from "../Button/Index";
import { SDiv, SDivSeparator, SModalBody } from './Style';
export const ModalWindow = (props) => {
    console.log(props.data)
    return (
        <Modal show={props.visible} onHide={props.btnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Suas cotas</Modal.Title>
            </Modal.Header>
            <SModalBody>
                <SDivSeparator>
                    <h4><b>Sorteio:</b> Moto CG</h4>
                    <SDiv>
                        <p><b>Nome comprador:</b> Julio Ca******</p>
                        <p><b>Telefone:</b> (19) 99197-8949</p>
                        <p><b>Número cota:</b> 005789, 093351, 911428</p>
                        <p><b>Valor:</b> R$0,98</p>
                    </SDiv>
                </SDivSeparator>
                <SDivSeparator>
                    <h4><b>Sorteio:</b> Iphone 14 PRO MAX</h4>
                    <SDiv>
                        <p><b>Nome comprador:</b> Julio Ca******</p>
                        <p><b>Telefone:</b> (19) 99197-8949</p>
                        <p><b>Número cota:</b> 555510, 000014, 001533</p>
                        <p><b>Valor:</b> R$3,30</p>
                    </SDiv>
                </SDivSeparator>
            </SModalBody>
            <Modal.Footer>
                <Button label="Fechar" onClick={props.btnClose}>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}