"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Global_1 = require("../../../Common/Modules/Global");
var Style_1 = require("../../../Common/Modules/Style");
var Size_1 = require("../../../Common/Modules/Size");
var Register_1 = require("../../Routes/Register/Register");
var Registration = /** @class */ (function () {
    function Registration(http, baseUrl) {
        //console.log("Registration.constructor");
        this.VM = Registration_1.VM;
        this.DM = Registration_1.DM;
        var params = new http_1.HttpParams().set('pAction', 'Code');
        http.get(baseUrl + 'api/Web/Get', { params: params }).subscribe(function (result) {
            Registration_1.DM.CodeImg = result.data;
            //console.log("Registration.constructor * data returned");
        }, function (error) { return console.error(error); });
    }
    Registration_1 = Registration;
    Registration.Init = function () {
        //console.log("Registration.Init");
        //console.log("Registration.Init * baseUrl=" + baseUrl);
        //let http : HttpClient;
        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //  //console.log("Registration.Init * result" + JSON.stringify(result));
        //}, error => console.error(error));
        //#region VM
        this.VM = {
            Switch: "Password", Disabled: false, ToggleShow: false, Email: "", UserId: "", Password: "", Code: "",
            FieldSet: Style_1.Ctl.Init({ Type: "FieldSet_L", H: 9.5 }, false),
            Legend: Style_1.Ctl.Init({ Type: "Legend", W: 5 }, false),
            Exit: Global_1.GM.ButtonBL,
            Toggle: Global_1.GM.ButtonBC,
            Register: Global_1.GM.ButtonBR
        };
        var wL = 1.8, yAdd = 1.25, y = Global_1.GM.Y + yAdd * 1.5, h = .8, f = .8;
        this.VM.Email_Label = Style_1.Ctl.Init({ Type: "Label_I", Y: y, W: wL, H: h, F: f }, false);
        var xR = this.VM.Email_Label.Size.X + this.VM.Email_Label.Size.W + Global_1.GM.SpaceX;
        var wR = 9 - xR - this.VM.Email_Label.Size.X;
        this.VM.Email = Style_1.Ctl.Init({ Type: "Input", X: xR, Y: y, W: wR, H: h });
        y += yAdd, wL = 4;
        this.VM.UserId_Label = Style_1.Ctl.Init({ Type: "Label_I", Y: y, W: wL, H: h, F: f });
        var xR = this.VM.UserId_Label.Size.X + this.VM.UserId_Label.Size.W + Global_1.GM.SpaceX;
        var wR = 9 - xR - this.VM.UserId_Label.Size.X;
        this.VM.UserId = Style_1.Ctl.Init({ Type: "Input", X: xR, Y: y, H: h, W: wR });
        y += yAdd;
        this.VM.Password_Label = Style_1.Ctl.Init({ Type: "Label_I", Y: y, W: wL, H: h, F: f });
        this.VM.Password = Style_1.Ctl.Init({ Type: "Input", X: xR, Y: y, H: h, W: wR });
        y += yAdd;
        this.VM.NameFirst_Label = Style_1.Ctl.Init({ Type: "Label_I", Y: y, W: wL, H: h, F: f });
        this.VM.NameFirst = Style_1.Ctl.Init({ Type: "Input", X: xR, Y: y, H: h, W: wR });
        y += yAdd;
        this.VM.CodeImg_Label = Style_1.Ctl.Init({ Type: "Label_I", Y: y, W: wL, H: h, F: f });
        this.VM.CodeImg = Style_1.Ctl.Init({ Type: "Img", X: xR, Y: y, H: h, W: wR });
        y += yAdd;
        this.VM.Code_Label = Style_1.Ctl.Init({ Type: "Label_I", Y: y, W: wL, H: h, F: f });
        this.VM.Code = Style_1.Ctl.Init({ Type: "Input", X: xR, Y: y, H: h, W: wR });
        //#endregion
        //#region DM
        this.DM = {
            CodeImg: Global_1.GM.Src.Diamond
        };
        //#endregion
        //console.log("Registration.Init * this.VM.FieldSet.Size=" + JSON.stringify(this.VM.FieldSet.Size));
        //console.log("Registration.Init * this.VM.Legend.Size=" + JSON.stringify(this.VM.Legend.Size));
        //console.log("Registration.Init * this.VM.Email_Label.Size=" + JSON.stringify(this.VM.Email_Label.Size));
        //console.log("Registration.Init * this.VM.Email.Size=" + JSON.stringify(this.VM.Email.Size));
        //console.log("Registration.Init * this.VM.UserId_Label.Size=" + JSON.stringify(this.VM.UserId_Label.Size));
        //console.log("Registration.Init * this.VM.UserId.Size=" + JSON.stringify(this.VM.UserId.Size));
        //console.log("Registration.Init * this.VM.Password_Label.Size=" + JSON.stringify(this.VM.Password_Label.Size));
        //console.log("Registration.Init * this.VM.Password.Size=" + JSON.stringify(this.VM.Password.Size));
        //console.log("Registration.Init * this.VM.NameFirst_Label.Size=" + JSON.stringify(this.VM.NameFirst_Label.Size));
        //console.log("Registration.Init * this.VM.NameFirst.Size=" + JSON.stringify(this.VM.NameFirst.Size));
        //console.log("Registration.Init * this.VM.CodeImg_Label.Size=" + JSON.stringify(this.VM.CodeImg_Label.Size));
        //console.log("Registration.Init * this.VM.CodeImg.Size=" + JSON.stringify(this.VM.CodeImg.Size));
    };
    Registration.prototype.ngOnInit = function () {
        //console.log("Registration.ngOnInit");
        //console.log("Registration.ngOnInit *  GM.Sized.Registration=" + GM.Sized.Registration);
        //console.log("Registration.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        Global_1.Nav.View = "Registration";
        if (Global_1.GM.IsTest) {
            this.DM.Email = "LisaGuyer@hotmail.com";
            this.DM.UserId = "Lisa";
            this.DM.NameFirst = "Lisa";
            this.DM.Password = "1234";
            this.DM.Code = "99999";
        }
        switch (Global_1.Nav.View_Event) {
            case "App_Boot":
            case "LogOn_Register":
                this.View({ Show: "Toggle", Msg: "Info_Init" });
                break;
        }
        if (Global_1.GM.Sized.Registration == null)
            Registration_1.Size();
    };
    Registration.prototype.OnClick = function (pControl) {
        //console.log("LogOn.OnClick * pButton=" + pControl);
        switch (pControl) {
            case "Toggle":
                this.VM.ToggleShow = !this.VM.ToggleShow;
                this.View({ Show: "Toggle", Msg: "Info_Toggle" });
                break;
            case "Exit":
                Global_1.Nav.View_Event = "Registration_Exit";
                Global_1.Nav.GoRoute('LogOn');
                break;
            case "Register":
                Global_1.Nav.View_Event = "Registration_Register";
                Register_1.Register.VM.Switch = "Phone";
                break;
        }
    };
    Registration.prototype.OnChange = function (pControl) {
        //console.log("OnChange")
    };
    Registration.prototype.View = function (pObj) {
        if (pObj.Show != null) {
            //console.log("RegistrationSvc.ViewFunc * pObj.Show=" + pObj.Show);
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
        if (pObj.Enable != null) {
            switch (pObj.Enable) {
                case "*":
                    if (Global_1.GM.IsLoading)
                        this.VM.Disabled = true;
                    else
                        this.VM.Disabled = false;
                    this.View({ Enable: "Register" });
                    break;
                case "All":
                    this.VM.Disabled = false;
                    break;
                case "Disable":
                    this.VM.Disabled = false;
                    break;
                case "Register":
                    if (Global_1.GM.IsLoading)
                        this.VM.Register.Disabled = true;
                    else if (
                    //!UtilitySvc.EmailFunc("Validate", { Email: this.VM.Email }) ||
                    this.VM.UserId === "" || this.VM.Password === "" || this.VM.NameFirst === "" || this.VM.Code === "")
                        this.VM.Register.Disabled = true;
                    else
                        this.VM.Register.Disabled = false;
                    break;
            }
        }
        if (pObj.Msg != null) {
            //console.log("pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "Change":
                    //if (!UtilitySvc.EmailFunc("Validate", { Email: this.VM.Email })) GM.Msg = "Enter a valid email.";
                    //else
                    if (this.VM.UserId == "")
                        Global_1.GM.Msg = "Enter a User ID.";
                    else if (this.VM.Password == "")
                        "Enter a password.";
                    else if (this.VM.NameFirst == "")
                        "Enter a first name.";
                    else if (this.VM.Code == "")
                        Global_1.GM.Msg = "Enter the code.";
                    else
                        Global_1.GM.Msg = "Click register.";
                    break;
                case "Info_Add":
                    Global_1.GM.Msg = "You my upload a photo.";
                    break;
                case "Info_Init":
                    Global_1.GM.Msg = "Enter information.";
                    break;
                case "Info_Toggle":
                    Global_1.GM.Msg = (this.VM.Switch == "Text") ? "Password is visible." : "Password is hidden.";
                    break;
                case "Error_EmailInUse":
                    Global_1.GM.Msg = "This email is already registered.";
                    break;
                case "Error_EmailInvalid":
                    Global_1.GM.Msg = "This email is not valid.";
                    break;
                case "Error_UserIdInUse":
                    Global_1.GM.Msg = "This user id is taken.";
                    break;
                case "Error_CodeError":
                    Global_1.GM.Msg = "The code you entered is not correct.";
                    break;
                case "Web_Registering":
                    Global_1.GM.Msg = "Registering...";
                    break;
                case "Web_Registered":
                    Global_1.GM.Msg = "Registration successsful";
                    break;
            }
        }
    };
    ;
    Registration.Size = function () {
        //console.log("Registration.Size * this.VM.FieldSet.Size=" + JSON.stringify(this.VM.FieldSet.Size));
        //console.log("Registration.Size * this.VM.Legend.Size=" + JSON.stringify(this.VM.Legend.Size));
        //console.log("Registration.Size * this.VM.Email_Label.Size=" + JSON.stringify(this.VM.Email_Label.Size));
        //console.log("Registration.Size * this.VM.Email.Size=" + JSON.stringify(this.VM.Email.Size));
        //Size.ViewModel(this.VM, false);
        Size_1.Control.Size(this.VM.FieldSet, false);
        Size_1.Control.Size(this.VM.Legend, false);
        Size_1.Control.Size(this.VM.Email_Label, false);
        Size_1.Control.Size(this.VM.Email, false);
        Size_1.Control.Size(this.VM.UserId_Label, false);
        Size_1.Control.Size(this.VM.UserId, false);
        Size_1.Control.Size(this.VM.Password_Label, false);
        Size_1.Control.Size(this.VM.Password, false);
        Size_1.Control.Size(this.VM.NameFirst_Label, false);
        Size_1.Control.Size(this.VM.NameFirst, false);
        Size_1.Control.Size(this.VM.CodeImg_Label, false);
        Size_1.Control.Size(this.VM.CodeImg, false);
        Size_1.Control.Size(this.VM.Code_Label, false);
        Size_1.Control.Size(this.VM.Code, false);
        //console.log("Registration.Size * this.VM.FieldSet.Style=" + JSON.stringify(this.VM.FieldSet.Style));
        //console.log("Registration.Size * this.VM.Legend.Style=" + JSON.stringify(this.VM.Legend.Style));
        //console.log("Registration.Size * this.VM.Email_Label.Style=" + JSON.stringify(this.VM.Email_Label.Style));
        //console.log("Registration.Size * this.VM.Email.Style=" + JSON.stringify(this.VM.Email.Style));
        //console.log("Registration.Init * this.VM.CodeImg_Label.Style=" + JSON.stringify(this.VM.CodeImg_Label.Style));
        //console.log("Registration.Init * this.VM.CodeImg.Style=" + JSON.stringify(this.VM.CodeImg.Style));
    };
    var Registration_1;
    Registration = Registration_1 = __decorate([
        core_1.Component({
            providers: [Global_1.GM, Style_1.Style],
            selector: 'registration',
            templateUrl: './registration.html'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], Registration);
    return Registration;
}());
exports.Registration = Registration;
//# sourceMappingURL=Registration.js.map
