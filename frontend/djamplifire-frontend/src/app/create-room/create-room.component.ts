import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { FormsModule } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { Room } from "../room";
import { HttpParams } from '@angular/common/http';




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
    this.roomService.createRoom(this.room).subscribe(data => {

      this.room.roomCode = data.roomCode;


    }).add(() => {
      let p: string = this.room.roomCode

      this.router.navigate(['room', p], {
        queryParams: {
          host: true
        }
      })
    });



  }




}
