import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { Room } from '../room';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {
  room: Room = new Room();
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.room.roomCode)
    this.router.navigate(["room/", this.room.roomCode])
  }
}
