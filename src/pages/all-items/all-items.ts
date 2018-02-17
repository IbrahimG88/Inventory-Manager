import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from "../add-item/add-item";

import { Storage } from "@ionic/storage";


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


  searchQuery: string = '';
  items: any = [] ;




  public parameter1;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

   // this.parameter1 = this.navParams.get('param1');
    //console.log("from all list page" + this.parameter1.title );
    // this.parameter1 = this.navParams.get('param1');


    this.parameter1 = this.navParams.get('param1');
    this.initializeItems();

//console.log('this' + JSON.stringify(this.parameter1));
  }

getList(){
    console.log("allItemsPage list: "+ JSON.stringify(this.parameter1));

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad AllItemsPage');




  }



   // console.log("init "+ JSON.stringify(this.parameter1));

  initializeItems(){
    this.items = this.parameter1;
  };


  onInput(ev: any) {

    this.initializeItems();

  let val = ev.target.value;



    // if the value is an empty string don't filter the items
  if(val && val.trim() !=''){
    this.items = this.items.filter((item) => {
      return ((item.name.toLowerCase().indexOf(val.toLowerCase())) >-1) ||
        ((item.category.toLowerCase().indexOf(val.toLowerCase())) > -1);
    })
    }
  }

}
