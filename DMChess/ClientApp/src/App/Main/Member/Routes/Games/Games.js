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
var Register = /** @class */ (function () {
    function Register() {
        //console.log("Registration.Constructor");
        this.VM = Register_1.VM;
        this.DM = Register_1.DM;
        //console.log("Recover.constructor * this.VM.Email.Size=" + JSON.stringify(this.VM.Email.Size));
    }
    Register_1 = Register;
    Register.Init = function () {
        //console.log("Registration.Init");
        this.VM = { Switch: "Registration" };
        this.DM = {};
    };
    Register.prototype.ngOnInit = function () {
        //console.log("Recover.ngOnInit");
        //console.log("Recover.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("Recover.ngOnInit pView_Event=" + Nav.View_Event);
        Global_1.Nav.View = "Recover";
        switch (Global_1.Nav.View_Event) {
            case "LogOn_Register":
                this.VM.Switch = "Registration";
                break;
        }
    };
    var Register_1;
    Register = Register_1 = __decorate([
        core_1.Component({
            providers: [Global_1.GM, Style_1.Style],
            templateUrl: './Register.html'
        })
    ], Register);
    return Register;
}());
exports.Register = Register;
//# sourceMappingURL=Register.js.map
