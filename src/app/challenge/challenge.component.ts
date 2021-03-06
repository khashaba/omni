import { Component, OnInit } from '@angular/core';
import localJson from '../../assets/products.json';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  title = 'omni-challenge';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {}
  getPath() {
    return localJson;
  }
  changeLanguage(language: string) {
    this.translate.use(language.toLowerCase());
  }
}
