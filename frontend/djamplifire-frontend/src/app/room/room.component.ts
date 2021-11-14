import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { SpotifyService } from '../spotify.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  host = false;
  room: Room = new Room();


  constructor(private route: ActivatedRoute, private roomService: RoomService, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.route.url
      .subscribe(roomCode => {
        roomCode.forEach((value: UrlSegment) => {
          if (value.toString() !== "room") {
            this.room.roomCode = value.toString();
            console.log(this.room.roomCode)
            this.roomService.getRoom(this.room).subscribe(data => {
              this.room.guestCanPause = data.guestCanPause;
              this.room.numberOfSkips = data.numberOfSkips;
              this.room.roomCode = data.roomCode;
              this.room.roomTitle = data.roomTitle;
              this.room.roomToken = data.roomToken;
            })
          }
        }
        );
      })
    this.route.queryParamMap.subscribe(param => {
      if (param.get("host") === "true") {
        this.host = true;

      }
    })
  }


  getDJCurrentTrack(): void {
    console.log(this.room.roomToken)
    this.spotifyService.getCurrentlyPlayingTrack(this.room.roomToken).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
