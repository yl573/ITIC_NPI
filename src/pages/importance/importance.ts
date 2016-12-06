import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Importance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-importance',
  templateUrl: 'importance.html'
})
export class ImportancePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ImportancePage Page');
  }

}
