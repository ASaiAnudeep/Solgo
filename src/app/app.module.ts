import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {CodingTracksModule} from './modules/coding-tracks/coding-tracks.module';
import {HomeModule} from './modules/home/home.module';

import { AppComponents, AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { FireService } from './services/firebase.service';
import { WebService } from './services/web.service';

import { environment } from '../environments/environment';



enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AppComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HomeModule,
    CodingTracksModule,
    AppRoutingModule,
  ],
  providers: [FireService, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
