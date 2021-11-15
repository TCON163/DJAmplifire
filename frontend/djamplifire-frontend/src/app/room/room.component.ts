import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { SpotifyService } from '../spotify.service';
import { Song } from '../Song';
import { Observable, interval } from 'rxjs';




@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnChanges, AfterViewInit {

  host = false;
  room: Room = new Room();

  currentSong!: Song ;
  guestCurrentSong!: Song;

  DJ_TOKEN!: string;


  constructor(private route: ActivatedRoute, private roomService: RoomService, private spotifyService: SpotifyService) { 

  }

  ngOnChanges(changes: SimpleChanges):void {
this.getDJCurrentTrack();

  }

  ngAfterViewInit(): void {
  
  }
  pause(): void {
    console.log("paused")
    this.spotifyService.djPauseSong(this.DJ_TOKEN)
  }
  play(): void {

    console.log("played")
    this.spotifyService.djPlaySong(this.DJ_TOKEN)
  }
  skip(): void {
    console.log("skipped")
    this.spotifyService.djSkipSong(this.DJ_TOKEN)
  }
  ngOnInit(): void {



    

  
    this.route.queryParamMap.subscribe(param => {
      if (param.get("host") === "true") {
        this.host = true;



        this.route.url
      .subscribe(roomCode => {
        roomCode.forEach((value: UrlSegment) => {
          if (value.toString() !== "room" ) {
            this.room.roomCode = value.toString();
            console.log(this.room.roomCode)
            this.roomService.getRoom(this.room).subscribe(data => {
              this.room.roomToken = data.roomToken;
              this.room.guestCanPause = data.guestCanPause;
              this.room.numberOfSkips = data.numberOfSkips;
              this.room.roomCode = data.roomCode;
              this.room.roomTitle = data.roomTitle;
              this.DJ_TOKEN = data.roomToken;
              
              
              
            }, err => {
              console.log(err);
            })
          }
         
        }
        );
      })
      } else {


        this.route.url.subscribe(roomCodeOrToken => {
          roomCodeOrToken.forEach((value: UrlSegment) => {
            if ( value.toString().length > 7){
              this.room.roomToken = value.toString();
            }
            else if (value.toString() !== "room" && value.toString().length <7){
              

              this.room.roomCode = value.toString();

              this.roomService.getRoom(this.room).subscribe(data => {
                this.room.guestCanPause = data.guestCanPause;
              this.room.numberOfSkips = data.numberOfSkips;
              this.room.roomCode = data.roomCode;
              this.room.roomTitle = data.roomTitle;
              this.DJ_TOKEN = data.roomToken;
                
              }, err => {
                console.log(err);
              })
            }
          })
        })





      }
    })
   setTimeout(()=> {
     this.getDJCurrentTrack();
     this.getGuestCurrentTrack();
   },500)   

   interval(5000).subscribe(x => {
     this.getGuestCurrentTrack();
     this.getDJDevices();
   })
   
    interval(30000).subscribe( x => {
      this.getDJCurrentTrack();
    })

    
  }


  getDJCurrentTrack(): void {
    
    this.currentSong = this.spotifyService.getCurrentlyPlayingTrack(this.DJ_TOKEN)

    console.log(this.currentSong)
  }

  getGuestCurrentTrack(): void{
    if (!this.host){

      if (this.currentSong.song_id !== this.guestCurrentSong.song_id){

        let x = ""
        x += this.currentSong.song_id

        this.spotifyService.guestPlaysDJsong(this.room.roomToken, x)
      }

    }
  }


  getDJDevices() {
    this.spotifyService.getAllDevices(this.DJ_TOKEN).then(data => {
      console.log(data)
    })
  }

}
