import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import { global } from '../../global/globalVariables.ts';
import { Login } from '../Login/Login.ts';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  strings: any;
  language: string = 'english';
  //stringJSON = JSON.parse('strings.json');
  titleLabel = 'Nurture Project International';
  languageLabel = 'Language';
  nextLabel = 'Next';


  constructor(public navCtrl: NavController, public http:Http) {
  	this.http.get('strings.json')
      .map(this.processData);
  }

  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.strings = data.json();
    console.log(this.strings);
  }


  next() {
  	console.log(this.strings);
  	this.navCtrl.push(Login);
  }
}
