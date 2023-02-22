import { EventEmitter } from "@angular/core";
import { Accessory } from "../shared/accessory.model";

export class ShoppingListService {

    accessoriesChanged = new EventEmitter<Accessory[]>();
    accessories: Accessory[] = [];

    constructor() {}

    getAccessories() {
        return this.accessories.slice();
    }

    addAccessory(accessory: Accessory) {
        this.accessories.push(accessory);
        this.accessoriesChanged.emit(this.accessories.slice());
    }

    addAccessories(accessories: Accessory[]) {
        this.accessories.push(...accessories);
        this.accessoriesChanged.emit(this.accessories.slice());
    }

}