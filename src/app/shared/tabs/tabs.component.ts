import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input()
  tabsArray: string[] = [];

  @Output()
  OnTabChange = new EventEmitter<number>();

  activatedTab: number = 0;

  setTab(index: number) {
    this.activatedTab = index;
    this.OnTabChange.emit(this.activatedTab);
  }

}
