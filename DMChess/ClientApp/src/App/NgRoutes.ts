import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loading } from './Main/Shared/Routes/Loading/Loading';
import { Practice } from './Main/Shared/Routes/Practice/Practice';
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

const routes: Routes = [

  { path: '', component: Loading, pathMatch: 'full' },
  { path: 'Loading', component: Loading },
  { path: 'Practice', component: Practice },

  { path: 'LogOn', component: LogOn },
  { path: 'Privacy', component: Privacy },
  { path: 'Recover', component: Recover },
  { path: 'Register', component: Register },

  { path: 'Games', component: Games },
  { path: 'History', component: History },
  { path: 'Home', component: Home },
  { path: 'Players', component: Players },
  { path: 'Start', component: Start },
  { path: 'User', component: User },
  { path: 'UserProfiles', component: UserProfiles },

  { path: "**", redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgRoutes { }
