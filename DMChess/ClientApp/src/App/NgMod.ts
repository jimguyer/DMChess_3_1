import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { Root } from './Root/Root';
import { NavMenuComponent } from './Default/nav-menu/nav-menu.component';
import { HomeComponent } from './Default/home/home.component';
import { CounterComponent } from './Default/counter/counter.component';
import { FetchDataComponent } from './Default/fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    Root,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [Root]
})
export class NgMod { }
