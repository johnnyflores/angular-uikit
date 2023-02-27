import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Accessory } from 'src/app/shared/accessory.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f')
  shoppingForm!: NgForm;

  subscription!: Subscription;
  editMode: boolean =false;
  editedItemIndex!: number;
  editedItem!: Accessory;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getAccessory(index);
        this.shoppingForm.setValue({
          name:this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newAccessory = new Accessory(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateAccessory(this.editedItemIndex, newAccessory)

    } else {
      this.shoppingService.addAccessory(newAccessory);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteAccessory(this.editedItemIndex);
    this.onClear();
  }
}
