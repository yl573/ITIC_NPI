import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TreeManager } from './tree';

//import { ModalController } from 'ionic-angular';
//import { ModalPage } from './modal-page';



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

		test = {
		'value': 'hello',
		'label': 'root',
		'children': [
		{
			'value': 'yo',
			'label': 'yes',
			'children': [
			{
				'value': 'bomba',
				'label': 'yes'
			},
			{
				'value': 'blublu',
				'label': 'no'
			}]
		},
		{
			'value': 'jiju',
			'label': 'yes',
			'children': [
			{
				'value': 'turtle',
				'label': 'yes'
			},
			{
				'value': 'poopoo',
				'label': 'no'
			}]
		}]
	};

	tree: any;

  constructor(public navCtrl: NavController) {
  	this.tree = new TreeManager(this.test);
  	console.log(this.tree.root);
  }

	nextQuestion(index = null) {
		if(index != null)
			this.tree.goToChild(index);
		var newQuestion = new question(this.tree.currentNode);
		this.navCtrl.push(newQuestion);
	}

}

@Component({
  templateUrl: 'question.html'
})
class question {
	text: string = '';
	choices: string[] = [];
	constructor(node) {
		console.log('constructor called');
		console.log('node: ');
		console.log(node.children);
		this.text = node['value'];
		node['children'].foreach((child) => {
			this.choices.push(child['label']);
		});

	}
}
