import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  spotifyURL = 'https://accounts.spotify.com/api/token'
  clientId = '5a82eddfce2b46be8e7ec5b826a7ae51'
  skey = '482c204bfe874ce8be820eb435e3a724'

  constructor(private http: HttpClient) { }

  getTokens(code: string) {
    console.log(btoa(this.clientId + ':' + this.skey))
    return this.http.post(this.spotifyURL, {
      params: {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://127.0.0.1:4200/",
        client_id: this.clientId//,
        //code_verifier: btoa(this.clientId + ':' + this.skey)
      },
      headers: {
        // 'Content-Type': "application/x-www-form-urlencoded"
      }
    }).subscribe(data => {

    });

    // let rbody = {
    //   grant_type: "authorization_code",
    //   code: code,
    //   redirect_uri: "http://127.0.0.1:4200/",
    // }

    // console.log(btoa(this.clientId + ':' + this.skey))

    // fetch("https://accounts.spotify.com/api/token", {
    //   method: "POST",
    //   body: JSON.stringify(rbody),
    //   headers: {
    //     'Authorization': `Basic ${btoa(this.clientId + ':' + this.skey)}`,
    //     "Content-Type": "application/json"
    //   }
    // }).catch((err) => console.log(err))
  }
}
