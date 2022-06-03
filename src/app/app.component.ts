import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tabs';
  public tabHeaderText : Object[] = [
    {text: 'HTML'},
    {text: 'Java'}
  ];
  public tabContent : string[] = [
    "HyperText Markup Language is the standard markup language used to create web pages.",
    "Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers." 
  ];
}
