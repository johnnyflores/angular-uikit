import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input()
  headArray: any[] = [];

  @Input()
  bodyArray: any[] = [];

  @Output()
  onEdit = new EventEmitter<any>();

  @Output()
  onDelete = new EventEmitter<any>();

  OnEdit(item: any) {
    this.onEdit.emit(item);
  }

  OnDelete(item: any) {
    this.onDelete.emit(item);
  }

}
