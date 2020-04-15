import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EPosition as EPos } from '../../../../Common/Attrs/Position';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg, IAFieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';


@Component({ selector: 'profile', templateUrl: './profile.html' })

export class Profile {
    VM: IVM; static VM: IVM;
    constructor() { this.VM = Profile.VM;}

    ngOnInit() {
        //console.log("Profile.ngOnInit");
        //console.log("Profile.ngOnInit *  GM.Sized.Profile=" + GM.Sized.Profile);
        //console.log("Profile.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        Nav.View = "Profile";
        switch (Nav.View_Event) {
            case "App_Boot":
            case "LogOn_Register": Profile.View({ Show: "*", Msg: "Info_Init" }); break;
        }
        Profile.Stack();
        Profile.Size();
    }

    public OnChange(pSender) {
        //console.log("OnChange * pSender=" + pSender)
    }

    public OnClick(pSender: string) {
        //console.log("Profile.OnClick * pSender=" + pSender);
        switch (pSender) {
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
        }
    }
    //#region Static

    public static Init() {
        //console.log("Profile.Init");
        var aLine: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 2, H:1, F: 1 }, AOutput: { Type: ELabel.TALeft, H: 1, F: .1 } }

        Profile.VM = {
            Web: EWeb.Loading,
            FieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 3.5 }, ALegend: { W:4} }, false),
            Img: Img.Init({ Type: EImg.Border_Black, X: 2, Y: 3, S: 5 }, false),

            UserId: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: {Label: "User ID", Ctl: "" } }, false),
            Name: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Name", Ctl: "" } }, false),
            Rating: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Rating", Ctl: "" } }, false),
            Group: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Group", Ctl: "" } }, false),

            Exit: Button.Init({ Type: EButton.Left }, false),
            Back: Button.Init({ Type: EButton.Center }, false),
            Board: Button.Init({ Type: EButton.Center }, false),
            Challenge: Button.Init({ Type: EButton.Right }, false),
            Confirm: Button.Init({ Type: EButton.Right }, false),
            Game: Button.Init({ Type: EButton.Right }, false),
            Select: Button.Init({ Type: EButton.Right }, false)
        };
    }

    public static Stack() {
        //console.log("Profile.Stack");
    }

    public static Size() {
        //console.log("Profile.Size * vm.Opponent_FieldSet.Size=" + JSON.stringify(vm.Opponent_FieldSet.Size));
        //console.log("Profile.Size * vm.Opponent_Legend.Size=" + JSON.stringify(vm.Opponent_Legend.Size));
        //Size.ViewModel(Profile.VM, false);

        var vm = Profile.VM;
        FieldLeg.Size(vm.FieldLeg, false);
        Img.Size(vm.Img, false);
        LabelCtl.Size(vm.UserId, false);
        LabelCtl.Size(vm.Name, false);
        LabelCtl.Size(vm.Rating, false);
        LabelCtl.Size(vm.Group, false);

        //console.log("Profile.Size * vm.Opponent_FieldSet.Style=" + JSON.stringify(vm.Opponent_FieldSet.Style));
        //console.log("Profile.Size * vm.Opponent_Legend.Style=" + JSON.stringify(vm.Opponent_Legend.Style));
    }

    public static Web(pResult: any) {
        //console.log("Profile.Web * pResult.Action=" + pResult.Action);
        //console.log("Profile.Web * pResult.Success=" + pResult.Success);
        //console.log("Profile.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Profile.VM;

        switch (pResult.Action) {
            //case "Code": vm.CodeImg.Src = pResult.Data; vm.Loading = false; break;
        }
    }

    public static View(pObj) {
        var vm = Profile.VM;
        if (pObj.Show !== undefined) {
            //console.log("Profile.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                case "*": break;
                default: alert("Profile.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
            }
        }
        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "Info_Init": GM.Msg = "Enter information."; break;
                case "Web_Challenge": GM.Msg = "Challenging..."; break;
            }
        }
    };

    //#endregion
}
interface IVM extends IViewModel {
    Img?: IImg,
    UserId?: ILabelCtl,
    Name?: ILabelCtl,
    Rating?: ILabelCtl,
    Group?: ILabelCtl,
    Exit: IButton,
    Back: IButton,
    Board: IButton,
    Challenge: IButton,
    Confirm: IButton,
    Game: IButton,
    Select: IButton
}
export interface IProfile {
    Idx?: number,
    Img_Src?: string,
    UserId: string,
    Name: string,
    Rating: string,
    Group: string
}
