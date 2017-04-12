import { Component, ViewChild, ElementRef } from '@angular/core';
import { FilterService } from '../../providers/filter-service';
import { NavController, List, PopoverController, NavParams } from 'ionic-angular';
import { EventPopoverPage } from './event-popover';
import { GroupPopoverPage } from './group-popover';
import { EventPage } from '../event/event';
import { GroupPage } from '../group/group';
import { SurveyPage } from '../survey/survey';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})

export class FeedPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  @ViewChild('groupList', { read: List }) groupList: List;
  @ViewChild('eventList', { read: List }) eventList: List;
  groups: any = [];
  events: any = [];
  query: string = "";
  event_settings: any = {
    friends_attending: false,
    free: false,
    date: {
      day: 11,
      month: 4,
      year: 2017
    }
  };
  group_settings: any = { has_friends: false };
  filter_words = [];
  groups_filter: any = {
    groups: [],
    settings: this.group_settings,
    filter_words: this.filter_words
  };
  events_filter: any = {
    events: [],
    settings: this.event_settings,
    filter_words: this.filter_words
  };


  feedContents: string = "events";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private popoverCtrl: PopoverController,
              private filterService: FilterService) {
    this.filterService.initializeEventsFilter(this.events_filter);
    this.filterService.initializeGroupsFilter(this.groups_filter);
    if (this.navParams.data) {
      if (this.navParams.get('group_name')) {
        this.query = this.navParams.get('group_name').toLowerCase();
        this.filter_words = [this.query];
        console.log(this.filter_words);
        this.groups_filter.filter_words = this.filter_words;
        this.events_filter.filter_words = this.filter_words;
        this.filterService.filter_groups(this.groups_filter);
        this.filterService.filter_events(this.events_filter);
      }
    }
  }


  initializeData() {
    this.events_filter.events = this.events;
    this.groups_filter.groups = this.groups;
  }


  ionViewDidLoad() {
    this.groupList;
  }

  openSurvey() {
    this.navCtrl.push(SurveyPage);
  }


  getItems(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.filter_words = val.toLowerCase().split(" ");
    } else {
      this.filter_words = [];
    }
    this.events_filter.filter_words = this.filter_words;
    this.groups_filter.filter_words = this.filter_words;
    this.filterService.filter_groups(this.groups_filter);
    this.filterService.filter_events(this.events_filter);
  }

  openEventFilter(ev) {
	  	let popover = this.popoverCtrl.create(EventPopoverPage, { filter: this.events_filter });
	  	popover.present({
      ev: ev
	  	});
  }

  openGroupFilter(ev) {
	  	let popover = this.popoverCtrl.create(GroupPopoverPage, { filter: this.groups_filter });
	  	popover.present({
      ev: ev
	  	});
  }

  groupTapped(event, group) {
    this.navCtrl.push(GroupPage, {
      group: group
    });
  }

  eventTapped(event, group_event) {
    var groups = this.filterService.getGroups();
    var group;
    var i;
    for (i = 0; i < groups.length; i++) {
      if (groups[i].name == group_event.group) {
        group = groups[i];
      }
    }
    this.navCtrl.push(EventPage, {
      event: group_event,
      group: group
    });
  }
}
