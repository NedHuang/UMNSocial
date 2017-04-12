import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {

  constructor(public navCtrl: NavController) {

  }

  openFeed(){
    this.navCtrl.setRoot(FeedPage);
  }

}
