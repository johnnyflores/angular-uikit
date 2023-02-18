import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-accordion-simple',
  templateUrl: './accordion-simple.component.html',
  styleUrls: ['./accordion-simple.component.scss']
})
export class AccordionSimpleComponent {

  @Input()
  cardHeader!:string;

  @Input()
  content!: TemplateRef<any>;

  @Input()
  primaryText!: string;

  @Output()
  onPrimary = new EventEmitter<any>();

  onClick() {
    this.onPrimary.emit();
  }

}
