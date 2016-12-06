import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Global } from '../../providers/global';
import { Terms_and_conditions } from '../Terms_and_conditions/Terms_and_conditions'
import { Main_menu } from '../Main_menu/Main_menu';



@Component({
  templateUrl: 'Code_of_conduct.html'
})
export class Code_of_conduct {

	strings: any = {
    "title": "",
    "content": "",
    "doNotShow": "",
    "next": ""  
  };
  notShow: boolean = false;

  constructor(public navCtrl: NavController, private global: Global) {
    this.global.getStrings('code_of_conduct.json')
    .then((str)=> {
      this.strings = str;
    });
  }

  next() {
  	if(this.notShow)
  		this.global.dont_show_coc();

  	if(this.global.show_tac)
  		this.navCtrl.push(Terms_and_conditions);
  	else
  		this.navCtrl.setRoot(Main_menu);
  }
}