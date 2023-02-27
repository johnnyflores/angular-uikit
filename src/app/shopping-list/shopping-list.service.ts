import { Subject } from "rxjs";
import { Accessory } from "../shared/accessory.model";

export class ShoppingListService {

    accessoriesChanged = new Subject<Accessory[]>();
    startedEditing = new Subject<number>();

    accessories: Accessory[] = [];

    constructor() {}

    getAccessories() {
        return this.accessories.slice();
    }

    getAccessory(index: number) {
        return this.accessories[index];
    }

    addAccessory(accessory: Accessory) {
        this.accessories.push(accessory);
        this.accessoriesChanged.next(this.accessories.slice());
    }

    addAccessories(accessories: Accessory[]) {
        this.accessories.push(...accessories);
        this.accessoriesChanged.next(this.accessories.slice());
    }

    updateAccessory(index: number, newAccessory: Accessory) {
        this.accessories[index] = newAccessory;
        this.accessoriesChanged.next(this.accessories.slice());
    }

    deleteAccessory(index: number) {
        this.accessories.splice(index, 1);
        this.accessoriesChanged.next(this.accessories.slice());
    }

}