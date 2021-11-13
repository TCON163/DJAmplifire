import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SpotifyPlayer from './SpotifyPlayer';
@Component({
  selector: 'app-webplayer',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./webplayer.component.scss']
})
export class WebplayerComponent implements OnChanges, AfterViewInit, OnDestroy {


  public rootId = 'rootId';
  constructor() { }

 ngOnChanges(changes: SimpleChanges) {
   this.render();
  }

  ngAfterViewInit(){
    this.render();

  }

  ngOnDestroy() {

  }


  private render(){
 

    ReactDOM.render(React.createElement(SpotifyPlayer), document.getElementById(this.rootId));
  }
}
