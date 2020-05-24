import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Initial survey';
  showWarning:boolean = false;
  showSucess:boolean= false;

  onClickYes() {
    this.showSucess = true;
    this.showWarning = false;
    }

  onClickNo() {
    this.showWarning = true;
    this.showSucess = false;
  }
}
