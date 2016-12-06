import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Global } from '../../providers/global';

import { TwentyfourPage } from '../twentyfour/twentyfour';
import { MisconceptionPage } from '../Misconception/Misconception';
import { LatchPage } from '../latch/latch';
import { ImportancePage } from '../importance/importance';
import { DietPage } from '../diet/diet';

/*
  Generated class for the Information page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

	strings: any = {
    "title": "",
    "twentyfour": "",
    "latch": "",
    "diet": "",
    "misconception": "",
    "importance": ""
  }
  constructor(public navCtrl: NavController, private global: Global) {
  	this.global.getStrings('information.json')
    .then((str)=> {
      this.strings = str;
    });
  }

  ionViewDidLoad() {
    console.log('Hello InformationPage Page');
  }

  goto(page) {
  	switch(page) {
    case 'twentyfour':
      this.navCtrl.push(TwentyfourPage);
        break;
    case 'latch':
      this.navCtrl.push(LatchPage);
        break;
    case 'diet':
      this.navCtrl.push(DietPage);
        break;
    case 'importance':
      this.navCtrl.push(ImportancePage);
        break;
    case 'misconception':
      this.navCtrl.push(MisconceptionPage);
        break;
    default:
      throw new Error('The page ' + page + ' doesn\'t exist');
}
  }

}
