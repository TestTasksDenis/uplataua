import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { AppRoutesModule } from './app-routes.module';

import { AppComponent } from './app.component';

import { HttpService } from './shared/services/http.service';
import { StaticService } from './shared/services/static.service';
import { CategoryService } from './shared/services/category.service';
import { AuthGuard } from './shared/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    SharedModule
  ],
  providers: [
    HttpService,
    StaticService,
    CategoryService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
