import { Component } from '@angular/core';

@Component({
  selector: 'app-page-tab',
  templateUrl: './page-tab.component.html',
  styleUrls: ['./page-tab.component.scss']
})
export class PageTabComponent {

  tabs: string[] = ['Register', 'Details', 'Contact']
  activatedTabIndex: number = 0;

  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

}
