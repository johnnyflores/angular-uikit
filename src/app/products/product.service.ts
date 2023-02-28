import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Accessory } from "../shared/accessory.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Product } from "./product.model";

@Injectable({
    providedIn:'root'
})
export class ProductService {

    productsChanged = new Subject<Product[]>();

    private products: Product[] = [];

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

    addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
    }

    updateProduct(index: number, newProduct: Product) {
        this.products[index] = newProduct;
        this.productsChanged.next(this.products.slice());
    }

    deleteProduct(index: number) {
        this.products.splice(index, 1);
        this.productsChanged.next(this.products.slice());
    }

    setProducts(products: Product[]) {
        this.products = products;
        this.productsChanged.next(this.products.slice());
    }

}