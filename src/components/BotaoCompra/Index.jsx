import { SCol, SButton } from "./Style"
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";
import { countCotasContext } from "../../providers/CountCotas";

export const BotaoCompra = (props) => {
    const {contaCotas, setContaCotas} = React.useContext(countCotasContext)

    if (contaCotas > 500) {
        setContaCotas(500)
        alert('Limite máximo de reserva é 500!')
    }
    if (contaCotas < 0) {
        setContaCotas(0)
        alert('Quantidade de cotas já está zerado!')
    }
    const numClickHandler = (Event, valor, tipo) => { 
        // eslint-disable-next-line
        if (valor > 0 && tipo == '+') {
            setContaCotas(contaCotas + valor)
        }
        // eslint-disable-next-line
        if (valor > 0 && tipo == '-') {
            setContaCotas((contaCotas - valor))
        }
        // eslint-disable-next-line
        if (contaCotas <= 0 && tipo == '-') {
            setContaCotas(0)
            alert('você já zerou a quantidade de cotas')
        }
        // eslint-disable-next-line
        if (contaCotas > 499 && tipo == '+') {
            setContaCotas(500)
            alert('Você só poderá comprar até 500 cotas por vez')
        }
    }

    return (
            <SCol sm={12} className={"d-flex justify-content-center "}>
                <div style={{display: 'block'}}>
                    <label className="text-center my-2" htmlFor="cotas">Total de cotas</label>
                    <InputGroup className="mb-3 bt-adding">
                        <SButton onClick={() => numClickHandler(EventTarget, 1, '-')} tamanho={"65px"} variant="outline-secondary" id="button-addon1" className={""}>
                            -
                        </SButton>
                        <input id="cotas" type={'number'} onChange={(e)=> setContaCotas(parseInt(e.target.value))} value={contaCotas} className="form-control" />
                        <InputGroup.Text id="cotas-span">COTAS</InputGroup.Text>
                        <SButton onClick={() => numClickHandler(EventTarget, 1, '+')} id="button-addon1" className={" adding"}>
                            +
                        </SButton>
                    </InputGroup>
                </div>
            </SCol>
    )
}