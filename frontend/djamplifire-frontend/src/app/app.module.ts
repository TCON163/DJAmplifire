import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { CreateRoomComponent } from './create-room/create-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoinRoomComponent } from './join-room/join-room.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RoomComponent } from './room/room.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from './room.service';
import { WebplayerComponent } from './webplayer/webplayer.component';


// The Angular module is a cohesive block of code that is dedicated to a particular domain, workflow, or feature. They can export functionality making it available to other modules, and can import exposed functionality from other modules. Meta-Data properties include: imports, providers, declarations, exports, and bootstrap
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,

    CreateRoomComponent,
    JoinRoomComponent,
    AboutUsComponent,
    RoomComponent,
    WebplayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'create-a-room', component: CreateRoomComponent },
      { path: "", component: HomePageComponent },
      { path: 'join', component: JoinRoomComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'room/:roomCode', component: RoomComponent },
      { path: 'room/:roomCode/:token', component: RoomComponent }
    ]),
    MdbCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
