import { Component } from '@angular/core';
import localJson from '../assets/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'omni-challenge';

  getPath() {
    return localJson;
  }
}
