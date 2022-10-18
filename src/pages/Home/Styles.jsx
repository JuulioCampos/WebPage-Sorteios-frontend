import styled from "styled-components";
import { BLACK, SECOND, WHITE } from "../../colors/Colors";
import { BoxShadow } from "../../colors/Styles";

export const SorteioMain = styled.div`
    margin-top: 25px;
    box-pack: inherit;
    background-color: ${SECOND}50;
    border-radius: 10px;
    padding: 15px;
    box-shadow: ${BoxShadow};
    & div.title {
        margin-bottom: 5px;
        align-self: center;
        margin: auto;
        & i {
            display: flex;
            padding-right: 10px;
            font-size: 1.6rem;
            padding-top: 5px
        }
    }
`

export const CarouselDiv = styled.div`
   & img {
    border-radius: 10px;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
   }

`

export const DadosSorteio = styled.div` 
    color: ${WHITE};
    & h4 {
        font-size: 1.2rem;
        b {
            font-size: 1.5rem;
            color: ${BLACK}
        }
    }
`