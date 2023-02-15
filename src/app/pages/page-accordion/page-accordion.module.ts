import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PageAccordionRoutingModule } from "./page-accordion-routing.module";
import { PageAccordionComponent } from "./page-accordion.component";


@NgModule({
    declarations: [
        PageAccordionComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        PageAccordionRoutingModule,
    ]
})
export class PageAccordionModule {

}