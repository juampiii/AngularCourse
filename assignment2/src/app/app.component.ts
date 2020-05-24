import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your first Form';
  username: string;

  constructor()
  {
    this.username = '';
  }

  usernameHasValue()
  {
    return this.username != '';
  }

  resetUsername()
  {
    this.username = '';
  }
}
