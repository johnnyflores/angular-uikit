import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PageTabRoutingModule } from "./page-tab-routing.module";
import { PageTabComponent } from "./page-tab.component";

@NgModule({
    declarations: [
        PageTabComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        PageTabRoutingModule,
    ]
})
export class PageTabModule {

}