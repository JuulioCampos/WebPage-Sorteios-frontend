import styled from "styled-components";
import { BACKGROUNDHOME, SECOND, THIRD } from "./Colors";

export const HomeDiv = styled.div` 
    background: ${BACKGROUNDHOME};
    & h1, h2, h3, p, span, small, h4, h5, i, label,.h5  {
        color: ${THIRD}
    }
    & input {
        border: 1px solid #d5d5d5;
        &#cotas {
            text-align: end;
            border-right: 0;
            color: ${SECOND}

        }
    }
    & .navbar-toggler {
        background-color: ${THIRD}; 

    }
    & .navbar-toggler.collapsed {
        background-color: ${BACKGROUNDHOME};

    }
`