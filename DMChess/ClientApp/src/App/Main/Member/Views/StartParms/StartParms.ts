import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { ECheckbox, IACheckbox, ICheckbox, Checkbox } from '../../../../Common/Ctls/Checkbox';
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

@Component({ selector: 'startparms', templateUrl: './startparms.html' })

export class StartParms {
    VM: IVM; static VM: IVM;
    constructor() { this.VM = StartParms.VM; }

    ngOnInit() {
        //console.log("StartParms.ngOnInit");
        //console.log("StartParms.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        //console.log("StartParms.ngOnInit *  GM.Sized.StartParms=" + GM.Sized.StartParms);
        Nav.View = "StartParms";
        switch (Nav.Route_Event) {
            case "App_Boot":
            case "Home_ClickPlayers": this.VM.Photo.Src = GM.Wiz.Photo_Src; break;
            case "Home_ClickStart": GM.Wiz = {}; break;
            default: alert("StartParms.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event);
        }
        StartParms.Stack();
        StartParms.Size();
        StartParms.View({ Show: "*", Enable: "*", Msg: "*" });
    }

    public OnChange(pControl) {
        switch (pControl) {
            case "New": break;
            case "Old": break;
        }

        //console.log("OnChange * pConrol=" + pControl)
    }

    public OnClick(pControl: string) {
        //console.log("StartParms.OnClick * pControl=" + pControl);
        var vm = StartParms.VM;
        switch (pControl) {
            case "Exit": Nav.GoRoute("Click" + pControl, "Home"); break;
            case "Back": Nav.GoRoute("Click" + pControl, "Home"); break;
            case "Next":
                //console.log("StartParms.OnClick.Next * GM.Wiz=" + JSON.stringify(GM.Wiz));
                //console.log("StartParms.OnClick.Next * vm.Rated.Data.Value=" + vm.Rated.Data.Value);
                //console.log("StartParms.OnClick.Next * vm.TimeInc.Data.Value=" + vm.TimeInc.Data.Value);
                //console.log("StartParms.OnClick.Next * vm.TimeAmt.Data.Value=" + vm.TimeAmt.Data.Value);
                switch (Nav.Route) {
                    case "Players": break;
                    case "Start": GM.Wiz = {}; break;
                }
                GM.Wiz.Rated = vm.Rated.Ctl.Value;
                GM.Wiz.TimeInc = vm.TimeInc.Ctl.Value;
                GM.Wiz.TimeAmt = vm.TimeAmt.Ctl.Value;
                Nav.GoView("Click" + pControl, "Message"); break;
        }
    }
    //#region Static

    public static Init() {
        //console.log("StartParms.Init");
        //#region VM

        var aBy: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.5, H: .8, F: .8 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ACheckbox: { Type: ECheckbox.Left, S: .8 }, ASize: { GapX: Dft.GapX} }
        var aRated: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.5, H: .8, F: .8 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ACheckbox: { Type: ECheckbox.Left, S: .8 } }
        var aTime: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.5, H: .8, F: .8 }, ACheckbox: { Type: ECheckbox.Left, S: .8 } }

        StartParms.VM = {
            Disabled: false, Input_Disabled: true,
            Photo: Img.Init({ Type: EImg.Border_Black }),
            ByFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 4.25 }, ALegend: { W: 4 }, Value: "Loading" }, false),
            ByLines: [
                LabelCtl.Init({ ALabel: aBy.ALabel, ACheckbox: aBy.ACheckbox, AValues: { Label: "Facebook Friendlist", Ctl: false } }, false),
                LabelCtl.Init({ ALabel: aBy.ALabel, ACheckbox: aBy.ACheckbox, AValues: { Label: "Send Email", Ctl: true } }, false),
                LabelCtl.Init({ ALabel: aBy.ALabel, ACheckbox: aBy.ACheckbox, AValues: { Label: "Member Search", Ctl: false } }, false),
            ],
            RatedFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 2 }, ALegend: { W: 4, Value: "Loading" } }, false),
            Rated: LabelCtl.Init({ ALabel: aRated.ALabel, ACheckbox: aRated.ACheckbox, AValues: { Label: "Rated", Ctl: true } }, false),

            TimeFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 2 }, ALegend: { W: 4, Value: "Loading" } }, false),
            TimeInc: LabelCtl.Init({ ALabel: aRated.ALabel, ACheckbox: aRated.ACheckbox, AValues: { Label: "Increment", Ctl: eTimeInc.Days } }, false),
            TimeAmt: LabelCtl.Init({ ALabel: aTime.ALabel, ACheckbox: aTime.ACheckbox, AValues: { Label: "Amount", Ctl: 3 } }, false),

            Exit: Button.Init({ Type: EButton.Left, Value: "Exit" }),
            Back: Button.Init({ Type: EButton.Center, Value: "Exit" }),
            Next: Button.Init({ Type: EButton.Right, Value: "Exit" }),

        };
        StartParms.VM.TimeInc.Ctl.Options = [{ Value: "M", Label: "Minutes" }, { Value: "Q", Label: "Quarters" }, { Value: "H", Label: "Hours" }, { Value: "D", Label: "Days" }];
        StartParms.VM.TimeAmt.Ctl.Options = [];
        for (var x = 1; x < 9; x++)  StartParms.VM.TimeAmt.Ctl.Options.push({ Value: x, Label: x });
        //#endregion
        //console.log("StartParms.Init * StartParms.VM.ByLegend.Size=" + JSON.stringify(StartParms.VM.ByLegend.Size));
        //console.log("StartParms.Init * StartParms.VM.ByFieldset.Size=" + JSON.stringify(StartParms.VM .ByFieldset.Size)); 
    }

    public static Stack() {
        //console.log("StartParms.Stack * Nav.Route=" + Nav.Route);

        var vm = StartParms.VM;
        var gapY = null;
        Img.Stack(vm.Photo, { Y: vm.FieldLeg.Size.FirstY, GapY: gapY }, false);

        Fieldset.Stack(vm.ByFieldLeg, { Y: vm.Photo.Size.NextY, GapY: gapY }, false);
        LabelCtl.Stacks(vm.ByLines, { Y: vm.ByFieldLeg.Size.FirstY, GapY: gapY }, false);
        Fieldset.Bottom(vm.FieldLeg.Fieldset, { NextY: vm.ByLines[vm.ByLines.length - 1].Label.Size.NextY, GapY: gapY }, false);

        Fieldset.Stack(vm.RatedFieldLeg, { Y: vm.ByFieldLeg.Size.NextY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Rated, { Y: vm.RatedFieldLeg.Size.FirstY, GapY: gapY }, false);
        Fieldset.Bottom(vm.RatedFieldLeg.Fieldset, { NextY: vm.Rated.Label.Size.NextY, GapY: gapY }, false);

        Fieldset.Stack(vm.TimeFieldLeg, { Y: vm.RatedFieldLeg.Size.NextY, GapY: gapY }, false);
        LabelCtl.Stack(vm.TimeInc, { Y: vm.TimeFieldLeg.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.TimeAmt, { Y: vm.TimeInc.Label.Size.NextY, GapY: gapY }, false);
        Fieldset.Bottom(vm.TimeFieldLeg.Fieldset, { NextY: vm.TimeAmt.Label.Size.NextY, GapY: gapY }, false);

        //console.log("StartParms.Stack * vm.ByLegend.Size=" + JSON.stringify(vm.ByLegend.Size));
        //console.log("StartParms.Stack * vm.ByFieldset.Size=" + JSON.stringify(vm.ByFieldset.Size));
        //console.log("StartParms.Stack * vm.RatedFieldSet.Size=" + JSON.stringify(vm.RatedFieldSet.Size));
        //console.log("StartParms.Stack * vm.RatedLegend.Size=" + JSON.stringify(vm.RatedLegend.Size));
        //console.log("StartParms.Stack * vm.TimeFieldSet.Size=" + JSON.stringify(vm.TimeFieldSet.Size));
        //console.log("StartParms.Stack * vm.TimeLegend.Size=" + JSON.stringify(vm.TimeLegend.Size));
    }

    public static Size() {
        //console.log("StartParms.Size");
        //console.log("StartParms.Size * vm.Opponent_Legend.Size=" + JSON.stringify(vm.Opponent_Legend.Size));

        var vm = StartParms.VM;
        if (GM.Sized.StartParms) return;
        Img.Size(vm.Photo);
        FieldLeg.Size(vm.ByFieldLeg);
        LabelCtl.Sizes(vm.ByLines);
        FieldLeg.Size(vm.RatedFieldLeg);
        LabelCtl.Size(vm.Rated);
        FieldLeg.Size(vm.TimeFieldLeg);
        LabelCtl.Size(vm.TimeInc);
        LabelCtl.Size(vm.TimeAmt);
        Button.Size(vm.Exit); Button.Size(vm.Back); Button.Size(vm.Next);
        GM.Sized.StartParms = true;
        //console.log("StartParms.Size * vm.ByLegend.Style=" + JSON.stringify(vm.ByLegend.Size));
        //console.log("StartParms.Size * vm.ByLegend.Style=" + JSON.stringify(vm.ByLegend.Style));
    }

    public static Web(pResult: any) {
        //console.log("StartParms.Web * pResult.Action=" + pResult.Action);
        //console.log("StartParms.Web * pResult.Success=" + pResult.Success);
        //console.log("StartParms.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = StartParms.VM;

        switch (pResult.Action) {
            case "StartParmsSave":
                if (pResult.Success) this.View({ Msg: "Web_StartParmsSave" });
                else this.View({ Msg: "Error_" + pResult.Data });
                break;
        }
    }
    public static Load(pData: any) {
        //console.log("StartParms.Load * pData=" + JSON.stringify(pData));
        //console.log("StartParms.Load * pData.Profiles[" + pData.ProfileIdxDefault + "].StartParms=" + JSON.stringify(pData.Profiles[pData.ProfileIdxDefault].StartParms));
        //console.log("StartParms.Load * pData.Profiles[" + pData.ProfileIdxDefault + "].StartParms.TimeInc=" + JSON.stringify(pData.Profiles[pData.ProfileIdxDefault].StartParms.TimeInc));
        //console.log("StartParms.Load * pData.Profiles[" + pData.ProfileIdxDefault + "].StartParms.TimeAmt=" + JSON.stringify(pData.Profiles[pData.ProfileIdxDefault].StartParms.TimeAmt));
        //console.log("StartParms.Load * pData.ProfileIdxDefault=" + pData.ProfileIdxDefault);
        //console.log("StartParms.Load * pData.ProfileIdx=" + pData.ProfileIdx);
        var vm = StartParms.VM;
        vm.ByFieldLeg.Legend.Value = "Find By";
        vm.TimeFieldLeg.Legend.Value = "Move Time";
        var profileIdx = pData.ProfileIdx !== undefined ? pData.ProfileIdx : pData.ProfileIdxDefault
        //vm.By.Ctl.Value = pData.Profiles[pData.ProfileIdxDefault].StartParms.OpFindBy;
        vm.Rated.Ctl.Value = pData.Profiles[pData.ProfileIdxDefault].StartParms.Rated;
        vm.TimeInc.Ctl.Value = pData.Profiles[pData.ProfileIdxDefault].StartParms.TimeInc;
        vm.TimeAmt.Ctl.Value = pData.Profiles[pData.ProfileIdxDefault].StartParms.TimeAmt;
        vm.Web = EWeb.Done;
        this.View({ Enable: "*" });
    }


    public static View(pObj) {
        //console.log("StartParms.View * pObj=" + JSON.stringify(pObj));
        var vm = StartParms.VM;
        if (pObj.Show !== undefined) {
            //console.log("StartParms.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                case "*":
                    //console.log("StartParms.View.Show.* * Nav.Route=" + Nav.Route);
                    switch (Nav.Route) {
                        case "Players": vm.Back.Show = false; vm.Next.Show = true; break;
                        case "Start": vm.Back.Show = false; vm.Next.Show = true; break;
                    }
                    break;
                case "Toggle": break;
                default: alert("StartParms.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("StartParms.View.Enable * pObj.Enable=" + pObj.Enable + " * vm.Web)=" + vm.Web);
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
            }
        }
        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*":
                    switch (Nav.Route) {
                        case "Players": GM.Msg = "Enter start parameters for" + GM.Wiz.UserId + "."; break;
                        case "Start": GM.Msg = "Enter start parameters."; break;
                    }
                    break;
                case "Change": break;
                case "Error_Server": GM.Msg = "Server error."; break;
            }
        }
    };

    //#endregion

}
export interface IVM extends IViewModel {
    Photo: IImg,
    ByFieldLeg: IFieldLeg, ByLines: Array<ILabelCtl>,
    RatedFieldLeg: IFieldLeg, Rated: ILabelCtl,
    TimeFieldLeg: IFieldLeg, TimeInc: ILabelCtl, TimeAmt: ILabelCtl,
    Exit: IButton, Back: IButton, Next: IButton
}
export enum eBy { Facebook = "F", Email = "E", Search = "S" }
export enum eTimeInc { Minutes = "M", Quarters = "M", Hours = "H", Days = "D" }

