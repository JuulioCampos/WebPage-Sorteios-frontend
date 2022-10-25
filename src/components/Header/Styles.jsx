import styled from "styled-components";
import { THIRD } from "../../colors/Colors.js";
import { SNavbar } from "../Style.jsx";

export const Navbar = styled(SNavbar)`
  a {
    color: ${THIRD} !important;
    font-weight: 400;
  }
  @media (max-width: 760px) {
    a.btn-sorteio {
      margin-left: 0px;
    }
  }
`;

export const Input = styled.input`
  width: 180px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: ${THIRD};
`;
export const SearchCotas = styled.div`
  button {
  }
`;
