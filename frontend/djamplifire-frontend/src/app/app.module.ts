import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'callback', component: CallbackComponent },
      { path: "", component: HomePageComponent }
    ]),
    MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
