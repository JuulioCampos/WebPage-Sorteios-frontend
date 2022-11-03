import styled from "styled-components";
import {  BLACK, PRIMARY, RED,SECOND,THIRD,WHITE } from "../../../colors/Colors";
import { Button } from "../../Button/Index";

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
export const DivButton = styled.div`
    
`
export const CancelButton = styled(Button)` 

    background-color: ${RED} !important;
    &:hover {
    background-color: ${RED}99 !important;

    }

`

export const InputImageLabel = styled.label`
    color: ${BLACK} !important;
    i {
        color: ${BLACK} !important
    }
    &:hover {
        background-color: ${PRIMARY} !important;
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

export const CardCollapsed = styled.div` 
    border-radius: 10px;
`