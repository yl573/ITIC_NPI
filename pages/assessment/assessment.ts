import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TreeManager } from './tree';

import { Question } from '../question/question';

import { Global } from '../../providers/global';


@Component({
  selector: 'page-assessment',
  templateUrl: 'assessment.html'
})
export class AssessmentPage {

	strings: any = {
		"title": "hi",
		"info": "",
		"start": ""
	}

	tree: any;

  constructor(public navCtrl: NavController, private global: Global) {
  	this.global.getStrings('assessment.json')
    .then((str)=> {
      this.strings = str;
      console.log('get :)');
    })
    .then(()=>this.global.getStrings('tree.json'))
    .then((str)=> {
    	console.log(str);
      this.tree = new TreeManager(str);
      console.log(this.tree.root);
    });
  }

	start() {
		this.navCtrl.push(Question, this.tree.root);
	}

}

