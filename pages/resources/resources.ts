import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Resources page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class ResourcesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ResourcesPage Page');
  }

}
