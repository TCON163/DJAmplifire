import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from "./room";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }



  createRoom(): void {
    this.http.post()
  }
}
