import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PageCardRoutingModule } from "./page-card-routing.module";
import { PageCardComponent } from "./page-card.component";

@NgModule({
    declarations: [
        PageCardComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        PageCardRoutingModule,
    ]
})
export class PageCardModule {

}