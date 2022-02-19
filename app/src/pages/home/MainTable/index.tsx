import { useEffect } from "react";
import { useRefState } from "../../../hooks/refState";
import Round from "../../../lib/mainTableData/Round";
import Turn from "../../../lib/mainTableData/Turn";
import CommonStyles from "../../../styles";
import { ItemData, ItemType } from "../../../types/lib/mainTableData";
import S from "./styles";
import TurnSection from "./TurnSection";

const MainTable: React.FC = () => {
    const [round, mutateRound, setRound] = useRefState<Round>();
    useEffect(() => {
        const newRound = new Round();

        const turn = new Turn();
        turn.addItem('buy', {
            date: '12/12',
            hold: '1000',
            price: '100.2',
            total: '1000000'
        });
        turn.addItem('sell', {
            date: '12/12',
            hold: '1000',
            price: '100.2',
            total: '100000'
        });
        turn.setName('阿里巴巴');
        newRound.addTurn(turn);
        setRound(newRound);
    }, [setRound]);

    const print = () => {
        window.print();
    };

    const setData = (
        turnIndex: number,
        itemType: ItemType,
        itemIndex: number,
        itemData: ItemData
    ) => {
        mutateRound(round => round.setItemData(
            turnIndex,
            itemType,
            itemIndex,
            itemData
        ));
    };

    const roundData = round?.getData();
    return <>
        <CommonStyles.HideInPrint>
            <S.Button size="sm" onClick={print}>列印</S.Button>
        </CommonStyles.HideInPrint>
        <S.Title>第一回合</S.Title>
        <S.Table bordered>
            <S.THead>
                <S.Tr>
                    <S.Th hideInPrint>
                        <S.Action variant="success">新增</S.Action>
                        <S.Action variant="danger">刪除</S.Action>
                    </S.Th>
                    <S.Th>日期</S.Th>
                    <S.Th>股名</S.Th>
                    <S.Th>股權</S.Th>
                    <S.Th>股價</S.Th>
                    <S.Th>金額</S.Th>
                    <S.SellDateHeader>賣出日</S.SellDateHeader>
                    <S.Th>股權</S.Th>
                    <S.Th>股價</S.Th>
                    <S.Th>金額</S.Th>
                    <S.Th>比對</S.Th>
                </S.Tr>
            </S.THead>
            <S.TBody>
                {roundData && roundData.turns.map((turn, i) => <TurnSection
                    key={`${turn.stockName}-${i}`}
                    index={i}
                    data={turn}
                    setData={setData}
                />)}
            </S.TBody>
        </S.Table>
    </>;
};

export default MainTable;
