import { Component, OnInit } from '@angular/core';
import { IAFieldLeg, IFieldLeg,FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';


import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ selector: 'game', templateUrl: './game.html' })

export class Game {
    VM: IVM; static VM: IVM;

    constructor() { this.VM = Game.VM; }

    ngOnInit() {
        //console.log("Game.ngOnInit");
        //console.log("Game.ngOnInit *  GM.Sized.Game=" + GM.Sized.Game);
        //console.log("Game.ngOnInit * Nav.View_Event=" + Nav.View_Event);

        Nav.View = "Game";

        switch (Nav.View_Event) {
            case "App_Boot":
            case "LogOn_Register": Game.View({ Show: "Toggle", Msg: "Info_Init" }); break;
        }

        if (GM.Sized.Game == null) Game.Size();
    }

    public OnChange(pSender) {
        //console.log("OnChange * pSender=" + pSender)
    }

    public OnClick(pSender: string) {
        //console.log("LogOn.OnClick * pButton=" + pControl);
        switch (pSender) {
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
        }
    }
    //#region Static

    public static Init() {
        //console.log("Game.Init");

        var aLine: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .25, W: 1.8, H: .8, F: .8 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ASize: { GapX: Dft.GapX } };

        Game.VM = {
            Disabled: false,
            Switch: "",
            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),

            OpFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 3.5}, ALegend: { W: 5 } }, false),
            UserId: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "User ID", Ctl: "" }, ASize: aLine.ASize }, false),
            Rating: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Rating", Ctl: "" }, ASize: aLine.ASize }, false),

            StatsFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 3.5 }, ALegend: { W: 5 } }, false),
            Name: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Name", Ctl: "" }, ASize: aLine.ASize }, false),
            Rated: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Rated", Ctl: "" }, ASize: aLine.ASize }, false),
            Time: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Time", Ctl: "" }, ASize: aLine.ASize }, false),
            Exit: Button.Init({ Type: EButton.Left }),
            Accept: Button.Init({ Type: EButton.Center }, false),
            Back: Button.Init({ Type: EButton.Center }, false),
            Board: Button.Init({ Type: EButton.Center }, false),
            Decline: Button.Init({ Type: EButton.Center }, false),
            Next: Button.Init({ Type: EButton.Center }, false),
            Resend: Button.Init({ Type: EButton.Center }, false),
            Retract: Button.Init({ Type: EButton.Center }, false),
            Send: Button.Init({ Type: EButton.Center }, false)
        };

        //#endregion

    }
    public static Stack() {
        //console.log("Game.Stack");
        var vm = Game.VM;
        var gapY = null;
        Fieldset.Stack(vm.OpFieldLeg, { Y: GM.Hdr_NextY, GapY: gapY }, false);
        LabelCtl.Stack(vm.UserId, { Y: vm.OpFieldLeg.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Rating, { Y: vm.UserId.Label.Size.NextY, GapY: gapY }, false);
        Fieldset.Bottom(vm.OpFieldLeg.Fieldset, { NextY: vm.Rating.Label.Size.NextY, GapY: gapY }, false);

        Fieldset.Stack(vm.StatsFieldLeg, { Y: vm.OpFieldLeg.Size.NextY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Name, { Y: vm.StatsFieldLeg.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Rated, { Y: vm.Name.Label.Size.NextY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Time, { Y: vm.Rated.Label.Size.NextY, GapY: gapY }, false);
        Fieldset.Bottom(vm.StatsFieldLeg.Fieldset, { NextY: vm.Time.Label.Size.NextY, GapY: gapY }, false);
    }
    public static Load(Event: string, pObj: any) {

    }
    public static Web(pResult: any) {
        //console.log("Game.Web * pResult.Action=" + pResult.Action);
        //console.log("Game.Web * pResult.Success=" + pResult.Success);
        //console.log("Game.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Game.VM;

        switch (pResult.Action) {
            case "GameAccept": break;
            case "GameDecline": break;
            case "GameRetract": break;
            case "GameSend": break;
        }
    }

    public static View(pObj) {
        var vm = Game.VM;
        if (pObj.Show !== undefined) {
            //console.log("Game.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                default: alert("Game.View.Show * Unknown=" + pObj.Show); break;
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
                case "Info_Add": GM.Msg = "You my upload a photo."; break;
                case "Info_Init": GM.Msg = "Enter information."; break;
                case "Error_UserId_Blank": GM.Msg = "Enter a User ID."; break;

            }
        }
    };

    public static Size() {
        //console.log("Game.Size * vm.Opponent_FieldSet.Size=" + JSON.stringify(vm.Opponent_FieldSet.Size));
        //console.log("Game.Size * vm.Opponent_Legend.Size=" + JSON.stringify(vm.Opponent_Legend.Size));

        var vm = Game.VM;
        //Size.ViewModel(vm, false);
        FieldLeg.Size(vm.OpFieldLeg, false);
        LabelCtl.Size(vm.UserId, false);
        LabelCtl.Size(vm.Rating, false);

        FieldLeg.Size(vm.StatsFieldLeg, false);
        LabelCtl.Size(vm.Name);
        LabelCtl.Size(vm.Rated);
        LabelCtl.Size(vm.Time);

        Button.Size(vm.Exit); Button.Size(vm.Accept); Button.Size(vm.Back); Button.Size(vm.Board); Button.Size(vm.Decline);
        Button.Size(vm.Next); Button.Size(vm.Resend); Button.Size(vm.Retract); Button.Size(vm.Send);

        //console.log("Game.Size * vm.Opponent_FieldSet.Style=" + JSON.stringify(vm.Opponent_FieldSet.Style));
        //console.log("Game.Size * vm.Opponent_Legend.Style=" + JSON.stringify(vm.Opponent_Legend.Style));
    }

    //#endregion
}
export interface IGame { }
export interface IVM extends IViewModel {
    Switch: string,
    Photo?: IImg,
    OpFieldLeg: IFieldLeg,
    UserId: ILabelCtl,
    Rating: ILabelCtl,

    StatsFieldLeg: IFieldLeg,
    Name: ILabelCtl,
    Rated: ILabelCtl,
    Time: ILabelCtl,

    Exit: IButton,
    Accept: IButton,
    Back: IButton,
    Board: IButton,
    Decline: IButton,
    Next: IButton,
    Resend: IButton,
    Retract: IButton,
    Send: IButton,
}
