import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalComponent = (props) => {

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={props.estado} onHide={props.modalClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {props.modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.modalClose} variant="danger">Desistir</Button>
                    {props.modalFooter || ''}
                </Modal.Footer>
            </Modal>
        </>
    );
}