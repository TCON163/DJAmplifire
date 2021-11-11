import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { CreateRoomComponent } from './create-room/create-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoinRoomComponent } from './join-room/join-room.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CallbackComponent,
    CreateRoomComponent,
    JoinRoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'create-a-room', component: CreateRoomComponent },
      { path: "", component: HomePageComponent },
      { path: 'join', component: JoinRoomComponent}
    ]),
    MdbCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
