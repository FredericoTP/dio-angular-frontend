import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hooks';
  isAliveCheckSample: boolean = true;

  disposeCheckSample(): void {
    this.isAliveCheckSample = false
  }
}
