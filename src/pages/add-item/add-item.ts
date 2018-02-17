import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

import { NgForm } from "@angular/forms";
import { Storage } from '@ionic/storage';
import {AllItemsPage} from "../all-items/all-items";
import {ReorderPage} from "../reorder/reorder";


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
 // private todo : FormGroup;

public allItems: any = [];


 public DataArray: any = [];


 brag: boolean = false;

 itemAddition: boolean = false;

  hideAddItemButton: boolean = true;




  constructor( public navCtrl: NavController,
               private storage: Storage,
               public alertCtrl: AlertController,
              public navParams: NavParams)
              // private formBuilder: FormBuilder
                {


                }

   goToAllItems(){
     this.storage.get('keyOfData').then((val) => {
       this.navCtrl.push(AllItemsPage, {param1: JSON.parse(val)});
     //console.log( JSON.parse(val));

     });
   }

   goToReorderPage(){
     this.storage.get('keyOfData').then((val) => {
       this.navCtrl.push(ReorderPage, {param2: JSON.parse(val)});
       //console.log( JSON.parse(val));

     });
   }

  logForm(form) {
    console.log(form.value);


    let newItemObject:{} = form.value;

    console.log("item is " + JSON.stringify(newItemObject));

    this.allItems.push(newItemObject);
   // this.navCtrl.push( AllItemsPage, {param1: allItems});

    this.DataArray = this.allItems;

    this.storage.set('keyOfData', JSON.stringify(this.DataArray));




   // this.storage.set("myData", this.todo.value);
    form.reset();

  }

  getData(){
   this.storage.get('keyOfData').then((val) => {
      console.log('Your age is', JSON.parse(val));
        });

   //this.storage.remove('keyOfData');

    }


  todo = {
    name : '',
    description: '',
    //TODO make category a dropdown list
    category: '',
    amountsInStock:'',

    consumptionRatePerUnit:'',

    daysTillDepletion:''
    //TODO add total units from newstocks page
    // totalUnits: function(){
    //  amountsInStock + amounts received
    // } ,

    //TODO unit:'' unit dropdown list or other type
  };

showList(){
  this.brag = true;
}

hideList(){
  this.brag = false;
}

addItem(){
this.itemAddition = true;
}

hideAddItem(){
  this.itemAddition = false;
}

editNote(item){

  let prompt = this.alertCtrl.create({
    title: 'Edit Item',
    message: "Days till depletion: "+ item.amountsInStock * item.consumptionRatePerUnit
    + " <br> Amounts in stock: "+ item.amountsInStock + "<br> Consumption rate: Days per unit: "+ item.consumptionRatePerUnit,

    inputs:[{
      value:item.name,
      name:'name',
      placeholder:'name',
    },
      {
        value: item.description,
        name: 'description',
        placeholder: "description",
      },
      {
        value: item.category,
        name: 'category',
        placeholder: 'category',
      },
      {
        value: item.amountsInStock,
        name:'amountsInStock',
        placeholder:'Amounts in stock' ,
        type:'number'

      },{
      value: item.consumptionRatePerUnit,
        name:'consumptionRatePerUnit',
        placeholder: 'Consumption rate: Days per unit',
        type:'number'
      },
      {
        value: item.daysTillDepletion,
        name:'daysTillDepletion',
        placeholder: 'Days till depletion',
        type:'number'
      }
    ],
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: data => {
          let index = this.allItems.indexOf(item);
          data.daysTillDepletion = data.amountsInStock * data.consumptionRatePerUnit;

          if (index > -1){
            this.allItems[index] = data;
            console.log("edit: "+ data.name +"xx:" +  JSON.stringify(data));
            console.log("allItems: "+JSON.stringify(this.allItems));
          }
        }
      }
      ],

  });
  prompt.present();

}


deleteNote(item){

}




}


/*
	1.  total units = amounts in stock (e.g. 1 unit) + amounts received (e.g 2 units)
	2. days till depletion =
	consumption days per unit * total units
 */
