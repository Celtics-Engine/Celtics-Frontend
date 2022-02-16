import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BucketComponent } from './bucket/bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BucketComponent
  ],
  imports: [
    BrowserModule
  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
