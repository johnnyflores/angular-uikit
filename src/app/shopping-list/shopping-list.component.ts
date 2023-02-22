import { Component, OnInit } from '@angular/core';
import { Accessory } from '../shared/accessory.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  accessories!: Accessory[];

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.accessories = this.shoppingService.getAccessories();
    this.shoppingService.accessoriesChanged.subscribe(
      (accessories: Accessory[]) => {
        this.accessories = accessories;
      }
    )
  }

}
