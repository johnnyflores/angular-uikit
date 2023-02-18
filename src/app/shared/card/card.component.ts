import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('title')
  title!: string;

  @Input('description')
  description!: string;

  @Input('href')
  href!: string;

  @Input('button')
  button!: string;

  @Input('src')
  imageUrl!: string;

  @Input('alt')
  alt!: string;

  onImgError(event: any) { 
    event.target.src = 'assets/images/empty-image.png';
  }

}
