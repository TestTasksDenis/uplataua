import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthInterceptor } from './shared/services/auth.interceptor';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { InsideComponent } from './core/layouts/inside/inside.component';
import { SidebarComponent } from './core/layouts/sidebar/sidebar.component';
import { NotFoundComponent } from './core/layouts/not-found/not-found.component';
import { ModalsComponent } from './core/modals/modals.component';

@NgModule({
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    InsideComponent,
    SidebarComponent,
    NotFoundComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    InsideComponent,
    SidebarComponent,
    NotFoundComponent,
    ModalsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class SharedModule {}
