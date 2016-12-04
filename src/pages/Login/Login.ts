import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Global } from '../../providers/global';

import { Code_of_conduct } from '../Code_of_conduct/Code_of_conduct'
import { Terms_and_conditions } from '../Terms_and_conditions/Terms_and_conditions'
import { Main_menu } from '../Main_menu/Main_menu';

@Component({
  templateUrl: 'Login.html'
})
export class Login {

	strings: any = {
		title: '',
		username: '',
		password: '',
		signin: '',
		register: '',
		forgotPassword: ''
	}

  constructor(public navCtrl: NavController, private global: Global) {
    this.global.getStrings('login.json')
    .then((str)=> {
      this.strings = str;
    });
  }

  forgot() {

  }

  signIn() {
    if(this.global.show_coc)
      this.navCtrl.push(Code_of_conduct);
    else
      if(this.global.show_tac)
        this.navCtrl.push(Terms_and_conditions);
      else
        this.navCtrl.push(Main_menu);
  }

  register() {

  }
}