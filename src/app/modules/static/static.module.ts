import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './static.component';

import { SharedModule } from '../../shared.module';
import { StaticRoutesModule } from './static-routes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StaticRoutesModule
  ],
  declarations: [
    StaticComponent
  ]
})
export class StaticModule { }
