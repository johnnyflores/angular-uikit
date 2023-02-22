import { Component, ElementRef, ViewChild } from '@angular/core';
import { Accessory } from 'src/app/shared/accessory.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput')
  nameInputRef!: ElementRef;

  @ViewChild('amountInput')
  amountInputRef!: ElementRef;

  constructor(private slService: ShoppingListService) {}

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newAccessory = new Accessory(name,amount);
    this.slService.addAccessory(newAccessory);
  }

}
