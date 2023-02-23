import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Accessory } from '../shared/accessory.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  accessories!: Accessory[];
  subscription!: Subscription;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.accessories = this.shoppingService.getAccessories();
    this.subscription = this.shoppingService.accessoriesChanged.subscribe(
      (accessories: Accessory[]) => {
        this.accessories = accessories;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
