import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        HomeRoutingModule,
    ]
})
export class HomeModule {

}