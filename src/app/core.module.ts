import { NgModule } from "@angular/core";
import { ProductService } from "./products/product.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
    providers: [
        ProductService,
        ShoppingListService
    ]
})
export class CoreModule {}