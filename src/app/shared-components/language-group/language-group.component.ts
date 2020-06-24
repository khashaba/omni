import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationService } from 'src/app/application.service';

@Component({
  selector: 'app-language-group',
  templateUrl: './language-group.component.html',
  styleUrls: ['./language-group.component.scss'],
})
export class LanguageGroupComponent implements OnInit {
  language = 'EN';
  @Output() languageChange = new EventEmitter<string>();

  ngOnInit(): void {}
  switchLanguage() {
    this.language = (this.language === 'EN') ? 'DE' : 'EN';
    this.languageChange.emit(this.language);
  }
}
