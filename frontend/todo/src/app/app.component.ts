import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>{{message}} to {{title}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'welcome';
}
