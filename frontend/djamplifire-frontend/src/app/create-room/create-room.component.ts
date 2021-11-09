import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',

  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  loggedIn = false;
  access_token!: string;
  token_type!: string;
  expires_in!: number;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.fragment
      .subscribe(params => {
        if (params !== null && params.startsWith("")) {
          this.loggedIn = true;
          console.log(params)

          let list = params?.split('&');
          list?.forEach((x) => {
            if (x.startsWith("access_token")) {
              let t = x.split("=");
              this.access_token = t[1];
            } else if (x.startsWith("token_type")) {
              let t = x.split("=");
              this.token_type = t[1];
            } else if (x.startsWith("expires_in")) {
              let t = x.split("=");
              this.expires_in = parseInt(t[1]);
            }

            console.log(this.access_token);

          })
        }
      })


  }


}
