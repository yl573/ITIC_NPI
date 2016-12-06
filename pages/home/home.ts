import { Component} from '@angular/core';

import { NavController} from 'ionic-angular';
import { Global } from '../../providers/global';
import { Login } from '../Login/Login';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  // A template for strings has to be provided or ionic wouldn't compile
  // It would be nice if we can fix this
  strings: any = {
    "titleLabel" : "",
    "languageLabel" : "",
    "nextLabel" : "",
    "languages" : {
      "english" : "",
      "arabic" : "",
      "kurdish": "",
      "spanish": "",
      "german": "",
      "greek": "" 
    }     
  };
  language: string;

  constructor(public navCtrl: NavController, public http: Http, private global: Global) {
    this.fillStrings();
  }

  onChange() {
    console.log("Language changed");
    this.global.setLanguage(this.language);
    this.fillStrings();
  }

  next() {
  	console.log("entering login page");
  	this.navCtrl.push(Login);
  }

  fillStrings() {
    this.global.getStrings('home.json')
    .then((str)=> {
      this.strings = str;
      console.log(str);
    });
  }


}
