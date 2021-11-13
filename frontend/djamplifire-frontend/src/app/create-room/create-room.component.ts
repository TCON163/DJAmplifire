import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from "../room";




@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',

  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  loggedIn = false;

  room: Room = new Room();
  access_token!: string;



  constructor(private route: ActivatedRoute, private roomService: RoomService, private router: Router) {

  }

  ngOnInit(): void {
    this.route.fragment
      .subscribe(params => {
        if (params !== null && params.startsWith("")) {
          this.loggedIn = true;
          console.log(params)

          let list = params?.split('&');
          list?.forEach((x) => {
            if (x.startsWith("access_token")) {
              let t = x.split("=");
              this.access_token = t[1];
            }

            console.log(this.access_token);

          })
        }
      })


  }


  createRoom(): void {







  }


  async onSubmit() {

    this.room.roomToken = this.access_token;
    await this.roomService.createRoom(this.room).subscribe(data => {
      console.log(data);
      this.room.roomCode = data.roomCode;


    }).add(() => {
      this.router.navigate([`room/`, { roomCode: this.room.roomCode }])
    });



  }




}
