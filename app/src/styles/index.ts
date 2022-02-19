import styled from "styled-components";

namespace CommonStyles {

    export const HideInPrint = styled.div`
        @media print {
            display: none;
        }
    `;

}

export default CommonStyles;
