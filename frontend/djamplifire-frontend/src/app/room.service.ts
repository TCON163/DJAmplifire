import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from "./room";

@Injectable({  // This is where the service is exposed
  providedIn: 'root'
})

export class RoomService { // Singleton object that exposes the ___________ functionality to the components provided. Good use cases include: API consumption, inter-component/module communication, and cross-cutting concerns.
  //roomUrl: string = "http://djamplifire-env.eba-89tdwhmi.us-east-2.elasticbeanstalk.com/api/v1/rooms";
   roomUrl: string = "https://api.tcon.dev/api/v1/rooms";


  constructor(private http: HttpClient) { }





  createRoom(room: Room): Observable<Room> {

    console.log(room)

    const headerOptions = new HttpHeaders();


    // headerOptions.set("Access-Control-Allow-Origin", "http://127.0.0.1:4200")
    // headerOptions.set("Access-Control-Allow-Methods", "POST")
    // headerOptions.set("Access-Control-Allow-Headers", "Content-Type")
    headerOptions.set('Content-Type', 'application/json')
    // headerOptions.set("Origin","http://127.0.0.1:4200")

    return this.http.post<Room>(this.roomUrl, room, { headers: headerOptions });


  }




  getRoom(room: Room): Observable<Room> {
    const headerOptions = new HttpHeaders();

    headerOptions.set('Content-Type', 'application/json')

    return this.http.get<Room>(this.roomUrl + "/" + room.roomCode, { headers: headerOptions });
  }
}
