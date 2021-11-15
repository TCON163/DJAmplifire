import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges, Input, OnInit } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SpotifyPlayer from './SpotifyPlayer';
@Component({
  selector: 'app-webplayer',
  template: '<div [id]="rootId"></div>',
    
  
  styleUrls: ['./webplayer.component.scss']
})
export class WebplayerComponent implements OnChanges, AfterViewInit, OnDestroy, OnInit {

  @Input() token!:string;

  public rootId = 'rootId';
  constructor() { }

  ngOnInit(){
    console.log(this.token)
  }

 ngOnChanges(changes: SimpleChanges) {
   this.render();
  }

  ngAfterViewInit(){
    this.render();

  }

  ngOnDestroy() {

  }


  private render(){
 

    ReactDOM.render(React.createElement(SpotifyPlayer, {TOKEN: this.token}), document.getElementById(this.rootId));
  }
}
