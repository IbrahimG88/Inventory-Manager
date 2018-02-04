import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-items',
  templateUrl: 'all-items.html',
})
export class AllItemsPage {

  parameter1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.parameter1 = this.navParams.get('param1');
    console.log("from all list page" + this.parameter1.title );

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AllItemsPage');

  }

}
