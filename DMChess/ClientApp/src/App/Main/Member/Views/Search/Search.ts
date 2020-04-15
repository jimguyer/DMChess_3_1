import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { ECheckbox, IACheckbox, ICheckbox, Checkbox } from '../../../../Common/Ctls/Checkbox';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ERadio, IARadio, IRadio, Radio } from '../../../../Common/Ctls/Radio';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ selector: 'search', templateUrl: './search.html' })

export class Search {
    VM: IVM; static VM: IVM;
    constructor() { this.VM = Search.VM; }

    ngOnInit() {
        //console.log("Search.ngOnInit");
        //console.log("Search.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        //console.log("Search.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        //console.log("Search.ngOnInit *  GM.Sized.Search=" + GM.Sized.Search);

        var vm = Search.VM;
        Nav.View = "Search";
        switch (Nav.Route_Event) {
            case "App_Boot":
            case "Home_ClickPlayers": Search.View({ Enable: "*", Show: "*", Msg: "Link_" + Nav.Route_Event }); break;
            default: alert("Search.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event); break;
        }
        Search.Stack();
        Search.Size();
    }
    public OnChange(pSender) {
        switch (pSender) {
            case "By": break;
            case "Text": break;
        }
    }
    public OnClick(pSender: string) {
        //console.log("Search.OnClick * pButton=" + pSender);
        var vm = Search.VM;
        switch (pSender) {
            case "By":
                //console.log("Search.OnClick * By=" + vm.By);
                break;
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
            case "Back": Nav.GoRoute("Click" + pSender, "Home"); break;
            case "Search":
                //console.log("Search.OnClick.Search *  vm.By=" + vm.By);
                vm.Web = EWeb.Server;
                Search.View({ Enable: "*", Msg: "Web_Search" });
                Web.Post((pResult) => Search.Web(pResult), "Search", { By: vm.ByValue, Text: vm.TextLine.Ctl.Value, Min: vm.RatingLines[0].Ctl.Value, Max: vm.RatingLines[1].Ctl.Value });
                break;
        }
    }

    public static Init() {
        //console.log("Search.Init");

        //#region VM
        var aBy: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: 2, W: 3.5, F: 1 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ARadio: { Type: ERadio.Left, S: .8 }, ASize: { GapX: Dft.GapX } };
        var aText: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.25, F: 1 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ATextbox: { Type: ETextbox.Left, H: .75, F: 1 }, ASize: { GapX: Dft.GapX } };
        var aRating: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.25, F: 1 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ATextbox: { Type: ETextbox.Left, H: .75, F: 1 }, ASize: { GapX: Dft.GapX } };

        Search.VM = {
            Web: EWeb.Loading,
            Disabled: false, Input_Disabled: false,
            ByValue: eBy.Group,
            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),

            ByFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 4.25 }, ALegend: { W: 4 }, Value: "Loading" }, false),
            ByLines: [
                LabelCtl.Init({ ALabel: aBy.ALabel, ARadio: aBy.ARadio, AValues: { Label: "User ID", Ctl: false } }, false),
                LabelCtl.Init({ ALabel: aBy.ALabel, ARadio: aBy.ARadio, AValues: { Label: "First Name", Ctl: true } }, false),
                LabelCtl.Init({ ALabel: aBy.ALabel, ARadio: aBy.ARadio, AValues: { Label: "Last Name", Ctl: false } }, false),
                LabelCtl.Init({ ALabel: aBy.ALabel, ARadio: aBy.ARadio, AValues: { Label: "Group", Ctl: false } }, false)
            ],

            TextFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 2 }, ALegend: { W: 4 }, Value: "Loading" }, false),
            TextLine: LabelCtl.Init({ ALabel: aText.ALabel, ATextbox: aText.ATextbox, AValues: { Label: "Group", Ctl: false } }, false),

            RatingFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 3.25 }, ALegend: { W: 4 }, Value: "Loading" }, false),
            RatingLines: [
                LabelCtl.Init({ ALabel: aRating.ALabel, ATextbox: aRating.ATextbox, AValues: { Label: "Min", Ctl: ""} }, false),
                LabelCtl.Init({ ALabel: aRating.ALabel, ATextbox: aRating.ATextbox, AValues: { Label: "Max", Ctl: "" } }, false)
            ],

            Exit: Button.Init({ Type: EButton.Left }),
            Back: Button.Init({ Type: EButton.Center }),
            Search: Button.Init({ Type: EButton.Right }),
        };

        //#endregion

        Search.Stack();
        Search.Size();
    }

    public static Stack() {
        //console.log("Search.Stack");
        var vm = Search.VM;
    }

    public static Size() {
        //console.log("Search.Size * GM.Sized.Search=" + GM.Sized.Search);
        var vm = Search.VM;
        if (GM.Sized.Search) return;
        FieldLeg.Size(vm.ByFieldLeg);
        LabelCtl.Sizes(vm.ByLines);
        FieldLeg.Size(vm.TextFieldLeg);
        LabelCtl.Size(vm.TextLine);
        FieldLeg.Size(vm.RatingFieldLeg);
        LabelCtl.Sizes(vm.RatingLines);
        Button.Size(vm.Exit); Button.Size(vm.Back); Button.Size(vm.Search);
        GM.Sized.Search = true;
        //console.log("Search.Size * vm.TextFieldset.Size=" + JSON.stringify(vm.TextFieldset.Size));
        //console.log("Search.Size * vm.TextFieldset.Style=" + JSON.stringify(vm.TextFieldset.Style));
    }

    public static Web(pResult: IResult) {
        //console.log("Search.Web * pResult.Action=" + pResult.Action + " *  pResult.Error=" + pResult.Error);
        //console.log("Search.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Search.VM;
        vm.Web = EWeb.Done;
        switch (pResult.Action) {
            case "Search":
                //if (pResult.Error !== undefined || pResult.Error === null) this.View({ Msg: "Error_" + pResult.Data });
                //else
                if (pResult.Data.length === 0) this.View({ Msg: "Error_NoData" });
                else {
                    //console.log("Search.Web * pResult.Data.length=" + pResult.Data.length);
                    //console.log("Search.Web * pResult.Data=" + JSON.stringify(pResult.Data));
                    this.View({ Msg: "Web_Search" });
                    pResult.Data.forEach(x => { if (x.Photo_Src === "") x.Photo_Src = Dft.Src.Photo.No; });
                    Nav.GoView("Web" + pResult.Action, "Profiles", { Profiles: pResult.Data });
                }
                break;
        }
    }

    public static Load(pMember: any) {
        //console.log("Search.Load * pMember=" + JSON.stringify(pMember));
        //console.log("Search.Load * ProfileIdxDefault=" + JSON.stringify(pMember.ProfileIdxDefault));
        //console.log("Search.Load * pMember=" + JSON.stringify(pMember.ProfileIdxDefault));
        var vm = Search.VM;
        var startParms = pMember.Profiles[pMember.ProfileIdxDefault].StartParms;
        vm.ByFieldLeg.Legend.Value = "Search By"; vm.ByValue = startParms.By;
        vm.TextLine.Label.Value = "Search Text";
        switch (vm.ByValue) {
            case eBy.UserId: vm.TextLine.Ctl.Value = startParms.TextUserId; break;
            case eBy.NameFirst: vm.TextLine.Ctl.Value = startParms.TextNameFirst; break;
            case eBy.NameLast: vm.TextLine.Ctl.Value = startParms.TextNameLast; break;
            case eBy.Group: vm.TextLine.Ctl.Value = startParms.TextGroup === undefined ? "Newbie" : startParms.TextGroup; break;
            default: vm.ByValue = eBy.Group; vm.TextLine.Ctl.Value = startParms.TextGroup === undefined ? "Newbie" : startParms.TextGroup; break;
        }

        vm.RatingLines[0].Ctl.Value = startParms.RatingMin === undefined ? 0 : startParms.RatingMin;
        vm.RatingLines[1].Ctl.Value = startParms.RatingMax === undefined ? 0 : startParms.RatingMax;
        vm.Web = EWeb.Done;
    }

    public static View(pObj) {
        var vm = Search.VM;
        if (pObj.Show !== undefined) {
            //console.log("Search.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                case "*": ; break;
                default: alert("Search.View.Show * Unknown=" + pObj.Show); break;
            }
        }

        if (pObj.Enable !== undefined) {
            //console.log("Search.View.Enable * vm.IsLoading=" + vm.IsLoading + " * pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
                default: alert("Search.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }


        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*": this.View({ Msg: "Info_Init" }); break;
                case "Error_Server": GM.Msg = "Server error."; break;
                case "Error_NoChanges": GM.Msg = "No changes were made."; break;
                case "Error_SearchNotCorrect": GM.Msg = "The current search is incorrect."; break;
                case "Info_Init": GM.Msg = "You may change your search."; break;
                case "Link_Home_ClickPlayers": GM.Msg = "You may search for a player."; break;
                case "Web_Search": GM.Msg = "Searching..."; break;
                case "Web_Search": GM.Msg = "Loading results..."; break;
                default: alert("Search.View.Msg * pObj.Msg=" + pObj.Msg); break;
            }
        }
    };

}
interface IVM extends IViewModel {
    ByFieldLeg: IFieldLeg,
    ByValue: eBy,
    ByLines: Array<ILabelCtl>,
    TextFieldLeg: IFieldLeg,
    TextLine: ILabelCtl,
    RatingFieldLeg: IFieldLeg,
    RatingLines: Array<ILabelCtl>,
    Exit: IButton, Back: IButton, Search: IButton,
}
export enum eBy { UserId = "U", NameFirst = "F", NameLast = "L", Group = "G" }
