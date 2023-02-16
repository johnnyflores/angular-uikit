import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAccordionComponent } from "./page-accordion/page-accordion.component";
import { PageCardComponent } from "./page-card/page-card.component";
import { PageTabComponent } from "./page-tab/page-tab.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'card',
                component: PageCardComponent
            },
            {
                path: 'accordion',
                component: PageAccordionComponent
            },
            {
                path: 'tab',
                component: PageTabComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class PagesRoutingModule {

}