import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';

import { SurveyPage } from '../survey/survey';

@Component({
  selector: 'page-home',
  templateUrl: 'log_in.html'

})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openFeed() {
    this.navCtrl.setRoot(FeedPage);
  }

  openSurvey() {
    this.navCtrl.push(SurveyPage);
  }

}
