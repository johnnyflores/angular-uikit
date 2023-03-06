import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Product } from "../products/product.model";
import { ProductService } from "../products/product.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient,
                private productService: ProductService,
                private authService: AuthService) {}

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

        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.get<Product[]>(
                    url,
                    {
                        params: new HttpParams().set('auth', user.token)
                    }
                )
            }),
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