import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EPosition as EPos } from '../../../../Common/Attrs/Position';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IAPage, IPage, Page } from '../../../../Common/Comps/Page/Page';
import { IATabs, ITabs, Tabs } from '../../../../Common/Comps/Tabs/Tabs';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ESelect, IASelect, ISelect, Select } from '../../../../Common/Ctls/Select';
import { ETable, IATable, ITable, Table } from '../../../../Common/Ctls/Table';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';



import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { Util } from '../../../../Common/Modules/Util';
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';

import { Dft } from '../../../../Main/Shared/Modules/Default';
import { IGM, GM } from '../../../../Main/Shared/Modules/Global';

@Component({ selector: 'phone', templateUrl: './Phone.html' })

export class Phone {
    VM: IVM; static VM: IVM; GM: IGM; 
    constructor() { this.GM = GM; this.VM = Phone.VM; }

    ngOnInit() {
        //console.log("Phone.ngOnInit");
        //console.log("Phone.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        //console.log("Phone.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        var vm = Phone.VM;
        vm.Route = Nav.Route;
        //console.log("Phone.ngOnInit * Nav.Route=" + Nav.Route);
        //console.log("Phone.ngOnInit * Nav.View=" + Nav.View);
        //console.log("Phone.ngOnInit * vm.Show=" + vm.View);
        //console.log("Phone.ngOnInit * pView_Event=" + Nav.View_Event);
        switch (Nav.Route_Event) {
            case "Home_ClickUser": Phone.View({ Show: "*", Enables: "*", Msg: "Link_" + Nav.Route_Event }); break;
            case "Register_WebRegister": Phone.View({ Show: "*", Enables: "*", Msg: "Link_" + Nav.Route_Event }); break;
            default: alert("Phone.View * Nav.Route_Event=" + Nav.Route_Event);
        }
        Phone.Stack();
        Phone.Size();
    }

    public OnClick(pSender: string) {
        //console.log("LogOn.OnClick * pControl=" + pControl);
        var vm = Phone.VM;

        switch (pSender) {
            case "IconLeft": vm.Carrier.Ctl.Value = "AT&T"; vm.Number.Ctl.Value = "1(321)747-6516"; vm.Digits = 3217476516; break;
            case "IconRight": vm.Carrier.Ctl.Value = "AT&T"; vm.Number.Ctl.Value = "1(321)747-6516"; vm.Digits = 3217476516; this.OnClick("Save"); break;
            case "Exit": Nav.GoRoute("Click" + pSender, "LogOn"); break;
            case "Exit": Nav.GoRoute("Click" + pSender, "LogOn"); break;
            case "Skip": Nav.GoView("Click" + pSender, "Photo"); break;
            case "Save":
                //console.log("LogOn.OnClick.Save * Phone.VM.Digits=" + Phone.VM.Digits);
                Phone.View({ Enables: "*", Msg: "Web_Saving" });
                Web.Post((pResult) => Phone.Web(pResult), "Phone", { Carrier: vm.Carrier.Ctl.Value, Number: vm.Digits });
                break;
        }
    }

    public OnChange(pControl, pData = null) {
        //console.log("Phone.OnChange.Confirm * pControl=" + pControl);
        var vm = Phone.VM;

        switch (pControl) {
            case "Carrier":
                //console.log("Phone.OnChange.Carrier");
                //vm.Carrier.Ctl.Opts = pData;
                vm.Current.Value = vm.Carrier.Ctl.Value + " * " + vm.Number.Ctl.Value ;
                break;
            case "Number":
                //console.log("Phone.OnChange.Number * vm.Number.Ctl.Value=" + vm.Number.Ctl.Value);
                switch (vm.Switch) {
                    case "Confirm":
                        //console.log("Phone.OnChange.Number.Confirm");
                        break;
                    case "Entry":
                        //console.log("Phone.OnChange.Number.Entry * vm.Number.Ctl.Value=" + vm.Number.Ctl.Value);
                        //console.log("Phone.OnChange.Number.Entry * vm.Digits=" + vm.Digits);
                        vm.Digits = Number(Util.Phone("Digits", { Number: vm.Number.Ctl.Value }));
                        vm.Number.Ctl.Value = String(Util.Phone("Expand", { Digits: vm.Digits })); 
                        vm.Current.Value = vm.Carrier.Ctl.Value + " * " + vm.Number.Ctl.Value;
                        Phone.View({ Enables: "*", Msg: "*" });
                        //console.log("Phone.OnChange.Number.Entry * vm.Number.Ctl.Value=" + vm.Number.Ctl.Value);
                        //console.log("Phone.OnChange.Number.Entry * vm.Digits=" + vm.Digits);
                        break;
                }
                break;
        }

        //console.log("OnChange")
    }

    public static Init() {
        //console.log("Phone.Init");
        var label = { W: 5, H: .8, F: .8  };
        var h: number = .8, f = .8;
        var xL: number = .5, wL: number = 2.5, xR: number = 3.25, wR: number = 5;
        var aLine: IALabelCtl = {
            ALabel: { Type: ELabel.TARight, X: .5, W: 2, F: 1 },
            AOutput: { Type: ELabel.TALeft, H: .8, F: .8 },
            ASelect: { Type: ESelect.Left, H: .8, F: .8 },
            ATextbox: { Type: ETextbox.Left, F: 1 }, ASize: { GapX: Dft.GapX }
        }
        this.VM = {
            Disabled: true, Show: "Entry",
            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),
            FieldLeg: FieldLeg.Init({ AFieldset: { Type: EFieldset.Border_Black, H: 9.5 }, ALegend: { W: 4, Value: "Phone" } }, false),
            Current: Label.Init({ Type: ELabel.TACenter, Value: "Current", W: label.W }, false),
            Carrier: LabelCtl.Init({ ALabel: aLine.ALabel, ASelect: aLine.ASelect, AValues: { Label: "Carrier", Ctl: "Select" }, ASize: aLine.ASize }, false),
            Number: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Number", Ctl: "" }, ASize: aLine.ASize }, false),
            Code: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Code", Ctl: "" }, ASize: aLine.ASize }, false),
            Reenter: Button.Init({ Type: EButton.UpperCenter }, false),
            Exit: Button.Init({ Type: EButton.Left }, false),
            Resend: Button.Init({ Type: EButton.Center }, false),
            Confirm: Button.Init({ Type: EButton.Right }, false),
            Save: Button.Init({ Type: EButton.Right }, false),
            Skip: Button.Init({ Type: EButton.Left }, false),
        }
    }

    public static Stack() {
        //console.log("Phone.Stack");
        var vm = Phone.VM;
        var gapY = null;
        var y = null;
        switch (Nav.Route) {
            case "Register":
                vm.Current.Size.W = 7;
                break;
            case "User":
                vm.FieldLeg.Fieldset.Show = false;
                vm.FieldLeg.Legend.Show = false;
                break;
        }
        Label.Stack(vm.Current, { Y: vm.FieldLeg.Fieldset.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Carrier, { Y: vm.Current.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Number, { Y: vm.Carrier.Ctl.Size.FirstY, GapY: gapY }, false);
        LabelCtl.Stack(vm.Code, { Y: vm.Number.Ctl.Size.FirstY, GapY: gapY }, false);
        this.Size();
    }

    public static Size() {
        //console.log("Phone.Size");
        var vm = Phone.VM;
        //console.log("Phone.Size * vm.FieldSet.Size=" + JSON.stringify(vm.FieldSet.Size));
        //console.log("Phone.Size * vm.Legend.Size=" + JSON.stringify(vm.Legend.Size));
        //console.log("Phone.Size * vm.Current.Size=" + JSON.stringify(vm.Current.Size));
        //console.log("Phone.Size * vm.Carrier_Label.Size=" + JSON.stringify(vm.Carrier_Label.Size));
        //console.log("Phone.Size * vm.Number_Label.Size=" + JSON.stringify(vm.Number_Label.Size));
        //console.log("Phone.Size * vm.Code_Label.Size=" + JSON.stringify(vm.Code_Label.Size));
        //console.log("Phone.Size * vm.Code.Size=" + JSON.stringify(vm.Code.Size));
        //Size.ViewModel(this.VM, false);
        Ctl.Size(vm.IconL); Ctl.Size(vm.IconR);
        FieldLeg.Size(vm.FieldLeg);
        Ctl.Size(vm.Current);
        LabelCtl.Size(vm.Carrier);
        LabelCtl.Size(vm.Number);
        LabelCtl.Size(vm.Code);
        Ctl.Size(vm.Exit); Ctl.Size(vm.Confirm); Ctl.Size(vm.Reenter); Ctl.Size(vm.Resend);
        Ctl.Size(vm.Save); Ctl.Size(vm.Skip);
        //console.log("Phone.Size * vm.FieldSet.Style=" + JSON.stringify(vm.FieldSet.Style));
        //console.log("Phone.Size * vm.Legend.Style=" + JSON.stringify(vm.Legend.Style));
        //console.log("Phone.Size * vm.Current.Style=" + JSON.stringify(vm.Current.Style));
        //console.log("Phone.Size * vm.Carrier_Label.Style=" + JSON.stringify(vm.Carrier_Label.Style));
        //console.log("Phone.Size * vm.Number_Label.Style=" + JSON.stringify(vm.Number_Label.Style));
        //console.log("Phone.Size * vm.Code_Label.Style=" + JSON.stringify(vm.Code_Label.Style));
        //console.log("Phone.Size * vm.Code.Style=" + JSON.stringify(vm.Code.Style));
    }

    public static Load(pEvent: string, pObj: any) {
        //console.log("Phone.Load * pObj=" + JSON.stringify(pObj));
        //console.log("Phone.Load * Phone.VM.Carrier=" + JSON.stringify(Phone.VM.Carrier));
        var vm = Phone.VM;
        switch (pEvent) {
            case "Carriers": vm.Carrier.Ctl.Options = pObj.Carriers; break;
            case "Data":
                vm.Entry = pObj.Entry;
                vm.Carrier.Ctl.Value = pObj.Carrier;
                vm.Number.Ctl.Value = pObj.Number === undefined ? "" : pObj.Number;
                vm.Loaded = true;
                break;
        }
    }

    public static Web(pResult: IResult) {
        //console.log("Phone.Web * pResult.Action=" + pResult.Action);
        //console.log("Phone.Web * pResult.Success=" + pResult.Success);
        var vm = Phone.VM;
        //if (!pResult.Success) { }
        switch (pResult.Method) {
            case "Get":
                switch (pResult.Action) {
                    default: alert("Phone.Web.Get * Unknown Action=" + pResult.Action);
                }
                break;
            case "Post":
                switch (pResult.Action) {
                    case "Phone": Nav.GoView("Web" + pResult.Action, "Photo"); break;
                    default: alert("Phone.Web.Post * Unknown Action=" + pResult.Action);
                }
        }
    }

    public static View(pObj) {
        var vm = Phone.VM;
        if (pObj.Show !== undefined) {
            //console.log("Registration.View.Show * pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "*":
                    //console.log("Registration.View.Show.* Nav.Route=" + Nav.Route);
                    switch (Nav.Route) {
                        case "Register": vm.Switch = "Register"; Phone.View({ Buttons: "SaveSkip" }); break;
                        case "User": vm.Switch = vm.Entry ? "Entry" : "Confirm"; break;
                    }
                    break;
                default: alert("Registration.View.Show * Unknown=" + pObj.Show); break;
            }
        }

        if (pObj.Enables !== undefined) {
            //console.log("Registration.View * pObj=" + JSON.stringify(pObj));
            if (pObj.Enables === true) vm.Disabled = false;
            else if (pObj.Enables === false) vm.Disabled = true;
            else {
                switch (pObj.Enables) {
                    case "*":
                        //console.log("Registration.View.Enables * vm.Number.Ctl.Value.length=" + vm.Number.Ctl.Value.length);
                        vm.Disabled = vm.Web != EWeb.Done;
                        vm.Confirm.Disabled = (vm.Code.Ctl.Value.length < 5);
                        vm.Save.Disabled = (vm.Number.Ctl.Value.length != 14);

                        break;
                    default: alert("Registration.View.Enables * Unknown" + pObj.Enables); break;
                }
            }
        }

        if (pObj.Enable !== undefined) {
            switch (pObj.Enable) {
                //!UtilitySvc.EmailFunc("Validate", { Email: vm.Email }) ||
                default: alert("Registration.View.Enable * Unknown" + pObj.Enable); break;
            }
        }

        if (pObj.Buttons !== undefined) {
            //console.log("Registration.View.Buttons=" + pObj.Buttons);
            switch (pObj.Buttons) {
                case "SaveSkip":
                    vm.Exit.Show = false;
                    vm.Confirm.Show = false;
                    vm.Reenter.Show = false;
                    vm.Resend.Show = false;
                    vm.Save.Show = true;
                    vm.Skip.Show = true;
                    break;
                default: alert("Registration.View.Buttons * Unknown=" + pObj.Buttons); break;
            }
        }

        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {

                //#region case "*":

                case "*":
                    switch (vm.Show) {
                        case "Anonymous":
                        case "Entry":
                            if (vm.Number.Ctl.Value.length === 0) Phone.View({ Msg: "Info_Add" });
                            else if (vm.Number.Ctl.Value.length < 12) Phone.View({ Msg: "Info_Add" });
                            else if (vm.Number.Ctl.Value.length == 12) Phone.View({ Msg: "Info_Add" });
                            else Phone.View({ Msg: "Info_Add" });
                            break;
                        case "Confirm":
                    }

                    if (vm.Web === EWeb.Loading) Phone.View({ Msg: "Web_Load" });
                    else if (vm.Switch === "Entry" && vm.Current === "") Phone.View({ Msg: "Info_Add" });
                    else if (vm.Switch === "Entry" && vm.Current !== "") Phone.View({ Msg: "Info_Change" });
                    else Phone.View({ Msg: "Info_Confirm" });
                    break;

                //#endregion

                //#region case "Change":

                case "Change":
                    switch (vm.Switch) {
                        case "Entry":
                            if (vm.Number.Ctl.Value.length < 14) GM.Msg = "Please enter a full phone#.";
                            else if (vm.Number.Ctl.Value.length > 14) GM.Msg = "Too many digits.";
                            else GM.Msg = "Save to store your phone";
                            break;
                        case "Confirm":
                            if (vm.Code.Ctl.Value.length < 5) GM.Msg = "Please enter five digits.";
                            else if (vm.Code.Ctl.Value.length > 5) GM.Msg = "Only five digits allowed.";
                            else GM.Msg = "Confirm to validate code.";
                            break;
                    }
                    break;

                //#endregion
                case "Entry_Change": GM.Msg = "You may change your phone number"; break;
                case "Entry_Enter": GM.Msg = "You may change your phone number"; break;
                case "Entry_LT10": GM.Msg = "Please enter 10 digits"; break;
                case "Entry_10": GM.Msg = "You may save your phone number"; break;
                case "Entry_GT10": GM.Msg = "Too many digits"; break;
                case "Error_CarrierInvalid": GM.Msg = "The carrier is invalid."; break;
                case "Error_CodeNotCorrect": GM.Msg = "The code is incorrect."; break;
                case "Error_PhoneInvalid": GM.Msg = "The phone is invalid."; break;
                case "Error_PhoneInUse": GM.Msg = "This phone is already in use."; break;
                case "Error_Server": GM.Msg = "Phone server error."; break;
                case "Info_Add": GM.Msg = "You may add a phone number"; break;
                case "Info_Change": GM.Msg = "You may change your phone number"; break;
                case "Info_Confirm": GM.Msg = "Enter phone confirmation code."; break;
                case "Info_Enter": GM.Msg = "You may enter a phone number."; break;
                case "Info_Exit": GM.Msg = "You have exited your user data."; break;
                case "Info_GameTexts": GM.Msg = "Enter a phone to get game texts."; break;
                case "Link_Registration_WebRegister": GM.Msg = "You may enter a phone number."; break;
                case "Link_Home_ClickUser": GM.Msg = "You may add/update a phone number."; break;

                case "Web_Confirm": GM.Msg = "Confirming your phone..."; break;
                case "Web_Load": GM.Msg = "Loading your phone information..."; break;
                case "Web_LogIn": GM.Msg = "Logging you in..."; break;
                case "Web_Skip": GM.Msg = "Skipping phone entry..."; break;

                case "Web_CheckPhone": GM.Msg = "Check phone for confirmation code."; break;
                case "Web_Confirmed": GM.Msg = "Your phone is confirmed."; break;
                case "Web_Resend": GM.Msg = "Resending phone confirmation..."; break;
                case "Web_Saving": GM.Msg = "Saving your phone..."; break;
                default: alert("Phone.View * Msg=" + pObj.Msg);
            }
        }
    };


}

interface IVM extends IViewModel {
    Digits?: number,

    Current?: ILabel,
    Carrier?: ILabelCtl,
    Number?: ILabelCtl,
    Code?: ILabelCtl,

    Exit?: IButton,
    Confirm?: IButton,
    Reenter?: IButton,
    Resend?: IButton,
    Save?: IButton,
    Skip?: IButton
}
