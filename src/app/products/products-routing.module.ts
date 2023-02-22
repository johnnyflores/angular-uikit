import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductStartComponent } from "./product-start/product-start.component";
import { ProductsComponent } from "./products.component";

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductStartComponent
            },
            {
                path: ':id',
                component: ProductDetailComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class ProductsRoutingModule {}