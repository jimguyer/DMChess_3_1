import { Component, OnInit } from '@angular/core';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ templateUrl: './Register.html' })

export class Register {
  VM: IVM; static VM: IVM;
  constructor() { this.VM = Register.VM; }

  ngOnInit() {
    //console.log("Register.ngOnInit");
    //console.log("Register.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
    //console.log("Register.ngOnInit pView_Event=" + Nav.View_Event);
    Nav.Route_VM = this.VM;
    Nav.Route_VM.View = Nav.View
    //console.log("Register.constructor * this.VM.Email.Size=" + JSON.stringify(this.VM.Email.Size));
    switch (Nav.View_Event) {
      case "App_Boot": break;
      case "LogOn_Register":
        this.VM.View = "Register";
        break;
    }
  }
  public OnChange(pSender) {
    //console.log("Register.OnChange * pSender=" + pSender)
    Register.View({ Enables: "*", Msg: "Info_Change" });
  }

  public OnClick(pSender: string) {
    //console.log("Register.OnClick * pSender=" + pSender);
    var vm = Register.VM;

    switch (pSender) {
      case "IconLeft":
        vm.Email.Ctl.Value = "LisaGuyer@hotmail.com";
        vm.UserId.Ctl.Value = "DawnStick";
        vm.Password_Hide.Ctl.Value = "1234";
        vm.Password_Show.Ctl.Value = "1234";
        vm.Code.Ctl.Value = "99999";
      //vm.Register.Disabled = false;
      case "IconRight":
        this.OnClick("Register"); break;
      case "CodeImg": Web.Get((pResult) => Register.Web(pResult), "Code"); break;
      case "Exit": Nav.GoRoute("Click" + pSender, "LogOn"); break;
      case "Register":
        var data = { Email: vm.Email.Ctl.Value, UserId: vm.UserId.Ctl.Value, Password: vm.Password_Hide.Ctl.Value, Code: vm.Code.Ctl.Value }
        Web.Post((pResult) => Register.Web(pResult), "Register", data);
        break;
      case "Toggle": vm.Switch = vm.Switch === "Password" ? "Text" : "Password"; Register.View({ Show: "Toggle", Msg: "Info_Toggle" }); break;
    }
  }

  public static Init() {
    //console.log("Register.Init");
    //#region VM
    var aLabel: IALabel = { Type: ELabel.TARight, X: .25, W: 2.5, H: 1, F: .75 }
    var aTextbox: IATextbox = { Type: ETextbox.Left }
    var aImg: IAImg = { Type: EImg.Border_Black }
    var aSize: IASize = { GapX: null, GapY: null }

    var w: 2.5;
    var gapX = null;
    Register.VM = {
      IconL: Img.Init({ Type: EImg.IconL }, false),
      IconR: Img.Init({ Type: EImg.IconR }, false),
      Code_Length: 5,
      Disabled: false, View: "Registration", Switch: "Text",
      FieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 5 }, ALegend: { X: 2.5, W: 5, Value: "Register" } }, false),
      Email: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "Email", Ctl: "" }, ASize: aSize }, false),
      UserId: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "UserId", Ctl: "" }, ASize: aSize }, false),
      Password_Hide: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "Password", Ctl: "" }, ASize: aSize }, false),
      Password_Show: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "Password", Ctl: "" }, ASize: aSize }, false),
      CodeImg: LabelCtl.Init({ ALabel: aLabel, AImg: aImg, AValues: { Label: "Code", Ctl: "" }, ASize: aSize }, false),
      Code: LabelCtl.Init({ ALabel: aLabel, ATextbox: aTextbox, AValues: { Label: "Code", Ctl: "" }, ASize: aSize }, false),
      Register: Button.Init({ Type: EButton.Right }, false),
      Toggle_Hide: Button.Init({ Type: EButton.Center }, false),
      Toggle_Show: Button.Init({ Type: EButton.Center }, false),
      Buttons: Button.Inits([{ Value: "Exit", Type: EButton.Left }, { Value: "Send", Type: EButton.Right }]),
    };
    var vm = Register.VM;
    if (GM.IsTest) {
      vm.Email.Ctl.Value = "LisaGuyer@hotmail.com";
      vm.UserId.Ctl.Value = "DawnStick";
      vm.Password_Hide.Ctl.Value = "1234";
      vm.Password_Show.Ctl.Value = "1234";
      vm.Code.Ctl.Value = "99999";
      //vm.Register.Disabled = false;
    }
    //console.log("Register.Init * vm.Email.Label.Size=" + JSON.stringify(vm.Email.Label.Size));
    Register.Stack();
    Register.Size();
  }

  public static Stack() {
    //console.log("Register.Stack");
    var gapY = null;
    FieldLeg.Stack(Register.VM.FieldLeg, { Y: GM.Hdr_NextY, GapY: gapY }, false);
    LabelCtl.Stack(Register.VM.Email, { Y: Register.VM.FieldLeg.Fieldset.Size.FirstY, GapY: gapY }, false);
    LabelCtl.Stack(Register.VM.UserId, { Y: Register.VM.Email.Label.Size.NextY, GapY: gapY }, false);
    LabelCtl.Stack(Register.VM.Password_Hide, { Y: Register.VM.UserId.Size.NextY, GapY: gapY }, false);
    LabelCtl.Stack(Register.VM.Password_Show, { Y: Register.VM.UserId.Size.NextY, GapY: gapY }, false);
    LabelCtl.Stack(Register.VM.CodeImg, { Y: Register.VM.Password_Hide.Size.NextY, GapY: gapY }, false);
    LabelCtl.Stack(Register.VM.Code, { Y: Register.VM.CodeImg.Size.NextY, GapY: gapY }, false);
    Fieldset.Bottom(Register.VM.FieldLeg.Fieldset, { NextY: Register.VM.Code.Size.NextY, GapY: gapY }, true);

    //console.log("Register.Stack.End --------------------------------------------------------------------------------------------------------------------");
    //console.log("Register.Stack.End * Register.VM.FieldLeg.Fieldset.Size.Y=" + Register.VM.FieldLeg.Fieldset.Size.Y + " * H=" + Register.VM.FieldLeg.Fieldset.Size.H + " * FirstY=" + Register.VM.FieldLeg.Fieldset.Size.FirstY + " * NextY=" + Register.VM.FieldLeg.Fieldset.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.FieldLeg.Legend.Size.Y=" + Register.VM.FieldLeg.Legend.Size.Y + " * H=" + Register.VM.FieldLeg.Legend.Size.H + " * FirstY=" + Register.VM.FieldLeg.Legend.Size.FirstY + " * NextY=" + Register.VM.FieldLeg.Legend.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.Email.Size.Y=" + Register.VM.Email.Size.Y + " * H=" + Register.VM.Email.Size.H + " * NextY=" + Register.VM.Email.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.UserId.Size.Y=" + Register.VM.UserId.Size.Y + " * H=" + Register.VM.UserId.Size.H + " * NextY=" + Register.VM.UserId.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.Password_Hide.Size.Y=" + Register.VM.Password_Hide.Size.Y + " * H=" + Register.VM.Password_Hide.Size.H + " * NextY=" + Register.VM.Password_Hide.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.Password_Show.Size.Y=" + Register.VM.Password_Show.Size.Y + " * H=" + Register.VM.Password_Show.Size.H + " * NextY=" + Register.VM.Password_Show.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.CodeImg.Size.Y=" + Register.VM.CodeImg.Size.Y + " * H=" + Register.VM.CodeImg.Size.H + " * NextY=" + Register.VM.CodeImg.Size.NextY);
    //console.log("Register.Stack.End * Register.VM.Code.Size.Y=" + Register.VM.Code.Size.Y + " * H=" + Register.VM.Code.Size.H + " * NextY=" + Register.VM.Code.Size.NextY);
    //console.log("Register.Stack.End --------------------------------------------------------------------------------------------------------------------");
    //console.log("Register.Stack.End * Register.VM.FieldLeg.Fieldset.Size" + JSON.stringify(Register.VM.FieldLeg.Fieldset.Size));
    //console.log("Register.Stack.End * Register.VM.FieldLeg.Fieldset.Style" + JSON.stringify(Register.VM.FieldLeg.Fieldset.Style));
  }

  public static Size() {
    //console.log("Register.Size");
    var vm = Register.VM;

    //Size.ViewModel(vm, false);
    Img.Size(vm.IconL); Img.Size(vm.IconR);
    FieldLeg.Size(vm.FieldLeg, false);
    LabelCtl.Size(vm.Email, false);
    LabelCtl.Size(vm.UserId, false);
    LabelCtl.Size(vm.Password_Hide, false);
    LabelCtl.Size(vm.Password_Show, false);
    LabelCtl.Size(vm.CodeImg, false);
    LabelCtl.Size(vm.Code, false);
    Button.Size(vm.Toggle_Hide, false);
    Button.Size(vm.Toggle_Show, false);
    Button.Size(vm.Register);
    Button.Sizes(vm.Buttons);
    //console.log("Register.Size * vm.Email.Label.Style.left=" + vm.Email.Label.Style.left);
    //console.log("Register.Size * vm.Email.Label.Style=" + JSON.stringify(vm.Email.Label.Style));
  }

  public static Load(pEvent: string, pCtl: any) {
    //console.log("Register.Load * pCtl=" + JSON.stringify(pCtl));
    var vm = Register.VM;
    switch (pEvent) {
      case "Ctl":
        vm.Web = EWeb.Done;
        vm.UserId.Ctl.Value = pCtl.Ctl.UserId;
        vm.Password_Hide.Ctl.Value = pCtl.Ctl.Password;
        vm.Password_Show.Ctl.Value = pCtl.Ctl.Password;
        vm.CodeImg.Ctl.Src = pCtl.Ctl.CodeImg_Src;
        vm.Code.Ctl.Value = GM.IsTest ? "99999" : "";
        Register.View({ Enables: "*" });
        break;
    }
  }
  public static Web(pResult: any) {
    //console.log("Register.Web * pResult.Action=" + pResult.Action);
    //console.log("Register.Web * pResult.Error=" + pResult.Error);
    //console.log("Register.Web * pResult.Ctl=" + JSON.stringify(pResult.Ctl));
    var vm = Register.VM;
    vm.Web = EWeb.Done;

    if (pResult.Error > "") Register.View({ Enables: "*", Msg: "Error_" + pResult.Error });
    else {
      switch (pResult.Method) {
        case "Get":
          switch (pResult.Action) {
            case "Code": vm.CodeImg.Ctl.Src = pResult.Ctl; break;
            default: alert("Register.Web.Get * Unknown Action=" + pResult.Action);
          }
          break;
        case "Post":
          switch (pResult.Action) {
            case "Register":
              GM.UserId = vm.UserId.Ctl.Value;
              GM.Password = vm.Switch === "Password" ? vm.Password_Hide.Ctl.Value : vm.Password_Show.Ctl.Value;
              Nav.GoView("Web" + pResult.Action, 'Phone'); break;
            default: alert("Register.Web.Post * Unknown Action=" + pResult.Action);
          }
          break;
      }
      Register.View({ Enables: "*" });
    }
  }
  public static View(pObj) {
    var vm = Register.VM;
    if (pObj.Show !== undefined) {
      //console.log("Register.View * pObj=" + JSON.stringify(pObj));
      switch (pObj.Show) {
        case "Toggle": vm.Switch === 'Text' ? 'Hide' : 'Show'; break;
        default: alert("Register.View.Show * Unknown=" + pObj.Show); break;
      }
    }
    if (pObj.Enables !== undefined) {
      //console.log("Register.View.Enables=" + pObj.Enables);
      switch (pObj.Enables) {
        case "*": vm.Disabled = vm.Web != EWeb.Done; this.View({ Enable: "Register" }); break;
        default: alert("Register.View.Enables * Unknown" + pObj.Enables); break;
      }
    }

    if (pObj.Enable !== undefined) {
      //console.log("Register.View.Enable=" + pObj.Enable);
      //console.log("Register.View.Enable vm.UserId.Ctl.Value.length=" + vm.UserId.Ctl.Value.length);
      //console.log("Register.View.Enable vm.Password_Hide.Ctl.Value.length=" + vm.Password_Hide.Ctl.Value.length);
      //console.log("Register.View.Enable vm.Code.Ctl.Value.length=" + vm.Code.Ctl.Value.length);
      switch (pObj.Enable) {
        case "Register": vm.Register.Disabled = vm.UserId.Ctl.Value.length < 3 || vm.Password_Hide.Ctl.Value.length < 3 || vm.Code.Ctl.Value.length !== vm.Code_Length; break;
        //!UtilitySvc.EmailFunc("Validate", { Email: vm.Email }) ||
        default: alert("Register.View.Enable * Unknown" + pObj.Enable); break;
      }
    }
    if (pObj.Web !== undefined) {
      //console.log("RegisterSvc.View * pObj.Result=" + pObj.Web);
      switch (pObj.Web) {
        case "Code": vm.CodeImg.Ctl.Src = pObj.Ctl; vm.Web = EWeb.Done; break;
      }
    }
    if (pObj.Msg !== undefined) {
      //console.log("pObj.Msg=" + pObj.Msg);
      switch (pObj.Msg) {
        case "Change":
          //if (!UtilitySvc.EmailFunc("Validate", { Email: vm.Email.Ctl.Value })) GM.Msg = "Enter a valid email.";
          //else
          if (vm.UserId.Ctl.Value.length === 0) this.View({ Msg: "Error_UserId_Blank" });
          else if (vm.UserId.Ctl.Value.length < 4) this.View({ Msg: "Error_UserId_Short" });
          else if (vm.UserId.Ctl.Value.length === 0) this.View({ Msg: "Error_Password_Blank" });
          else if (vm.UserId.Ctl.Value.length < 4) this.View({ Msg: "Error_Password_Short" });
          else if (vm.UserId.Ctl.Value.length > 10) this.View({ Msg: "Error_Password_Long" });
          else if (vm.UserId.Ctl.Value.length === 0) this.View({ Msg: "Error_Code_Blank" });
          else if (vm.UserId.Ctl.Value.length < 5) this.View({ Msg: "Error_Code_Short" });
          else if (vm.UserId.Ctl.Value.length > 5) this.View({ Msg: "Error_Code_Long" });
          else GM.Msg = "Click register.";
          break;


        case "Info_Add": GM.Msg = "You my upload a photo."; break;
        case "Info_Change": GM.Msg = "Click Register when done."; break;
        case "Info_Init": GM.Msg = "Enter information."; break;
        case "Info_Toggle": GM.Msg = vm.Switch === "Text" ? "Password is visible." : "Password is hidden."; break;
        case "Error_UserId_Blank": GM.Msg = "Enter a User ID."; break;
        case "Error_UserId_Short": GM.Msg = "User ID is too short."; break;
        case "Error_Password_Blank": GM.Msg = "Enter a password."; break;
        case "Error_Password_Short": GM.Msg = "The password is too short."; break;
        case "Error_Password_Long": GM.Msg = "The password is too long."; break;

        case "Error_EmailInUse": GM.Msg = "This email is already registered."; break;
        case "Error_EmailInvalid": GM.Msg = "This email is not valid."; break;
        case "Error_UserIdInUse": GM.Msg = "This user id is taken."; break;
        case "Error_CodeError": GM.Msg = "The code you entered is not correct."; break;
        case "Web_Registering": GM.Msg = "Registering..."; break;
        case "Web_Registered": GM.Msg = "Register successsful"; break;
        default: alert("Register.View * Msg=" + pObj.Msg);
      }
    }
  };
}

export interface IVM extends IViewModel {
  Code_Length: number;
  Email: ILabelCtl;
  UserId: ILabelCtl;
  Password_Hide: ILabelCtl;
  Password_Show: ILabelCtl;
  CodeImg: ILabelCtl;
  Code: ILabelCtl;
  Register: IButton;
  Toggle_Hide: IButton;
  Toggle_Show: IButton;
}
