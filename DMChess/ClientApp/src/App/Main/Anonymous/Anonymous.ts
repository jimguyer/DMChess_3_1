import { Nav } from '../../Common/Modules/Nav';
import { EWeb, IResult, Web } from '../../Common/Modules/Web';

import { LogOn } from '../../Main/Anonymous/Routes/LogOn/LogOn';
import { Privacy } from '../../Main/Anonymous/Routes/Privacy/Privacy';
import { Recover } from '../../Main/Anonymous/Routes/Recover/Recover';
import { Register } from '../../Main/Anonymous/Routes/Register/Register';

import { GM } from '../../Main/Shared/Modules/Global';
import { Practice } from '../../Main/Shared/Routes/Practice/Practice';
import { Board } from '../../Main/Shared/Views/Board/Board';
import { Phone } from '../../Main/Shared/Views/Phone/Phone';
import { Photo } from '../../Main/Shared/Views/Photo/Photo';


export class Anonymous {
    public static Init(pData: any = null ) {
        //console.log("Anonymous.Init");
        //console.log("Anonymous.Init * GM.Inited.Anonymous=" + GM.Inited.Anonymous);
        console.log("Anonymous.Init * pData=" + JSON.stringify(pData));
        //Web.Get((pResult) => Anonymous.Web(pResult), "Anonymous");
      if (pData !== undefined && pData !== null) {
        GM.IsAnonymous = true;
        GM.Role = "Anonymous";
        GM.UserId = pData.UserId;
        GM.IsJustLoggedIn = pData.IsJustLoggedIn;
        GM.IsJustRegistered = pData.IsJustRegistered;
      }
      return;
        if (!GM.Inited.Anonymous) {
            //console.log("Anonymous.Init"); 
            if (!GM.Inited.Practice) Practice.Init();
            if (!GM.Inited.Board) Board.Init();
            if (!GM.Inited.LogOn) LogOn.Init();
            if (!GM.Inited.Privacy) Privacy.Init();
            if (!GM.Inited.Recover) Recover.Init();
            if (!GM.Inited.Register) Register.Init();
            if (!GM.Inited.Phone) Phone.Init();
            if (!GM.Inited.Photo) Photo.Init();
            GM.Inited.Anonymous = true;
        }
        //console.log("Anonymous.Init.End");
    }
    public static Web(pResult: IResult) {
        //console.log("Anonymous.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        //console.log("Anonymous.Web * pResult.Data.Carriers=" + JSON.stringify(pResult.Data.Carriers));
        //console.log("Anonymous.Web * pResult.Data.Register=" + JSON.stringify(pResult.Data.Register));
        //console.log("Anonymous.Web * pResult.Data.Practice=" + JSON.stringify(pResult.Data.Practice));
        if (pResult.Error > "") {
            if (GM.IsTest) {
                alert("Anonymous.Web.Error=" + pResult.Error);
            }
        }
        else {
            Phone.Load("Carriers", { Carriers: pResult.Data.Carriers });
            Register.Load("Data", { Data: pResult.Data.Register });
            Practice.Load("Data", { Data: pResult.Data.Practice });
        }
    }

    public static Size() {
        //console.log("Anoymous.Size * Nav.View=" + Nav.View);
        GM.Sized = {};
        switch (Nav.Route) {
            case "Board": Board.Size(); break;
            case "LogOn": LogOn.Size(); break;
            case "Privacy": Privacy.Size(); break;
            case "Recover": Recover.Size(); break;
            case "Register": Register.Size(); break;
        }
        switch (Nav.View) {
            case "Board": Board.Size(); break;
        }
    }
}
