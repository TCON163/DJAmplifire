import { Component } from '@angular/core';

@Component({ //meta-data passed to the @Component decorator, sets starting component??, starting view location (similar to index.html), and location of the css styling.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DJAmplifire';
}
