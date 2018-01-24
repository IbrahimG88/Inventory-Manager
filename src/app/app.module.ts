import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AllItemsPage} from "../pages/all-items/all-items";
import {AddItemPage} from "../pages/add-item/add-item";
import {ReorderPage} from "../pages/reorder/reorder";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AllItemsPage,
    AddItemPage,
    ReorderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AllItemsPage,
    AddItemPage,
    ReorderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
