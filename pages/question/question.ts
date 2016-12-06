import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Question page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'question.html'
})
export class Question{
	text: string = 'hello';
	choices: string[] = [];

	constructor(
		public navCtrl: NavController,
		public params: NavParams
	) {
		console.log(params);
	  this.text = params.get('value');
	  if(params.get('children').length == 0) {
	  	this.choices.push('finish');
	  }
	  else {
	  	Array.prototype.forEach.call(params.get('children'), child => {
				this.choices.push(child['label']);
			});
	  }
		console.log(this.text)
		console.log(this.choices);
	}

	nextQuestion(index) {
		console.log(index);
		if(this.params.get('children').length > 0) {
			this.navCtrl.push(Question, this.params.get('children')[index]);
		}
		else {
			console.log('assessment finished');
		}
	}
}
