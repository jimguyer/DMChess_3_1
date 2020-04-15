import { Component, OnInit } from '@angular/core';
import { EImg, IAImg, IImg, Img } from '../Common/Ctls/Img';
import { IViewModel, Nav } from '../Common/Modules/Nav';
import { EWeb, IResult, Web } from '../Common/Modules/Web';
import { Win } from '../Common/Modules/Win';
import { Anonymous } from '../Main/Anonymous/Anonymous';
import { Member } from '../Main/Member/Member';
import { IGM, GM } from '../Main/Shared/Modules/Global';
import { Shared } from '../Main/Shared/Shared';
import { EHdr, IHdr, Hdr } from '../Main/Shared/Comps/Hdr/Hdr';
import { EFtr, IFtr, Ftr } from '../Main/Shared/Comps/Ftr/Ftr';
import { Loading } from '../Main/Shared/Routes/Loading/Loading';


@Component({ selector: 'app-root', templateUrl: './Root.html' })
export class Root {
  VM: IVM; static VM: IVM;
  GM: IGM;

  constructor() { this.VM = Root.VM; this.GM = GM; }

  ngOnInit() {
    //console.log("Root.ngOnInit * Nav.View_Event");
    //alert(" \nThe Diamond Chess web site is currently being converted to Angular 7. \n\n Sorry for the inconvenience. \n\n The transition should be completed in February 2020");
  }

  public OnClick(pSender: string) {
    //console.log("Root.OnClick * pSender=" + pSender);
    switch (pSender) {
      case "IconLeft": Web.Get((pResult) => Root.Subscribe(pResult), "Ping", "IconLeft"); break;
      case "IconRight": Web.Get((pResult) => Root.Subscribe(pResult), "Ping", "IconRight"); break;
      case "LogIn": Nav.GoRoute("Click", 'LogOn'); break;
      case "Mat_Button": Nav.GoRoute('Click', 'Mat_Button'); break;
      case "Mat_Card": Nav.GoRoute('Click', 'Mat_Card'); break;
      case "Mat_Formfield": Nav.GoRoute('Click', 'Mat_Formfield'); break;
    }
  }
  //#region Static

  public static Init() {
    //console.log("Root.Init");
    Win.Measure();
    window.onresize = function () { Win.Measure(); Root.Size(); }
    Shared.Init();
    Nav.GoRoute("Boot", "Loading");
    Web.Get((pResult) => this.Subscribe(pResult), "Boot");
    this.VM = {
      Hdr: Hdr.Init({ Type: EHdr.Member, Banner: { Value: "DMC is Loading..." } }, true),
      Ftr: Ftr.Init({ Type: EFtr.Standard, Msg: { Value: "Loading..." } }, false),
      IconL: Img.Init({ Type: EImg.IconL }, false),
      IconR: Img.Init({ Type: EImg.IconR }, false),
      Background: Img.Init({ Type: EImg.Background }, false)
    };
    GM.Inited.Root = true;
    Root.Size();
    //console.log("Root.Init.End * Hdr.Div.Size=" + JSON.stringify(this.VM.Hdr.Div.Size));
    //console.log("Root.Init.End * Hdr.Div.Style=" + JSON.stringify(this.VM.Hdr.Div.Style));
    //console.log("Root.Init.End * Hdr.Banner.Size=" + JSON.stringify(this.VM.Hdr.Banner.Size));
    //console.log("Root.Init.End * Hdr.Banner.Style=" + JSON.stringify(this.VM.Hdr.Banner.Style));
    //console.log("Root.Init.End * Hdr.Banner.Value=" + JSON.stringify(this.VM.Hdr.Banner.Value));
  }

  public static Subscribe(pResult: IResult) {
    //console.log("Root.Web * pResult=" + JSON.stringify(pResult));
    //console.log("Root.Web * pResult.Action=" + pResult.Action);
    //console.log("Root.Web * pResult.Success=" + pResult.Success);
    //console.log("Root.Web * pResult.Data=" + JSON.stringify(pResult.Data));

    var vm = Root.VM;
    switch (pResult.Action) {
      case "Boot":
        //console.log("Root.Web.Boot * pResult.Data.IsAnonymous=" + pResult.Data.IsAnonymous);
        this.VM.Hdr.Banner.Value = "Diamond Chess"
        Anonymous.Init(pResult.Data); Nav.GoRoute("Web" + pResult.Action, "LogOn"); 
        Nav.GoRoute("Web" + pResult.Action, "LogOn"); 
        //Nav.View_Parms = pResult.Data;
        //this.VM.Hdr.Banner.Value = "Diamond Chess"
        //if (pResult.Data.IsAnonymous) { Anonymous.Init(pResult.Data); Nav.GoRoute("Web" + pResult.Action, "LogOn"); }
        //else { Member.Init(pResult.Data); Nav.GoRoute("Web" + pResult.Action, "Home"); }
        //break;
      case "Ping": //console.log("Ping returned"); break;
    }
  }

  public static Size() {
    //console.log("Root.Size");
    GM.Sized = {};
    Shared.Size();
    if (GM.IsAnonymous === null) Loading.Size();
    else if (GM.IsAnonymous) Anonymous.Size();
    else {

      switch (GM.Role) {
        default: Member.Size(); break;
      }
    }
    var vm = this.VM;
    Hdr.Size(this.VM.Hdr, false);
    Ftr.Size(this.VM.Ftr, false);
    Img.Size(this.VM.IconL, false);
    Img.Size(this.VM.IconR, false);
    //console.log("Root.Size Done");
  }

  //#endregion
}
export interface IVM extends IViewModel { Background?: IImg, Hdr: IHdr, Ftr: IFtr }

//import { Component } from '@angular/core';

//@Component({
//  selector: 'app-root',
//  templateUrl: './Root.html'
//})
//export class Root {
//  title = 'app';
//}
