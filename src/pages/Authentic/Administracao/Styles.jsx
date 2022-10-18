import styled from "styled-components";
import { GREEN, RED,THIRD,WHITE } from "../../../colors/Colors";

export const DivForm = styled.div` 
    background: ${THIRD};
    padding: 15px;
    margin-top: 10px;
    border-radius: 10px;

    & label {
        font-weight: 500;
    }
    & label.ok {
        background-color: ${GREEN};
        color: ${WHITE}
    }
    & label.notok{
        background-color: ${RED};
        color: ${WHITE}
    }
`
export const DivButton = styled.div`
    
`