import { Subject } from "rxjs";
import { Accessory } from "../shared/accessory.model";

export class ShoppingListService {

    accessoriesChanged = new Subject<Accessory[]>();
    accessories: Accessory[] = [];

    constructor() {}

    getAccessories() {
        return this.accessories.slice();
    }

    addAccessory(accessory: Accessory) {
        this.accessories.push(accessory);
        this.accessoriesChanged.next(this.accessories.slice());
    }

    addAccessories(accessories: Accessory[]) {
        this.accessories.push(...accessories);
        this.accessoriesChanged.next(this.accessories.slice());
    }

}