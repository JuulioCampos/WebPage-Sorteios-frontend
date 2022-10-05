import { Form } from "react-bootstrap"
import { Button } from "../Button/Index"

export const BuscaUsuario = (props) => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Seu telefone"
                className="me-2"
                aria-label="Search"
                onChange={props.onChange}
                value={props.value}
            />
            <div className="search-cotas">
                <Button label="Buscar Cadastro" onClick={props.onClick}>{props.children ?? 'Buscar Cadasro'}</Button>
            </div>
        </Form>
    )
}