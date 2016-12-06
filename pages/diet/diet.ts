import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Diet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diet',
  templateUrl: 'diet.html'
})
export class DietPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DietPage Page');
  }

}
