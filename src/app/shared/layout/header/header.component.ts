import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public translate: TranslateService,
              private dataStorageService: DataStorageService) {

  }

  saveData() {
    this.dataStorageService.storeProducts();
  }

  fetchData() {
    this.dataStorageService.fetchProducts().subscribe();
  }

}
