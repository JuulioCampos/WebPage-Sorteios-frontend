import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import { WHITE, PRIMARY, SECOND} from "../../colors/Colors";

export const SButton = styled(Button)`
    background-color: ${PRIMARY};
    color: ${WHITE} !important;
    width: 250px;
    border: 1px solid ${SECOND};
    transition: .5s ease-in-out;
    -webkit-box-shadow: 0px 5px 25px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 25px -7px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 25px -7px rgba(0,0,0,0.75);
    &:hover {
        border: 1px solid ${PRIMARY} !important;
        background: ${SECOND} !important;
      }
`;