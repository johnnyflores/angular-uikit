import { Component } from '@angular/core';

@Component({
  selector: 'app-page-accordion-simple',
  templateUrl: './page-accordion-simple.component.html',
  styleUrls: ['./page-accordion-simple.component.scss']
})
export class PageAccordionSimpleComponent {

  isOpen: Boolean = false

  addUser() {
    console.log('add user');
    this.isOpen = true;
  }

  closeUser() {
    this.isOpen = false;
  }

}
