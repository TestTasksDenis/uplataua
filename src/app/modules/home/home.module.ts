import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared.module';
import { HomeRoutesModule } from './home-routes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutesModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
