import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Injectable({
    providedIn: 'root'
})
export class ProductsResolverService implements Resolve<Product[]> {

    constructor(private dataStorageService: DataStorageService,
                private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
        const products = this.productService.getProducts();

        if (products.length === 0) {
            return this.dataStorageService.fetchProducts();
        } else {
            return products;
        }
    }

}