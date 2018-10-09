import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsideComponent } from './core/layouts/inside/inside.component';
import { NotFoundComponent } from './core/layouts/not-found/not-found.component';

const AppRouter: Routes = [
  {
    path: '', component: InsideComponent, children: [
      {
        path: 'category', loadChildren: './modules/categories/categories.module#CategoriesModule'
      },
      {
        path: ':url', loadChildren: './modules/static/static.module#StaticModule'
      },
      {
        path: '', pathMatch: 'full', loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: '**', component: NotFoundComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
