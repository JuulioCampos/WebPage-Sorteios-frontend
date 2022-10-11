import { Col } from "react-bootstrap";
import styled from "styled-components";
import { DARK, PRIMARY, RED, SECOND, WHITE } from "../../../colors/Colors";

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

export const SSection = styled.section`
    & .carousel {
        & img {
            border-radius: 10px; 
            border-top-right-radius:0; 
            border-bottom-right-radius: 0;
            @media (max-width: 991px) {
                border-radius: 0; 
                border-top-right-radius:10px; 
                border-top-left-radius:10px;
        }
        };
    }
`
export const DivSeparator = styled.div`
    background-color: ${RED};
    border-radius: 10px;
    border:1px solid white;
`
export const DivIntroducao = styled.div`
    padding: 0 10px;
`

export const SorteioSection = styled.section`
    background-color:  ${SECOND}50;
    padding: 15px;
    margin-top: 15px;
    border-radius: 15px;
    -webkit-box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 35%);
    -moz-box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 35%);
    box-shadow: 0px 10px 25px 9px rgb(0 0 0 / 35%);
`

export const SCol = styled(Col)`
        border-radius: 10px; 
    border-top-left-radius:0; 
    border-bottom-left-radius: 0;
    padding-bottom: 10px;
    @media (max-width: 991px) {
        border-radius: 0px; 
        border-bottom-right-radius:10px; 
        border-bottom-left-radius:10px;
    }
`

export const Anuncio = styled.p`
    color: ${WHITE};
    overflow-y: scroll;
    max-height: 33vw;
    padding: 0px 15px 0 0px;
    margin-top: 20px;
    @media (max-width: 768px) {
        max-height: 50vw; 
    }
    & h4 {
        font-size: 1rem !important;
    }
    & ul li {
        line-height: 15px;
        margin-top: 10px;
        list-style: decimal-leading-zero;
    }
    ::-webkit-scrollbar {
        width: 1em;
        border-radius: 10px;
        padding: 5px 0;
        opacity: 0.3;
    }
    
    ::-webkit-scrollbar-track {
        opacity: 0.3;
        box-shadow: inset 0 0 6px rgba(30, 17, 109, 0.3);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${PRIMARY};
        outline: 1px solid #3746c1;
        opacity: 0.3;
        opacity: 0.3;
        border-radius: 10px;
    }
    ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: ${SECOND}; /* or add it to the track */
    opacity: 0.3;
    border-radius: 10px;
    }
`
export const ReadBefore = styled.div`
    border-top: 1px solid  ${PRIMARY};
    padding-top: 20px;
    max-height: 380px;

    @media (max-width: 1200px) {
        max-height: 270px;
    }
    @media (max-width: 991px) {
        max-height: 103px;
    }
    @media (max-width: 768px) {
        max-height: 203px;
    }
`
export const PremioCota = styled.div`
    display: flex;
    margin-top: 16px;
    justify-content: center;

    & p {
    background-color: white;
    width: max-content;
    color: black;
    padding: 10px;
    border-radius: 10px;
    margin: 0 !important
    }

`

export const Pagamento = styled.div`

color: white
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
            opacity: 0.55;
        }
        10%{
            opacity: 0.85;
        }
        20%{
            opacity: 0.9;
        }
        30%{
            opacity: 0.95;
        }
        40%{
            opacity: 0.97;
        }

        50%{
            opacity: 1;
        }
        60% {
            opacity: .97;
        }
        70%{
            opacity: 0.95;
        }
        80%{
            opacity: 0.9;
        }
        90%{
            opacity: 0.85;
        }
        100%{
            opacity: 0.55;
    }
 }
`