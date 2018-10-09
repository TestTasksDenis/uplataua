import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsideComponent } from './core/layouts/inside/inside.component';

const AppRouter: Routes = [
  {
    path: '', component: InsideComponent, children: [
      {
        path: ':url', loadChildren: './modules/static/static.module#StaticModule'
      },
      {
        path: '', pathMatch: 'full', loadChildren: './modules/home/home.module#HomeModule'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
