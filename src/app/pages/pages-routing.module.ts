import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageAccordionSimpleComponent } from "./page-accordion-simple/page-accordion-simple.component";
import { PageAccordionComponent } from "./page-accordion/page-accordion.component";
import { PageButtonComponent } from "./page-button/page-button.component";
import { PageCardComponent } from "./page-card/page-card.component";
import { PageReadmoreComponent } from "./page-readmore/page-readmore.component";
import { PageTabComponent } from "./page-tab/page-tab.component";
import { PageTableComponent } from "./page-table/page-table.component";
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
                path: 'accordion-simple',
                component: PageAccordionSimpleComponent

            },
            {
                path: 'tab',
                component: PageTabComponent
            },
            {
                path: 'button',
                component: PageButtonComponent
            },
            {
                path: 'table',
                component: PageTableComponent
            },
            {
                path: 'readmore',
                component: PageReadmoreComponent
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