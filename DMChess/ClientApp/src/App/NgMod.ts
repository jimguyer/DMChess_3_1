import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpXhrBackend } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
//import { HubConnectionBuilder } from '@aspnet/signalr';

import { Root } from './Root/Root';
import { NgRoutes } from './NgRoutes';

import { FieldLeg } from './Common/Combos/FieldLeg/FieldLeg';
import { LabelCtl } from './Common/Combos/LabelCtl/LabelCtl';
import { Buttons } from './Common/Comps/Buttons/Buttons';
import { Ctl } from './Common/Comps/Ctl/Ctl';
import { Menu } from './Common/Comps/Menu/Menu';
import { Page } from './Common/Comps/Page/Page';
import { Labels } from './Common/Comps/Labels/Labels';
import { Radios } from './Common/Comps/Radios/Radios';
import { Tabs } from './Common/Comps/Tabs/Tabs';

import { Hub } from './Common/Modules/Hub';
import { Nav } from './Common/Modules/Nav';


import { Phone } from './Main/Shared/Views/Phone/Phone';
import { Photo } from './Main/Shared/Views/Photo/Photo';

import { LogOn } from './Main/Anonymous/Routes/LogOn/LogOn';
import { Privacy } from './Main/Anonymous/Routes/Privacy/Privacy';
import { Recover } from './Main/Anonymous/Routes/Recover/Recover';
import { Register } from './Main/Anonymous/Routes/Register/Register';

import { Games } from './Main/Member/Routes/Games/Games';
import { History } from './Main/Member/Routes/History/History';
import { Home } from './Main/Member/Routes/Home/Home';
import { Players } from './Main/Member/Routes/Players/Players';
import { Start } from './Main/Member/Routes/Start/Start';
import { User } from './Main/Member/Routes/User/User';
import { UserProfiles } from './Main/Member/Routes/UserProfiles/UserProfiles';
import { Game } from './Main/Member/Views/Game/Game';
import { Membership } from './Main/Member/Views/Membership/Membership';
import { Message } from './Main/Member/Views/Message/Message';
import { Profile } from './Main/Member/Views/Profile/Profile';
import { Profiles } from './Main/Member/Views/Profiles/Profiles';
import { Search } from './Main/Member/Views/Search/Search';
import { StartEmail } from './Main/Member/Views/StartEmail/StartEmail';
import { StartParms } from './Main/Member/Views/StartParms/StartParms';

import { Hdr } from './Main/Shared/Comps/Hdr/Hdr';
import { Ftr } from './Main/Shared/Comps//Ftr/Ftr';
import { GM } from './Main/Shared/Modules/Global';
import { Practice } from './Main/Shared/Routes/Practice/Practice';
import { Loading } from './Main/Shared/Routes/Loading/Loading';
import { Board } from './Main/Shared/Views/Board/Board';

import { NavMenuComponent } from './Default/nav-menu/nav-menu.component';
import { HomeComponent } from './Default/home/home.component';
import { CounterComponent } from './Default/counter/counter.component';
import { FetchDataComponent } from './Default/fetch-data/fetch-data.component';



@NgModule({
  declarations: [
    Root, Hdr, Ftr, Loading, Board, Phone, Photo, Practice, Tabs, FieldLeg, LabelCtl, Buttons, Ctl, Menu, Page, Labels, Radios,
    LogOn, Privacy, Recover, Register,
    Games, History, Home, Players, Start, User, UserProfiles,
    Game,
    Membership, Message, Profile, Profiles, Search, StartEmail, StartParms
    , NavMenuComponent,   HomeComponent, CounterComponent, FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgRoutes
  ],
  providers: [GM, Hub],
  bootstrap: [Root]
})
export class NgMod {
  constructor(private router: Router) {
    //console.log("NgMod.Constructor * router.url=" + router.url);
    Nav.Router = router;
    GM.Http = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    //GM.Hub = new HubConnectionBuilder().withUrl("/Hub").build();
    Root.Init();
  }
}




//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

//import { Root } from './Root/Root';
//import { NavMenuComponent } from './Default/nav-menu/nav-menu.component';
//import { HomeComponent } from './Default/home/home.component';
//import { CounterComponent } from './Default/counter/counter.component';
//import { FetchDataComponent } from './Default/fetch-data/fetch-data.component';

//@NgModule({
//  declarations: [
//    Root,
//    NavMenuComponent,
//    HomeComponent,
//    CounterComponent,
//    FetchDataComponent
//  ],
//  imports: [
//    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
//    HttpClientModule,
//    FormsModule,
//    RouterModule.forRoot([
//      { path: '', component: HomeComponent, pathMatch: 'full' },
//      { path: 'counter', component: CounterComponent },
//      { path: 'fetch-data', component: FetchDataComponent },
//    ])
//  ],
//  providers: [],
//  bootstrap: [Root]
//})
//export class NgMod { }
