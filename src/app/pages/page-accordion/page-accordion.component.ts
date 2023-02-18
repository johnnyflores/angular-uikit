import { Component } from '@angular/core';
import { PRODUCTS } from 'src/data';

@Component({
  selector: 'app-page-accordion',
  templateUrl: './page-accordion.component.html',
  styleUrls: ['./page-accordion.component.scss']
})
export class PageAccordionComponent {

  products = PRODUCTS;

}
