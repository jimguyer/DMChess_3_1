"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Global_1 = require("../../Modules/Global");
var Style_1 = require("../../Modules/Style");
var Size_1 = require("../../Modules/Size");
//import { Register } from '../../../../Main/Anonymous/Routes/Register/Register';
//import { Register } from '../../../../Main/Anonymous/Routes/Register/Register';
var Photo = /** @class */ (function () {
    function Photo() {
        this.VM = Photo_1.VM;
        this.DM = Photo_1.DM;
    }
    Photo_1 = Photo;
    Photo.Init = function () {
        //console.log("Photo.Init");
        this.VM = {
            FieldSet: Style_1.Ctl.Init({ Type: "FieldSet_L", H: 9.5 }, false),
            Legend: Style_1.Ctl.Init({ Type: "Legend", W: 5 }, false),
            Exit: Global_1.GM.ButtonBL,
            Back: Global_1.GM.ButtonBC,
            Save: Global_1.GM.ButtonBR
        };
        this.DM = {};
        this.Size();
    };
    Photo.prototype.OnClick = function (pControl) {
        //console.log("LogOn.OnClick * pButton=" + pControl);
        switch (pControl) {
            case "Exit":
                Global_1.Nav.View_Event = "Photo_Exit";
                Global_1.Nav.GoRoute('LogOn');
                break;
            //case "Back": Nav.View_Event = "Phone_Back"; Register.VM.Switch = "Phone"; break;
            //case "Skip": Nav.View_Event = "Phone_Skip"; Register.VM.Switch = "Photo"; break;
            //case "Save": Nav.View_Event = "Phone_Save"; Register.VM.Switch = "Photo"; break;
        }
    };
    Photo.prototype.OnChange = function (pControl) {
        //console.log("OnChange")
    };
    Photo.Size = function () {
        //console.log("Photo.Size * this.VM.Div.Size=" + JSON.stringify(this.VM.Div.Size));
        //console.log("Photo.Size * this.VM.Label.Size=" + JSON.stringify(this.VM.Label.Size));
        //console.log("Photo.Size * this.VM.Img_L.Size=" + JSON.stringify(this.VM.Img_L.Size));
        //console.log("Photo.Size * this.VM.Img_R.Size=" + JSON.stringify(this.VM.Img_R.Size));
        //Size.ViewModel(this.VM, false);
        Size_1.Control.Size(this.VM.FieldSet, false);
        Size_1.Control.Size(this.VM.Legend, false);
        //console.log("Photo.Size * this.VM.Div.Style=" + JSON.stringify(this.VM.Div.Style));
        //console.log("Photo.Size * this.VM.Label.Style=" + JSON.stringify(this.VM.Label.Style));
        //console.log("Photo.Size * this.VM.Img_L.Style=" + JSON.stringify(this.VM.Img_L.Style));
        //console.log("Photo.Size * this.VM.Img_R.Style=" + JSON.stringify(this.VM.Img_R.Style));
    };
    var Photo_1;
    Photo = Photo_1 = __decorate([
        core_1.Component({
            providers: [Global_1.GM, Style_1.Style, Size_1.Size],
            selector: 'photo',
            templateUrl: './Photo.html'
        })
    ], Photo);
    return Photo;
}());
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map
