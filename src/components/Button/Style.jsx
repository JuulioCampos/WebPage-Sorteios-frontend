import {Button } from 'react-bootstrap';
import styled from "styled-components";
import { WHITE, THIRD, SECOND} from "../../colors/Colors";

export const SButton = styled(Button)`
    background-color: ${THIRD} !important;
    color: ${WHITE} !important;
    width: 250px;
    padding: .5rem;
    border: 1px solid ${SECOND} !important;
    transition: .5s ease-in-out;
    -webkit-box-shadow: 0px 5px 25px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 25px -7px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 25px -7px rgba(0,0,0,0.75);
    &:hover {
        border: 1px solid ${THIRD} !important;
        background: ${SECOND} !important;
        -webkit-box-shadow: 0px 8px 25px -7px rgba(0,0,0,1);
        -moz-box-shadow: 0px 8px 25px -7px rgba(0,0,0,1);
        box-shadow: 0px 8px 25px -7px rgba(0,0,0,1);
      }
`;