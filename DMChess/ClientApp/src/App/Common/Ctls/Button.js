"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.Inits = function (pAButtons, pCL) {
        var _this = this;
        if (pCL === void 0) { pCL = false; }
        var buttons = [];
        pAButtons.forEach(function (x) { buttons.push(_this.Init(x, pCL)); });
        return buttons;
    };
    Button.Init = function (pAButton, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft;
        switch (pAButton.Type) {
            case EButton.Left:
                dft = Default_1.Dft.AButton.Left;
                break;
            case EButton.Center:
                dft = Default_1.Dft.AButton.Center;
                break;
            case EButton.Right:
                dft = Default_1.Dft.AButton.Right;
                break;
            case EButton.HomeLeft:
                dft = Default_1.Dft.AButton.HomeLeft;
                break;
            case EButton.HomeCenter:
                dft = Default_1.Dft.AButton.HomeCenter;
                break;
            case EButton.HomeRight:
                dft = Default_1.Dft.AButton.HomeRight;
                break;
            case EButton.InnerLeft:
                dft = Default_1.Dft.AButton.InnerLeft;
                break;
            case EButton.InnerCenter:
                dft = Default_1.Dft.AButton.InnerCenter;
                break;
            case EButton.InnerRight:
                dft = Default_1.Dft.AButton.InnerRight;
                break;
            case EButton.UpperLeft:
                dft = Default_1.Dft.AButton.UpperLeft;
                break;
            case EButton.UpperCenter:
                dft = Default_1.Dft.AButton.UpperCenter;
                break;
            case EButton.UpperRight:
                dft = Default_1.Dft.AButton.UpperRight;
                break;
        }
        var button = Ctl_1.Ctl.Init(pAButton, dft, pCL);
        return button;
    };
    Button.Stack = function (pButton, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Stack(pButton, pSize, pCL);
    };
    Button.Sizes = function (pButtons, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Sizes(pButtons);
    };
    Button.Size = function (pButton, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pButton);
    };
    return Button;
}());
exports.Button = Button;
var EButton;
(function (EButton) {
    EButton["Left"] = "L";
    EButton["Center"] = "C";
    EButton["Right"] = "R";
    EButton["HomeLeft"] = "HL";
    EButton["HomeCenter"] = "HC";
    EButton["HomeRight"] = "HR";
    EButton["InnerLeft"] = "IL";
    EButton["InnerCenter"] = "IC";
    EButton["InnerRight"] = "IR";
    EButton["UpperLeft"] = "UL";
    EButton["UpperCenter"] = "UC";
    EButton["UpperRight"] = "UR";
})(EButton = exports.EButton || (exports.EButton = {}));
//# sourceMappingURL=Button.js.map