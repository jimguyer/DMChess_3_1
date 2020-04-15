import { Component, OnInit } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ETable, IATable, ITable, Table } from '../../../../Common/Ctls/Table';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ selector: 'membership', templateUrl: './membership.html' })

export class Membership {
    VM: IVM; static VM: IVM;
    constructor() { this.VM = Membership.VM; }

    ngOnInit() {
        //console.log("Membership.ngOnInit");
        //console.log("Membership.ngOnInit *  GM.Sized.Membership=" + GM.Sized.Membership);
        //console.log("Membership.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        //console.log("Membership.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        //console.log("Membership.ngOnInit * Membership.VM.Disabled=" + Membership.VM.Disabled);
        //console.log("Membership.ngOnInit * this.VM.Disabled=" + this.VM.Disabled);
        switch (Nav.Route_Event) {
            case "App_Boot":
            case "Home_ClickUser":
            case "User_ClickTab": Membership.View({ Show: "*", Enable: "*", Msg: "*" }); break;
            default: alert("User.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event);
        }
        if (GM.Sized.Membership == null) Membership.Size();
        //console.log("Membership.ngOnInit * Membership.VM.Disabled=" + Membership.VM.Disabled);
        //console.log("Membership.ngOnInit * this.VM.Disabled=" + this.VM.Disabled);
    }

    public OnClick(pControl: string, pIdx: number = 0) {
        //console.log("Membership.OnClick * pControl=" + pControl);
        var vm = Membership.VM;
        switch (pControl) {
            case "Select": Membership.View({ Enable: "*", Show: "*", Msg: "*" }); break;
            case "Exit": Nav.GoRoute("Click" + pControl, "Home"); break;
            case "Upgrade":
                //console.log("Membership.OnClick.Upgrade *  vm.ENewLevel=" + vm.ENewLevel);

                break;
        }
        //console.log("Membership.OnClick * vm.IsLoading=" + vm.IsLoading);
        //console.log("Membership.OnClick * vm.Disabled=" + vm.Disabled);
    }

    public static Init() {
        //console.log("Membership.Init");
        //#region VM
        var aLeft: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .25, W: 1.75, F: 1 }, AOutput: { Type: ELabel.TALeft, X: 2.125, W: 2.3, F: 1  }, ASize: { GapX: Dft.GapX } }
        var aRight: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: 5, W: 1.5, F: 1 }, AOutput: { Type: ELabel.TALeft, X: 6.625, W: 2.3, F: 1}, ASize: { GapX: Dft.GapX } }

        Membership.VM = {
            Table: Table.Init({ Type: ETable.Data, X: .25, W: 8.25, H: 4 }),
            //TH_Select: Ctl.Init({ ControlType: eControlType.TH_Blank }), TD_Select: Ctl.Init({ ControlType: eControlType.TD_Blank }, false), XSelect: Ctl.Init({ ControlType: eControlType.XRadio }, false),
            //TH_TAL: Ctl.Init({ ControlType: eControlType.TH_TAL }, false), TD_TAL: Ctl.Init({ ControlType: eControlType.TD_TAL }, false),
            //TH_TAC: Ctl.Init({ ControlType: eControlType.TH_TAC }, false), TD_TAC: Ctl.Init({ ControlType: eControlType.TD_TAC }, false),

            CurLevel: LabelCtl.Init({ ALabel: aLeft.ALabel, AOutput: aLeft.AOutput, AValues: { Label: "Level", Ctl: "Loading" } }, false),
            CurExp: LabelCtl.Init({ ALabel: aRight.ALabel, AOutput: aRight.AOutput, AValues: { Label: "Exp", Ctl: "Loading" } }, false),
            NewLevel: LabelCtl.Init({ ALabel: aLeft.ALabel, AOutput: aLeft.AOutput, AValues: { Label: "Level", Ctl: "Loading" } }, false),
            NewExp: LabelCtl.Init({ ALabel: aRight.ALabel, AOutput: aRight.AOutput, AValues: { Label: "Exp", Ctl: "Loading" } }, false),

            Paypal: Img.Init({ Type: EImg.Border_Black, X: "C", Y: 11, W: 6, H: 2.25, Src: Dft.Src.Paypal }),
            Buttons: Button.Inits([
                { Value: "Exit", Type: EButton.Left },
                { Value: "Extend", Type: EButton.Center },
                { Value: "Upgrade", Type: EButton.Right }
            ]),
        }
        var vm = Membership.VM;
        //#endregion
        this.Stack();
    }

    public static Stack() {
        //console.log("Membership.Stack");
        //var vm = Membership.VM;
        //var yAdd = 1;
        //vm.Table.Size.Y =  GM.Hdr_NextY; vm.Table.Size.Y = 4;
        //LabelCtl.Stack(vm.CurLevel, vm.Table.Size.Y + 1); LabelCtl.Stack(vm.NewLevel, vm.Table.Size.Y + 1);
        //LabelCtl.Stack(vm.CurExp, vm.Table.Size.Y + 2); LabelCtl.Stack(vm.NewExp, vm.Table.Size.Y + 2);
    }

    public static Size() {
        //console.log("Membership.Size * GM.Sized.Membership=" + GM.Sized.Membership);
        var vm = Membership.VM;
        //Size.ViewModel(vm, false);
        if (GM.Sized.Membership) return;
        //SizeSvc.ViewFunc(vm, null, false);
        Table.Size(vm.Table);
        //Control.Size(vm.TH_Select); Control.Size(vm.TD_Select); Control.Size(vm.XSelect);
        //Control.Size(vm.TH_TAC); Control.Size(vm.TD_TAC);
        //Control.Size(vm.TH_TAL); Control.Size(vm.TD_TAL);
        LabelCtl.Size(vm.CurLevel); LabelCtl.Size(vm.NewLevel);
        LabelCtl.Size(vm.CurExp); LabelCtl.Size(vm.NewExp);
        Img.Size(vm.Paypal);
        Button.Size(vm.Exit);
        Button.Size(vm.Extend);
        Button.Size(vm.Upgrade);
        GM.Sized.Membership = true;
        //console.log("Membership.Size * vm.FieldSet.Size=" + JSON.stringify(vm.FieldSet.Size));
        //console.log("Membership.Size * vm.Legend.Size=" + JSON.stringify(vm.Legend.Size));
        //console.log("Membership.Size * vm.Table.Size=" + JSON.stringify(vm.Table.Size));
        //console.log("Membership.Size * vm.TH_Blank.Size=" + JSON.stringify(vm.TH_Blank.Size));
        //console.log("Membership.Size * vm.TD_Blank.Size=" + JSON.stringify(vm.TD_Blank.Size));
        //console.log("Membership.Size * vm.TH_TAL.Size=" + JSON.stringify(vm.TH_TAL.Size));
        //console.log("Membership.Size * vm.TD_TAL.Size=" + JSON.stringify(vm.TD_TAL.Size));
        //console.log("Membership.Size * vm.TH_TAC.Size=" + JSON.stringify(vm.TH_TAC.Size));
        //console.log("Membership.Size * vm.TD_TAC.Size=" + JSON.stringify(vm.TD_TAC.Size));
        //console.log("Membership.Size * vm.XRadio.Size=" + JSON.stringify(vm.XRadio.Size));
        //console.log("Membership.Size * vm.Paypal.Size=" + JSON.stringify(vm.Paypal.Size));

        //console.log("Membership.Size * vm.Table.Style=" + JSON.stringify(vm.Table.Style));
        //console.log("Membership.Size * vm.TH_Blank.Style=" + JSON.stringify(vm.TH_Blank.Style));
        //console.log("Membership.Size * vm.TD_Blank.Style=" + JSON.stringify(vm.TD_Blank.Style));
        //console.log("Membership.Size * vm.TH_TAL.Style=" + JSON.stringify(vm.TH_TAL.Style));
        //console.log("Membership.Size * vm.TD_TAL.Style=" + JSON.stringify(vm.TD_TAL.Style));
        //console.log("Membership.Size * vm.TH_TAC.Style=" + JSON.stringify(vm.TH_TAC.Style));
        //console.log("Membership.Size * vm.TD_TAC.Style=" + JSON.stringify(vm.TD_TAC.Style));
        //console.log("Membership.Size * vm.XRadio.Style=" + JSON.stringify(vm.XRadio.Style));
        //console.log("Membership.Size * vm.Paypal.Style=" + JSON.stringify(vm.Paypal.Style));
        //console.log("Membership.Size * vm.Paypal.Src=" + JSON.stringify(vm.Paypal.Src));
    }



    public static Web(pResult: any) {
        //console.log("Membership.Web * pResult.Action=" + pResult.Action);
        //console.log("Membership.Web * pResult.Success=" + pResult.Success);
        //console.log("Membership.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Membership.VM;

        switch (pResult.Action) {
            case "MembershipSave": break;
        }
    }
    public static Load(Event: string, pObj: any) {
        //console.log("Membership.Load * pObj=" + JSON.stringify(pObj));
        var vm = Membership.VM;

        //#region Cur
        //pObj.Level = "B";
        //switch (pObj.Level) {
        //    case "F": case "Free": vm.Level.Value = "F"; vm.eCurLevel = ELevel.Free; vm.CurLevel = "Free"; break;
        //    case "B": case "Bronze": vm.Value = "B"; vm.eCurLevel = ELevel.Bronze; vm.CurLevel = "Bronze"; break;
        //    case "S": case "Silver": vm.Value = "S"; vm.eCurLevel = ELevel.Silver; vm.CurLevel = "Silver"; break;
        //    case "G": case "Gold": vm.Value = "G"; vm.eCurLevel = ELevel.Gold; vm.CurLevel = "Gold"; break;
        //    default: alert("Membership.Load ")
        //}
        vm.CurExp = pObj.Expiration;

        // #endregion

        //#region New

        //vm.Value = "G";
        vm.NewLevel.Ctl.Value = ELevel.Gold;
        vm.NewExp.Ctl.Value = pObj.Expiration;

        // #endregion

        if (Nav.View === "Membership") Membership.View({ Enable: "*", Show: "*", Msg: "*" });
        vm.Web = EWeb.Done;

        //console.log("Membership.Load * vm.Value=" + vm.Value);
    }


    public static View(pObj) {
        //console.log("Membership.View * pObj=" + JSON.stringify(pObj));
        // Membership.View
        var vm = Membership.VM;
        if (pObj.Show !== undefined) {
            //console.log("Membership.View.Show * pObj.Show=" + pObj.Show );

            switch (pObj.Show) {
                case "*":
                    //console.log("Membership.View.Show * pObj.Show=" + pObj.Show + " * vm.eCurLevel=" + vm.eCurLevel + " * vm.ENewLevel=" + vm.ENewLevel);
                    vm.Extend.Show = vm.CurLevel.Ctl.Value != ELevel.Free;
                    vm.Upgrade.Show = true;
                    //vm.CurLevel.Show = true;
                    //vm.CurExp.Show = vm.eCurLevel != ELevel.Free;
                    //vm.NewLevel.Show = vm.eCurLevel != vm.ENewLevel;
                    //vm.NewExp.Show = vm.ENewLevel != ELevel.Free;
                    //switch (vm.NewLevel.Ctl.Value) {
                    //    case ELevel.Free: vm.NewLevel = "Free"; break;
                    //    case ELevel.Bronze: vm.NewLevel = "Bronze"; break;
                    //    case ELevel.Silver: vm.NewLevel = "Silver"; break;
                    //    case ELevel.Gold: vm.NewLevel = "Gold"; break;
                    //}
                    //console.log("Membership.View.Show.*  *  vm.CurExp.Show=" + vm.CurExp.Show);
                    //console.log("Membership.View.Show.*  *  vm.NewLevel.Show=" + vm.NewLevel.Show);
                    //console.log("Membership.View.Show.*  *  vm.NewExp.Show=" + vm.NewExp.Show);
                    break;
                default: alert("sMembership.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("Membership.View.Enable * vm.IsLoading=" + vm.IsLoading + " * pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "*":
                    ////console.log("Membership.View.Enable * pObj.Enable=" + pObj.Enable + " * vm.eCurLevel=" + vm.eCurLevel + " * vm.ENewLevel=" + vm.ENewLevel);
                    //vm.Extend.Disabled = vm.eCurLevel !== vm.ENewLevel || vm.ENewLevel === ELevel.Free;
                    //vm.Upgrade.Disabled = vm.eCurLevel === vm.ENewLevel;
                    //vm.Disabled = vm.Web != EWeb.Done;
                    //switch (vm.eCurLevel) {
                    //    case ELevel.Free: vm.Levels[0].Disabled = false; vm.Levels[1].Disabled = false; vm.Levels[2].Disabled = false; vm.Levels[3].Disabled = false; break;
                    //    case ELevel.Bronze: vm.Levels[0].Disabled = true; vm.Levels[1].Disabled = false; vm.Levels[2].Disabled = false; vm.Levels[3].Disabled = false; break;
                    //    case ELevel.Silver: vm.Levels[0].Disabled = true; vm.Levels[1].Disabled = true; vm.Levels[2].Disabled = false; vm.Levels[3].Disabled = false; break;
                    //    case ELevel.Gold: vm.Levels[0].Disabled = true; vm.Levels[1].Disabled = true; vm.Levels[2].Disabled = true; vm.Levels[3].Disabled = false; break;
                    //}
                    break;
                default: alert("Membership.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }
        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*":
                    switch (vm.Web) {
                        case EWeb.Loading: GM.Msg = "Saving..."; break;
                        case EWeb.Server: GM.Msg = "Upgrading..."; break;
                        case EWeb.Done:
                            //if (vm.CurLevel.Ctl.Value === vm.ENewLevel) {
                            //    switch (vm.ENewLevel) {
                            //        case ELevel.Free: GM.Msg = "Click Bronze, Silver, or Gold to upgrade."; break;
                            //        default: GM.Msg = "Click extend to add a year to your membership."; break;
                            //    }
                            //}
                            //else {
                                switch (vm.CurLevel.Ctl.Value) {
                                    case ELevel.Free: GM.Msg = "Click Bronze, Silver, or Gold to upgrade."; break;
                                    case ELevel.Bronze: GM.Msg = "Click upgrade to go Bronze."; break;
                                    case ELevel.Silver: GM.Msg = "Click upgrade to go Silver."; break;
                                    case ELevel.Gold: GM.Msg = "Click upgrade to go Gold."; break;
                                }
                            //}
                            break;
                    }
                    break;
                case "Link_Home_ClickUser":
                case "Link_User_ClickTab": GM.Msg = "You may ugrade your membership."; break;
                default: alert("User.View.Msg * Unknown pObj.Msg=" + pObj.Msg);
            }
        }
    };
}
interface IVM extends IViewModel {
    Levels?: Array<ILevel>,
    Table: ITable;
    CurLevel: ILabelCtl, NewLevel: ILabelCtl,
    CurExp: ILabelCtl, NewExp: ILabelCtl,
    Paypal: IImg;
    Exit?: IButton; Extend?: IButton; Upgrade?: IButton;
}
interface ILevel {
    Value?: string;
    Level?: ELevel;
    Disabled?: boolean;
    Label?: string;
    Price?: string;
    Profiles?: number;
    Games?: number;
}
export enum ELevel { Free = "F", Bronze = "B", Silver = "S", Gold = "G" }
