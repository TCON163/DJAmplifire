import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  spotifyURL = 'https://accounts.spotify.com/authorize/?response_type=token&client_id=5a82eddfce2b46be8e7ec5b826a7ae51&scope=user-read-currently-playing%20streaming&redirect_uri=http://127.0.0.1:4200/'

  constructor(private http: HttpClient) { }

  getTokens() {
    return this.http.get(this.spotifyURL);
  }
}
