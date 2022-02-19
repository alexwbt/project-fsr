
export type ItemType = 'buy' | 'sell';

export type ItemData = {
    date: string;
    hold: string;
    price: string;
    total: string;
};

export type TurnData = {
    stockName: string[];
    buys: ItemData[];
    sells: ItemData[];
};

export type RoundData = {
    turns: TurnData[];
};
