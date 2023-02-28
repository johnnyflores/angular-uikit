import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Product } from "../products/product.model";
import { ProductService } from "../products/product.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient,
                private productService: ProductService) {}

    storeProducts() {
        const products = this.productService.getProducts();
        const url = '';
        
        this.http.put(url,products).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchProducts() {
        const url = '';

        return this.http
            .get<Product[]>(url)
            .pipe(
                map(products => {
                    return products.map(product => {
                        return {
                            ...product,
                            accessories: product.accessories ? product.accessories : []
                        }
                    })
                })
                ,tap(products => {
                    this.productService.setProducts(products)
                })
            )
    }

}