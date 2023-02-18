import { Component } from '@angular/core';
import { PRODUCTS } from 'src/data';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent {
  products = PRODUCTS;

  onImgError(event: any) {}

}
