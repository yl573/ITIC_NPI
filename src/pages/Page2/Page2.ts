import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'Page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController) {

  }

	goToHome() {
	//push another page onto the history stack
	//causing the nav controller to animate the new page in
		this.navCtrl.pop();
	}
}
