import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStocksPage } from './new-stocks';

@NgModule({
  declarations: [
    NewStocksPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStocksPage),
  ],
})
export class NewStocksPageModule {}
