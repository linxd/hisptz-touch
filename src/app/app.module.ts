import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import {Apps} from "../pages/apps/apps";
import {Account} from "../pages/account/account";
import {TrackerCaptureHome} from "../pages/tracker-capture-home/tracker-capture-home";
import {SettingHome} from "../pages/setting-home/setting-home";
import {ReportHome} from "../pages/report-home/report-home";
import {UpdateManagerHome} from "../pages/update-manager-home/update-manager-home";
import {OrganisationUnits} from "../pages/organisation-units/organisation-units";
import {Profile} from "../pages/profile/profile";
import {Login} from "../pages/login/login";
import {Help} from "../pages/help/help";
import {EventCaptureHome} from "../pages/event-capture-home/event-capture-home";
import {DashBoardHome} from "../pages/dash-board-home/dash-board-home";
import {About} from "../pages/about/about";
import {DataEntryHome} from "../pages/data-entry-home/data-entry-home";
import {ObjectToArray} from "../pipes/object-to-array";
import {AccountName} from "../pipes/account-name";
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,About,DashBoardHome,EventCaptureHome,
    TabsPage,Help,Login,Profile,DataEntryHome,
    Apps,OrganisationUnits,UpdateManagerHome,
    Account,ReportHome,SettingHome,TrackerCaptureHome,ObjectToArray,AccountName
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,About,DashBoardHome,EventCaptureHome,
    TabsPage,Help,Login,Profile,DataEntryHome,
    Apps,OrganisationUnits,UpdateManagerHome,
    Account,ReportHome,SettingHome,TrackerCaptureHome,
  ],
  providers: [Storage]
})
export class AppModule {}