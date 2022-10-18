import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Row } from "react-bootstrap"
import { Button } from '../Button/Index.jsx';
import { SECOND, WHITE } from "../../colors/Colors.js";

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
    & #cotas-span {
        padding-left: 2px !important;
        font-weight: 600 !important;
        color: ${SECOND}
    }
    span#cotas-span {
        padding-left: 0;
    }
    & input {
        width: 60px!important;
        font-weight: bold !important;
        background-color: #e8ebee !important;
        border: 1px solid #d5d5d5;
        border-left: 0;
        text-align: center;
        padding-right: 0 !important;
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

export const DivComprar = styled.div`
    display: flex;
    justify-content: center;
    & button {
        animation: animate 1s linear infinite;
        width: max-content !important;
        font-size: 1.4rem;
        padding: 10px;
    }
    @keyframes animate{
        0%{
            opacity: 0.15;
        }
        10%{
            opacity: 0.25;
        }
        20%{
            opacity: 0.7;
        }
        30%{
            opacity: 0.85;
        }
        40%{
            opacity: 0.96;
        }

        50%{
            opacity: 1;
        }
        60% {
            opacity: .96;
        }
        70%{
            opacity: 0.85;
        }
        80%{
            opacity: 0.75;
        }
        90%{
            opacity: 0.25;
        }
        100%{
            opacity: 0.15;
    }
 }
`