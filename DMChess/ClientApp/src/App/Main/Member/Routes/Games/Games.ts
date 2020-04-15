import { Component, OnInit } from '@angular/core';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { IAPage, IPage, Page } from '../../../../Common/Comps/Page/Page';
import { IATabs, ITabs, Tabs } from '../../../../Common/Comps/Tabs/Tabs';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ETable, IATable, ITable, Table } from '../../../../Common/Ctls/Table';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';

import { IGame, Game } from '../../../../Main/Member/Views/Game/Game'
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';



@Component({
    providers: [GM],
    templateUrl: './Games.html'
})
export class Games {
    VM: IVM; static VM: IVM;

    constructor() { this.VM = Games.VM; Nav.Route_VM = Games.VM; }

    ngOnInit() {
        //console.log("Games.ngOnInit");
        //console.log("Games.ngOnInit * Route_Event=" + Nav.Route_Event);
        //console.log("Games.ngOnInit * View_Event=" + Nav.View_Event);
        //console.log("Games.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("Games.ngOnInit * Route_Event=" + Nav.Route_Event);

        //console.log("Games.ngOnInit * Games.DM=" + JSON.stringify(Games.DM));
        //console.log("Games.ngOnInit * Games.DM.Active.length=" + Games.DM.Active.length);
        //console.log("Games.ngOnInit * Games.DM.Received.length=" + Games.DM.Received.length);
        //console.log("Games.ngOnInit * Games.DM.Sent.length=" + Games.DM.Sent.length);
        switch (Nav.Route_Event) {
            case "Home_ClickGames": Games.View({ Show: "*", Enable: "*", Buttons: "*", Msg: "Link_" + Nav.Route_Event }); break;
            default: alert("Games.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event); break;
        }
        Tabs.Show(this.VM.Tabs);
    }

    public OnClick(pSender: string, pTabIdx: number) {
        //console.log("Games.OnClick * pSender=" + pSender + " * pTabIdx=" + pTabIdx);
        var vm = Games.VM;
        switch (pSender) {
            case "Tab": Games.View({ Buttons: "*" }); break;
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
            case "Save":
                switch (Nav.View) {
                    case "Email": break;
                    case "Options": break;
                    case "Password": break;
                }
                break;
        }
        //console.log("User.OnClick * this.VM.Mode=" + this.VM.Mode);
        //console.log("User.OnClick * this.VM.Password=" + this.VM.Password);
    }

    public static Init() {
        //console.log("Games.Init");
        this.VM = {
            Web: EWeb.Loading,
            BigMsg: Label.Init({ Value: "" }),
            Limit: null, Active: [], Received: [], Sent: [],
            //Page: Page.Init({ Current: 0, Last: 0, LPP: 5, Lines: [], RowIdx: null, Rows: [] }),
            Show: "BigMsg", View: "Active",
            Tabs: Tabs.Init({ Values: ["Active", "Received", "Sent"] }),
            //BigMsg: Label.Init({ Type: ELabel.BigMsg }, false),
            //Table: Table.Init(
            //    Frame: { Type: ETableType.Select, X: .25, Y: Dft.Y1_Tab, W: 8.25 },
            //    Cols: []
            //),
            //Col_Select = Table_Col.Init({ Type: ETableType.Select, X: .25, Y: Dft.Y1_Tab, W: 8.25 }),
            //TH_Select: Ctl.Init({ ControlType: eControlType.TH_Blank }), TD_Select: Ctl.Init({ ControlType: eControlType.TD_Blank }, false), XSelect: Ctl.Init({ ControlType: eControlType.XCheckbox }, false),
            //TH_Img: Ctl.Init({ ControlType: eControlType.TH_Img }), TD_Img: Ctl.Init({ ControlType: eControlType.TD_Img }, false), XImg: Ctl.Init({ ControlType: eControlType.XImg }, false),
            //TH_TAL: Ctl.Init({ ControlType: eControlType.TH_TAL }), TD_TAL: Ctl.Init({ ControlType: eControlType.TD_TAL }, false),
            //TH_TAC: Ctl.Init({ ControlType: eControlType.TH_TAC }), TD_TAC: Ctl.Init({ ControlType: eControlType.TD_TAC }, false),
            Exit: Button.Init({ Type: EButton.Left }),
            Board: Button.Init({ Type: EButton.Center }), Profile: Button.Init({ Type: EButton.Right }),
            Decline: Button.Init({ Type: EButton.Center }), Accept: Button.Init({ Type: EButton.Right }),
            Retract: Button.Init({ Type: EButton.Center }), Resend: Button.Init({ Type: EButton.Right }),
            Start: Button.Init({ Type: EButton.Right })
        };
        //console.log("Games.Init * this.VM.Tabs=" + JSON.stringify(this.VM.Tabs));
        this.Stack();
        this.Size();

        //console.log("Games.Init * Games.DM.Active.length=" + Games.DM.Active.length);
        //console.log("Games.Init * Games.DM.Received.length=" + Games.DM.Received.length);
        //console.log("Games.Init * Games.DM.Sent.length=" + Games.DM.Sent.length);

    }
    public static Stack() {

    }
    public static Size() {
        //console.log("GamesView.Size * vm.Opponent_FieldSet.Size=" + JSON.stringify(vm.Opponent_FieldSet.Size));
        //console.log("GamesView.Size * vm.Opponent_Legend.Size=" + JSON.stringify(vm.Opponent_Legend.Size));

        var vm = Games.VM;
        //Size.ViewModel(vm, false);
        Tabs.Size();
        Label.Size(vm.BigMsg);
        Table.Size(vm.Table);
        //Control.Size(vm.TH_Select); Control.Size(vm.TD_Select); Control.Size(vm.XSelect);
        //Control.Size(vm.TH_Img); Control.Size(vm.TD_Img); Control.Size(vm.XImg);
        //Control.Size(vm.TH_TAL); Control.Size(vm.TD_TAL);
        //Control.Size(vm.TH_TAC); Control.Size(vm.TD_TAC);

        Button.Size(vm.Exit); Button.Size(vm.Exit);
        Button.Size(vm.Board); Button.Size(vm.Board);
        Button.Size(vm.Decline); Button.Size(vm.Decline);
        Button.Size(vm.Retract); Button.Size(vm.Retract);
        Button.Size(vm.Start); Button.Size(vm.Start);
        Button.Size(vm.Accept); Button.Size(vm.Accept);
        Button.Size(vm.Profile); Button.Size(vm.Profile);
        Button.Size(vm.Resend); Button.Size(vm.Resend);

        //console.log("GamesView.Size * vm.Opponent_FieldSet.Style=" + JSON.stringify(vm.Opponent_FieldSet.Style));
        //console.log("GamesView.Size * vm.Opponent_Legend.Style=" + JSON.stringify(vm.Opponent_Legend.Style));
    }
    public static Web(pResult: any) {
        //console.log("GamesView.Web * pResult.Action=" + pResult.Action);
        //console.log("GamesView.Web * pResult.Success=" + pResult.Success);
        //console.log("GamesView.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Games.VM;

        switch (pResult.Action) {
            case "GamesViewAccept": break;
            case "GamesViewDecline": break;
            case "GamesViewRetract": break;
            case "GamesViewSend": break;
        }
    }
    public static Load(pEvent: string, pObj: any) {
        //console.log("Games.Load");
        //console.log("Games.Load * pObj=" + JSON.stringify(pObj));
        //console.log("Games.Load * pObj.Games=" + JSON.stringify(pObj.Games));
        this.VM.Limit = pObj.GamesLimit;
        this.VM.Active = pObj.Games.Active;
        this.VM.Received = pObj.Games.Received;
        this.VM.Sent = pObj.Games.Sent;
    }
    public static View(pObj) {
        //console.log("Games.View");
        var vm = Games.VM;
        //console.log("Games.View * Games.DM.Active.length=" + Games.DM.Active.length);
        //console.log("Games.View * Games.DM.Received.length=" + Games.DM.Received.length);
        //console.log("Games.View * Games.DM.Sent.length=" + Games.DM.Sent.length);
        if (pObj.Show !== undefined) {
            //console.log("GamesView.View.Show * pObj.Show=" + pObj.Show + " * vm.Web=" + vm.Web);
            switch (pObj.Show) {
                case "*":
                    if (vm.Web === EWeb.Loading) {
                        vm.Show = "BigMsg"; vm.BigMsg.Value = "Loading...."
                    }
                    else {
                        switch (vm.View) {

                        }
                    }
                    break;
                case "ngOnInit":
                    if (vm.Web === EWeb.Loading) vm.Tabs.Idx = 0;
                    else if (vm.Received.length > 0) vm.Tabs.Idx = 1;
                    else if (vm.Active.length > 0) vm.Tabs.Idx = 0;
                    else if (vm.Sent.length > 0) vm.Tabs.Idx = 2;
                    else vm.Tabs.Idx = 0;
                    this.View({ Show: "Tabs" });
                    break;
                case "Tabs":
                    switch (vm.Tabs.Idx) {
                        case 0: Nav.GoView("Tab", "Active"); break;
                        case 1: Nav.GoView("Tab", "Received"); break;
                        case 2: Nav.GoView("Tab", "Sent"); break;
                    }
                    break;
                default: alert("Games.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
                default: alert("Games.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }

        if (pObj.Buttons !== undefined) {
            //console.log("Games.View.Buttons=" + pObj.Buttons);
            //console.log("Games.View.Buttons * Games.DM=" + JSON.stringify(Games.DM));
            //console.log("Games.View.Buttons * Games.VM=" + JSON.stringify(Games.VM));

            //#region Hide All

            vm.Exit.Show = false;
            vm.Board.Show = false;
            vm.Decline.Show = false;
            vm.Retract.Show = false;
            vm.Start.Show = false;
            vm.Accept.Show = false;
            vm.Profile.Show = false;
            vm.Resend.Show = false;

            //#endregion

            switch (pObj.Buttons) {
                case "*":
                    //console.log("Games.View.Buttons.* vm.Tabs.View=" + vm.Tabs.View);
                    switch (vm.Tabs.View) {
                        default: break;
                        case "Active": vm.Exit.Show = true; vm.Board.Show = true; vm.Profile.Show = true; break;
                        case "Received": vm.Exit.Show = true; vm.Decline.Show = true; vm.Accept.Show = true; break;
                        case "Sent": vm.Exit.Show = true; vm.Retract.Show = true; vm.Start.Show = true; break;
                    }
                    break;
                default: alert("User.View.Buttons * Unknown=" + pObj.Buttons); break;
            }
            //console.log("Games.View.Buttons * vm.Exit.Show=" + vm.Exit.Show);
            //console.log("Games.View.Buttons * vm.Board.Show=" + vm.Board.Show);
            //console.log("Games.View.Buttons * vm.Start.Show=" + vm.Start.Show);
            //console.log("Games.View.Buttons * vm.Decline.Show=" + vm.Decline.Show);
            //console.log("Games.View.Buttons * vm.Accept.Show=" + vm.Accept.Show);
            //console.log("Games.View.Buttons * vm.Retract.Show=" + vm.Retract.Show);
            //console.log("Games.View.Buttons * vm.Profile.Show=" + vm.Profile.Show);
        }

        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*":
                case "Info_Add": GM.Msg = "You my upload a photo."; break;
                case "Info_Init": GM.Msg = "Enter information."; break;
                case "Error_UserId_Blank": GM.Msg = "Enter a User ID."; break;
                case "Error_CodeError": GM.Msg = "The code you entered is not correct."; break;
                case "Web_Registering": GM.Msg = "Registering..."; break;
                case "Web_Registered": GM.Msg = "GamesView successsful"; break;
            }
        }
    };
}

interface IVM extends IViewModel {
    Limit: number, Active: Array<IGame>; Received: Array<IChallenge>; Sent: Array<IChallenge>;

    BigMsg: ILabel,
    Exit: IButton,
    Board: IButton, Profile: IButton,
    Decline: IButton, Accept: IButton,
    Retract: IButton, Resend: IButton,
    Start: IButton
}

interface IGames { Active: Array<IGame>; Received: Array<IChallenge>; Sent: Array<IChallenge>; }
interface IChallenge {
    Id?: string;
    MotherId?: string;
    ProfileIdx?: number;
    Rated?: boolean;
    TimeInc?: string;
    TimeAmt?: number;
    UserId?: string;
    PhotoSrc: string;
    OpGroup?: string;
    OpRating?: number;
}
