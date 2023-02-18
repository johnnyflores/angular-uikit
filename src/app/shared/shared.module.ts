import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        CardComponent
  ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardComponent,
        CommonModule,
        FormsModule,
        TranslateModule
    ]
})
export class SharedModule {}