import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        CardComponent,
        TabsComponent,
        ButtonComponent
  ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardComponent,
        TabsComponent,
        ButtonComponent,
        CommonModule,
        FormsModule,
        TranslateModule
    ]
})
export class SharedModule {}