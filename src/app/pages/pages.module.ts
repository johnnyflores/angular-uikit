import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { PageAccordionComponent } from "./page-accordion/page-accordion.component";
import { PageCardComponent } from "./page-card/page-card.component";
import { PageTabComponent } from "./page-tab/page-tab.component";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { PageButtonComponent } from './page-button/page-button.component';
import { PageAccordionSimpleComponent } from './page-accordion-simple/page-accordion-simple.component';
import { PageTableComponent } from './page-table/page-table.component';

@NgModule({
    declarations: [
        PagesComponent,
        PageCardComponent,
        PageAccordionComponent,
        PageTabComponent,
        PageButtonComponent,
        PageAccordionSimpleComponent,
        PageTableComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        SharedModule
    ]
})
export class PagesModule {

}