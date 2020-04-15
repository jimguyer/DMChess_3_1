"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Global_1 = require("../../../Common/Modules/Global");
var Style_1 = require("../../../Common/Modules/Style");
var Size_1 = require("../../../Common/Modules/Size");
var LogOn = /** @class */ (function () {
    function LogOn(router) {
        this.router = router;
        //console.log("LogOn.Constructor");
        this.VM = LogOn_1.VM;
        this.DM = LogOn_1.DM;
        Global_1.Nav.Router = router;
        //console.log(JSON.stringify(router.config));
        Global_1.Nav.Router.config.push({ path: "logon", component: LogOn_1 });
        //console.log(JSON.stringify(router.config));
    }
    LogOn_1 = LogOn;
    LogOn.Init = function () {
        //console.log("LogOn.Init");
        Global_1.Nav.View_Event = "App_Boot";
        //#region VM
        this.VM = {
            Switch: "Password", Disabled: false, ToggleShow: false,
            FieldSet: Style_1.Ctl.Init({ ControlType: eControlType.Fieldset", H: 3.5 }, false)
        };
        var wL = 2.25, yAdd = 1.25, y = Global_1.GM.Y + yAdd * .5, h = .8, f = .8;
        this.VM.EmailUserId_Label = Style_1.Ctl.Init({ ControlType: eControlType.Label_I", Y: y, W: wL, H: h, F: f }, false);
        //console.log("LogOn.Init *  this.VM.EmailUserId_Label.Size.X=" + this.VM.EmailUserId_Label.Size.X);
        //console.log("LogOn.Init *  this.VM.EmailUserId_Label.Size.W=" + this.VM.EmailUserId_Label.Size.W);
        var xR = this.VM.EmailUserId_Label.Size.X + this.VM.EmailUserId_Label.Size.W + Global_1.GM.SpaceX;
        var wR = 9 - xR - this.VM.EmailUserId_Label.Size.X;
        this.VM.EmailUserId = Style_1.Ctl.Init({ ControlType: eControlType.Input", X: xR, Y: y, W: wR, H: h });
        y += yAdd;
        this.VM.Password_Label = Style_1.Ctl.Init({ ControlType: eControlType.Label_I", Y: y, W: wL, H: h, F: f });
        this.VM.Password = Style_1.Ctl.Init({ ControlType: eControlType.Input", X: xR, Y: y, H: h, W: wR });
        yAdd = 1.5;
        y = Global_1.GM.Y + this.VM.FieldSet.Size.Y + yAdd * 2;
        this.VM.Toggle = Style_1.Ctl.Init({ ControlType: eControlType.ButtonC", Y: y });
        y += yAdd;
        this.VM.Recover = Style_1.Ctl.Init({ ControlType: eControlType.ButtonL", Y: y });
        this.VM.Register = Style_1.Ctl.Init({ ControlType: eControlType.ButtonR", Y: y });
        y += yAdd;
        this.VM.Practice = Style_1.Ctl.Init({ ControlType: eControlType.ButtonC", Y: y });
        y += yAdd;
        this.VM.LogIn = Style_1.Ctl.Init({ ControlType: eControlType.ButtonC", Y: y });
        y += yAdd;
        this.VM.FBLogIn = Style_1.Ctl.Init({ ControlType: eControlType.Img", X: 2, Y: y, W: 5.5, H: 1.25 }); //this.VM.FBLogIn.Src = Dir.General + "FBLogIn.png");
        y += yAdd * 1.25;
        this.VM.Privacy = Style_1.Ctl.Init({ ControlType: eControlType.ButtonC", Y: y });
        //this.VM.Msg = Ctl.Init({ X: 0, Y: 15.25, Z: 1, W: 9, F: .7, TA: "C" }, false);
        //#endregion
        //#region DM
        this.DM = {};
        //#endregion
    };
    LogOn.prototype.ngOnInit = function () {
        //console.log("LogOn.ngOnInit");
        //console.log("LogOn.ngOnInit pView_Event=" + Nav.View_Event);
        //console.log("LogOn.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("LogOn.ngOnInit * this.VM.ToggleShow=" + this.VM.ToggleShow);
        Global_1.Nav.View = "LogOn";
        switch (Global_1.Nav.View_Event) {
            case "App_Boot":
                this.View({ Show: "Toggle", Msg: "Link_Privacy_OK" });
                break;
            case "Privacy_OK":
                this.View({ Msg: "Link_Privacy_OK" });
                break;
            case "Recover_Exit":
                this.View({ Msg: "Link_Recover_Exit" });
                break;
            case "Registration_Exit":
                this.View({ Msg: "Link_Registration_Exit" });
                break;
            default:
                alert("LogOn.ngOnInit * Unknown Nav.View_Event=" + Global_1.Nav.View_Event);
                break;
        }
        if (Global_1.GM.Sized.LogOn == null)
            LogOn_1.Size();
    };
    LogOn.prototype.OnClick = function (pSender) {
        //console.log("LogOn.OnClick * pButton=" + pSender);
        switch (pSender) {
            case "Toggle":
                //console.log("this.VM.Switch=" + this.VM.Switch);
                this.VM.ToggleShow = !this.VM.ToggleShow;
                this.View({ Show: "Toggle", Msg: "Info_Toggle" });
                break;
            case "LogIn":
                alert("I clicked LogOn");
                break;
            case "Privacy":
                Global_1.Nav.View_Event = "LogOn_Privacy";
                Global_1.Nav.GoRoute('Privacy');
                break;
            case "Recover":
                Global_1.Nav.View_Event = "LogOn_Recover";
                Global_1.Nav.GoRoute('Recover');
                break;
            case "Register":
                Global_1.Nav.View_Event = "LogOn_Register";
                Global_1.Nav.GoRoute('Register');
                break;
        }
    };
    LogOn.prototype.OnChange = function () {
        //console.log("OnChange")
    };
    LogOn.prototype.View = function (pObj) {
        if (pObj.Show != null) {
            //console.log("pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "Toggle":
                    this.DM.ToggleText = this.VM.ToggleShow ? 'Hide' : 'Show';
                    this.VM.Switch = this.VM.ToggleShow ? 'Text' : 'Password';
                    break;
                default:
                    alert("Unknown pObj.Show=" + pObj.Show);
                    break;
            }
        }
        if (pObj.Msg != null) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "Change":
                    //console.log("VM.LogOn.Password.length=" + VM.LogOn.Password.length);
                    if (this.DM.EmailUserId == "")
                        Global_1.GM.Msg = "Enter a User ID or Email.";
                    else if (this.DM.Password == "")
                        Global_1.GM.Msg = "Enter a the password.";
                    else if (this.DM.Password.length < 4)
                        Global_1.GM.Msg = "The password is too short.";
                    else if (this.DM.Password.length > 10)
                        Global_1.GM.Msg = "The password is too long.";
                    else
                        Global_1.GM.Msg = "You may log in.";
                    break;
                case "App_Boot":
                    Global_1.GM.Msg = "Please LogIn or register.";
                    break;
                case "Error_LogInFailed":
                    Global_1.GM.Msg = "Log in invalid";
                    break;
                case "Error_EmailInvalid":
                    Global_1.GM.Msg = "The email is invalid";
                    break;
                case "Error_FB":
                    Global_1.GM.Msg = "Facebook log in failed.";
                    break;
                case "Error_InvalidPassword":
                    Global_1.GM.Msg = "Password is incorrect";
                    break;
                case "Error_TokenMissingOnGet":
                    Global_1.GM.Msg = "Please LogIn or register.";
                    break;
                case "Info_Toggle":
                    Global_1.GM.Msg = this.VM.ToggleShow ? "Password is visible." : "Password is hidden.";
                    break;
                case "Info_Init":
                    Global_1.GM.Msg = "Please LogIn or register.";
                    break;
                case "Link_Privacy_OK":
                    Global_1.GM.Msg = "Please LogIn or register.";
                    break;
                case "Link_Recover_Exit":
                    Global_1.GM.Msg = "You have exited recovery.";
                    break;
                case "Link_Registration_Exit":
                    Global_1.GM.Msg = "Registration was cancelled.";
                    break;
                case "Req_EmailUserId":
                    Global_1.GM.Msg = "Email or User ID required";
                    break;
                case "Req_Password":
                    Global_1.GM.Msg = "Password is required";
                    break;
                case "Web_LogIn":
                    Global_1.GM.Msg = "Logging you in...";
                    break;
                case "Web_LogInFB":
                    Global_1.GM.Msg = "Logging you in with Face Book...";
                    break;
                case "Web_LogInSuccess":
                    Global_1.GM.Msg = "Log in successful...";
                    break;
            }
        }
    };
    LogOn.Size = function () {
        //console.log("LogOn.Size * GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("LogOn.Size * this.VM.FieldSet.Size=" + JSON.stringify(this.VM.FieldSet.Size));
        //console.log("LogOn.Size * this.VM.EmailUserId_Label.Size=" + JSON.stringify(this.VM.EmailUserId_Label.Size));
        //console.log("LogOn.Size * this.VM.EmailUserId.Size=" + JSON.stringify(this.VM.EmailUserId.Size));
        //Size.ViewModel(this.VM, false);
        Size_1.Control.Size(this.VM.FieldSet, false);
        Size_1.Control.Size(this.VM.EmailUserId_Label, false);
        Size_1.Control.Size(this.VM.EmailUserId, false);
        Size_1.Control.Size(this.VM.Password_Label, false);
        Size_1.Control.Size(this.VM.Password, false);
        Size_1.Control.Size(this.VM.Toggle, false);
        Size_1.Control.Size(this.VM.Recover, false);
        Size_1.Control.Size(this.VM.Register, false);
        Size_1.Control.Size(this.VM.Practice, false);
        Size_1.Control.Size(this.VM.LogIn, false);
        Size_1.Control.Size(this.VM.Privacy, false);
        Size_1.Control.Size(this.VM.Msg, false);
        Global_1.GM.Sized.LogOn = true;
        //console.log("LogOn.Size *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("LogOn.Size * this.VM.FieldSet.Style=" + JSON.stringify(this.VM.FieldSet.Style));
        //console.log("LogOn.Size * this.VM.EmailUserId_Label.Style=" + JSON.stringify(this.VM.EmailUserId_Label.Style));
        //console.log("LogOn.Size * this.VM.EmailUserId.Style=" + JSON.stringify(this.VM.EmailUserId.Style));
        //console.log("LogOn.Size * this.VM.Recover.Style=" + JSON.stringify(this.VM.Recover.Style));
    };
    var LogOn_1;
    LogOn = LogOn_1 = __decorate([
        core_1.Component({
            providers: [Global_1.GM, Style_1.Style],
            templateUrl: './LogOn.html'
        })
    ], LogOn);
    return LogOn;
}());
exports.LogOn = LogOn;
//# sourceMappingURL=LogOn.js.map
