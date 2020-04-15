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
import { IProfile, Profile } from '../../../../Main/Member/Views/Profile/Profile'
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';



@Component({ templateUrl: './History.html' })
export class History {
    VM: IVM; static VM: IVM;

    constructor() { this.VM = History.VM; Nav.Route_VM = History.VM; }


    ngOnInit() {
        //console.log("History.ngOnInit");
        //console.log("History.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("History.ngOnInit pView_Event=" + Nav.View_Event);
        this.VM = History.VM; Nav.Route_VM = History.VM;
        switch (Nav.Route_Event) {
            case "Home_ClickHistory":
                History.View({ Show: "ngOnInit", Enable: "*", Buttons: "*", Msg: "Link_" + Nav.Route_Event });

                break;
            default: alert("Games.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event); break;

        }
        Tabs.Show(this.VM.Tabs);
    }

    public OnClick(pSender: string, pTabIdx: number) {
        //console.log("Games.OnClick * pControl=" + pControl + " * pTabIdx=" + pTabIdx);
        var vm = History.VM;
        switch (pSender) {
            case "Tab": History.View({ Buttons: "*" }); break;
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
        //console.log("History.Init");

        this.VM = {
            Web: EWeb.Loading, TabIdx: 0, Opponents: [], Games: [],
            //Page: { LPP: 5, Lines: [], RowIdx: null, Rows: [] },

            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),


            View: "Opponents", Disabled: false,
            //Tabs: Tabs.Init([{ Name: "Opponents" }, { Name: "Games" }]),

            //Table: Table.Init(
            //    {
            //        Type: ETable.Select,
            //        Frame: { X: .25, Y: Dft.Y1_Tab, W: 8.25 },
            //        Cols: []
            //    }),

            //TH_Select: Ctl.Init({ Type: ECtl.TH_Blank }), TD_Select: Ctl.Init({ Type: ECtl.TD_Blank }, false), XSelect: Checkbox.Init({ Type: ECheckbox.XCheckbox }, false),
            //TH_Img: Ctl.Init({ Type: ECtl.TH_Img }), TD_Img: Ctl.Init({ Type: ECtl.TD_Img }, false), XImg: Img.Init({ Type: EImg.Generic }, false),
            //TH_TAL: Ctl.Init({ Type: ECtl.TH_TAL }), TD_TAL: Ctl.Init({ Type: ECtl.TD_TAL }, false),
            //TH_TAC: Ctl.Init({ Type: ECtl.TH_TAC }), TD_TAC: Ctl.Init({ Type: ECtl.TD_TAC }, false),

            BigMsg: Label.Init({ Type: ELabel.BigMsg }, false),
            Exit: Button.Init({ Type: EButton.Left }, false),
            Profile: Button.Init({ Type: EButton.Center }, false), Challenge: Button.Init({ Type: EButton.Right }, false),
            Board: Button.Init({ Type: EButton.Center }, false), Game: Button.Init({ Type: EButton.Right }, false),
        };
        this.Stack();
        this.Size();
        //console.log("History.Init * this.VM.TH_Blank.Size=" + JSON.stringify(this.VM.TH_Blank.Size));
        //console.log("History.Init * this.VM.TH_Blank.Style=" + JSON.stringify(this.VM.TH_Blank.Style));

    }
    public static Stack() {
        //console.log("History.Stack");
        //console.log("History.Stack * this.VM.TH_Blank.Size=" + JSON.stringify(this.VM.TH_Blank.Size));

    }
    public static Size() {
        //console.log("History.Size * this.VM.TH_Blank.Size=" + JSON.stringify(this.VM.TH_Blank.Size));

        var vm = History.VM;
        //Size.ViewModel(vm, false);
        Tabs.Size();
        Table.Size(vm.Table);
        //Ctl.Size(vm.TH_Select); Ctl.Size(vm.TD_Select); Ctl.Size(vm.XSelect);
        //Ctl.Size(vm.TH_Img); Ctl.Size(vm.TD_Img); Ctl.Size(vm.XImg);
        //Ctl.Size(vm.TH_TAL); Ctl.Size(vm.TD_TAL);
        //Ctl.Size(vm.TH_TAC); Ctl.Size(vm.TD_TAC);

        Button.Size(vm.Exit); Button.Size(vm.Exit);
        Button.Size(vm.Profile); Button.Size(vm.Profile);
        Button.Size(vm.Challenge); Button.Size(vm.Challenge);
        Button.Size(vm.Game); Button.Size(vm.Game);
        Button.Size(vm.Board); Button.Size(vm.Board);

        //console.log("History.Size * this.VM.TH_Blank.Size=" + JSON.stringify(this.VM.TH_Blank.Size));
        //console.log("History.Size * this.VM.TH_Blank.Style=" + JSON.stringify(this.VM.TH_Blank.Style));
    }
    public static Web(pResult: any) {
        //console.log("GamesView.Web * pResult.Action=" + pResult.Action);
        //console.log("GamesView.Web * pResult.Success=" + pResult.Success);
        //console.log("GamesView.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = History.VM;

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
    }
    public static View(pObj) {
        //console.log("Games.View");
        var vm = History.VM;
        //console.log("History.View * History.DM.Opponents.length=" + History.DM.Opponents.length);
        //console.log("History.View * History.DM.Games.length=" + History.DM.Games.length);
        if (pObj.Show !== undefined) {
            //console.log("HistoryView.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                case "*":
                    break;
                case "ngOnInit":
                    vm.TabIdx = 0;
                    this.View({ Show: "Tabs" });
                    break;
                case "Tabs":
                    switch (vm.TabIdx) {
                        case 0: Nav.GoView("Tab", "Opponents"); break;
                        case 1: Nav.GoView("Tab", "Games"); break;
                    }
                    break;
                default: alert("History.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("History.View.Enable * pObj.Enable=" + pObj.Enable + " * vm.Web)=" + vm.Web);
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
            }
        }
        if (pObj.Buttons !== undefined) {
            //console.log("History.View.Buttons=" + pObj.Buttons);
            //console.log("History.View.Buttons * History.DM=" + JSON.stringify(History.DM));
            //console.log("History.View.Buttons * History.VM=" + JSON.stringify(History.VM));

            //#region Hide All

            vm.Exit.Show = false;
            vm.Profile.Show = false;
            vm.Challenge.Show = false;
            vm.Game.Show = false;
            vm.Board.Show = false;

            //#endregion

            switch (pObj.Buttons) {
                case "*":
                    switch (vm.View) {
                        default: break;
                        case "Opponents": vm.Exit.Show = true; vm.Profile.Show = true; vm.Challenge.Show = true; break;
                        case "Games": vm.Exit.Show = true; vm.Game.Show = true; vm.Board.Show = true; break;
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



export interface IVM extends IViewModel {
    TabIdx: number,
    Opponents: Array<IProfile>;
    Games: Array<IGame>;
    BigMsg: ILabel,
    Exit?: IButton,
    Profile?: IButton, Challenge: IButton,
    Game?: IButton, Board: IButton
}
