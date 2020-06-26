import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { LanguageGroupComponent } from './shared/components/language-group/language-group.component';
import { UtilityService } from './shared/services/utility.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SortByPipe } from './shared/pipes/sort-by.pipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    LanguageGroupComponent,
    WelcomeComponent,
    ChallengeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SearchPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
