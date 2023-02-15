import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/page-card/page-card.module').then(m => m.PageCardModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/page-tab/page-tab.module').then(m => m.PageTabModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/page-accordion/page-accordion.module').then(m => m.PageAccordionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
