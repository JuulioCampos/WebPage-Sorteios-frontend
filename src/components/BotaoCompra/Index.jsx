import { SCol, SRow, SButton } from "./Style"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const BotaoCompra = (props) => {
    return (
        <SRow>
            <SCol col={12} xs={12} sm={12} lg={4}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2"><b>01 &nbsp;</b>COTA</InputGroup.Text>
                    <SButton id="button-addon2" className={"addB"}>
                        Escolher
                    </SButton>
                </InputGroup>
            </SCol>
            <SCol col={12} xs={12} sm={12} lg={4}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2"><b>05 &nbsp;</b>COTAS</InputGroup.Text>
                    <SButton id="button-addon2" className={"addB"}>
                        Escolher
                    </SButton>
                </InputGroup>
            </SCol>
            <SCol col={12} xs={12} sm={12} lg={4}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2"><b>10 &nbsp;</b>COTAS</InputGroup.Text>
                    <SButton id="button-addon2" className={"addB"}>
                        Escolher
                    </SButton>
                </InputGroup>
            </SCol>
            <SCol sm={12} className={"d-flex justify-content-center borda-topo"}>
                <div>
                    <label className="text-center" htmlFor="basic-addon2">Total de cotas</label>
                    <InputGroup className="mb-3 bt-adding">
                        <SButton tamanho={"65px"} variant="outline-secondary" id="button-addon1" className={"addB"}>
                            -
                        </SButton>
                        <InputGroup.Text id="basic-addon2"><b>50 &nbsp;</b>COTAS</InputGroup.Text>
                        <SButton id="button-addon1" className={"addB adding"}>
                            +
                        </SButton>
                    </InputGroup>
                </div>
            </SCol>-.
        </SRow>
    )
}