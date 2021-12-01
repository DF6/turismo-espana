import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsListComponent } from './results-list/results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterMenuComponent,
    SearchBarComponent,
    ResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
