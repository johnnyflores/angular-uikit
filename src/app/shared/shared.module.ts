import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionSimpleComponent } from './accordion-simple/accordion-simple.component';
import { TableComponent } from './table/table.component';

@NgModule({
    declarations: [
        CardComponent,
        TabsComponent,
        ButtonComponent,
        AccordionComponent,
        AccordionSimpleComponent,
        TableComponent
  ],
    imports: [
        CommonModule,
    ],
    exports: [
        CardComponent,
        TabsComponent,
        ButtonComponent,
        AccordionComponent,
        AccordionSimpleComponent,
        TableComponent,
        CommonModule,
        FormsModule,
        TranslateModule
    ]
})
export class SharedModule {}