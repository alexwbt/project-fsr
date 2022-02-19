
import { ItemData, ItemType, TurnData } from "../../../types/lib/mainTableData";
import TurnRow from "./TurnRow";
import S from "./styles";
import Profit from "./Profit";

const TurnSection: React.FC<{
    index: number;
    data: TurnData;
    setData: (
        turnIndex: number,
        itemType: ItemType,
        itemIndex: number,
        data: ItemData
    ) => void;
}> = ({ index, data, setData: setData_ }) => {

    const setData = (itemType: ItemType, itemIndex: number, data: ItemData) =>
        setData_(index, itemType, itemIndex, data);

    const length = Math.max(data.buys.length, data.sells.length);
    const buySum = data.buys.reduce((output, item) => output + (+item.total || 0), 0);
    const sellSum = data.sells.reduce((output, item) => output + (+item.total || 0), 0);
    return <>
        {[...Array(length)].map((_, i) => <TurnRow
            key={`${data.stockName}-row-${i}`}
            index={i}
            stockName={data.stockName[i] || ''}
            buy={data.buys[i]}
            sell={data.sells[i]}
            setData={setData}
        />)}

        <S.Tr>
            <S.Td hideInPrint></S.Td>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td><strong>{buySum}</strong></S.Td>
            <S.SellDate></S.SellDate>
            <S.Td></S.Td>
            <S.Td></S.Td>
            <S.Td><strong>{sellSum}</strong></S.Td>
            <S.Td><Profit value={sellSum - buySum} /></S.Td>
        </S.Tr>
    </>;
};

export default TurnSection;
