import { ItemData, ItemType, TurnData } from "../../types/lib/mainTableData";
import Item from "./Item";

export default class Turn {

    private stockNames: string[] = [];
    private buys: Item[] = [];
    private sells: Item[] = [];

    /* input */

    setName(name: string, index: number = 0) {
        this.stockNames[index] = name;
    }

    addItem(type: ItemType, defaultValue?: ItemData) {
        if (type === 'buy')
            this.buys.push(new Item(defaultValue));
        else if (type === 'sell')
            this.sells.push(new Item(defaultValue));
    }

    setItemData(type: ItemType, index: number, data: ItemData) {
        let item: Item | undefined;
        if (type === 'buy')
            item = this.buys[index];
        else if (type === 'sell')
            item = this.sells[index];
        if (item)
            item.setData(data);
    }

    /* output */

    getData(): TurnData {
        return {
            stockName: this.stockNames,
            buys: this.buys.map(i => i.getData()),
            sells: this.sells.map(i => i.getData())
        };
    }

}
