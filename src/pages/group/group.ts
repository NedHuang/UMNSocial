import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Group page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {

  group: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    this.group = navParams.get('group');
  }

  endorse() {
    let alert = this.alertCtrl.create({
      title: 'Endorsed',
      subTitle: "Thank you! Your endorsement means this group is more likely to show up in feeds of those with similar interests to you.",
      buttons: ['OK']
    });
    alert.present();
  }

  watch() {
    let alert = this.alertCtrl.create({
      title: 'Watching',
      subTitle: "Events from this group will now always show in your recommendations.",
      buttons: ['OK']
    });
    alert.present();
  }

  openFacebook() {
    let alert = this.alertCtrl.create({
      title: 'Facebook',
      subTitle: "Pretend this opened their facebook page.",
      buttons: ['OK']
    });
    alert.present();
  }

  goToEvents() {
    this.navCtrl.setRoot(FeedPage, {group_name: this.group.name});
  }

}
