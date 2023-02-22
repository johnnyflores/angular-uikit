import { EventEmitter, Injectable } from "@angular/core";
import { Accessory } from "../shared/accessory.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Product } from "./product.model";

@Injectable({
    providedIn:'root'
})
export class ProductService {

    productSelected = new EventEmitter<Product>();

    private products: Product[] = [
        new Product(
            'Mobile Phone 10',
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
            'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            [
                new Accessory('keyboard', 1)
            ]
        )
    ];

    constructor(private shoppingService: ShoppingListService) {}

    getProducts() {
        return this.products.slice();
    }

    getProduct(index: number) {
        return this.products[index];
    }

    addAccessoryShoppingList(accessories: Accessory[]) {
        this.shoppingService.addAccessories(accessories);
    }

}