import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from "./room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomUrl: string = "http://localhost:8080/api/v1/rooms";


  constructor(private http: HttpClient) { }





  createRoom(room: Room): Observable<Room> {

    const headerOptions = new HttpHeaders();

    headerOptions.set('Content-Type', 'application/json')

    return this.http.post<Room>(this.roomUrl, room, { headers: headerOptions });


  }
}
