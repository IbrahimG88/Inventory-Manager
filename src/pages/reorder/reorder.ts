import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Storage} from "@ionic/storage";

import {AddItemPage} from "../add-item/add-item";

/**
 * Generated class for the ReorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reorder',
  templateUrl: 'reorder.html',
})
export class ReorderPage {

  public searchDepletionDays = '';

  itemsReorder: any = [];

  public parameter2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.parameter2 = this.navParams.get('param2');



    this.initializeItems();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReorderPage');
  }

  initializeItems(){

    this.itemsReorder = this.parameter2;

  }
  reorderDaysFilter(daysNumber: any) {

    this.initializeItems();

    let val = daysNumber.target.value;

    if (val && val.trim() != '') {
      this.itemsReorder = this.itemsReorder.filter((item) => {
        if (val < item.daysTillDepletion) {
          return item;
        }

      })
    }
  }

}
