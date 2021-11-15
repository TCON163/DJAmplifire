import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { FormsModule } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { Room } from "../room";
import { HttpParams } from '@angular/common/http';
import { SpotifyService } from '../spotify.service';
import { getAxiosSpotifyInstance } from 'spotify-web-sdk';
import { Token } from '../token';




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
  token!: Token;



  constructor(private route: ActivatedRoute, private roomService: RoomService, private router: Router, private spotifyService: SpotifyService) {

  }

    ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      if (params.get("code")!== null){
        this.loggedIn = true;
        let c:string| null = params.get("code")
        console.log(c)

        if (c != null){
          this.code = c;
        }



        
      }
      
    })

    let x: Token = this.spotifyService.getAccessToken(this.code)

  


    setTimeout(()=>{
      this.tokenEqualsX(x);
      console.log(this.room.roomToken)
   
    
    },1000)
    
      
  }


  tokenEqualsX(x:Token){
    this.room.roomToken = x.access_token;
  }

 

   onSubmit() {
    
    

   


   console.log(this.room.roomToken)


    this.roomService.createRoom(this.room).subscribe(data => {

      this.room.roomCode = data.roomCode;


    }).add(() => {
      let p: string = this.room.roomCode

      this.router.navigate(['room', p, this.room.roomToken], {
        queryParams: {
          host: true
        }
      })
    });



  }


  getToken(): void{

    console.log(this.token)
    console.log(this.token.access_token);


  }



  login(): void {
    window.location.href = this.spotifyService.authSpotifyUrl

  }




}
