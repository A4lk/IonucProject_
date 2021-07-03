import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ModelPageModule} from './model/model.module';
import {SQLite} from '@ionic-native/SQLite/ngx';
import {HttpClientModule} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyCSMWx3gkEWlns9t4lyBW3-lUwu-6X6RbI",
  authDomain: "online-3bcba.firebaseapp.com",
  databaseURL: "https://online-3bcba.firebaseio.com",
  projectId: "online-3bcba",
  storageBucket: "online-3bcba.appspot.com",
  messagingSenderId: "727268517518",
  appId: "1:727268517518:web:27ceb4eed411c1ee464bdf"
})
  


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ,HttpClientModule
    ,ModelPageModule],
  providers: [
    StatusBar,
    SplashScreen,SQLite,Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
