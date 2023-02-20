import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadmoreComponent {

  @Input()
  text!: string;

  @Input()
  wordLimit!: number;

  readMore!: boolean;

  constructor() {
    this.readMore = false;
  }

}
