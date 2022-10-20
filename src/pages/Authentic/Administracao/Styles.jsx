import styled from "styled-components";
import {  BLACK, PRIMARY, RED,SECOND,THIRD,WHITE } from "../../../colors/Colors";
import { Button } from "../../../components/Button/Index";

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