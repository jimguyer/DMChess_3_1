"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//import { Register } from '../../../../anonymous/routes/register/register';
var Global_1 = require("../../Modules/Global");
var Style_1 = require("../../Modules/Style");
var Size_1 = require("../../Modules/Size");
var Phone = /** @class */ (function () {
    function Phone(location) {
        this.Location = location;
        //console.log("Phone.constructor");  
        this.VM = Phone_1.VM;
        this.DM = Phone_1.DM;
        //this.Location = location;
        //console.log("Phone.constructor location.path()=" + location.path());  
    }
    Phone_1 = Phone;
    Phone.Init = function () {
        //console.log("Phone.Init");
        this.VM = {
            FieldSet: Style_1.Cont.Init({ Type: "FieldSet_L", H: 9.5 }, false),
            Legend: Style_1.Cont.Init({ Type: "Legend", W: 5 }, false),
            Exit: Global_1.GM.ButtonBL,
            Back: Global_1.GM.ButtonBC,
            Save: Global_1.GM.ButtonBR
        };
        this.DM = {};
        this.Size();
    };
    Phone.prototype.ngOnInit = function () {
        //console.log("Phone.ngOnInit");
        //console.log("Phone.ngOnInit pView_Event=" + Global_1.Nav.View_Event);
        //console.log("Phone.ngOnInit Location.path()=" + this.Location.path());
        Global_1.Nav.View = "Phone";
        //switch (Nav.View_Event) {
        //  default: this.View({ Show: "Toggle", Msg: "Init_Welcome" }); break;
        //  case "App_Boot":
        //  case "Privacy_OK": this.View({ Msg: "Link_Privacy_OK" }); break;
        //  case "Recover_Exit": this.View({ Msg: "Link_Recover_Exit" }); break;
        //  case "Registration_Exit": this.View({ Msg: "Link_Registration_Exit" }); break;
        //}
        if (Global_1.GM.Sized.Phone == null)
            Phone_1.Size();
    };
    Phone.prototype.OnClick = function (pCont) {
        //console.log("LogOn.OnClick * pButton=" + pCont);
        switch (pCont) {
            case "Exit":
                Global_1.Nav.View_Event = "Phone_Exit";
                Global_1.Nav.GoRoute('LogOn');
                break;
            //case "Back": Nav.View_Event = "Phone_Back"; Register.VM.Switch = "Registration"; break;
            //case "Save": Nav.View_Event = "Phone_Save"; Register.VM.Switch = "Photo"; break;
        }
    };
    Phone.prototype.OnChange = function (pCont) {
        //console.log("OnChange")
    };
    Phone.Size = function () {
        //console.log("Phone.Size * this.VM.Div.Size=" + JSON.stringify(this.VM.Div.Size));
        //console.log("Phone.Size * this.VM.Label.Size=" + JSON.stringify(this.VM.Label.Size));
        //console.log("Phone.Size * this.VM.Img_L.Size=" + JSON.stringify(this.VM.Img_L.Size));
        //console.log("Phone.Size * this.VM.Img_R.Size=" + JSON.stringify(this.VM.Img_R.Size));
        //Size.ViewModel(this.VM, false);
        Size_1.Cont.Size(this.VM.FieldSet, false);
        Size_1.Cont.Size(this.VM.Legend, false);
        //console.log("Phone.Size * this.VM.Div.Style=" + JSON.stringify(this.VM.Div.Style));
        //console.log("Phone.Size * this.VM.Label.Style=" + JSON.stringify(this.VM.Label.Style));
        //console.log("Phone.Size * this.VM.Img_L.Style=" + JSON.stringify(this.VM.Img_L.Style));
        //console.log("Phone.Size * this.VM.Img_R.Style=" + JSON.stringify(this.VM.Img_R.Style));
    };
    var Phone_1;
    Phone = Phone_1 = __decorate([
        core_1.Component({
            providers: [Global_1.GM, Style_1.Style, Size_1.Size,
                common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }], selector: 'phone', templateUrl: './Phone.html'
        })
    ], Phone);
    return Phone;
}());
exports.Phone = Phone;
//# sourceMappingURL=Phone.js.map
