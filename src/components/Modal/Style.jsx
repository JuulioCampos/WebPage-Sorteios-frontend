import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import { ALLRITE, WAITING } from '../../colors/Colors';

export const SModalBody = styled(Modal.Body)`
    h4 {
        text-align: center;
    }

`

export const SDiv = styled.div`
    line-height: 10px;
    margin-top: 12px;
`

export const SDivSeparator = styled.div`
    &:not(:first-child) {
        border-top: 1px solid #0000001f;
        & h4 {
            margin-top: 15px
        }
    }
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    &.waiting {
        background-color: ${WAITING};

    }
    &.allrite {
        background-color: ${ALLRITE};
    }
    & b{
        font-weight: 600;
    }
`