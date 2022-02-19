import Item from "../../../lib/mainTableData/Item";
import { ItemData, ItemType } from "../../../types/lib/mainTableData";
import { Input } from "./Input";
import S from "./styles";

const emptyItemData = new Item().getData();

const TurnRow: React.FC<{
    index: number;
    stockName: string;
    buy?: ItemData;
    sell?: ItemData;
    netTotal?: string;
    setData: (type: ItemType, index: number, data: ItemData) => void;
}> = ({ index, stockName, buy, sell, netTotal, setData }) => {

    const setBuyData = (data: Partial<ItemData>) =>
        setData('buy', index, { ...emptyItemData, ...buy, ...data });

    const setSellData = (data: Partial<ItemData>) =>
        setData('sell', index, { ...emptyItemData, ...sell, ...data });

    return <S.Tr>
        <S.Td hideInPrint>
            <S.Action variant="success">新增</S.Action>
            <S.Action variant="danger">刪除</S.Action>
        </S.Td>
        <S.Td>
            <Input value={buy?.date} onChange={v => setBuyData({ date: v })} />
            <span>{buy?.date}</span>
        </S.Td>
        <S.Td>
            <Input value={stockName} />
            <span>{stockName}</span>
        </S.Td>
        <S.Td>
            <Input value={buy?.hold} onChange={v => setBuyData({ hold: v })} />
            <span>{buy?.hold}</span>
        </S.Td>
        <S.Td>
            <Input value={buy?.price} onChange={v => setBuyData({ price: v })} />
            <span>{buy?.price}</span>
        </S.Td>
        <S.Td>
            <Input value={buy?.total} onChange={v => setBuyData({ total: v })} />
            <span>{buy?.total}</span>
        </S.Td>

        {/* Sell */}
        <S.SellDate>
            <Input value={sell?.date} />
            <span>{sell?.date}</span>
        </S.SellDate>
        <S.Td>
            <Input value={sell?.hold} />
            <span>{sell?.hold}</span>
        </S.Td>
        <S.Td>
            <Input value={sell?.price} />
            <span>{sell?.price}</span>
        </S.Td>
        <S.Td>
            <Input value={sell?.total} />
            <span>{sell?.total}</span>
        </S.Td>
        <S.Td>
            <Input value={netTotal} />
            <span>{netTotal}</span>
        </S.Td>
    </S.Tr>;
};

export default TurnRow;
