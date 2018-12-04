import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryCardComponent } from './country-card/country-card.component';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    CountryDetailComponent,
    CountryCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
