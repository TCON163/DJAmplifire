import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from "./room";

@Injectable({  // This is where the service is exposed
  providedIn: 'root'
})

export class RoomService { // Singleton object that exposes the ___________ functionality to the components provided. Good use cases include: API consumption, inter-component/module communication, and cross-cutting concerns.
  roomUrl: string = "http://localhost:8080/api/v1/rooms";


  constructor(private http: HttpClient) { }





  createRoom(room: Room): Observable<Room> {

    console.log(room)

    const headerOptions = new HttpHeaders();

    headerOptions.set('Content-Type', 'application/json')

    return this.http.post<Room>(this.roomUrl, room, { headers: headerOptions });


  }




  getRoom(room: Room): Observable<Room> {
    const headerOptions = new HttpHeaders();

    headerOptions.set('Content-Type', 'application/json')

    return this.http.get<Room>(this.roomUrl + "/" + room.roomCode, { headers: headerOptions });
  }
}
