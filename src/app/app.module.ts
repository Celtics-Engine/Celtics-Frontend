
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthComponent } from './main-page/login-page/auth/auth.component';
import { DropMenuComponent } from './nav-bar/drop-menu/drop-menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import {PageState} from "./types/page-state";
import { LoginPageComponent } from './main-page/login-page/login-page.component';
import { AssetPostPageComponent } from './main-page/asset-post-page/asset-post-page.component';
import { ImageUploadComponent } from './main-page/asset-post-page/image-upload/image-upload.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilePageComponent } from './main-page/profile-page/profile-page.component';
import { AssetDetailsPageComponent } from './main-page/asset-details-page/asset-details-page.component';
import { SearchPageComponent } from './main-page/search-page/search-page.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    DropMenuComponent,
    MainPageComponent,
    LoginPageComponent,
    AssetPostPageComponent,
    ImageUploadComponent,
    ProfilePageComponent,
    AssetDetailsPageComponent,
    SearchPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
