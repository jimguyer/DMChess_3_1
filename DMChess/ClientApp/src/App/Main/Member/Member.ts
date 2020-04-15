import { Tabs } from '../../Common/Comps/Tabs/Tabs';
import { Page } from '../../Common/Comps/Page/Page';

import { Nav } from '../../Common/Modules/Nav';
import { EWeb, IResult, Web } from '../../Common/Modules/Web';

import { Games } from '../../Main/Member/Routes/Games/Games';
import { History } from '../../Main/Member/Routes/History/History';
import { Home } from '../../Main/Member/Routes/Home/Home';
import { Players } from '../../Main/Member/Routes/Players/Players';
import { Start } from '../../Main/Member/Routes/Start/Start';
import { User } from '../../Main/Member/Routes/User/User';
import { UserProfiles } from '../../Main/Member/Routes/UserProfiles/UserProfiles';

import { Game } from '../../Main/Member/Views/Game/Game';
import { Membership } from '../../Main/Member/Views/Membership/Membership';
import { Message } from '../../Main/Member/Views/Message/Message';
import { Profile } from '../../Main/Member/Views/Profile/Profile';
import { Profiles } from '../../Main/Member/Views/Profiles/Profiles';
import { Search } from '../../Main/Member/Views/Search/Search';
import { StartEmail } from '../../Main/Member/Views/StartEmail/StartEmail';
import { StartParms } from '../../Main/Member/Views/StartParms/StartParms';

import { GM } from '../../Main/Shared/Modules/Global';
import { Practice } from '../../Main/Shared/Routes/Practice/Practice';
import { Board } from '../../Main/Shared/Views/Board/Board';
import { Phone } from '../../Main/Shared/Views/Phone/Phone';
import { Photo } from '../../Main/Shared/Views/Photo/Photo';

export class Member {
  public static Init(pData: any) {
    //console.log("Member.Init");
    Web.Get((pResult) => Member.Web(pResult), "Member");
    GM.IsAnonymous = false;
    GM.Role = "Member";
    if (!GM.Inited.Member) {
      //console.log("Member.Init.!!!! * GM.Inited.Member=" + GM.Inited.Member);
      //if (!GM.Inited.Tabs) Tabs.Init(); 
      if (!GM.Inited.Board) Board.Init;
      if (!GM.Inited.Game) Game.Init();
      if (!GM.Inited.Games) Games.Init();
      if (!GM.Inited.History) History.Init();
      if (!GM.Inited.Home) Home.Init();
      if (!GM.Inited.Membership) Membership.Init();
      if (!GM.Inited.Message) Message.Init();
      if (!GM.Inited.Players) Players.Init();
      if (!GM.Inited.Profile) Profile.Init();
      if (!GM.Inited.Profiles) Profiles.Init();
      if (!GM.Inited.Search) Search.Init();
      if (!GM.Inited.StartEmail) StartEmail.Init();
      if (!GM.Inited.StartParms) StartParms.Init();
      if (!GM.Inited.Start) Start.Init();
      if (!GM.Inited.User) User.Init();
      if (!GM.Inited.UserProfiles) UserProfiles.Init();
      GM.Inited.Member = true;
    }
  }

  public static Web(pResult: IResult) {
    //console.log("Member.Web");
    //console.log("Member.Web * pResult.Data=" + JSON.stringify(pResult.Data));
    if (pResult.Error > "") {
      alert("Member.Web Error");
    }
    else {
      // Must load UserProfiles first so that the Profile picture will be available for the Board
      //UserProfiles.Load("Data", { IdxDefault: pResult.Data.ProfileIdxDefault, Limit: pResult.Data.ProfilesLimit, Profiles: pResult.Data.Profiles });
      //Games.Load("Data", { Limit: pResult.Data.GamesLimit, Games: pResult.Data.Games });
      //Practice.Load("Data", { Practice: pResult.Data.Practice });      
      Membership.Load("Data", pResult.Data.Membership);
      //Phone.Load("Data", { Carriers: pResult.Data.Carriers, "Phone": pResult.Data.Phone });
      Search.Load(pResult.Data);
      StartParms.Load(pResult.Data);
      UserProfiles.Load(pResult.Data);
      //User.Load("Data", pResult.Data);
    }
  }


  public static Size() {
    //console.log("Member.Size * Nav.Route=" + Nav.Route + " * Nav.View=" + Nav.View);
    GM.Sized = {};

    switch (Nav.Route) {
      case "Games": Games.Size(); break;
      case "History": History.Size(); break;
      case "Home": Home.Size(); break;
      case "Search": Search.Size(); break;
      case "User": User.Size(); break;
      case "UserProfiles": UserProfiles.Size(); break;
    }

    switch (Nav.View) {
      case "User": User.Size(); break;
      case "Game": Game.Size(); break;
      case "Membership": Membership.Size(); break;
      case "Message": Message.Size(); break;
      case "Profile": Profile.Size(); break;
      case "Profiles": Profiles.Size(); break;
      case "Search": Search.Size(); break;
      case "StartEmail": StartEmail.Size(); break;
      case "StartParms": StartParms.Size(); break;
    }
  }
}

export interface IMember {
  GamesLimit: number, Games: boolean, Photo_Src:
  string, UserId: string, NameFirst: string, NameLast: string, Group: string,
  Rating: string, Challenges: string, WinsLosses: string, Search: any, StartEmail: any, StartParms: any,
};
