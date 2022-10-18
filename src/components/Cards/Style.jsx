import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import { THIRD, GREEN, PRIMARY, WHITE } from "../../colors/Colors";

export const SCard = styled(Card)`
    & .progress-bar {
        background-color: ${GREEN};
        border: transparent;
    }
    & .progress {
        background-color: ${WHITE}10;
    }
    background-color: ${PRIMARY};
    color: ${WHITE};
    -webkit-box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 53%);
    -moz-box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 53%);
    box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 53%);
`
export const Span = styled.span`
    font-size: .7rem;
    position: relative;
    top: 0px;
    display: flex;
    justify-content: center;
`
export const Sdiv = styled.div ` 
    display: inline;
    line-height: 5px;
    width: 100%;
`
export const Cota = styled.div ` 
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    background: ${WHITE};
    color: ${PRIMARY};
    padding: 14px 20px 1px 20px;
    border-radius: 20px;
    border: 1px solid ${THIRD};
    position: relative;
    top: -35px;
    justify-content: center;
    display: flex;
    text-align: center;
    left: 15%;
    right: 50%;
    & p {
        line-height: 4px;
        text-align: center;
    }
`
