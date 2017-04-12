import { Component} from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FilterService } from '../../providers/filter-service';
import { SurveyPage } from '../survey/survey';

@Component({
  template: `
      <ion-list>

      <ion-item>
        <ion-label>Set Beginning Date</ion-label>
        <ion-datetime (ionChange)="setDate($event)" displayFormat="MMM D, YYYY" [(ngModel)]="todaysDate"
          min="2017-04-11"
          max="2018-12-31">
        </ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label>Free</ion-label>
        <ion-toggle (ionChange)="toggleFree($event)" checked="{{toggleFreeSwitch}}"></ion-toggle>
      </ion-item>

      <ion-item>
        <ion-label>Friends attending</ion-label>
        <ion-toggle (ionChange)="toggleFriends($event)" checked="{{toggleFriendsSwitch}}"></ion-toggle>
      </ion-item>

      <ion-item>
        <ion-label>Recommendations</ion-label>
        <ion-toggle checked="true"></ion-toggle>
      </ion-item>


    </ion-list>
		<ion-buttons end>
		<button on-tap="retakeSurvey()" ion-button>Retake Survey</button>
		</ion-buttons>
	`
})

export class EventPopoverPage {

	filter: any;
	toggleFreeSwitch: boolean = false;
	toggleFriendsSwitch: boolean = false;
  todaysDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              private navParams: NavParams,
							private filterService: FilterService) {}

  ngOnInit() {
    if (this.navParams.data) {
			this.filter = this.navParams.get('filter');
			this.toggleFreeSwitch = this.filter.settings.free;
			this.toggleFriendsSwitch = this.filter.settings.friends_attending;
    }
  }

  setDate(ev) {
    this.filter.settings.date.day = ev.day.value;
    this.filter.settings.date.month = ev.month.value;
    this.filter.settings.date.year = ev.year.value;
		this.filterService.filter_events(this.filter);
  }

  toggleFriends(ev) {
    this.filter.settings.friends_attending = ev.checked;
		this.filterService.filter_events(this.filter);
  }

  toggleFree(ev) {
    this.filter.settings.free = ev.checked;
		this.filterService.filter_events(this.filter);
  }

  retakeSurvey() {
    this.viewCtrl.dismiss();
    this.navCtrl.push(SurveyPage);
  }
}
