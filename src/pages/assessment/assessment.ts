import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Assessment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html'
})
export class AssessmentPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AssessmentPage Page');
  }

}
