import { SCol, SRow, SButton, DivComprar } from "./Style"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";
import { Button } from "../Button/Index";

export const BotaoCompra = (props) => {
    const [qtdCotas, setQtdCotas] = useState(0)

    if (qtdCotas > 500) {
        setQtdCotas(500)
        alert('Você adicionou a quantidade máxima de cotas!')
    }
    if (qtdCotas < 0) {
        setQtdCotas(0)
        alert('Quantidade de cotas já está zerado!')
    }
    const numClickHandler = (Event, valor, tipo) => { 
        if (valor > 0 && tipo == '+') {
            setQtdCotas(qtdCotas + valor)
        }
        if (valor > 0 && tipo == '-') {
            setQtdCotas((qtdCotas - valor))
        }
        if (qtdCotas <= 0 && tipo == '-') {
            setQtdCotas(0)
            alert('você já zerou a quantidade de cotas')
        }
        if (qtdCotas > 499 && tipo == '+') {
            setQtdCotas(500)
            alert('Você só poderá comprar até 500 cotas por vez')
        }
    }

    return (
        <SRow>
            <SCol sm={12} className={"d-flex justify-content-center borda-topo"}>
                <div style={{display: 'block'}}>
                    <label className="text-center my-2" htmlFor="cotas">Total de cotas</label>
                    <InputGroup className="mb-3 bt-adding">
                        <SButton onClick={() => numClickHandler(EventTarget, 1, '-')} tamanho={"65px"} variant="outline-secondary" id="button-addon1" className={""}>
                            -
                        </SButton>
                        <input id="cotas" type={'number'} onChange={(e)=> setQtdCotas(parseInt(e.target.value))} value={qtdCotas} className="form-control" />
                        <InputGroup.Text id="cotas-span">COTAS</InputGroup.Text>
                        <SButton onClick={() => numClickHandler(EventTarget, 1, '+')} id="button-addon1" className={" adding"}>
                            +
                        </SButton>
                    </InputGroup>
                </div>
            </SCol>

            <SCol>
                <DivComprar>
                    <Button className="neon-effect">Comprar {qtdCotas} Cotas</Button>
                </DivComprar>
            </SCol>
        </SRow>
    )
}