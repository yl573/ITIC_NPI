import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/Login/Login';
import { Terms_and_conditions } from '../pages/Terms_and_conditions/Terms_and_conditions';
import { Code_of_conduct } from '../pages/Code_of_conduct/Code_of_conduct';
import { Main_menu } from '../pages/Main_menu/Main_menu';

import { AboutPage } from '../pages/about/about';
import { InformationPage } from '../pages/information/information';
import { ResourcesPage } from '../pages/resources/resources';
import { ContactPage } from '../pages/contact/contact';
import { AssessmentPage } from '../pages/assessment/assessment';

import { TwentyfourPage } from '../pages/twentyfour/twentyfour';
import { MisconceptionPage } from '../pages/Misconception/Misconception';
import { LatchPage } from '../pages/latch/latch';
import { ImportancePage } from '../pages/importance/importance';
import { DietPage } from '../pages/diet/diet';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Terms_and_conditions,
    Code_of_conduct,
    Login,
    Main_menu,
    AboutPage,
    InformationPage,
    ResourcesPage,
    ContactPage,
    AssessmentPage,
    TwentyfourPage,
    MisconceptionPage,
    LatchPage,
    ImportancePage,
    DietPage
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
    Login,
    Main_menu,
    AboutPage,
    InformationPage,
    ResourcesPage,
    ContactPage,
    AssessmentPage,
    TwentyfourPage,
    MisconceptionPage,
    LatchPage,
    ImportancePage,
    DietPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
