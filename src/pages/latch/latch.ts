import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Latch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-latch',
  templateUrl: 'latch.html'
})
export class LatchPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LatchPage Page');
  }

}
