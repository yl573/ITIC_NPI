import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/Login/Login';
import { Terms_and_conditions } from '../pages/Terms_and_conditions/Terms_and_conditions';
import { Code_of_conduct } from '../pages/Code_of_conduct/Code_of_conduct';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Terms_and_conditions,
    Code_of_conduct,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Terms_and_conditions,
    Code_of_conduct,
    Login
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
