import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutesModule } from './categories-routes.module';
import { SharedModule } from '../../shared.module';

import { CategoriesComponent } from './categories.component';
import { SidebarCategoriesComponent } from '../../core/sidebar-categories/sidebar-categories.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutesModule,
    SharedModule
  ],
  declarations: [
    CategoriesComponent,
    SidebarCategoriesComponent
  ]
})
export class CategoriesModule { }
