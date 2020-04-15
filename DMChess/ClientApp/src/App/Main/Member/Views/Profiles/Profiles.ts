import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EPosition as EPos } from '../../../../Common/Attrs/Position';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { ECheckbox, IACheckbox, ICheckbox, Checkbox } from '../../../../Common/Ctls/Checkbox';
import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IAPage, IPage, Page } from '../../../../Common/Comps/Page/Page';
import { ERadio, IARadio, IRadio, Radio } from '../../../../Common/Ctls/Radio';
import { IATabs, ITabs, Tabs } from '../../../../Common/Comps/Tabs/Tabs';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ETable, IATable, ITable, Table } from '../../../../Common/Ctls/Table';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';


@Component({ selector: 'profiles', templateUrl: './Profiles.html' })

export class Profiles {
        VM: IVM; static VM: IVM; constructor() { this.VM = Profiles.VM; }

    ngOnInit() {
        //console.log("Profiles.ngOnInit");
        //console.log("Profiles.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        //console.log("Profiles.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        //console.log("Profiles.ngOnInit *  Nav.View_Parms.Profiles=" + JSON.stringify(Nav.View_Parms.Profiles));
        //console.log("Profiles.ngOnInit *  GM.Sized.Profiles=" + GM.Sized.Profiles);

        this.VM.Route = Nav.Route;
        this.VM.Web = EWeb.Done;
        //this.VM.Page = Page.Build(Nav.View_Parms.Profiles, 5);
        //Page.Load(this.VM.Page);

        switch (Nav.Route_Event) {
            case "App_Boot":
            case "Home_ClickPlayers": GM.Wiz = {}; break;
            case "Home_ClickStart": break;
            default: alert("Search.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event); break;
        }
        Profiles.View({ Show: "*", Enable: "*", Buttons: "*", Msg: "Link_" + Nav.Route_Event });
    }



    public OnClick(pSender: string, pIdx: number = 0) {
        //console.log("Profiles.OnClick * pControl=" + pControl);
        var vm = Profiles.VM;
        switch (pSender) {
            case "RowSelect":
                //console.log("Profiles.OnClick.Select * pIdx=" + pIdx + " * vm.Page.Select=" + vm.Page.Select);
                //console.log("Profiles.OnClick.Select * vm.Page.Lines[" + pIdx + "].Value=" + vm.Page.Lines[pIdx].Value);
                if (vm.Page.RowIdx !== null && vm.Page.RowIdx === vm.Page.Lines[pIdx].Value) {
                    //console.log("Profiles.OnClick.Select.SelectionCanceled");
                    //console.log("Profiles.OnClick.Select * vm.Page.Rows[" + vm.Page.Select + "].Value=" + vm.Page.Rows[vm.Page.Select].Value);
                    //vm.Page.Select = null;
                    vm.Page.RowIdx = null;
                    vm.Page.Select = null;
                    Profiles.View({ Enable: "*", Msg: "Click_Unselect" });
                    GM.Wiz.UserId = null;
                }
                else {
                    //console.log("Profiles.OnClick.Select.SelectionMade");
                    vm.Page.RowIdx = vm.Page.Lines[pIdx].Value;
                    GM.Wiz.UserId = vm.Page.Rows[vm.Page.RowIdx].UserId;
                    Profiles.View({ Enable: "*", Msg: "Click_Select" });
                }
                break;

            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
            case "Back": Nav.GoView("Click" + pSender, "Search"); break;
            case "Challenge": GM.Wiz = { Photo_Src: vm.Page.Rows[vm.Page.RowIdx].Photo_Src, UserId: vm.Page.Rows[vm.Page.RowIdx].UserId }; Nav.GoView("Click" + pSender, "StartParms"); break;
            case "Select": GM.Wiz.Photo_Src = vm.Page.Rows[vm.Page.RowIdx].Photo_Src; GM.Wiz.UserId = vm.Page.Rows[vm.Page.RowIdx].UserId; Nav.GoView("Click" + pSender, "Message"); break;
        }
    }

    public OnPageEvent(pEvent: string) {
        //console.log("Profiles.OnPageEvent * pEvent=" + JSON.stringify(pEvent));
        //console.log("Profiles.OnPageEvent * this.VM.Page.RowIdx=" + this.VM.Page.RowIdx);
        var vm = this.VM;
        //if (vm.Page.RowIdx !== null) Profiles.View({ Msg: "PageEvent" });
        //else Page.View({ Msg: pEvent });
    }


    public static Init() {
        //console.log("Profiles.Init");
        Profiles.VM = {
            Web: EWeb.Loading, Show: "BigMsg",
            BigMsg: Label.Init({ Type: ELabel.BigMsg, Value: "Loading..." }),
            Table: Table.Init({ Type: ETable.Select, Y:  GM.Hdr_NextY }),
            //TH_Select: Ctl.Init({ ControlType: eControlType.TH_Blank }), TD_Select: Ctl.Init({ ControlType: eControlType.TD_Blank }, false), XSelect: Ctl.Init({ ControlType: eControlType.XRadio }, false),
            //TH_Img: Ctl.Init({ ControlType: eControlType.TH_Img }), TD_Img: Ctl.Init({ ControlType: eControlType.TD_Img }, false), XImg: Ctl.Init({ ControlType: eControlType.XImg }, false),
            //TH_TAL: Ctl.Init({ ControlType: eControlType.TH_Blank }), TD_TAL: Ctl.Init({ ControlType: eControlType.TD_TAL }, false),
            //TH_TAC: Ctl.Init({ ControlType: eControlType.TH_Blank }), TD_TAC: Ctl.Init({ ControlType: eControlType.TD_TAC }, false),
            //Page: { Current: 0, LPP: 6, Lines: [], RowIdx: null, Rows: [] },
            Exit: Button.Init({ Type: EButton.Left }),
            Back: Button.Init({ Type: EButton.Center }),
            Challenge: Button.Init({ Type: EButton.Right }),
            Select: Button.Init({ Type: EButton.Right })
        };
        Profiles.Stack();
        Profiles.Size();
    }

    public static Stack() {
        //console.log("Profiles.Stack");
        var vm = Profiles.VM;
    }

    public static Size() {
        //console.log("Profiles.Size * vm.Opponent_FieldSet.Size=" + JSON.stringify(vm.Opponent_FieldSet.Size));
        //console.log("Profiles.Size * vm.Opponent_Legend.Size=" + JSON.stringify(vm.Opponent_Legend.Size));

        var vm = Profiles.VM;
        //Size.ViewModel(vm, false);
        Page.Size(vm.Page);
        Table.Size(vm.Table);
        Label.Size(vm.BigMsg, false);
        Button.Size(vm.Exit, false);
        Button.Size(vm.Back, false);
        Button.Size(vm.Challenge, false);
        Button.Size(vm.Select, false);
    }

    public static Web(pResult: any) {
        //console.log("Profiles.Web * pResult.Action=" + pResult.Action);
        //console.log("Profiles.Web * pResult.Success=" + pResult.Success);
        //console.log("Profiles.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Profiles.VM;

        switch (pResult.Action) {
            //case "Code": vm.CodeImg.Src = pResult.Data; vm.Loading = false; break;
        }
    }

    public static View(pObj) {
        var vm = Profiles.VM;


        if (pObj.Show !== undefined) {
            //console.log("Profiles.View.Show * pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "*": vm.Show = vm.Page.Lines.length === 0 ? "BigMsg" : "Table"; break;
                default: alert("Profiles.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("View.Enable * pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "*":
                    //console.log("View.Enable * vm.Page.RowIdx=" + vm.Page.RowIdx);
                    vm.Disabled = vm.Web != EWeb.Done;
                    vm.Challenge.Disabled = vm.Page.RowIdx === null; vm.Select.Disabled = vm.Page.RowIdx === null;
                    break;
                default: alert("Profiles.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }
        if (pObj.Buttons !== undefined) {
            //console.log("Profiles.View.Buttons * pObj.Buttons=" + pObj.Buttons);
            //console.log("Profiles.View.Buttons * vm.Route=" + vm.Route);
            //#region Hide all
            vm.Exit.Show = false;
            vm.Back.Show = false;
            vm.Challenge.Show = false;
            vm.Select.Show = false;
            //#endregion

            switch (pObj.Buttons) {
                case "*":
                    switch (vm.Route) {
                        case "Players": vm.Exit.Show = true; vm.Back.Show = true; vm.Challenge.Show = true; break;
                        case "Start": vm.Exit.Show = true; vm.Back.Show = true; vm.Select.Show = true; break;
                    }
                    break;
                default: alert("Profiles.View.Buttons * Unknown=" + pObj.Buttons); break;
            }
        }

        if (pObj.Msg !== undefined) {
            //console.log("Profiles.View.Msg * pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "Info_Add": GM.Msg = "You my upload a photo."; break;
                case "Click_Select":
                    switch (Nav.Route) {
                        case "Players": GM.Msg = "You may challenge  " + GM.Wiz.UserId + "."; break;
                        case "Start": GM.Msg = "You may select " + GM.Wiz.UserId + "."; break;
                    }
                    break;
                case "Click_Unselect": GM.Msg = "Selection of " + GM.Wiz.UserId + " cleared."; break;
                case "Link_Home_ClickPlayers": GM.Msg = "Your search yielded " + "2" + " players."; break;
                case "PageEvent": GM.Msg = GM.Wiz.UserId + " has been selected."; break;
                case "Error_UserId_Blank": GM.Msg = "Enter a User ID."; break;
                case "Error_CodeError": GM.Msg = "The code you entered is not correct."; break;
                case "Web_Registering": GM.Msg = "Registering..."; break;
                case "Web_Registered": GM.Msg = "Profiles successsful"; break;
                default: alert("Profiles.View.Msg * Unknown=" + pObj.Msg); break;
            }
        }
    };

}

interface IVM extends IViewModel {
    Table: ITable;
    //TH_Select: IControl; TD_Select: IControl; XSelect: IControl;
    //TH_Img: IControl; TD_Img: IControl; XImg: IControl;
    //TH_TAL: IControl; TD_TAL: IControl;
    //TH_TAC: IControl; TD_TAC: IControl;
    Exit: IButton;
    Back: IButton;
    Challenge: IButton;
    Select: IButton;
}
