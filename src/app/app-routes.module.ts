import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsideComponent } from './core/layouts/inside/inside.component';
import { NotFoundComponent } from './core/layouts/not-found/not-found.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const AppRouter: Routes = [
  {
    path: '', component: InsideComponent, canActivate: [AuthGuard], children: [
      {
        path: '', pathMatch: 'full', loadChildren: './modules/home/home.module#HomeModule'
      },
      {
        path: 'category', loadChildren: './modules/categories/categories.module#CategoriesModule'
      },
      {
        path: '404', component: NotFoundComponent
      },
      {
        path: ':url', loadChildren: './modules/static/static.module#StaticModule'
      },
      {
        path: '**', redirectTo: '/404'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
