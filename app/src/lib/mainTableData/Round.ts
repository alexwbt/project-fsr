import { ItemData, ItemType, RoundData } from "../../types/lib/mainTableData";
import Turn from "./Turn";

export default class Round {

    private turns: Turn[] = [];

    /* input */

    addTurn(turn: Turn) {
        this.turns.push(turn);
    }

    addItem(turnIndex: number, itemType: ItemType, defaultValue?: ItemData) {
        if (this.turns[turnIndex])
            this.turns[turnIndex].addItem(itemType, defaultValue);
    }

    setItemData(
        turnIndex: number,
        itemType: ItemType,
        itemIndex: number,
        itemData: ItemData
    ) {
        if (this.turns[turnIndex])
            this.turns[turnIndex].setItemData(itemType, itemIndex, itemData);
    }

    /* output */

    getData(): RoundData {
        return {
            turns: this.turns.map(t => t.getData())
        };
    }

}
