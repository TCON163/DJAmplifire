import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { SpotifyService } from '../spotify.service';
import { Song } from '../Song';
import { Observable, interval } from 'rxjs';
import { Device } from '../device';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnChanges, AfterViewInit {

  host = false;
  room: Room = new Room();
  gDevList!: Device[];
  currentSong!: Song ;
  guestCurrentSong!: Song;
  deviceList!: Device[];
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

  setPlay(id: string): void{
    this.spotifyService.djSetDevice(this.DJ_TOKEN, id)
  }
  setGuestPlay(id: string): void{
    this.spotifyService.djSetDevice(this.room.roomToken, id)
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
     this.setGuestSong();
     this.getGuestCurrentTrack();
     this.getDeviceList();
     this.getGuestDevices
   },500)   

   interval(5000).subscribe(x => {
     this.setGuestSong();
     this.getGuestCurrentTrack();
    
     this.getDeviceList();
     this.getGuestDevices();
   })
   
    interval(30000).subscribe( x => {
      this.getDJCurrentTrack();
      
    })

    
  }

  test(): void{
    console.log("before Method")
    this.spotifyService.addQueue(this.DJ_TOKEN)
    console.log("after method")
  }

  getDeviceList(): void {
    this.deviceList = this.spotifyService.djGetDevices(this.DJ_TOKEN)
    console.log('made it')

  }
  getDJCurrentTrack(): void {
    
    this.currentSong = this.spotifyService.getCurrentlyPlayingTrack(this.DJ_TOKEN)

    console.log(this.currentSong)
  }

  getGuestCurrentTrack(): void{
    if (!this.host){
      
      if ( this.guestCurrentSong.song_uri === this.currentSong.song_uri){

        let x = "spotify:track:"
        x += this.currentSong.song_id

        this.spotifyService.guestPlaysDJsong(this.room.roomToken, this.currentSong.song_uri)
      }

    }
  }
  setGuestSong() {
    this.guestCurrentSong = this.spotifyService.getCurrentlyPlayingTrack(this.room.roomToken)
  }

  getGuestDevices() {
    this.gDevList = this.spotifyService.djGetDevices(this.room.roomToken)
  }

  getDJDevices() {
    this.spotifyService.getAllDevices(this.room.roomToken).then(data => {
      console.log(data)
    })
  }

}
