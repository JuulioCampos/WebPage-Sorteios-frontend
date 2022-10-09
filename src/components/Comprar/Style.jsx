import styled from "styled-components";
import { PRIMARY, RED, WHITE } from "../../colors/Colors";
import { Button } from "../Button/Index";

export const CancelButton = styled(Button)`
    background-color: ${RED} !important;
    border: 1px solid ${PRIMARY} !important;
    :hover {
        background-color: ${WHITE} !important;
        border: 1px solid ${RED} !important;
        color: ${RED} !important;
    }
`