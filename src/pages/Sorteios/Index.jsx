import { Row } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Cards } from "../../components/Cards/Index"
import { SH1 } from "./Style"

export const TodosSorteios = (props) => {
    const data = props.data
    return (
        <>
            <SH1>
                Confira os sorteios que estão rolando
            </SH1>
            <Row>
                {
                    data &&
                    data.map((data, key) =>(
                        <Col key={key} className={"d-flex justify-content-center p-3"} xl={4} lg ={4} md={6} sm={12}>
                            <Cards key={key} data={data} > 
                            </Cards>
                        </Col>
                        )
                    )
                }
            </Row>
        </>
    )
}