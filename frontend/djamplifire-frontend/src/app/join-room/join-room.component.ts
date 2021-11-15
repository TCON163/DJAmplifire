import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { SpotifyService } from '../spotify.service';
import { Token } from '../token';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {
code!: string;
  loggedIn = false;
  room: Room = new Room();
  token!: Token;
  constructor(private route: ActivatedRoute,private router: Router, private roomService: RoomService,private spotifyService: SpotifyService) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {
      if (params.get("code")!== null){
        this.loggedIn = true;
        let c:string| null = params.get("code")
        if (c != null){
          this.code = c;

          console.log(this.code)
        }
      }
    })

    this.token = this.spotifyService.joinGetAccessToken(this.code)

    console.log(this.token)


  }
  onSubmit() {

    this.roomService.getRoom(this.room).subscribe(data => {

      this.router.navigate(["room/", data.roomCode, this.token.access_token]);


    },
      error => {
        console.log(error);
        alert("Invalid Room Code!")
      })


  }



  login(): void {
    window.location.href = this.spotifyService.joinAuthSpotifyURL

  }
}
