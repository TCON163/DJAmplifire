import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  loggedIn = false;


  constructor() {

  }

  ngOnInit(): void {
  }

  clickFakeLogin() {
    this.loggedIn = !this.loggedIn;
  }

}
