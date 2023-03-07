import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionSimpleComponent } from './accordion-simple/accordion-simple.component';
import { TableComponent } from './table/table.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [
        CardComponent,
        TabsComponent,
        ButtonComponent,
        AccordionComponent,
        AccordionSimpleComponent,
        TableComponent,
        ReadmoreComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        AlertComponent,
  ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CardComponent,
        TabsComponent,
        ButtonComponent,
        AccordionComponent,
        AccordionSimpleComponent,
        TableComponent,
        ReadmoreComponent,
        LoadingSpinnerComponent,
        AlertComponent,
        DropdownDirective,
        CommonModule,
        FormsModule,
        TranslateModule
    ]
})
export class SharedModule {}