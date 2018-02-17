import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AllItemsPage} from "../pages/all-items/all-items";
import {AddItemPage} from "../pages/add-item/add-item";
import {ReorderPage} from "../pages/reorder/reorder";
import {NewStocksPage} from "../pages/new-stocks/new-stocks";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AllItemsPage,
    AddItemPage,
    ReorderPage,
    NewStocksPage
  ],
  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AllItemsPage,
    AddItemPage,
    ReorderPage,
    NewStocksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
