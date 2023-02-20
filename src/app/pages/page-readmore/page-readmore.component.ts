import { Component } from '@angular/core';
import { PRODUCTS } from 'src/data';

@Component({
  selector: 'app-page-readmore',
  templateUrl: './page-readmore.component.html',
  styleUrls: ['./page-readmore.component.scss']
})
export class PageReadmoreComponent {

  products = PRODUCTS;

  onImgError(event: any) {}

}
