import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Row } from "react-bootstrap"
import { Button } from '../Button/Index.jsx';
import { GREEN, SECOND, WHITE } from "../../colors/Colors.js";

export const SCol = styled(Col)`
    & .bt-adding button {
        font-size: 30px !important;
        line-height: 20px;
        width: 70px !important;
    }
    & label {
        text-align: center;
        display: flex;
        justify-content: center;
        color: ${WHITE};
        
    }
    .input-group {justify-content: center;}
    .input-group .btn:focus {
        z-index: 5;
        width: 125px ;
        background-color: #0c2450 !important; 
        border: 2 px solid ${WHITE}99 !important; 
    }
    & button {
        width: 125px !important;
    }
    button.addB {
        font-size: 18px ;
    }
    button.adding {
        padding: 10px;
    }
    @media (max-width: 768px) {
        & button {
        border-radius: 0;
        
        }
        & input {
            border-radius: 0
        }
    &>div {
        display: flex;
        justify-content: center
    }
    }
`
export const SRow = styled(Row)`
    
    & .borda-topo {
        border-top: 1px solid ${WHITE}fff24;
    }

`
export const SButton = styled(Button)`
`