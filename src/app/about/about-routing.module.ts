import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeComponent } from './college/college.component';

const routes: Routes = [
  {
    path: '',
    component: CollegeComponent
  },
  {
    path: 'notfound',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
