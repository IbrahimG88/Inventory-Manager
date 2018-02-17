import { NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';
import { NgForm } from "@angular/forms";

@NgModule({
  declarations: [
    AddItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemPage),
    NgForm
  ],
})
export class AddItemPageModule {}
