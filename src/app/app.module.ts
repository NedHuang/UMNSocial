import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/log_in/log_in';
import { FeedPage } from '../pages/feed/feed';
import { EventPopoverPage } from '../pages/feed/event-popover';
import { GroupPopoverPage } from '../pages/feed/group-popover';
import { FilterService } from '../providers/filter-service';
import { SurveyPage } from '../pages/survey/survey';
import { EventPage } from '../pages/event/event';
import { GroupPage } from '../pages/group/group';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    SurveyPage,
    EventPage,
    EventPopoverPage,
    GroupPopoverPage,
    GroupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
    SurveyPage,
    EventPage,
    EventPopoverPage,
    GroupPopoverPage,
    GroupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FilterService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
