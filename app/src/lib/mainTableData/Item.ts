import { ItemData } from "../../types/lib/mainTableData";

export default class Item {

    private date: string = '';
    private hold: string = '';
    private price: string = '';
    private total: string = '';

    constructor(defaultValue?: ItemData) {
        if (defaultValue)
            this.setData(defaultValue);
    }

    /* input */

    setData(data: ItemData) {
        this.date = data.date;
        this.hold = data.hold;
        this.price = data.price;
        this.total = data.total;
    }

    /* output */

    getData(): ItemData {
        return {
            date: this.date,
            hold: this.hold,
            price: this.price,
            total: this.total
        };
    }

}
