import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageCardComponent } from "./page-card.component";

const routes: Routes = [
    {
        path: '',
        component: PageCardComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class PageCardRoutingModule {

}