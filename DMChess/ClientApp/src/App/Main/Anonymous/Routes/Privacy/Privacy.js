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
var Privacy = /** @class */ (function () {
    function Privacy(router) {
        this.router = router;
        //console.log("Privacy.constructor * Privacy.VM=" + JSON.stringify(Privacy.VM));
        //console.log(JSON.stringify(router.config));
        //console.log("Privacy.constructor * Grid=" + JSON.stringify(GM.Grid));
        //router.config.splice(0, 0, { path: "foo", component: Privacy });
        this.VM = Privacy_1.VM;
        this.DM = Privacy_1.DM;
        //console.log(JSON.stringify(router.config));
    }
    Privacy_1 = Privacy;
    Privacy.Init = function () {
        //console.log("Privacy.Init");
        //console.log("Privacy.Init * GM.Y_FL=" + GM.Y_FL);
        //console.log("Privacy.Init * GM.YF_L=" + GM.YF_L);
        //Nav.Router.config.push({ path: "privacy", component: Privacy });
        //Nav.Router.resetConfig(Nav.Router.config);
        //#region VM
        this.VM = {
            FieldSet: Style_1.Ctl.Init({ Type: "FieldSet_L" }, false),
            Legend: Style_1.Ctl.Init({ Type: "Legend", W: 5 }, false)
        };
        var h = .7, c = "Red", f = .7;
        var y = 2.75, yAdd = .8;
        y = Global_1.GM.Y_FL;
        this.VM.P1 = Style_1.Ctl.Init({ Type: "Center", Y: y, F: f, C: c }, false);
        y += yAdd;
        this.VM.P2 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.P3 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.P4 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.P5 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.P6 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd * 1.5;
        this.VM.F0 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.F1 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.F2 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.F3 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.F4 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.F5 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        y += yAdd;
        this.VM.F6 = Style_1.Ctl.Init({ Type: "Center", Y: y, H: h, F: f, C: c }, false);
        this.VM.OK = Global_1.GM.ButtonBC;
        //#endregion
        //#region DM
        this.DM = {
            Legend: "Privacy",
            P1: "Diamond chess will never share any",
            P2: "of your information with anyone. If",
            P3: "you enter a phone number it will only",
            P4: "be used to send texts when it's your",
            P5: "turn or if you get a challenge. You",
            P6: "can turn notices off in 'User/Options'.",
            F0: "  ***  Facebook LogIn  ***",
            F1: "Logging in with Facebook will:",
            F2: "1. Default your photo from Facebook.",
            F3: "2. Let you challenge Facebook Friends.",
            F4: "3. Autopost wins to your Timeline.",
            F5: "You can change your photo in 'Profiles'.",
            F6: "You turn autopost off in 'User/Options'."
        };
        //#endregion
    };
    Privacy.Open = function (pViewEvent) {
        //console.log("Privacy.Open * pViewEvent=" + pViewEvent);
        Privacy_1.ViewEvent = pViewEvent;
        Global_1.Nav.GoRoute('Privacy');
    };
    Privacy.prototype.ngOnInit = function () {
        //console.log("Privacy.ngOnInit");
        //console.log("Privacy.ngOnInit  Nav.View_Event=" + Nav.View_Event);
        //console.log("Privacy.ngOnInit  GM.Msg=" + GM.Msg);
        Global_1.Nav.View = "Privacy";
        Global_1.GM.Msg = "xxxxiamond Chess";
        switch (Global_1.Nav.View_Event) {
            default:
                this.View({ Show: "Toggle", Msg: "App_Boot" });
                break;
            case "App_Boot":
                this.View({ Show: "Toggle", Msg: "Privacy" });
                break;
            case "LogOn_Privacy":
                this.View({ Show: "Toggle", Msg: "Privacy" });
                break;
        }
        if (Global_1.GM.Sized.Privacy == null)
            Privacy_1.Size();
    };
    Privacy.prototype.OnClick = function (pButton) {
        //console.log("Privacy.OnClick." + pButton);
        switch (pButton) {
            case "OK":
                Global_1.Nav.View_Event = "Privacy_OK";
                Global_1.Nav.GoRoute('LogOn');
        }
    };
    Privacy.Size = function () {
        //console.log("Privacy.Size * this.VM.FieldSet.Size=" + JSON.stringify(this.VM.FieldSet.Size));
        //console.log("Privacy.Size * this.VM.Legend.Size=" + JSON.stringify(this.VM.Legend.Size));
        //console.log("Privacy.Size * this.VM.P1.Size=" + JSON.stringify(this.VM.P1.Size));
        //Size.ViewModel(this.VM, false);
        Size_1.Control.Size(this.VM.FieldSet, false);
        Size_1.Control.Size(this.VM.Legend, false);
        Size_1.Control.Size(this.VM.P1, false);
        Size_1.Control.Size(this.VM.P2, false);
        Size_1.Control.Size(this.VM.P3, false);
        Size_1.Control.Size(this.VM.P4, false);
        Size_1.Control.Size(this.VM.P5, false);
        Size_1.Control.Size(this.VM.P6, false);
        Size_1.Control.Size(this.VM.P7, false);
        Size_1.Control.Size(this.VM.F0, false);
        Size_1.Control.Size(this.VM.F1, false);
        Size_1.Control.Size(this.VM.F2, false);
        Size_1.Control.Size(this.VM.F3, false);
        Size_1.Control.Size(this.VM.F4, false);
        Size_1.Control.Size(this.VM.F5, false);
        Size_1.Control.Size(this.VM.F6, false);
        //console.log("Privacy.Size * this.VM.FieldSet.Style=" + JSON.stringify(this.VM.FieldSet.Style));
        //console.log("Privacy.Size * this.VM.Legend.Style=" + JSON.stringify(this.VM.Legend.Style));
        //console.log("Privacy.Size * this.VM.P1.Style=" + JSON.stringify(this.VM.P1.Style));
    };
    Privacy.prototype.View = function (pObj) {
        if (pObj.Show != null) {
            //console.log("pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "Toggle":
                    this.DM.ToggleText = this.VM.ToggleShow ? 'Hide' : 'Show';
                    this.VM.Switch = this.VM.ToggleShow ? 'Text' : 'Password';
                    break;
            }
        }
        if (pObj.Msg != null) {
            //console.log("pObj.Msg=" + pObj.Msg);
            //console.log("GM.Msg=" + GM.Msg);
            switch (pObj.Msg) {
                case "Privacy":
                    Global_1.GM.Msg = "Diamond Chess Privacy Policy.";
                    break;
                default:
                    alert("Unknown Privacy.View.Msg=" + pObj.Msg);
                    break;
            }
            //console.log("GM.Msg=" + GM.Msg);
        }
    };
    var Privacy_1;
    Privacy = Privacy_1 = __decorate([
        core_1.Component({
            providers: [Global_1.GM, Style_1.Style, Size_1.Size],
            templateUrl: './Privacy.html'
        })
    ], Privacy);
    return Privacy;
}());
exports.Privacy = Privacy;
//# sourceMappingURL=Privacy.js.map
