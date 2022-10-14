import { InputGroup } from "react-bootstrap";
import styled from "styled-components";
import { WHITE } from "../../colors/Colors";

export const DivForm = styled.div` 

`
export const DivLogin = styled.div`
    width: max-content;
    background: ${WHITE};
    padding: 2.5rem;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 49.7vh;
`

export const CheckBox = styled(InputGroup)`
    display: flex;
    align-items: center;
    padding: 0;
    margin-top: -15px;
    & .input-group-text {
        background-color: inherit !important;
        border: 0;
    }
    & input {
        margin-right: 7px;
    }
`