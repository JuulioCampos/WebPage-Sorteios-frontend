import { Container, ListGroup } from "react-bootstrap"
import { SFooter, SUl } from "../Style"

export const Footer = (props) => {
    return (
        <SFooter className={props.positionFixed}>
            <Container className="top-footer">
                <h4>
                    Nos siga nas redes sociais 
                </h4>
            </Container>
            <Container className={"bot-footer " + (props.positionFixed ?? '')}>
                <SUl className="mt-2">
                    <ListGroup>
                        <i className=" px-1 fa-brands fa-instagram"></i>
                    </ListGroup>
                    <ListGroup>
                        <i className="px-1  fa-brands fa-facebook-f"></i>
                    </ListGroup>
                    <ListGroup>
                        <i className="px-1 fa-brands fa-whatsapp"></i>
                    </ListGroup>
                </SUl>
                <span style={{marginBottom: 0}}className="text-center">Desenvolvido por KobRifas @ 2021</span>
            </Container>
        </SFooter>
    )
}