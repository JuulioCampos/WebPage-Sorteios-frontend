import { Col } from "react-bootstrap";
import styled from "styled-components";
import { THIRD, SECOND, WHITE} from "../../colors/Colors";
import { BoxShadow } from "../../colors/Styles";

export const DivMain = styled.div` 

    background-color: ${SECOND}50;
    border-radius: 10px;
    padding: 25px 20px;
    margin-top: 30px;
    box-shadow: ${BoxShadow};
`

export const ColDicas = styled(Col)`
    margin: 0;
    padding: 2px;
    & div {
    margin: 2px 2px;
    
    background-color: ${THIRD}; 
    border-radius: 10px;
    color: ${WHITE};
    padding: 10px 10px;

    }
    
`
export const DivTitleDicas = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    & h4 {
        font-size: 1.2rem;
    }
    & i {
        padding: 0 5px;
    }
`