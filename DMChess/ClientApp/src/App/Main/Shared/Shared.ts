import { Nav } from '../../Common/Modules/Nav';
import { Hub } from '../../Common/Modules/Hub';
import { EWeb, IResult, Web } from '../../Common/Modules/Web';
import { Practice } from '../../Main/Shared/Routes/Practice/Practice';
import { GM } from '../../Main/Shared/Modules/Global';
import { Board } from '../../Main/Shared/Views/Board/Board';
import { Loading } from '../../Main/Shared/Routes/Loading/Loading';
import { Phone } from '../../Main/Shared/Views/Phone/Phone';
import { Photo } from '../../Main/Shared/Views/Photo/Photo';

export class Shared {
  public static Init() {
    //console.log("Shared.Init * GM.Inited.Shared=" + GM.Inited.Shared);
    if (!GM.Inited.Shared) {
      if (!GM.Inited.Practice) Practice.Init();
      if (!GM.Inited.Board) Board.Init();
      if (!GM.Inited.Loading) Loading.Init();
      if (!GM.Inited.Phone) Phone.Init();
      if (!GM.Inited.Photo) Photo.Init();
      if (!GM.Inited.Hub) Hub.Init();
      GM.Inited.Common = true;
      //console.log("Shared.Init * GM.ButtonBL.Size=" + JSON.stringify(GM.ButtonBL.Size));
      //console.log("Shared.Init * GM.ButtonBC.Size=" + JSON.stringify(GM.ButtonBC.Size));
      //console.log("Shared.Init * GM.ButtonBR.Size=" + JSON.stringify(GM.ButtonBR.Size));
    }
  }
  public static Web(pResult: IResult) {
    //console.log("Anonymous.Web * pResult.Action=" + JSON.stringify(pResult.Action));
    //console.log("Anonymous.Web * pResult.Data=" + JSON.stringify(pResult.Data));
    if (pResult.Error > "") {
      if (GM.IsTest) alert("Anonymous.Web.Error=" + pResult.Error);
    }
    else {
      switch (pResult.Action) {
        case "GetCarriers": Phone.Load("Carriers", pResult.Data.Carriers); break;
      }
    }
  }
  public static Size() {
    //console.log("Shared.Size * Nav.Route=" + Nav.Route);
    //console.log("Shared.Size * Nav.View=" + Nav.View);
    if (!GM.Sized.Shared) {
      switch (Nav.Route) {
        case "Loading": Loading.Size(); break;
        case "Practice": Practice.Size(); break;
      }
      switch (Nav.View) {
        case "Board": Board.Size(); break;
        case "Phone": Phone.Size(); break;
        case "Photo": Photo.Size(); break;
      }
      GM.Sized.Shared = true;
    }
  }
}
