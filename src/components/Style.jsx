import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { DARK, WHITE } from "../colors/Colors";

export const SDiv = styled.div`
  h1 {
    margin: 0 auto;
    position: relative;
    margin-top: 15% !important;
    margin-bottom: 20px;
  }
`;
export const SNavbar = styled(Navbar)`
  padding: 20px;
`;

export const SFooter = styled.footer`
    background-color: ${DARK} !important;
    position: relative;
    bottom: 0 !important;
    width: 100%;
  .top-footer{
    padding: 10px;
    margin-top: 20px;
    padding-bottom: 0;
    border-bottom: 1px solid ${WHITE}3;
    width: 100%
  }
  h4 {
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    text-align: center !important;
    display: flex;
    justify-content: center;
    font-size: .8rem;
    padding-top: -15px;
    color: ${WHITE}3;
    margin-bottom: 5px;
  }
`

export const SUl = styled.ul` 
  display: flex;
  justify-content: center;
  & div {
    padding: 0 3px;
    font-size: 1.3rem;
    text-align: center;
  }
`