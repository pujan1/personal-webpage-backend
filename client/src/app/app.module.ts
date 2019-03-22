import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { Blob1Component } from './main/blob1/blob1.component';
import { DecorativeComponent } from './main/decorative/decorative.component';
import { HomeComponent } from './main/home/home.component';
import { ContentComponent } from './main/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Blob1Component,
    DecorativeComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
