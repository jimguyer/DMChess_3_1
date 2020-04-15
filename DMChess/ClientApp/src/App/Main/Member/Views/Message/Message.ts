import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

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

@Component({ selector: 'message', templateUrl: './Message.html' })

export class Message {
    VM: any; static VM: any;
    constructor() { this.VM = Message.VM; }

    ngOnInit() {
        //console.log("Message.ngOnInit");
        //console.log("Message.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        //console.log("Message.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        switch (Nav.View_Event) {
            case "App_Boot":
            case "LogOn_Register": Message.View({ Show: "Toggle", Msg: "Info_Init" }); break;
        }
        Message.Load(Nav.View_Parms);
        Message.Stack();
        Message.Size();
    }

    public OnChange(pSender) {
        //console.log("OnChange * pSender=" + pSender);
        switch (pSender) {
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
        }
    }

    public OnClick(pSender: string) {
        //console.log("Message.OnClick * pSender=" + pSender);
        var vm = Message.VM;
        switch (pSender) {
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
            case "Back":
                //console.log("Message.OnClick.Back * Nav.Route=" + Nav.Route);
                switch (Nav.Route) {
                    case "Players": Nav.GoView("Click" + pSender, "StartParms"); break;
                    case "Start": Nav.GoView("Click" + pSender, "StartParms"); break;
                }
                break;

            case "Next":
                GM.Wiz.Message = vm.Msg.Value;
                Nav.GoView("Click" + pSender, "Game"); break;
        }
    }

    public static Init() {
        //console.log("Message.Init");

        //#region VM
        var aLine: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 2, F: 1 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ASize: { GapX: Dft.GapX } };
        Message.VM = {
            Web: EWeb.Loading,
            Photo: Img.Init({ Type: EImg.Border_Black, X: 1, S: 4 }),
            OpFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 5 }, ALegend: { W: 4 } }, false),
            UserId: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: {Label: "User ID", Ctl:"" } }, false),
            Email: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Email", Ctl: "" } }, false),
            Name: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Name", Ctl: "" } }, false),
            Rating: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Rating", Ctl: "" } }, false),
            MsgFieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 5 }, ALegend: { W: 4 } }, false),
            Msg: Textarea.Init({ X: "C", W: 8, H: 3 }),
            Buttons: Button.Inits([
                { Value: "Exit", Type: EButton.Left },
                { Value: "Back", Type: EButton.Center },
                { Value: "Next", Type: EButton.Center }
            ]),
        };
        this.Stack();
        this.Size();
    }

    public static Stack() {
        var vm = Message.VM;
        vm.Photo.Size.Y = GM.Hdr_NextY; vm.Photo.Size.X = 1.75; vm.Photo.Size.W = 5.5; vm.Photo.Size.H = 5.5;

        vm.OpFieldset.Size.Y =  GM.Hdr_NextY + .5; vm.OpFieldset.Size.H = 5.5;
        vm.OpLegend.Size.Y = vm.OpFieldset.Size.Y - .5;

        var y = 5, addY = 1;

        vm.Email.Show = (vm.Email.Data.Value > ""); if (vm.Email.Show) { y += addY; vm.Email.Size.Y = y; }
        vm.UserId.Show = (vm.UserId.Data.Value > ""); if (vm.UserId.Show) { y += addY; vm.UserId.Size.Y = y; }
        vm.Name.Show = (vm.Name.Data.Value > ""); if (vm.Name.Show) { y += addY; vm.Name.Size.Y = y; }
        vm.Rating.Show = (vm.Rating.Data.Value > ""); if (vm.Rating.Show) { y += addY; vm.Rating.Size.Y = y; }

        vm.MsgFieldset.Size.Y = 7.5; vm.MsgFieldset.Size.H = 6;
        vm.MsgLegend.Size.Y = vm.MsgFieldset.Size.Y - .5;
        vm.Msg.Size.Y = vm.MsgFieldset.Size.Y + 1; vm.Msg.Size.H = vm.MsgFieldset.Size.H - 1.75;

        //console.log("Message.Stack * vm.MsgLegend.Size=" + JSON.stringify(vm.MsgLegend.Size));
    }

    public static Size() {
        //console.log("Message.Size");
        var vm = Message.VM;
        //Size.ViewModel(vm, false);
        if (GM.Sized.Message) return;
        //SizeSvc.ViewFunc(vm, null, false);
        FieldLeg.Size(vm.OpFieldLeg);
        Img.Size(vm.Photo);
        LabelCtl.Size(vm.Email);
        LabelCtl.Size(vm.UserId);
        LabelCtl.Size(vm.Name);
        LabelCtl.Size(vm.Rating.Size);

        FieldLeg.Size(vm.MsgFieldset);
        Textarea.Size(vm.Msg);
        Button.Sizes(vm.Buttons, false);
        GM.Sized.Message = true;

        //console.log("Message.Size * vm.Photo.Size=" + JSON.stringify(vm.Photo.Size));
        //console.log("Message.Size * vm.Photo.Style=" + JSON.stringify(vm.Photo.Style));

        //console.log("Message.Size * vm.OpFieldset.Size=" + JSON.stringify(vm.OpFieldset.Size));
        //console.log("Message.Size * vm.OpFieldset.Style=" + JSON.stringify(vm.OpFieldset.Style));
        //console.log("Message.Size * vm.OpLegend.Size=" + JSON.stringify(vm.OpLegend.Size));
        //console.log("Message.Size * vm.OpLegend.Style=" + JSON.stringify(vm.OpLegend.Style));
        //console.log("Message.Size * vm.MsgFieldset.Size=" + JSON.stringify(vm.MsgFieldset.Size));
        //console.log("Message.Size * vm.MsgFieldset.Style=" + JSON.stringify(vm.MsgFieldset.Style));
        //console.log("Message.Size * vm.MsgLegend.Size=" + JSON.stringify(vm.MsgLegend.Size));
        //console.log("Message.Size * vm.MsgLegend.Style=" + JSON.stringify(vm.MsgLegend.Style));

    }

    public static Web(pResult: any) {
        //console.log("Message.Web * pResult.Action=" + pResult.Action);
        //console.log("Message.Web * pResult.Success=" + pResult.Success);
        //console.log("Message.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Message.VM;

        switch (pResult.Action) {
            case "MessageSave": break;
        }
    }

    public static Load(pData: any) {
        //console.log("Message.Load * GM.Wiz=" + JSON.stringify(GM.Wiz));
        //console.log("Message.Load * GM.Profile=" + JSON.stringify(GM.Profile));
        //console.log("Message.Load * GM.Profile.Name=" + GM.Profile.Name);
        var vm = Message.VM;
        if (GM.Wiz.Photo_Src === undefined) {
            //console.log("Message.Load * GM.Wiz.Photo_Src.length=" + GM.Wiz.Photo_Src.length)
            vm.Show = "Stats";
            vm.StatsLegend.Value = GM.Wiz.UserId;
            if (GM.Wiz.Email === undefined) vm.Email.Show = false; else { vm.Email.Show = true; vm.Email.Label.Value = "Email", vm.Email.Data.Value = GM.Wiz.Email };
            if (GM.Wiz.Name === undefined) vm.Name.Show = false; else { vm.Name.Show = true; vm.Email.Label.Value = "Name", vm.Name.Data.Value = GM.Wiz.Name };
            vm.Msg.Value = GM.Wiz.Name;
        }
        else {
            vm.Show = "Photo";
            vm.Photo.Src = GM.Wiz.Photo_Src;
            vm.Msg.Value = GM.Wiz.UserId;
        }
        vm.MsgLegend.Value = "Message";
        vm.Msg.Value += ",\n";
        vm.Msg.Value += GM.Profile.Name !== null ? + GM.Profile.Name : GM.Profile.UserId;
        vm.Msg.Value += " has challenged you to a game of Diamond Chess."
        //console.log("Message.Load * vm.Show=" + vm.Show);
    }

    public static View(pObj: any) {
        var vm = Message.VM;

        if (pObj.Show !== undefined) {
            //console.log("Message.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                default: alert("Message.View.Show * Unknown=" + pObj.Show); break;
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
                case "*":
                    GM.Msg = "Enter a message for ";
                    if (GM.Wiz.UserId !== undefined) GM.Wiz.UserId;
                    else if (GM.Wiz.Name !== undefined) GM.Wiz.Name;
                    break;
                case "Info_Add": GM.Msg = "You my upload a photo."; break;
                case "Info_Init": GM.Msg = "Enter information."; break;
                case "Info_Toggle": GM.Msg = vm.Switch == "Text" ? "Password is visible." : "Password is hidden."; break;
                case "Error_UserId_Blank": GM.Msg = "Enter a User ID."; break;
                case "Error_CodeError": GM.Msg = "The code you entered is not correct."; break;
                case "Web_Registering": GM.Msg = "Registering..."; break;
                case "Web_Registered": GM.Msg = "Message successsful"; break;
            }
        }
    };
}

interface IVM extends IViewModel {
    Photo: IImg,
    OpFieldLeg: IFieldLeg,
    Email: ILabelCtl,
    UserId: ILabelCtl,
    Name: ILabelCtl,
    Rating: ILabelCtl,
    MsgFieldLeg: IFieldLeg,
    Msg: ICtl,
    Exit: IButton, Back: IButton, Next: IButton
}
