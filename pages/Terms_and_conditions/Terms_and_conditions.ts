import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Global } from '../../providers/global';

import { Main_menu } from '../Main_menu/Main_menu';


@Component({
  templateUrl: 'Terms_and_conditions.html'
})
export class Terms_and_conditions {

	strings: any = {
    "title": "",
    "content": "",
    "doNotShow": "",
    "next": ""  
  };
  notShow: boolean = false;

  constructor(public navCtrl: NavController, private global: Global) {
    this.global.getStrings('terms_and_conditions.json')
    .then((str)=> {
      this.strings = str;
    });
  }

  next() {
  	if(this.notShow)
  		this.global.dont_show_tac();
  	this.navCtrl.push(Main_menu);
  }
}