import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Global } from '../../providers/global';

import { AboutPage } from '../about/about';
import { InformationPage } from '../information/information';
import { ResourcesPage } from '../resources/resources';
import { ContactPage } from '../contact/contact';
import { AssessmentPage } from '../assessment/assessment';
/*
  Generated class for the MainMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-menu',
  templateUrl: 'Main_menu.html'
})
export class Main_menu {

	strings: any = {
    "title": "",
    "about": "",
    "information": "",
    "assessment" : "",
    "contact" : "",
    "resources" : ""
  }
  constructor(public navCtrl: NavController, private global: Global) {
    this.global.getStrings('main_menu.json')
    .then((str)=> {
      this.strings = str;
    });
  }

  goto(page) {
    switch(page) {
    case 'about':
      this.navCtrl.push(AboutPage);
        break;
    case 'resources':
      this.navCtrl.push(ResourcesPage);
        break;
    case 'assessment':
      this.navCtrl.push(AssessmentPage);
        break;
    case 'information':
      this.navCtrl.push(InformationPage);
        break;
    case 'contact':
      this.navCtrl.push(ContactPage);
        break;
    default:
      throw new Error('The page ' + page + ' doesn\'t exist');
}

  }
}
