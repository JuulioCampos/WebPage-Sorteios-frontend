import { Form } from "react-bootstrap"
import { Button } from "../Button/Index"
import { SearchCotas } from "./Styled"

export const BuscaUsuario = (props) => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                style={{height:"42px"}}
                placeholder="Seu telefone"
                className="me-2"
                aria-label="Search"
                onChange={props.onChange}
                value={props.value}
            />
            <SearchCotas className="search-cotas">
                <Button label="Buscar Cadastro" onClick={props.onClick}>{props.children ?? 'Buscar Cadasro'}</Button>
            </SearchCotas>
        </Form>
    )
}