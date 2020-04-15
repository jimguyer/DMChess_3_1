import { Component, OnInit } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { IAFieldLeg, IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { ECheckbox, IACheckbox, ICheckbox, Checkbox } from '../../../../Common/Ctls/Checkbox';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ETextbox, IATextbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ templateUrl: './Recover.html' })

export class Recover {
  VM: IVM; static VM: IVM;
  constructor() { this.VM = Recover.VM; }

  ngOnInit() {
    //console.log("Recover.ngOnInit");
    //console.log("Recover.ngOnInit Nav.Route_Event=" + Nav.Route_Event);
    switch (Nav.Route_Event) {
      case "LogOn_ClickRecover":
        //console.log("Recover.ngOnInit.LogOn_ClickRecover");
        this.VM.Phone.Ctl.Value = true;
        this.VM.Email.Ctl.Value = true;
        this.VM.EmailUserId.Ctl.Value = GM.EmailUserId;
        if (GM.IsTest) this.VM.EmailUserId.Ctl.Value = "jimguyer@jimguyer.com";
        Recover.View({ Enable: "*", Msg: "Info_Enter" });
        break;
    }
    Recover.Size();
  }

  public OnChange(pSender: string) {
    //console.log("Recover.OnChange." + pSender);
  }

  public OnClick(pSender: string) {
    //console.log("Recover.OnClick." + pSender);
    switch (pSender) {
      case "Exit": Nav.GoRoute("Click" + pSender, "LogOn"); break;
      case "Send": alert("I clicked Send"); break;
    }
  }

  //#endregion

  //#region Static

  public static Init() {
    //console.log("Recover.Init");

    //#region VM
    var aMethod: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 4, H: 1, F: 1 }, ACheckbox: { Type: ECheckbox.Left, S: 1 }, ASize: { GapX: Dft.GapX } }
    var aInfo: IALabelCtl = { ALabel: { Type: ELabel.TACenter, X: .5, W: 8.75, H: 1, F: 1 }, ATextbox: { Type: ETextbox.Center, X: .5, W: 8.75}, ASize: { GapX: Dft.GapX } }
    Recover.VM = {
      Disabled: false,
      MethodFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black }, ALegend: { Type: ELegend.Border_Black,  W: 5, Value: "Contact Method" } }),
      Email: LabelCtl.Init({ ALabel: aMethod.ALabel, ACheckbox: aMethod.ACheckbox, AValues: { Label: "Email", Ctl: true }, ASize: aMethod.ASize }, false),
      Phone: LabelCtl.Init({ ALabel: aMethod.ALabel, ACheckbox: aMethod.ACheckbox, AValues: { Label: "Phone", Ctl: true }, ASize: aMethod.ASize }, false),

      InfoFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black }, ALegend: { Type: ELegend.Border_Black, W: 5, Value: "Contact Info" } }),
      EmailUserId: LabelCtl.Init({ ALabel: aInfo.ALabel, ATextbox: aInfo.ATextbox, AValues: { Label: "Email or User ID", Ctl: "" }, ASize: aInfo.ASize }, false),
      Buttons: Button.Inits([{ Value: "Exit", Type: EButton.Left }, { Value: "Send", Type: EButton.Right }])
    };
    //#endregion

    Recover.Stack();
    Recover.Size();
  }

  public static Stack() {
    //console.log("Recover.Stack");
    //console.log("Recover.Stack * Recover.VM.MethodFieldLeg.Fieldset.Size=" + JSON.stringify(Recover.VM.MethodFieldLeg.Fieldset.Size));
    var vm = Recover.VM;
    var gapY = null;
    //FieldLeg.Stack(Privacy.VM.FieldLeg, { Y: GM.Hdr_NextY, GapY: gapY }, false);
    FieldLeg.Stack(Recover.VM.MethodFieldLeg, { Y: GM.Hdr_NextY, GapY: gapY }, false);

    LabelCtl.Stack(Recover.VM.Email, { Y: Recover.VM.MethodFieldLeg.Fieldset.Size.FirstY, GapY: gapY }, false);
    LabelCtl.Stack(Recover.VM.Phone, { Y: Recover.VM.Email.Label.Size.NextY, GapY: gapY }, false);
    Fieldset.Bottom(Recover.VM.MethodFieldLeg.Fieldset, { NextY: Recover.VM.Phone.Label.Size.NextY, GapY: gapY }, false);

    FieldLeg.Stack(Recover.VM.InfoFieldLeg, { Y: Recover.VM.MethodFieldLeg.Fieldset.Size.NextY, GapY: gapY }, false);
    LabelCtl.Stack(Recover.VM.EmailUserId, { Y: Recover.VM.InfoFieldLeg.Fieldset.Size.FirstY, GapY: gapY }, false);

    Ctl.Stack(Recover.VM.EmailUserId.Label, { Y: Recover.VM.InfoFieldLeg.Fieldset.Size.FirstY, GapY: gapY }, false);
    Ctl.Stack(Recover.VM.EmailUserId.Ctl, { Y: Recover.VM.EmailUserId.Label.Size.NextY, GapY: gapY }, false);

    Fieldset.Bottom(Recover.VM.InfoFieldLeg.Fieldset, { NextY: Recover.VM.EmailUserId.Ctl.Size.NextY, GapY: gapY }, false);
    //console.log("Recover.Stack.End --------------------------------------------------------------------------------------------------------------------");
    //console.log("Recover.Stack.End * Recover.VM.MethodFieldLeg.Fieldset.Size.Y=" + Recover.VM.MethodFieldLeg.Fieldset.Size.Y + " * H=" + Recover.VM.MethodFieldLeg.Fieldset.Size.H + " * FirstY=" + Recover.VM.MethodFieldLeg.Fieldset.Size.FirstY + " * NextY=" + Recover.VM.MethodFieldLeg.Fieldset.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.MethodFieldLeg.Legend.Size.Y=" + Recover.VM.MethodFieldLeg.Legend.Size.Y + " * H=" + Recover.VM.MethodFieldLeg.Legend.Size.H + " * FirstY=" + Recover.VM.MethodFieldLeg.Legend.Size.FirstY + " * NextY=" + Recover.VM.MethodFieldLeg.Legend.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.Email.Size.Y=" + Recover.VM.Email.Size.Y + " * H=" + Recover.VM.Email.Size.H + " * NextY=" + Recover.VM.Email.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.Phone.Size.Y=" + Recover.VM.Phone.Size.Y + " * H=" + Recover.VM.Phone.Size.H + " * NextY=" + Recover.VM.Phone.Size.NextY);
    //console.log("Recover.Stack.End --------------------------------------------------------------------------------------------------------------------");
    //console.log("Recover.Stack.End * Recover.VM.InfoFieldLeg.Fieldset.Size.Y=" + Recover.VM.InfoFieldLeg.Fieldset.Size.Y + " * H=" + Recover.VM.InfoFieldLeg.Fieldset.Size.H + " * FirstY=" + Recover.VM.InfoFieldLeg.Fieldset.Size.FirstY + " * NextY=" + Recover.VM.InfoFieldLeg.Fieldset.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.InfoFieldLeg.Legend.Size.Y=" + Recover.VM.InfoFieldLeg.Legend.Size.Y + " * H=" + Recover.VM.InfoFieldLeg.Legend.Size.H + " * FirstY=" + Recover.VM.InfoFieldLeg.Legend.Size.FirstY + " * NextY=" + Recover.VM.InfoFieldLeg.Legend.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.EmailUserId.Size.Y=" + Recover.VM.EmailUserId.Size.Y + " * H=" + Recover.VM.EmailUserId.Size.H + " * NextY=" + Recover.VM.EmailUserId.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.EmailUserId.Label.Size.Y=" + Recover.VM.EmailUserId.Label.Size.Y + " * H=" + Recover.VM.EmailUserId.Label.Size.H + " * NextY=" + Recover.VM.EmailUserId.Label.Size.NextY);
    //console.log("Recover.Stack.End * Recover.VM.EmailUserId.Ctl.Size.Y=" + Recover.VM.EmailUserId.Ctl.Size.Y + " * H=" + Recover.VM.EmailUserId.Ctl.Size.H + " * NextY=" + Recover.VM.EmailUserId.Ctl.Size.NextY);
  }

  public static Size() {
    var vm = Recover.VM;
    //console.log("Recover.Size * GM.Sized.Recover=" + GM.Sized.Recover);
    if (GM.Sized.Recover) return;
    var vm = Recover.VM;
    FieldLeg.Size(vm.MethodFieldLeg);
    LabelCtl.Size(vm.Email, false);
    LabelCtl.Size(vm.Phone, false);

    FieldLeg.Size(vm.InfoFieldLeg);
    LabelCtl.Size(vm.EmailUserId, false);

    Button.Sizes(vm.Buttons, false);
    GM.Sized.Recover = true;

    //console.log("Recover.Size * vm.MethodFieldLeg.Fieldset.Size=" + JSON.stringify(vm.MethodFieldLeg.Fieldset.Size));
    //console.log("Recover.Size * vm.MethodFieldLeg.Fieldset.Style=" + JSON.stringify(vm.MethodFieldLeg.Fieldset.Style));
    //console.log("Recover.Size * vm.Email.Ctl.Size=" + JSON.stringify(vm.Email.Ctl.Size));
    //console.log("Recover.Size * vm.Email.Ctl.Style=" + JSON.stringify(vm.Email.Ctl.Style));
    //console.log("Recover.Size * vm.ContactInfo.Fieldset.Size=" + JSON.stringify(vm.ContactInfo.Fieldset.Size));
    //console.log("Recover.Size * vm.ContactInfo.Fieldset.Style=" + JSON.stringify(vm.ContactInfo.Fieldset.Style));

  }

  public static View(pObj: any) {
    var vm = Recover.VM;

    //if (pObj.Show !== undefined) {
    //  //console.log("pObj.Show=" + pObj.Show);
    //  switch (pObj.Show) {
    //    case "Toggle": vm.ToggleText.Value = vm.ToggleShow ? 'Hide' : 'Show'; vm.Switch = vm.ToggleShow ? 'Text' : 'Password'; break;
    //  }
    //}
    //if (pObj.Enable !== undefined) {
    //  //console.log("pObj.Enable=" + pObj.Enable);
    //  switch (pObj.Enable) {
    //    case "*": vm.Disabled = vm.Web != .Done; this.View({ Enable: "Send" }); break;
    //    case "Send": vm.Send.Disabled = vm.EmailUserId.Ctl.Value === "" || !vm.Email && !vm.Phone; break;
    //  }
    //}
    if (pObj.Msg !== undefined) {
      //console.log("pObj.Msg=" + pObj.Msg);
      switch (pObj.Msg) {
        case "Change":
          if (!vm.Email.Ctl.Value && !vm.Phone.Ctl.Value) GM.Msg = "Select at least one contact method.";
          else if (vm.EmailUserId.Ctl.Value === "") GM.Msg = "Enter an email or User ID.";
          else GM.Msg = "Click send.";
          break;
        case "Error_NotFound": GM.Msg = "Email or User ID not found."; break;
        case "Error_Server": GM.Msg = "Server error."; break;
        case "Info_Sent": GM.Msg = "Password recovery has been sent."; break;
        case "Info_Enter": GM.Msg = "Enter recovery information."; break;
        case "Web_Sending": GM.Msg = "Sending recovery information..."; break;
      }
    }
  }

  //#endregion
}

interface IVM extends IViewModel {
  MethodFieldLeg: IFieldLeg;
  Email: ILabelCtl;
  Phone: ILabelCtl;
  InfoFieldLeg: IFieldLeg;
  EmailUserId: ILabelCtl;
}

