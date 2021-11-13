import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {
  room: Room = new Room();
  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit(): void {

  }
  onSubmit() {

    this.roomService.getRoom(this.room).subscribe(data => {

      this.router.navigate(["room/", data.roomCode]);


    },
      error => {
        console.log(error);
        alert("Invalid Room Code!")
      })


  }
}
