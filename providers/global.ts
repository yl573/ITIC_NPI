import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NativeStorage } from 'ionic-native';

@Injectable()
export class Global {

  language: string = 'english';
  show_coc: boolean = true; //code of conduct
  show_tac: boolean = true; //terms and conditions

  constructor(public http: Http) {
  	console.log("global initialized")
  	NativeStorage.getItem('show_coc')
    .then(
      data => {console.log(data); this.show_coc = data},
      error => {this.show_coc = true}
    );
    NativeStorage.getItem('show_tac')
    .then(
      data => {console.log(data); this.show_tac = data},
      error => {this.show_tac = true}
    );
    console.log(this.show_coc, this.show_tac);
  }

  dont_show_coc () {
  	this.show_coc = false;
		NativeStorage.setItem('show_coc', false)
		.then(
		   () => console.log('show_coc set to false'),
		   error => console.error('Error storing item', error)
		);
  }

  dont_show_tac () {
  	this.show_tac = false;
  	NativeStorage.setItem('show_tac', false)
		.then(
		   () => console.log('show_tac set to false'),
		   error => console.error('Error storing item', error)
		);
  }

  setLanguage (desiredLang) {
  	this.language = desiredLang;
  }

  getStrings (fileName) {
  	console.log('getting strings from assets/strings/' + fileName);
  	var parent = this;
    return new Promise(function(resolve, reject) {
    	parent.http.get('assets/strings/' + fileName)
    	.map(res => res.json())
    	.subscribe(data => {
    		if(data.hasOwnProperty(parent.language))
    			resolve(data[parent.language]);
    		else
    			resolve(data['english']);
    	});
		});
  }
}
