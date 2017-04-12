import { Component } from '@angular/core';
import { GroupPage } from '../group/group';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Event page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})

export class EventPage {

  event: any;
  group: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    this.event = navParams.get('event');
    this.group = navParams.get('group');
  }


  goToGroup(event) {
    if(this.group) {
      this.navCtrl.push(GroupPage, {
        group: this.group
      });
    } else {
      let alert = this.alertCtrl.create({
        title: 'No Group Found',
        subTitle: 'No group with the name "' + this.event.group + '" was found in our system.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  inviteFriends() {
    let alert = this.alertCtrl.create({
      title: 'Invited Friends',
      subTitle: "Let's hope they love you enough to show up!",
      buttons: ['OK']
    });
    alert.present();
  }

  addToCal() {
    let alert = this.alertCtrl.create({
      title: 'Event Added',
      subTitle: "This event is now in your Google Calendar",
      buttons: ['OK']
    });
    alert.present();
  }

}
