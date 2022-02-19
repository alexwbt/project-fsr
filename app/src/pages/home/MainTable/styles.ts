import { Button as BsButton, FormControl, Table as BsTable } from "react-bootstrap";
import styled from "styled-components";

namespace MainTableStyles {
    export const Title = styled.h4`
        text-align: center;
    `;

    export const Button = styled(BsButton)`
        margin: 5px;
    `;

    export const Action = styled(BsButton)`
        margin: 3px 2px;
        padding: 0 3px;
        font-size: 15px;
    `;

    export const Input = styled(FormControl).attrs({
        size: 'sm'
    })`
        border: none;
        padding: 0;
    `;

    export const Tr = styled.tr<{
        hideInPrint?: boolean;
    }>`
        ${props => props.hideInPrint ? '@media print' : '!'} {
            display: none;
        }
    `;
    export const Td = styled.td<{
        hideInPrint?: boolean;
    }>`
        ${props => props.hideInPrint ? '@media print' : '!'} {
            display: none;
        }
        white-space: nowrap;
    `;
    export const Th = styled.th<{
        hideInPrint?: boolean;
    }>`
        ${props => props.hideInPrint ? '@media print' : '!'} {
            display: none;
        }
        white-space: nowrap;
    `;
    export const TBody = styled.tbody``;
    export const THead = styled.thead``;

    export const SellDateHeader = styled(Th)``;
    export const SellDate = styled(Td)``;

    export const Table = styled(BsTable)`
        text-align: center;
        line-height: 20px;
        font-size: 15px;
        background-color: #efeff0;
        /* border: 1px solid black; */

        ${SellDate}, ${SellDateHeader} {
            border-left: 2px solid black;
        }

        ${THead} {
            ${Th} {
                padding: 3px;
                font-weight: normal;
            }
        }

        ${TBody} {
            ${Td} {
                padding: 0;

                span {
                    display: none;
                    @media print {
                        display: inline;
                    }
                }

                ${Input} {
                    text-align: center;
                    line-height: 20px;
                    background-color: #efeff0;

                    @media print {
                        display: none;
                    }
                }
            }
        }
    `;
}

export default MainTableStyles;
