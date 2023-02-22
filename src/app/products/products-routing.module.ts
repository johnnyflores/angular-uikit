import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
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
                path: 'new',
                component: ProductEditComponent
            },
            {
                path: ':id',
                component: ProductDetailComponent
            },
            {
                path: ':id/edit',
                component: ProductEditComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class ProductsRoutingModule {}