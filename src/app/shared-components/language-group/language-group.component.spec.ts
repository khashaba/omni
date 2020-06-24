import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanguageGroupComponent } from './app-language-group.component';

describe('AppLanguageGroupComponent', () => {
  let component: AppLanguageGroupComponent;
  let fixture: ComponentFixture<AppLanguageGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLanguageGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanguageGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
