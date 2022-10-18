import { Row } from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { WHITE } from "../../colors/Colors";
import { Cards } from "../../components/Cards/Index"
import { DicaSorteios } from "../../components/DicaSorteio/Index";
import { Icon } from "../../components/Icons/Index";
import { SH1 } from "./Style"

export const TodosSorteios = (props) => {
    const data = props.data
    return (
        <>
            <SH1>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
                Confira os sorteios que estão rolando
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
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
            <div>
                <DicaSorteios></DicaSorteios>
            </div>
        </>
    )
}