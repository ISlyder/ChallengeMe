import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NotfoundComponent } from './utils/notfound/notfound.component';
import { FlagPageComponent } from './flag-game/flag-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FlagTrainingComponent} from './flag-training/flag-training.component';
import { FlagComponent } from './flag/flag.component';

export  function  HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    FlagPageComponent,
    FlagTrainingComponent,
    FlagComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        TranslateModule.forRoot({
          loader: {
            provide:  TranslateLoader,
            useFactory:  HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
