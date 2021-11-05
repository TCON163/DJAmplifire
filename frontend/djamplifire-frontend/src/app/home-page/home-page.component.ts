import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';
import { SpotifyAuthService } from '../spotify-auth.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  providers: [SpotifyAuthService],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homePageService: HomePageService, private spotifyService: SpotifyAuthService) { }

  ngOnInit(): void {
  }

  loginSpotify(): void {
    alert("logging in")
    this.spotifyService.getTokens()
  }

}
