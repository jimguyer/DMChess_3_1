import { Component, OnInit } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { Tabs } from '../../../../Common/Comps/Tabs/Tabs';
import { IPage, Page } from '../../../../Common/Comps/Page/Page';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { ECheckbox, IACheckbox, ICheckbox, Checkbox } from '../../../../Common/Ctls/Checkbox';
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

@Component({ templateUrl: './User.html' })

export class User {
    VM: IVM; static VM: IVM;

    constructor() { this.VM = User.VM; Nav.Route_VM = User.VM; }

    ngOnInit() {
        //console.log("User.ngOnInit pView_Event=" + Nav.View_Event);
        this.VM = User.VM; Nav.Route_VM = User.VM;
        Nav.Route = "User";
        switch (Nav.Route_Event) {
            case "Home_ClickUser": Nav.GoView(Nav.Route_Event, "Membership"); User.View({ Disables: "*" }); break;
            default: alert("User.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event);
        }
        Tabs.Show(this.VM.Tabs);

        //console.log("User.ngOnInit * this.VM.Styles[1].border-bottom-color=" + this.VM.Tabs.Styles[1]["border-bottom-color"])
        //console.log("User.ngOnInit * this.VM.Styles[1].border-bottom-style=" + this.VM.Tabs.Styles[1]["border-bottom-style"])
        //console.log("User.ngOnInit * this.VM.Styles[1].border-bottom-style=" + this.VM.Tabs.Styles[1]["border-bottom-width"])

        //console.log("User.ngOnInit * this.VM.Inactive.Style.border-bottom-color=" + this.VM.Tabs.Inactive.Style["border-bottom-color"])
        //console.log("User.ngOnInit * this.VM.Inactive.Style.border-bottom-style=" + this.VM.Tabs.Inactive.Style["border-bottom-style"])
        //console.log("User.ngOnInit * this.VM.Inactive.Style.border-bottom-style=" + this.VM.Tabs.Inactive.Style["border-bottom-width"])

        //console.log("User.ngOnInit * this.VM.Disabled=" + this.VM.Disabled);
    }

    public OnChange(pControl) {
        switch (pControl) {
            case "New": break;
            case "Old": break;
        }

        //console.log("OnChange * pConrol=" + pControl)
    }

    public OnClick(pControl: string, pObj: any = null) {
        //console.log("User.OnClick * pControl=" + pControl + " * pLabel=" + JSON.stringify(pObj));
        var vm = User.VM;
        switch (pControl) {
            case "Tab":
                alert("Tab Click Works!");
                switch (pObj) {
                    case "Member": Nav.GoView("Click" + pControl, "Membership"); break;
                    case "Email": Nav.GoView("Click" + pControl, "Email"); User.View({ Show: "*", Msg: "ClickTab_" + vm.View }); break;
                    case "Phone": Nav.GoView("Click" + pControl, "Phone"); break;
                    case "Opts": Nav.GoView("Click" + pControl, "Options"); User.View({ Show: "*", Msg: "ClickTab_" + vm.View }); break;
                    case "Pwd": Nav.GoView("Click" + pControl, "Password"); vm.Show = "Password"; User.View({ Show: "*", Msg: "ClickTab_" + vm.View }); break;
                }
                User.View({ Buttons: "*" });

                //console.log("vm.Tabs.Tabs[" + vm.Idx + "].Style=" + JSON.stringify(vm.Tabs.Tabs[vm.Idx].Style));
                break;

            case "Exit": Nav.GoRoute("Click" + pControl, "Home"); break;
            case "Save": User.View({ Enables: "Click_" + pControl, Msg: "Click_" + pControl }); break;
            case "Toggle":
                //console.log("User.OnClick.Toggle * vm.ePassword=" + vm.ePassword);
                vm.Show = vm.Show === "Password" ? "Text" : "Password";
                User.View({ Show: "Click_" + pControl, Msg: "Click_" + pControl });
                break;
        }
        //console.log("User.OnClick * this.VM.Show=" + this.VM.Show);
        //console.log("User.OnClick * this.VM.Password=" + this.VM.Password);
    }
    public OnTabsEvent(pEvent: any) {
        var vm = User.VM;
        switch (pEvent.Value) {
            case "Member": Nav.GoView("TabEvent_" + pEvent.Value, "Membership"); break;
            case "Email": Nav.GoView("TabEvent_" + pEvent.Value, "Email"); User.View({ Show: "*", Msg: "ClickTab_" + vm.View }); break;
            case "Phone": Nav.GoView("TabEvent_" + pEvent.Value, "Phone"); break;
            case "Opts": Nav.GoView("TabEvent_" + pEvent.Value, "Options"); User.View({ Show: "*", Msg: "ClickTab_" + vm.View }); break;
            case "Pwd": Nav.GoView("TabEvent_" + pEvent.Value, "Password"); vm.Show = "Password"; User.View({ Show: "*", Msg: "ClickTab_" + vm.View }); break;
        }
    }


    public static Init() {
        //console.log("User.Init");

        //#region VM
        var aEmail: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.5, H: .8, F: .8 }, AOutput: { Type: ELabel.TALeft, H: .8, F: .8 }, ATextbox: { Type: ETextbox.Left, H: .8, F: .8 }, ASize: { GapX: Dft.GapX } };
        var aOptions: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.5, H: .8, F: .8 }, ACheckbox: { Type: ECheckbox.Left, H: .8, F: .8 }, ASize: { GapX: Dft.GapX } };
        var aPassword: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .5, W: 3.5, H: .8, F: .8 }, ATextbox: { Type: ETextbox.Left, H: .8, F: .8 }, ASize: { GapX: Dft.GapX } };
        this.VM = {
            Web: EWeb.Loading,
            Email_Confirmed: false,

            Disabled: true,
            View: "Membership", Show: "Entry",
            //Tabs: Tabs.Init(["Member", "Email", "Phone", "Opts", "Pwd"], 0),
            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),
            Email_O: LabelCtl.Init({ ALabel: aEmail.ALabel, AOutput: aEmail.AOutput }, false),
            Email_I: LabelCtl.Init({ ALabel: aEmail.ALabel, ATextbox: aEmail.ATextbox }, false),
            Email_Code: LabelCtl.Init({ ALabel: aEmail.ALabel, ATextbox: aEmail.ATextbox }, false),

            Options_Email: LabelCtl.Init({ ALabel: aOptions.ALabel, ACheckbox: aOptions.ACheckbox }, false),
            Options_Phone: LabelCtl.Init({ ALabel: aOptions.ALabel, ACheckbox: aOptions.ACheckbox }, false),
            Options_Audio: LabelCtl.Init({ ALabel: aOptions.ALabel, ACheckbox: aOptions.ACheckbox }, false),
            Options_Clock: LabelCtl.Init({ ALabel: aOptions.ALabel, ACheckbox: aOptions.ACheckbox }, false),
            Options_Facebook: LabelCtl.Init({ ALabel: aOptions.ALabel, ACheckbox: aOptions.ACheckbox }, false),

            Password_New: LabelCtl.Init({ ALabel: aPassword.ALabel, ATextbox: aPassword.ATextbox }, false),
            Password_Old: LabelCtl.Init({ ALabel: aPassword.ALabel, ATextbox: aPassword.ATextbox }, false),
            Buttons: Button.Inits([
                { Value: "Exit", Type: EButton.Left },

                { Value: "Reenter", Type: EButton.UpperCenter },
                { Value: "Resend", Type: EButton.Center },
                { Value: "Toggle", Type: EButton.Center },

                { Value: "Confirm", Type: EButton.Right },
                { Value: "Save", Type: EButton.Right },
                { Value: "Upgrade", Type: EButton.Right }
            ]),
            Exit: Button.Init({ Type: EButton.Center, Value: "Exit" }, false),

            Reenter: Button.Init({ Type: EButton.UpperCenter, Value: "Reenter" }, false),
            Resend: Button.Init({ Type: EButton.Center, Value: "Resend" }, false),
            Toggle: Button.Init({ Type: EButton.Center, Value: "Show" }, false),

            Confirm: Button.Init({ Type: EButton.Right, Value: "Confirm" }, false),
            Save: Button.Init({ Type: EButton.Right, Value: "Save" }, false),
            Upgrade: Button.Init({ Type: EButton.Right, Value: "Upgrade" }, false),
        };

        //#endregion

        //console.log("User.Init  * this.VM.Tab_0Active.Style[border-style]=" + this.VM.Tab_0Active.Style["border-style"]);
        //console.log("User.Init * this.VM.Tabs=" + JSON.stringify(this.VM.Tabs));
        User.Stack();
        User.Size();
        //console.log("User.Init * this.VM.Disabled=" + this.VM.Disabled);
    }

    public static Stack() {

    }

    public static Size() {
        //console.log("User.Size * GM.Sized.User=" + GM.Sized.User);
        //console.log("User.Size  * this.VM.Tab_0Active.Style[border-style]=" + this.VM.Tab_0Active.Style["border-style"]);
        if (GM.Sized.User) return;
        var vm = User.VM;
        //Size.ViewModel(vm, false);
        //Tabs.Size();
        Img.Size(vm.IconL, false);
        Img.Size(vm.IconR, false);
        LabelCtl.Size(vm.Email_I);
        LabelCtl.Size(vm.Email_O);
        LabelCtl.Size(vm.Email_Code);

        LabelCtl.Size(vm.Options_Email);
        LabelCtl.Size(vm.Options_Phone);
        LabelCtl.Size(vm.Options_Audio);
        LabelCtl.Size(vm.Options_Clock, false);
        LabelCtl.Size(vm.Options_Facebook, false);

        LabelCtl.Size(vm.Password_New, false);
        LabelCtl.Size(vm.Password_Old, false);

        Button.Sizes(vm.Buttons, false);
        Button.Size(vm.Toggle, false);
      
        GM.Sized.User = true;


        //console.log("User.Size * vm.Tabs.Frame.Size=" + JSON.stringify(vm.Tabs.Frame.Size));
        //console.log("User.Size * vm.Tabs.Frame.Style=" + JSON.stringify(vm.Tabs.Frame.Style));
        //console.log("User.Size * vm.Tab_0Active.Style=" + JSON.stringify(vm.Tab_0Active.Style));
        //console.log("User.Size * vm.Tab_0Active.Size=" + JSON.stringify(vm.Tab_0Active.Size));
        //console.log("User.Size * vm.Tab_0Inactive.Style=" + JSON.stringify(vm.Tab_0Inactive.Style));
        //console.log("User.Size * vm.Tab_Active.Size=" + JSON.stringify(vm.Tab_Active.Size));
        //console.log("User.Size * vm.Tab_Active.Style=" + JSON.stringify(vm.Tab_Active.Style));
        //console.log("User.Size * vm.Tab_Inactive.Style=" + JSON.stringify(vm.Tab_Inactive.Style));
        //console.log("User.Size * vm.Tabs.Body.Size=" + JSON.stringify(vm.Tabs.Body.Size));
        //console.log("User.Size * vm.Tabs.Body.Style=" + JSON.stringify(vm.Tabs.Body.Style));
        //console.log("User.Size  * this.VM.Tab_0Active.Style[border-style]=" + this.VM.Tab_0Active.Style["border-style"]);
        //console.log("User.Size  * this.VM.Tab_0Active.Style[border-color]=" + this.VM.Tab_0Active.Style["border-color"]);
        //console.log("User.Size  * this.VM.Tab_0Active.Style[border-width]=" + this.VM.Tab_0Active.Style["border-width"]);
        //console.log("User.Size  * this.VM.Tabs.Body.Style[border-style]=" + this.VM.Tabs.Body.Style["border-style"]);
        //console.log("User.Size  * this.VM.Tabs.Body.Style[border-color]=" + this.VM.Tabs.Body.Style["border-color"]);
        //console.log("User.Size  * this.VM.Tabs.Body.Style[border-width]=" + this.VM.Tabs.Body.Style["border-width"]);
        //console.log("User.Size  * this.VM.PasswordNew.Size=" + JSON.stringify(vm.PasswordNew.Size));
        //console.log("User.Size  * this.VM.PasswordNew.Style=" + JSON.stringify(vm.PasswordNew.Style));
        //console.log("User.Size  * this.VM.PasswordOld.Size=" + JSON.stringify(vm.PasswordOld.Size));
        //console.log("User.Size  * this.VM.PasswordOld.Style=" + JSON.stringify(vm.PasswordOld.Style));
        //console.log("======================");
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-width=" + vm.Tabs.Tabs[0].Style["border-width"]);
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-style=" + vm.Tabs.Tabs[0].Style["border-style"]);
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-color=" + vm.Tabs.Tabs[0].Style["border-color"]));
        //console.log("-----------------------");
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-top-width=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-top-width"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-top-style=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-top-style"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-top-color=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-top-color"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-right-width=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-right-width"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-right-style=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-right-style"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-right-color=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-right-color"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-bottom-width=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-bottom-width"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-bottom-style=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-bottom-style"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-bottom-color=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-bottom-color"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-left-width=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-left-width"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-left-style=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-left-style"]));
        //console.log("User.Size * vm.Tabs.Tabs[0].Style.border-left-color=" + JSON.stringify(vm.Tabs.Tabs[0].Style["border-left-color"]));
    }

    public static Load(pEvent: string, pObj: any) {
        //console.log("User.Load");

        //console.log("User.Load * pObj.GamesLimit=" + pObj.GamesLimit);
        //console.log("User.Load * pObj.Games.Active.length=" + pObj.Games.Active.length);
        //console.log("User.Load * pObj.Games.Received.length=" + pObj.Sent.Active.length);
        //console.log("User.Load * pObj.Games.Sent.length=" + pObj.Sent.Active.length);
        //console.log("User.Load * pObj.ProfileIdxDefault=" + pObj.ProfileIdxDefault);
        //console.log("User.Load * pObj.ProfilesLimit=" + pObj.ProfilesLimit);
        //console.log("User.Load * pObj.Profiles.length=" + pObj.Profiles.length);
        //console.log("User.Load * pObj.Profiles[0].Idx=" + pObj.Profiles[0].Idx);
        //console.log("User.Load * pObj.Profiles[0].Photo_Src.length=" + pObj.Profiles[0].Photo_Src.length);
        //console.log("User.Load * pObj.Profiles[0].UserId=" + pObj.Profiles[0].UserId);
        //console.log("User.Load * pObj.Profiles[0].NameFirst=" + pObj.Profiles[0].NameFirst);
        //console.log("User.Load * pObj.Profiles[0].NameLast=" + pObj.Profiles[0].NameLast);
        //console.log("User.Load * pObj.Profiles[0].Group=" + pObj.Profiles[0].Group);
        //console.log("User.Load * pObj.Profiles[0].Rating=" + pObj.Profiles[0].Rating);

    }

    public static Web(pResult: any) {
        //console.log("Email.Web * pResult.Action=" + pResult.Action);
        //console.log("Email.Web * pResult.Success=" + pResult.Success);
        //console.log("Email.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = User.VM;

        switch (pResult.Action) {
            case "EmailConfirm": break;
            case "EmailResend": break;
            case "EmailSave": break;
        }
    }

    public static View(pObj) {
        var vm = User.VM;
        if (pObj.Show !== undefined) {
            //console.log("Home.View * pObj=" + JSON.stringify(pObj));
            switch (pObj.Show) {
                case "*":
                    switch (vm.View) {
                        case "Email": vm.Show = vm.Email_Confirmed ? "Entry" : "Confirm";
                        case "Phone":
                        case "Password": case "Click_Toggle":
                            switch (vm.Show) {
                                case "Password": vm.Toggle.Value = "Show"; break;
                                case "Text": vm.Toggle.Value = "Hide"; break;
                            }
                            break;
                    }
                    break;
                default: alert("Email.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("UserProfiles.View.Enable * vm.Web=" + vm.Web + " * pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
                default: alert("User.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }

        if (pObj.Buttons !== undefined) {
            //console.log("User.View.Buttons=" + pObj.Buttons);
            //console.log("User.View.Buttons * vm.View=" + vm.View);
            switch (pObj.Buttons) {
                case "*":
                    this.View({ Buttons: "HideAll" });
                    switch (vm.View) {
                        default: break;
                        case "Membership": vm.Exit.Show = true; vm.Upgrade.Show = true; break;
                        case "Email":
                            vm.Exit.Show = true;
                            switch (vm.Show) {
                                case "Confirm": vm.Exit.Show = true; vm.Reenter.Show = true; vm.Resend.Show = true; vm.Confirm.Show = true; break;
                                case "Entry": vm.Exit.Show = true; vm.Save.Show = true; break;
                            }
                            break;
                        case "Options": vm.Exit.Show = true; vm.Save.Show = true; break;
                        case "Password": vm.Exit.Show = true; vm.Toggle.Show = true; vm.Save.Show = true; break;
                    }
                    break;
                case "HideAll":
                    vm.Exit.Show = false;
                    vm.Confirm.Show = false;
                    vm.Reenter.Show = false;
                    vm.Resend.Show = false;
                    vm.Save.Show = false;
                    vm.Toggle.Show = false;
                    break;
                default: alert("User.View.Buttons * Unknown=" + pObj.Buttons); break;
            }
        }
        if (pObj.Msg !== undefined) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*":
                    if (vm.Web !== EWeb.Loading)
                        switch (vm.View) {
                            case "Email": GM.Msg = "Loading email data..."; break;
                            case "Options": case "Opts": GM.Msg = "Loading options data..."; break;
                            case "Password": case "Pwd": GM.Msg = "You may change your pasword."; break;
                        }
                    else {
                        switch (vm.View) {
                            case "Email": GM.Msg = "You may change your email."; break;
                            case "Options": GM.Msg = "You may change your options."; break;
                            case "Password": case "Pwd": GM.Msg = "You may change your pasword."; break;
                        };
                    }
                    break;
                case "Click_Toggle":
                    switch (vm.Show) {
                        case "Password": GM.Msg = "The passwords are hidden."; break;
                        case "Text": GM.Msg = "The passwords are visible."; break;
                    }
                    break;
                case "Click_Save":
                    switch (vm.View) {
                        case "Email": GM.Msg = "Saving your email..."; break;
                        case "Options": case "Opts": GM.Msg = "Saving your options..."; break;
                        case "Password": case "Pwd": GM.Msg = "Saving your pasword..."; break;
                    };
                case "ClickTab_Email":
                    if (vm.Web === EWeb.Loading) GM.Msg = "Loading your email...";
                    else if (vm.Email_Confirmed) "You may change your email."
                    else GM.Msg = "Confirm your email.";
                    break;
                case "ClickTab_Options":
                    if (vm.Web === EWeb.Loading) GM.Msg = "Loading your options...";
                    else if (vm.Web === EWeb.Server) "Saving your options...";
                    else GM.Msg = "You may change your options.";
                    break;
                case "ClickTab_Password": GM.Msg = "You may change your password."; break;
                case "Error_Server": GM.Msg = "Options server error."; break;
                case "Info_Init": GM.Msg = "Enter information."; break;
                case "Info_Tabs_Click": GM.Msg = "You may change your options."; break;
                case "Info_Init": GM.Msg = "You may change your options."; break;
                default: alert("User.View.Msg * Unknown=" + pObj.Msg);
            }
        }
    };

}
export interface IVM extends IViewModel{
    Email_Confirmed: boolean,
    View: string,
    Email_I: ILabelCtl,
    Email_O: ILabelCtl,
    Email_Code: ILabelCtl,
    Options_Email: ILabelCtl,
    Options_Phone: ILabelCtl,
    Options_Audio: ILabelCtl,
    Options_Clock: ILabelCtl,
    Options_Facebook: ILabelCtl,
    Password_Old: ILabelCtl,
    Password_New: ILabelCtl,
    Exit: IButton, Confirm: IButton, Reenter: IButton, Resend: IButton,
    Save: IButton, Toggle: IButton, Upgrade: IButton
}
export interface IUser { Email: IEmail; Options: IOptions }
interface IEmail { Address: string, Confirmed: boolean }
interface IOptions { EmailAlerts: boolean, PhoneAlerts: boolean, AudioOn: boolean, ClockShow: boolean, PostToFacebook: boolean }
enum ePassword { "Hide", "Show" }
