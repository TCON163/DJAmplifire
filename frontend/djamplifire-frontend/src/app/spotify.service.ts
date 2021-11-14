import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  authSpotifyUrl = "https://accounts.spotify.com/authorize?response_type=code&client_id=5a82eddfce2b46be8e7ec5b826a7ae51&redirect_uri=http://127.0.0.1:4200/create-a-room&scope=user-read-currently-playing%20ugc-image-upload%20playlist-modify-private%20playlist-read-private%20user-read-playback-state%20user-modify-playback-state%20playlist-read-collaborative%20user-read-private%20user-library-modify%20user-library-read%20user-read-playback-position%20user-read-recently-played%20user-top-read%20user-read-email%20playlist-modify-public%20streaming&show_dialog=true"

  createRoomRedirectURI = "http://127.0.0.1:4200/create-a-room";
  spotifyUrl = "https://api.spotify.com/v1/me/player/currently-playing"


  constructor(private http: HttpClient) { }



  getCurrentlyPlayingTrack(token:string): Observable<any>{

    let auth = "Bearer " + token;

    const headerOptions = new HttpHeaders();
    headerOptions.set("Content-Type","application/json");
    headerOptions.set("Authorization", auth);

    return this.http.get<any>(this.spotifyUrl, {headers: headerOptions})

  }

  authorizeSpotify():Observable<any> {
    return this.http.get(this.authSpotifyUrl);
  }
 


}
