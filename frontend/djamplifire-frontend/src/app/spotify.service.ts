import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as axios  from "axios"

import { Token} from "./token";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  client_id = "5a82eddfce2b46be8e7ec5b826a7ae51"
  client_secret = "482c204bfe874ce8be820eb435e3a724"

  authSpotifyUrl = "https://accounts.spotify.com/authorize?response_type=code&client_id=5a82eddfce2b46be8e7ec5b826a7ae51&redirect_uri=http://127.0.0.1:4200/create-a-room&scope=user-read-currently-playing%20ugc-image-upload%20playlist-modify-private%20playlist-read-private%20user-read-playback-state%20user-modify-playback-state%20playlist-read-collaborative%20user-read-private%20user-library-modify%20user-library-read%20user-read-playback-position%20user-read-recently-played%20user-top-read%20user-read-email%20playlist-modify-public%20streaming&show_dialog=false"

  createRoomRedirectURI = "http://127.0.0.1:4200/create-a-room";
  spotifyUrl = "https://api.spotify.com/v1/me/player/currently-playing";
  tokenURL = "https://accounts.spotify.com/api/token";


  constructor(private http: HttpClient) { }



  getCurrentlyPlayingTrack(token:string): Observable<any>{

    let auth = "Bearer " + token;

    const headerOptions = new HttpHeaders();
    headerOptions.set("Content-Type","application/json");
    headerOptions.set("Authorization", auth);

    return this.http.get<any>(this.spotifyUrl, {headers: headerOptions})

  }


getAccessToken(code:string): Token {
    
      let body = "grant_type=authorization_code";
      body += "&code=" + encodeURI(code); 
      body += "&redirect_uri=" + encodeURI(this.createRoomRedirectURI);
      body += "&client_id=" + encodeURI(this.client_id);
      body += "&client_secret=" + encodeURI(this.client_secret);

      return  this.callAuthorizationApi(body);
  }

   callAuthorizationApi(body:string): Token{

    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", this.tokenURL);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", "Basic " + btoa(this.client_id + ":" + this.client_secret))

    xhr.send(body)
    let token = new Token();
    xhr.onload = () => {

      if (xhr.status == 200){
        var data = JSON.parse(xhr.responseText)
        
          if ( data.access_token !== ""){
            token.access_token = data.access_token;
            token.expires_in = 3600;
            token.refresh_token = data.refresh_token;
            token.token_type = data.token_type;
            token.scope = data.scope;
  
          }
     
        
        
      }
      
    }

    console.log(token)

    let t:boolean = true;

    setTimeout(()=>{
      console.log(token);
      console.log(token.access_token)
      t = false
    },10000)




    return token;




  
    

    

   
    

   


  
  }


  getClientCredentials(): void{
// let body = new FormData;
    
//     body.append("grant_type", "client_credentials")
 
//     let headerOptions = new HttpHeaders();

//     headerOptions.set("Authorization","Basic " + btoa(this.client_id + ":" + this.client_secret) )
//     headerOptions.set("Content-Type", "application/x-www-form-urlencoded")


//     return this.http.post<Token>(this.tokenURL, body, {headers: headerOptions})


   
  }



 


}
