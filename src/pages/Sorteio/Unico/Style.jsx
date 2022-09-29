import { Col } from "react-bootstrap";
import styled, { isStyledComponent } from "styled-components";
import { DARK, PRIMARY, SECOND, WHITE } from "../../../colors/Colors";
import { CarouselFade } from "../../../components/Carousel/Index";

export const SDiv = styled.div`
    & h1{color: ${WHITE}; text-shadow: 3px 3px 11px #3127698f;}
    & i {
        font-size: 1.5rem;
        position: relative;
        top: -5px;
        color: ${WHITE} !important;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${PRIMARY};
        text-shadow: 3px 3px 11px #31276984;
    }
    & small{ 
        position: relative;
        top: -15px;
        left: 10px;
        color:${WHITE};
    }
`

export const SSection = styled.section `
    & .carousel {
        & img {border-radius: 10px; border-top-right-radius:0; border-bottom-right-radius: 0};
    }
`
export const DivSeparator = styled.div `
    background-color: red;
    border-radius: 10px;
`
export const DivIntroducao = styled.div `
`

export const SorteioSection = styled.section `
    background-color:  ${SECOND}50;
    padding: 15px;
    margin-top: 15px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 35%);
    -moz-box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 35%);
    box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 35%);
`

export const SCol = styled(Col)`
    background-color: ${DARK};
    border-radius: 10px; 
    border-top-left-radius:0; 
    border-bottom-left-radius: 0
`