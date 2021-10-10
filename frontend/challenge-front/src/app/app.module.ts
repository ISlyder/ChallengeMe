import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NotfoundComponent } from './utils/notfound/notfound.component';
import { FlagGameComponent } from './flag-game/flag-game.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export  function  HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    FlagGameComponent,
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
