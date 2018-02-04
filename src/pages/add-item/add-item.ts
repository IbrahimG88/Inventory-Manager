import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Storage } from '@ionic/storage';
import {AllItemsPage} from "../all-items/all-items";

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  private todo : FormGroup;

  constructor( public navCtrl: NavController,
               private storage: Storage,
               private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  logForm() {
    console.log(this.todo.value);
    this.storage.set("myData", this.todo.value);
  }

  getData(){
    this.storage.get('myData').then((data) => {
  console.log(data);
      this.navCtrl.push(AllItemsPage, {param1: data });
    });
  }

}
