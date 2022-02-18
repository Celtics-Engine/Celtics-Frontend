
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BucketComponent } from './main-page/asset-post-page/bucket/bucket.component';
import { AuthComponent } from './main-page/login-page/auth/auth.component';
import { DropMenuComponent } from './nav-bar/drop-menu/drop-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import {PageState} from "./types/page-state";
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { AssetPostPageComponent } from './main-page/asset-post-page/asset-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BucketComponent,
    AuthComponent,
    DropMenuComponent,
    MainPageComponent,
    LoginPageComponent,
    AssetPostPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
