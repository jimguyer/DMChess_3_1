import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';
import { ELabel, IALabel } from '../../../../Common/Ctls/Label';

@Component({ selector: 'startemail', templateUrl: './startemail.html' })

export class StartEmail {
    VM: IVM; static VM: IVM;
    constructor() { this.VM = StartEmail.VM; }

    ngOnInit() {
        //console.log("StartEmail.ngOnInit");
        //console.log("StartEmail.ngOnInit *  GM.Sized.StartEmail=" + GM.Sized.StartEmail);
        //console.log("StartEmail.ngOnInit * Nav.View_Event=" + Nav.View_Event);

        Nav.View = "StartEmail";

        switch (Nav.View_Event) {
            case "App_Boot":
            case "Start_Email": StartEmail.View({ Show: "Toggle", Msg: "Info_Init" }); break;
        }
        if (GM.Sized.StartEmail == null) StartEmail.Size();
    }

    public OnChange(pControl) {
        //console.log("OnChange * pConrol=" + pControl)
        switch (pControl) {
            case "Email": break;
            case "Old": break;
        }
    }

    public OnClick(pControl: string) {
        //console.log("LogOn.OnClick * pButton=" + pControl);
        switch (pControl) {
            case "Exit": Nav.GoRoute("Click" + pControl, "Home"); break;
            case "Next": Nav.GoRoute("Click" + pControl, "Home"); break;
        }
    }

    public static Init() {
        //console.log("StartEmail.Init");
        var aLine: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 2, F: 1 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ATextbox: { Type: ETextbox.Left, F: 1 }, ASize: { GapX: Dft.GapX } }
        //var e = LabelCtl.Init({ ALabel: aLine.ALabel, ACtl: aLine.ATextBox, AValues: { Label: "Email", Ctl: "" } }, false);
        //var nf = LabelCtl.Init({ ALabel: aLine.ALabel, ACtl: aLine.ATextBox, AValues: { Label: "First Name", Ctl: "" } }, false);
        //var nl = LabelCtl.Init({ ALabel: aLine.ALabel, ACtl: aLine.ATextBox, AValues: { Label: "Last Name", Ctl: "" } }, false);
        StartEmail.VM = {
            Web: EWeb.Loading,
            FieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 3 } }),
            Email: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Email", Ctl: "" }, ASize: aLine.ASize }, false),
            NameFirst: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "First Name", Ctl: "" }, ASize: aLine.ASize }, false),
            NameLast: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Last Name", Ctl: "" }, ASize: aLine.ASize }, false),
            Buttons: Button.Inits([
                { Value: "Exit", Type: EButton.Left },
                { Value: "Back", Type: EButton.Center },
                { Value: "Log In", Type: EButton.Right }
            ])
        };

        StartEmail.Stack();
        StartEmail.Size();
    }

    public static Stack() {
        //console.log("StartEmail.Stack");
        var vm = StartEmail.VM;
        var gapY = null;
        Fieldset.Stack(vm.FieldLeg, { Y: 1, GapY: gapY }, false);
        LabelCtl.Stack(vm.Email, { Y: vm.FieldLeg.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.NameFirst, { Y: vm.Email.Label.Size.NextY, GapY: gapY }, false);
        LabelCtl.Stack(vm.NameLast, { Y: vm.NameFirst.Label.Size.NextY, GapY: gapY }, false);
        Fieldset.Bottom(vm.FieldLeg.Fieldset, { NextY: vm.NameLast.Label.Size.NextY, GapY: gapY }, false);
    }

    public static Size() {
        //console.log("StartEmail.Size * vm.Opponent_FieldSet.Size=" + JSON.stringify(vm.Opponent_FieldSet.Size));
        //console.log("StartEmail.Size * vm.Opponent_Legend.Size=" + JSON.stringify(vm.Opponent_Legend.Size));

        var vm = StartEmail.VM;
        if (GM.Sized.StartEmail) return;
        //SizeSvc.ViewFunc(vm, null, false);
        FieldLeg.Size(vm.FieldLeg);
        LabelCtl.Size(vm.Email);
        LabelCtl.Size(vm.NameFirst);
        LabelCtl.Size(vm.NameLast);
        Button.Sizes(vm.Buttons);
        GM.Sized.StartEmail = true;

        //console.log("StartEmail.Size * vm.Opponent_FieldSet.Style=" + JSON.stringify(vm.Opponent_FieldSet.Style));
        //console.log("StartEmail.Size * vm.Opponent_Legend.Style=" + JSON.stringify(vm.Opponent_Legend.Style));
    }

    public static Web(pResult: any) {
        //console.log("StartEmail.Web * pResult.Action=" + pResult.Action);
        //console.log("StartEmail.Web * pResult.Success=" + pResult.Success);
        //console.log("StartEmail.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = StartEmail.VM;

        switch (pResult.Action) {
            case "StartEmailSave":
                if (pResult.Success) this.View({ Msg: "Web_StartEmailSave" });
                else this.View({ Msg: "Error_" + pResult.Data });
                break;
        }
    }

    public static View(pObj) {
        var vm = StartEmail.VM;

        if (pObj.Show !== undefined) {
            //console.log("StartEmail.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                default: alert("StartEmail.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
                default: alert("StartEmail.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }
        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*": this.View({ Msg: "Info_Init" }); break;
                case "Change": break;
                case "Error_Server": GM.Msg = "Server error."; break;
                case "Error_NoChanges": GM.Msg = "No changes were made."; break;
                case "Error_StartEmailNotCorrect": GM.Msg = "The current password is incorrect."; break;
                case "Info_Init": GM.Msg = "You may change your password."; break;
                case "Web_StartEmailSave": GM.Msg = "Saving password..."; break;
                case "Web_StartEmailSave": GM.Msg = "StartEmail save successsful"; break;
            }
        }
    };

}
export interface IVM extends IViewModel {
    Email: ILabelCtl,
    NameFirst: ILabelCtl,
    NameLast: ILabelCtl
}
