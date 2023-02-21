import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductItemComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
        SharedModule
    ]
})
export class ProductsModule {

}