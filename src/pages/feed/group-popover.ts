import { Component} from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { FilterService } from '../../providers/filter-service';
import { SurveyPage } from '../survey/survey';

@Component({
	template: `
    <ion-list>

      <ion-item>
        <ion-label>Groups with Friends</ion-label>
        <ion-toggle (ionChange)="toggleFriends($event)" checked="{{toggleFriendsSwitch}}"></ion-toggle>
      </ion-item>

      <ion-item>
        <ion-label>Recommendations</ion-label>
        <ion-toggle checked="true"></ion-toggle>
      </ion-item>

      <ion-buttons end>
      <button on-tap="retakeSurvey()" ion-button>Retake Survey</button>
      </ion-buttons>

    </ion-list>
	`
})

export class GroupPopoverPage {
	filter: any;
	toggleFriendsSwitch: boolean = false;

	constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
							private navParams: NavParams,
							private filterService: FilterService) {}

	ngOnInit() {
		if (this.navParams.data) {
			this.filter = this.navParams.get('filter');
			this.toggleFriendsSwitch = this.filter.settings.has_friends;
		}
	}

	toggleFriends(ev) {
		this.filter.settings.has_friends = ev.checked;
		this.filterService.filter_groups(this.filter);
	}

	retakeSurvey() {
		this.viewCtrl.dismiss();
		this.navCtrl.push(SurveyPage);
	}
}
