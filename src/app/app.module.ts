import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/main/main.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ButtonComponent } from './components/button/button.component';
import { FeedComponent } from './components/feed/feed.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    ProfilePageComponent,
    ButtonComponent,
    FeedComponent,
    TweetComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
