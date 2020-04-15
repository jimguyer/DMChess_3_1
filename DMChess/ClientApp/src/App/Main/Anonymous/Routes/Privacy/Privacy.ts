import { Component, OnInit } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { IAFieldLeg, IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ templateUrl: './Privacy.html' })
export class Privacy {
  VM: IVM; static VM: IVM;

  constructor() { this.VM = Privacy.VM; }

  ngOnInit() {
    //console.log("Privacy.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
    //console.log("Privacy.ngOnInit * Nav.View_Event=" + Nav.View_Event);
    switch (Nav.View_Event) {
      default: Privacy.View({ Msg: "Privacy" }); break;
      case "App_Boot":
      case "LogOn_Privacy": Privacy.View({ Msg: "Privacy" }); break;
    }
    if (GM.Sized.Privacy == null) Privacy.Size();
  }

  public OnClick(pSender: string) {
    //console.log("Privacy.OnClick." + pButton);
    switch (pSender) {
      case "OK": Nav.GoRoute("Click" + pSender, "LogOn"); break;
    }
  }

  public static Init() {
    //console.log("Privacy.Init");
    //Nav.Router.config.push({ path: "privacy2", component: Privacy });

    //#region VM
    var label = { Type: ELabel.TACenter, H: .32, F: .75, GapY : .1 };
    Privacy.VM = {
      FieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black }, ALegend: { Type: ELegend.Border_Black,  W: 5, Value: "Privacy" } }, true),
      Labels_P: Label.Inits([
        { Value: "Diamond chess will never share any", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "of your information with anyone. If", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "you enter a phone number it will only", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "be used to send texts when it's your", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "turn or if you get a challenge. You", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "can turn notices off in 'User/Options'.", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY }
      ], false),
      Labels_F: Label.Inits([
        { Value: "  ***  Facebook LogIn  ***", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "Logging in with Facebook will:", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "1. Default your photo from Facebook.", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "2. Let you challenge Facebook Friends.", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "3. Autopost wins to your Timeline.", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "You can change your photo in 'Profiles'.", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY },
        { Value: "You turn autopost off in 'User/Options'.", Type: label.Type, H: label.H, F: label.F, GapY: label.GapY }
      ], false),
      Buttons: Button.Inits([{ Value: "OK", Type: EButton.Center }]),
    };
    var vm = Privacy.VM;
    //#endregion


    Privacy.Stack();
    Privacy.Size();
    //console.log("Privacy.Init.End");
  }

  public static Stack() {
    //console.log("Privacy.Stack * GM.Hdr_NextY=" + GM.Hdr_NextY);
    //console.log("Privacy.Stack * Privacy.VM.FieldLeg.FirstY=" + Privacy.VM.FieldLeg.FirstY);
    //console.log("Privacy.Stack * Privacy.VM.Labels_P=" + JSON.stringify(Privacy.VM.Labels_P));
    //console.log("Privacy.Stack * Privacy.VM.Labels_F=" + JSON.stringify(Privacy.VM.Labels_F));
    var vm = Privacy.VM;
    var gapY = .25;
    FieldLeg.Stack(Privacy.VM.FieldLeg, { Y: GM.Hdr_NextY, GapY: gapY }, true);
    //console.log("Privacy.Stack * Privacy.VM.FieldLeg.FirstY=" + Privacy.VM.FieldLeg.Fieldset.Size.FirstY);
    Label.Stacks(Privacy.VM.Labels_P, { Y: Privacy.VM.FieldLeg.Fieldset.Size.FirstY, GapY: gapY }, false);

    //console.log("Privacy.Stack * Privacy.VM.Labels_P.length - 1=" + (Privacy.VM.Labels_P.length - 1));
    //console.log("Privacy.Stack * Privacy.VM.Labels_P.length - 1=" + (Privacy.VM.Labels_P.length - 1));

    var y = Privacy.VM.Labels_P[(Privacy.VM.Labels_P.length - 1)].Size.NextY += Dft.GapY;

    Label.Stacks(Privacy.VM.Labels_F, { Y: y, GapY: gapY }, false);
    vm.Labels_F[vm.Labels_F.length - 1].Size.NextY += Dft.GapY;
    Fieldset.Bottom(vm.FieldLeg.Fieldset, { NextY: vm.Labels_F[vm.Labels_F.length - 2].Size.NextY + Dft.GapY }, false);

    //console.log("Privacy.Stack.End * GM.Hdr_NextY=" + GM.Hdr_NextY);
    //console.log("Privacy.Stack.End *  Privacy.VM.FieldLeg.Legend.Size.Y=" + Privacy.VM.FieldLeg.Legend.Size.Y);
    //console.log("Privacy.Stack.End *  Privacy.VM.FieldLeg.Fieldset.Size.FirstY=" + Privacy.VM.FieldLeg.Fieldset.Size.FirstY);
    //console.log("Privacy.Stack.End *  Privacy.VM.Labels_P[0].Size.Y=" + Privacy.VM.Labels_P[0].Size.Y + " * NextY=" + Privacy.VM.Labels_P[0].Size.NextY);
    //console.log("Privacy.Stack.End *  Privacy.VM.Labels_P[1].Size.Y=" + Privacy.VM.Labels_P[1].Size.Y + " * NextY=" + Privacy.VM.Labels_P[1].Size.NextY);
    //console.log("Privacy.Stack.End *  Privacy.VM.Labels_P[2].Size.Y=" + Privacy.VM.Labels_P[2].Size.Y + " * NextY=" + Privacy.VM.Labels_P[2].Size.NextY);
    //console.log("Privacy.Stack.End *  Privacy.VM.Labels_P[3].Size.Y=" + Privacy.VM.Labels_P[3].Size.Y + " * NextY=" + Privacy.VM.Labels_P[3].Size.NextY);
  }

  public static Size() {
    //console.log("Privacy.Size");
    var vm = Privacy.VM;
    FieldLeg.Size(vm.FieldLeg, false);
    Ctl.Sizes(vm.Labels_F);
    Ctl.Sizes(vm.Labels_P);
    Ctl.Sizes(vm.Buttons);
    //console.log("Privacy.Size * vm.FieldSet.Style=" + JSON.stringify(vm.FieldSet.Style));
    //console.log("Privacy.Size * vm.Legend.Style=" + JSON.stringify(vm.Legend.Style));
    vm.Labels_F.forEach(label => {
      //console.log("Privacy.Size * label.Size=" + JSON.stringify(label.Size));
      //console.log("Privacy.Size * label.Style=" + JSON.stringify(label.Style));
    })
    //console.log("Privacy.Size.End");
  }

  public static View(pObj: any) {
    var vm = Privacy.VM;

    if (pObj.Msg !== undefined) {
      //console.log("pObj.Msg=" + pObj.Msg);
      //console.log("GM.Msg=" + GM.Msg);
      switch (pObj.Msg) {
        case "Link_LogOn_Privacy": GM.Msg = "Diamond Chess Privacy Policy."; break;
        case "Privacy": GM.Msg = "Diamond Chess Privacy Policy."; break;
        default: alert("Unknown Privacy.View.Msg=" + pObj.Msg); break;
      }
      //console.log("GM.Msg=" + GM.Msg);
    }
  }
}

interface IVM extends IViewModel {
  Labels_F: Array<ILabel>;
  Labels_P: Array<ILabel>;
}
