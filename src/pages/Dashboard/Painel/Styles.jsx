import styled from "styled-components";
import {  PRIMARY,SECOND,THIRD,WHITE } from "../../../colors/Colors";

export const DivForm = styled.div` 
    background: ${PRIMARY};
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;

    & label {
        font-weight: 500;
    }
    & label.ok {
        background-color: ${THIRD};
        color: ${WHITE}
    }
    & label.notok{
        background-color: ${SECOND}90 ;
        color: ${WHITE}
    }
`
export const MenuBar = styled.div` 
    display: flex;
    justify-content: center;
    background-color: ${PRIMARY};
    border-radius: 10px;
    margin: 10px 0;
    padding: 10px;
    box-shadow: 0px 3px 23px 5px rgb(0 0 0 / 22%);
    & button {
        width: max-content;
    }
    
`
