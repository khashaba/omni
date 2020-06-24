import { Component } from '@angular/core';
import localJson from '../assets/products.json';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'omni-challenge';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}
  getPath() {
    return localJson;
  }
  changeLanguage(language: string){
    this.translate.use(language.toLowerCase());
  }
}
