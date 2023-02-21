import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  selectedProduct!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productSelected.subscribe(
      (product: Product) => {
        this.selectedProduct = product
      }
    )
  }

}
