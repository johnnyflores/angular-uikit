import { Component, Input } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input()
  product!: Product;

  constructor(private productService: ProductService) {}

  onSelectProduct() {
    this.productService.productSelected.emit(this.product);
  }

}
