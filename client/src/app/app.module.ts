import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { DecorativeComponent } from './main/decorative/decorative.component';
import { HomeComponent } from './main/home/home.component';
import { ContentComponent } from './main/content/content.component';
import { GridComponent } from './main/grid/grid.component';
import { ContentHeaderComponent } from './main/content-header/content-header.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DecorativeComponent,
    HomeComponent,
    ContentComponent,
    GridComponent,
    ContentHeaderComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
