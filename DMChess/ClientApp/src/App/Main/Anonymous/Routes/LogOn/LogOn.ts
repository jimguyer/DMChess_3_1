import { Component, OnInit } from '@angular/core';
import { ECtl, IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EDiv, IADiv, Div } from '../../../../Common/Ctls/Div';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';



@Component({ templateUrl: './LogOn.html' })

export class LogOn {
  VM: IVM; static VM: IVM;
  constructor() { this.VM = LogOn.VM; }

  ngOnInit() {
    //console.log("LogOn.ngOnInit");
    //console.log("LogOn.ngOnInit Nav.View_Event=" + Nav.View_Event);
    //console.log("LogOn.ngOnInit GM.UserId=" + GM.UserId);
    //console.log("LogOn.ngOnInit Nav.View_Parms=" + JSON.stringify(Nav.View_Parms));
    //console.log("LogOn.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
    //console.log("LogOn.ngOnInit * this.VM.ToggleShow=" + this.VM.ToggleShow);
    //Nav.Router.config.push({ path: "logon2", component: LogOn });
    //console.log(JSON.stringify(router.config));
 
    if (GM.Sized.LogOn == null) LogOn.Size();
    switch (Nav.View_Event) {
      case "Loading_WebBoot":
        LogOn.Load(Nav.View_Event, Nav.View_Parms);
        var msg = "Link_" + Nav.View_Event;
        //if (this.IsJustLoggedOut) msg += "_JustLoggedOut";
        //else if (this.EmailUserId.Ctl.Value !== null) msg += "_UserId";
        LogOn.View({ Show: "Toggle", Msg: msg });
        break;
      case "": break;
      case "Board_ClickExit":
      case "Photo_ClickSkip":
      case "Privacy_ClickOK":
      case "Recover_ClickExit":
      case "Registration_ClickExit": LogOn.View({ Msg: "Link_" + Nav.View_Event }); break;
      default: alert("LogOn.ngOnInit * Unknown Nav.View_Event=" + Nav.View_Event); break;
    }
    //console.log("LogOn.ngOnInit * GM.Sized.LogOn=" + GM.Sized.LogOn);
  }

  public OnChange(pSender) {
    //console.log("OnChange * pSender=" + pSender)
    switch (pSender) {
      case "EmailUserId": break;
      case "Password": break;
    }
  }

  public OnClick(pSender: string) {
    //console.log("LogOn.OnClick * pSender=" + pSender);
    switch (pSender) {
      case "Toggle":
        //console.log("LogOn.OnClick * this.VM.Password.Ctl.CtlType=" + this.VM.Password.Ctl.CtlType);
        this.VM.Password.Ctl.CtlType = this.VM.Password.Ctl.CtlType === ECtl.Password ? ECtl.Textbox : ECtl.Password ;
        LogOn.View({ Show: "Toggle", Msg: "ClickToggle" });
        //console.log("LogOn.OnClick.End * this.VM.Password.Ctl.CtlType=" + this.VM.Password.Ctl.CtlType);
        break;
      case "LogIn":
        GM.EmailUserId = this.VM.EmailUserId.Ctl.Value; GM.Password = this.VM.Password.Ctl.Value;
        LogOn.View({ Enable: "*", Msg: "Web_LogIn" });
        Web.Get((pResult) => LogOn.Web(pResult), "LogIn", this.VM.EmailUserId.Ctl.Value, this.VM.Password.Ctl.Value); break;
      case "Practice": Nav.GoRoute("Click" + pSender, "Practice", "Board"); break;
      case "Privacy": Nav.GoRoute("Click" + pSender, "Privacy"); break;
      case "Recover": Nav.GoRoute("Click" + pSender, "Recover"); break;
      case "Register": Nav.GoRoute("Click" + pSender, "Register", "Registration"); break;
    }
  }
  //#endregion 

  public static Init() {
    //console.log("LogOn.Init");
    var aLabel= { Type: ELabel.TARight, X: .25, W: 3.75, H: 1, F: .8 };
    var aTextbox= { Type: ETextbox.Left, H: 1, F: .7 };
    var aSize = { GapX: Dft.GapX };
    LogOn.VM = {
      Switch: "Password", Disabled: false,
      Div: Div.Init({ Type: EDiv.Border_Black, H: 3 }, false),
      EmailUserId: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "Email/User ID", Ctl: GM.UserId }, ASize: aSize }, false),
      Password: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "Password" }, ASize: aSize }, false),
      Buttons: Button.Inits([
        //{ Value: "Recover", Type: EButton.Left },
        //{ Value: "Register", Type: EButton.Left },
        //{ Value: "Practice", Type: EButton.Center },
        //{ Value: "Privacy", Type: EButton.Center },
        //{ Value: "Log In", Type: EButton.Center }
      ]),
      Recover: Button.Init({ Type: EButton.HomeLeft }, false),
      Register: Button.Init({ Type: EButton.HomeRight }, false),
      Practice: Button.Init({ Type: EButton.HomeCenter }, false),
      Toggle: Button.Init({ Type: EButton.HomeCenter, Value: "Show" }, false),
      Privacy: Button.Init({ Type: EButton.HomeCenter }, false),
      FBLogIn: Img.Init({ Type: EImg.Border_Black, X: 2, W: 5.5, H: 1.25 }, false),
      LogIn: Button.Init({ Type: EButton.HomeCenter }, false)
    };
    if (GM.IsTest) {
      LogOn.VM.Password.Ctl.CtlType = ECtl.Textbox;

      LogOn.VM.EmailUserId.Ctl.Value = GM.Test_EmailUserId;
      LogOn.VM.Password.Ctl.Value = GM.Test_Password;
      LogOn.VM.Toggle.Value = "Hide";
    }
    else {
      LogOn.VM.Password.Ctl.CtlType = ECtl.Password;
      LogOn.VM.Toggle.Value = "Show";
    }

    LogOn.Stack();
    LogOn.Size();

    //console.log("LogOn.Init.End * LogOn.VM.Password.EmailUserId.Label.Size=" + JSON.stringify(LogOn.VM.EmailUserId.Label.Size));
    //console.log("LogOn.Init.End * LogOn.VM.Password.EmailUserId.Label.Style=" + JSON.stringify(LogOn.VM.EmailUserId.Label.Style));
    //console.log("LogOn.Init.End * LogOn.VM.Password.EmailUserId.Label.Value=" + JSON.stringify(LogOn.VM.EmailUserId.Label.Value));
    //console.log("LogOn.Init.End * LogOn.VM.Password.EmailUserId.Ctl.Size=" + JSON.stringify(LogOn.VM.EmailUserId.Ctl.Size));
    //console.log("LogOn.Init.End * LogOn.VM.Password.EmailUserId.Ctl.Style=" + JSON.stringify(LogOn.VM.EmailUserId.Ctl.Style));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Label.Size=" + JSON.stringify(LogOn.VM.Password.Label.Size));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Label.Style=" + JSON.stringify(LogOn.VM.Password.Label.Style));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Label.Value=" + JSON.stringify(LogOn.VM.Password.Label.Value));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Ctl.Size=" + JSON.stringify(LogOn.VM.Password.Ctl.Size));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Ctl.Style=" + JSON.stringify(LogOn.VM.Password.Ctl.Style));
    //console.log("LogOn.Init.End * LogOn.VM.EmailUserId.Label.Value=" + JSON.stringify(LogOn.VM.EmailUserId.Label.Value));
    //console.log("LogOn.Init.End * LogOn.VM.EmailUserId.Ctl.Value=" + JSON.stringify(LogOn.VM.EmailUserId.Ctl.Value));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Label.Value=" + JSON.stringify(LogOn.VM.Password.Label.Value));
    //console.log("LogOn.Init.End * LogOn.VM.Password.Ctl.Value=" + JSON.stringify(LogOn.VM.Password.Ctl.Value));

  }

  public static Stack() {
    //console.log("LogOn.Stack * GM.Hdr_NextY=" + GM.Hdr_NextY);
    //console.log("LogOn.Stack * LogOn.VM.Div.Size.Size.X=" + LogOn.VM.Div.Size.X + " * Y=" + LogOn.VM.Div.Size.X + " * W=" + LogOn.VM.Div.Size.W + " * H=" + LogOn.VM.Div.Size.H);
    var gapY = null;
    Div.Stack(LogOn.VM.Div, { Y: GM.Hdr_NextY }, false);
    LabelCtl.Stack(LogOn.VM.EmailUserId, { Y: LogOn.VM.Div.Size.FirstY, GapY: gapY }, false);
    LabelCtl.Stack(LogOn.VM.Password, { Y: LogOn.VM.EmailUserId.Size.NextY, GapY: gapY }, false);
    Div.Bottom(LogOn.VM.Div, { NextY: LogOn.VM.Password.Size.NextY, GapY: gapY }, false);

    //console.log("LogOn.Stack * LogOn.VM.FieldLeg.Fieldset.Size.NextY=" + LogOn.VM.FieldLeg.Fieldset.Size.NextY);

    Button.Stack(LogOn.VM.Toggle, { Y: LogOn.VM.Div.Size.NextY, GapY: gapY }, false);
    Button.Stack(LogOn.VM.Recover, { Y: LogOn.VM.Toggle.Size.NextY, GapY: gapY }, false); Button.Stack(LogOn.VM.Register, { Y: LogOn.VM.Toggle.Size.NextY, GapY: gapY }, false);
    Button.Stack(LogOn.VM.Practice, { Y: LogOn.VM.Recover.Size.NextY, GapY: gapY }, false);
    Button.Stack(LogOn.VM.Privacy, { Y: LogOn.VM.Practice.Size.NextY, GapY: gapY }, false);
    Button.Stack(LogOn.VM.FBLogIn, { Y: LogOn.VM.Privacy.Size.NextY, GapY: gapY }, false);
    Button.Stack(LogOn.VM.LogIn, { Y: LogOn.VM.FBLogIn.Size.NextY, GapY: gapY }, false);


    //console.log("LogOn.Stack.End * LogOn.VM.Div.Size.X=" + LogOn.VM.Div.Size.X + " * Y=" + LogOn.VM.Div.Size.X + " * W=" + LogOn.VM.Div.Size.W + " * H=" + LogOn.VM.Div.Size.H + " * FirstY=" + LogOn.VM.Div.Size.FirstY + " * NextY=" + LogOn.VM.Div.Size.NextY);
    //console.log("LogOn.Stack.End * LogOn.VM.EmailUserId.Size.X=" + LogOn.VM.EmailUserId.Size.X + " * Y=" + LogOn.VM.EmailUserId.Size.X + " * W=" + LogOn.VM.EmailUserId.Size.W + " * H=" + LogOn.VM.EmailUserId.Size.H + " * NextY=" + LogOn.VM.EmailUserId.Size.NextY);
    //console.log("LogOn.Stack.End * LogOn.VM.Password_Hide.Size.X=" + LogOn.VM.Password_Hide.Size.X + " * Y=" + LogOn.VM.Password_Hide.Size.X + " * W=" + LogOn.VM.Password_Hide.Size.W + " * H=" + LogOn.VM.Password_Hide.Size.H + " * NextY=" + LogOn.VM.Password_Hide.Size.NextY);


    //console.log("LogOn.Stack * LogOn.VM.EmailUserId.Size * Y=" + LogOn.VM.EmailUserId.Size.Y + " * H=" + LogOn.VM.EmailUserId.Size.H + " * NextY=" + LogOn.VM.EmailUserId.Size.NextY );
    //console.log("LogOn.Stack * LogOn.VM.Password_Hide.Size * Y=" + LogOn.VM.Password_Hide.Size.Y + " * H=" + LogOn.VM.Password_Hide.Size.H + " * NextY=" + LogOn.VM.Password_Hide.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.Password_Show.Size * Y=" + LogOn.VM.Password_Show.Size.Y + " * H=" + LogOn.VM.Password_Show.Size.H + " * NextY=" + LogOn.VM.Password_Show.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.FieldLeg.Fieldset.Size * Y=" + LogOn.VM.FieldLeg.Fieldset.Size.Y + " * H=" + LogOn.VM.FieldLeg.Fieldset.Size.H + " * NextY=" + LogOn.VM.FieldLeg.Fieldset.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.Toggle_Hide.Size * Y=" + LogOn.VM.Toggle_Hide.Size.Y + " * H=" + LogOn.VM.Toggle_Hide.Size.H + " * NextY=" + LogOn.VM.Toggle_Hide.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.Toggle_Show.Size * Y=" + LogOn.VM.Toggle_Show.Size.Y + " * H=" + LogOn.VM.Toggle_Show.Size.H + " * NextY=" + LogOn.VM.Toggle_Show.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.Recover.Size * Y=" + LogOn.VM.Recover.Size.Y + " * H=" + LogOn.VM.Recover.Size.H + " * NextY=" + LogOn.VM.Recover.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.Practice.Size * Y=" + LogOn.VM.Practice.Size.Y + " * H=" + LogOn.VM.Practice.Size.H + " * NextY=" + LogOn.VM.Practice.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.Privacy.Size * Y=" + LogOn.VM.Privacy.Size.Y + " * H=" + LogOn.VM.Privacy.Size.H + " * NextY=" + LogOn.VM.Privacy.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.FBLogIn.Size * Y=" + LogOn.VM.FBLogIn.Size.Y + " * H=" + LogOn.VM.FBLogIn.Size.H + " * NextY=" + LogOn.VM.FBLogIn.Size.NextY);
    //console.log("LogOn.Stack * LogOn.VM.LogIn.Size * Y=" + LogOn.VM.FBLogIn.Size.Y + " * H=" + LogOn.VM.LogIn.Size.H + " * NextY=" + LogOn.VM.LogIn.Size.NextY);

  }

  public static Size() {
    //console.log("LogOn.Size * GM.Sized.LogOn=" + GM.Sized.LogOn);
    var vm = LogOn.VM;
    return;

    Div.Size(LogOn.VM.Div, false);
    LabelCtl.Size(LogOn.VM.EmailUserId, false);
    LabelCtl.Size(LogOn.VM.Password, false); 
    //Button.Sizes(LogOn.VM.Buttons, false);
    Button.Size(LogOn.VM.Toggle, false);
    Button.Size(LogOn.VM.Recover, false);
    Button.Size(LogOn.VM.Register, false);
    Button.Size(LogOn.VM.Practice, false);
    Button.Size(LogOn.VM.Privacy, false);
    Img.Size(LogOn.VM.FBLogIn, false);
    Img.Size(LogOn.VM.LogIn, false);
    GM.Sized.LogOn = true;

    //console.log("LogOn.Size * GM.Sized.LogOn=" + GM.Sized.LogOn);
    //console.log("LogOn.Size.End * LogOn.VM.Div.Size=" + JSON.stringify(LogOn.VM.Div.Size));
    //console.log("LogOn.Size.End * LogOn.VM.Div.Style=" + JSON.stringify(LogOn.VM.Div.Style));

    //console.log("LogOn.Size * LogOn.VM.EmailUserId.Label.Size=" + JSON.stringify(LogOn.VM.EmailUserId.Label.Size));
    //console.log("LogOn.Size * LogOn.VM.EmailUserId.Label.Style=" + JSON.stringify(LogOn.VM.EmailUserId.Label.Style));
    //console.log("LogOn.Size * LogOn.VM.EmailUserId.Ctl.Size=" + JSON.stringify(LogOn.VM.EmailUserId.Ctl.Size));
    //console.log("LogOn.Size * LogOn.VM.EmailUserId.Ctl.Style=" + JSON.stringify(LogOn.VM.EmailUserId.Ctl.Style));

    //console.log("LogOn.Size * LogOn.VM.Password_Hide.Ctl.Size=" + JSON.stringify(LogOn.VM.Password_Hide.Ctl.Size));

    //console.log("LogOn.Size * LogOn.VM.EmailUserId.Data.Style=" + JSON.stringify(LogOn.VM.EmailUserId.Data.Style));
    //console.log("LogOn.Size * LogOn.VM.Password_Hide.Data.Style=" + JSON.stringify(LogOn.VM.Password_Hide.Data.Style));


    //console.log("LogOn.Size * LogOn.VM.Password_Show.Label.Size=" + JSON.stringify(LogOn.VM.Password_Show.Label.Size));
    //console.log("LogOn.Size * LogOn.VM.Password_Show.Data.Size=" + JSON.stringify(LogOn.VM.Password_Show.Data.Size));
    //console.log("LogOn.Size * LogOn.VM.Password_Show.Label.Style=" + JSON.stringify(LogOn.VM.Password_Show.Label.Style));
    //console.log("LogOn.Size * LogOn.VM.Password_Show.Data.Style=" + JSON.stringify(LogOn.VM.Password_Show.Data.Style));

    //console.log("LogOn.Size * LogOn.VM.Login.Size=" + JSON.stringify(LogOn.VM.LogIn.Size));
    //console.log("LogOn.Size * LogOn.VM.Login.Style=" + JSON.stringify(LogOn.VM.LogIn.Style));


  }

  public static Load(pEvent: string, pObj: any) {
    console.log("LogOn.Load * pEvent=" + pEvent +  " * pObj="  + JSON.stringify(pObj));
    var vm = LogOn.VM;
    if (pObj !== undefined && pObj !== null) {
      if (pObj.UserId !== null) LogOn.VM.EmailUserId.Ctl.Value = pObj.UserId;
      LogOn.VM.IsJustLoggedOut = pObj.IsJustLoggedOut;
      GM.UserId = pObj.UserId;
    }
  }

  public static Web(pResult: IResult) {
    //console.log("LogOn.Web * pResult=" + JSON.stringify(pResult));
    //console.log("LogOn.Web * pResult=" + JSON.stringify(pResult.Action));
    //console.log("LogOn.Web * pResult=" + JSON.stringify(pResult.Data));
    var vm = LogOn.VM;

    switch (pResult.Action) {
      case "LogIn":
        if (pResult.Error > "") {
          LogOn.VM.Web = EWeb.Done;
          LogOn.View({ Show: "Toggle", Msg: "Error_" + pResult.Error });
        } else window.location.reload();
        break;
      default: alert("LogOn.Web * Unknown pResult.Action * " + pResult.Action); break;
    }
  }

  public static View(pObj: any) {
    //console.log("LogOn.View");
    var vm = LogOn.VM;

    if (pObj.Show != null) {
      //console.log("pObj.Show=" + pObj.Show);
      switch (pObj.Show) {
        case "Toggle":
          LogOn.VM.Toggle.Value = LogOn.VM.Password.Ctl.CtlType === ECtl.Textbox ? 'Hide' : 'Show';
          break;
        default: alert("LogOn.View.Show * Unknown=" + pObj.Show); break;
      }
    }
    if (pObj.Enable != null) {
      //console.log("pObj.Enable=" + pObj.Enable);
      switch (pObj.Enable) {
        case "*": LogOn.VM.Disabled = LogOn.VM.Web != EWeb.Done; break;
        default: alert("LogOn.View.Enable * Unknown=" + pObj.Enable); break;
      }
    }
    if (pObj.Msg != null) {
      //console.log("pObj.Msg=" + pObj.Msg);
      switch (pObj.Msg) {
        case "Change":
          //console.log("VM.LogOn.Password.length=" + VM.LogOn.Password.length);
          if (LogOn.VM.EmailUserId.Ctl.Value == "") GM.Msg = "Enter a User ID or Email.";
          else if (LogOn.VM.Password.Ctl.Value.length === 0) this.View({ Msg: "Error_Password_Blank" });
          else if (LogOn.VM.Password.Ctl.Value.length < 4) this.View({ Msg: "Error_Password_Short" });
          else if (LogOn.VM.Password.Ctl.Value.length > 10) this.View({ Msg: "Error_Password_Long" });
          else GM.Msg = "You may log in.";
          break;
        case "ClickToggle": GM.Msg = LogOn.VM.Password.Ctl.CtlType === ECtl.Textbox ? "Password is visible." : "Password is hidden."; break;
        case "Error_LogInFailed": GM.Msg = "Log in invalid"; break;
        case "Error_EmailInvalid": GM.Msg = "The email is invalid"; break;
        case "Error_FB": GM.Msg = "Facebook log in failed."; break;
        case "Error_Password_Blank": GM.Msg = "Enter a password."; break;
        case "Error_Password_Short": GM.Msg = "The password is too short."; break;
        case "Error_Password_Long": GM.Msg = "The password is too long."; break;

        case "Error_InvalidPassword": GM.Msg = "Password is incorrect"; break;
        case "Error_LogInFailed": GM.Msg = "Log in failed"; break;

        case "Link_Loading_WebBoot": GM.Msg = "Please LogIn or register."; break;
        case "Link_Loading_WebBoot_JustLoggedOut": GM.Msg = "You have logged out, " + GM.UserId; break;
        case "Link_Loading_WebBoot_UserId": GM.Msg = GM.UserId + ", you logged out last visit."; break;
        case "Link_Board_ClickExit": GM.Msg = "You have exited the practice Board."; break;
        case "Link_Home_WebLogOut": GM.Msg = "You have logged out."; break;
        case "Link_Photo_ClickSkip": GM.Msg = GM.UserId + ", You may log in."; break;
        case "Link_Privacy_ClickOK": GM.Msg = "You have exited privacy."; break;
        case "Link_Recover_ClickExit": GM.Msg = "You have exited recovery."; break;
        case "Link_Registration_ClickExit": GM.Msg = "Registration was cancelled."; break;

        case "Req_EmailUserId": GM.Msg = "Email or User ID required"; break;
        case "Req_Password": GM.Msg = "Password is required"; break;
        case "Web_LogIn": GM.Msg = "Logging you in..."; break;
        case "Web_LogInFB": GM.Msg = "Logging you in with Face Book..."; break;
        case "Web_LogInSuccess": GM.Msg = "Log in successful..."; break;
        default: alert("LogOn.View.Msg * Unknown=" + pObj.Msg); break;
      }
    }
  }
}

interface IVM extends IViewModel {
  IsJustLoggedOut?: boolean;
  EmailUserId: ILabelCtl;
  Password: ILabelCtl;
  Toggle: IButton;
  Recover: IButton;
  Register: IButton;
  Practice: IButton;
  Privacy: IButton;
  LogIn: IButton;
  FBLogIn?: IButton;
}
