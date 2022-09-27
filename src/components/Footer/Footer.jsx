import { Container, ListGroup } from "react-bootstrap"
import { SFooter, SUl } from "../Style"

export const Footer = (props) => {
    return (
        <SFooter>
            <Container className="top-footer">
                <h4>
                    Nos siga nas redes sociais 
                </h4>
            </Container>
            <Container className="bot-footer">
                <SUl>
                    <ListGroup>
                        <i className="">IN</i>
                    </ListGroup>
                    <ListGroup>
                        <i className="">FC</i>
                    </ListGroup>
                    <ListGroup>
                        <i className="">WP</i>
                    </ListGroup>
                </SUl>
                <span className="text-center">Desenvolvido por 'nome empresa'</span>
            </Container>
        </SFooter>
    )
}