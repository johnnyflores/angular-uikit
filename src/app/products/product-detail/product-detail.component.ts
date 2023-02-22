import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input()
  product!: Product;

  constructor(private productService: ProductService) {}

  addShoppingList() {
    this.productService.addAccessoryShoppingList(this.product.accessories);
  }

}
