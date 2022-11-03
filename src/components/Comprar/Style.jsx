import styled from "styled-components";
import { THIRD, RED, WHITE } from "../../colors/Colors";
import { Button } from "../Button/Index";

export const CancelButton = styled(Button)`
  background-color: ${RED} !important;
  border: 1px solid ${THIRD} !important;
  :hover {
    background-color: ${WHITE} !important;
    border: 1px solid ${RED} !important;
    color: ${RED} !important;
  }
`;
export const QrCode = styled.div`
  text-align: -webkit-center;
`;
export const Pre = styled.pre`
  margin-top: -15px;
  white-space: pre-wrap;
  flex-wrap: wrap;
  width: 100%;
  height: 70px;
  word-break: break-word;
  background: #e9e9e9;
  border-radius: 10px;
`;
