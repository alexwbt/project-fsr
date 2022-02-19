import styled from "styled-components";
import { numberWithCommas } from "../../../lib/utils/number";

const S = {
    Red: styled.div`
        color: red;
        font-weight: bold;
    `,
    Green: styled.div`
        color: green;
        font-weight: bold;
    `
};

const Profit: React.FC<{
    value: number;
}> = ({ value }) => {
    if (value > 0) return <S.Green>+{numberWithCommas(value)}</S.Green>;
    else if (value < 0) return <S.Red>{numberWithCommas(value)}</S.Red>;
    return <>0</>;
};

export default Profit;
