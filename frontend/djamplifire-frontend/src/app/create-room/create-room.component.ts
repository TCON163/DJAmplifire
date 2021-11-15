import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { FormsModule } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { Room } from "../room";
import { HttpParams } from '@angular/common/http';
import { SpotifyService } from '../spotify.service';
import { getAxiosSpotifyInstance } from 'spotify-web-sdk';




@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',

  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  loggedIn = false;

  room: Room = new Room();

  code!: string;
  access_token!: string;



  constructor(private route: ActivatedRoute, private roomService: RoomService, private router: Router, private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      if (params.get("code")!== null){
        this.loggedIn = true;
        this.code = params.get("code")
        console.log(this.code)



        
      }
      
    })


    

        

      let x = this.spotifyService.getAccessToken(this.code)

      
      console.log(x)

      this.access_token = x.access_token
  }

 

   onSubmit() {

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


  getAccess(code:string): void{

    


  }



  login(): void {
    window.location.href = this.spotifyService.authSpotifyUrl

  }




}
