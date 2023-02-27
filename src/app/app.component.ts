import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: String;
  onNameChange(value: string) {
    this.name = value;
    console.log(this.name);
  }
}
