import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PageAccordionComponent } from "./page-accordion/page-accordion.component";
import { PageCardComponent } from "./page-card/page-card.component";
import { PageTabComponent } from "./page-tab/page-tab.component";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";

@NgModule({
    declarations: [
        PagesComponent,
        PageCardComponent,
        PageAccordionComponent,
        PageTabComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        PagesRoutingModule,
    ]
})
export class PagesModule {

}