import { Component } from '@angular/core';

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.scss']
})
export class PageButtonComponent {

  addUser(event: string) {
    console.log('Add User');
  }

}
