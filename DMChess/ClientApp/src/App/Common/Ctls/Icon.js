"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Icon = /** @class */ (function () {
    function Icon() {
    }
    Icon.Init = function (pAIcon, pCL) {
        if (pCL === void 0) { pCL = false; }
        switch (pAIcon.Type) {
            case EIcon.Audio: break;
            case EIcon.Bug: break;
            case EIcon.Copy: break;
        }
        var img = Ctl_1.Ctl.Init(pAIcon, null, pCL);
        return img;
    };
    Icon.Stack = function (pIcon, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Icons.Stack * pIcon=" + JSON.stringify(pIcon));
        //console.log("Icons.Stack * pY=" + pY);
        //console.log("Icon.Stack * pGapY=" + pGapY);
        //console.log("Icon.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pIcon.Size.Y = pSize.Y;
        pIcon.NextY = pSize.Y + pSize.H + pSize.GapY;
        if (pCL) {
            //console.log("Icon.Stack * pIcon.Y=" + JSON.stringify(pIcon.Y));
            //console.log("Icon.Stack * pIcon.Size=" + JSON.stringify(pIcon.Size));
            //console.log("Icon.Stack * pIcon.Size.Y=" + JSON.stringify(pIcon.Size.Y)) + " * pIcon.Size.H=" + JSON.stringify(pIcon.Size.H);
            //console.log("Icon.Stack * pIcon.Size.H=" + pIcon.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Icon.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Icon.Stack * pIcon.NextY=" + pIcon.NextY);
        }
        //console.log("Icon.Stack * pIcon.Size.Y=" + pIcon.Size.Y);
        //console.log("Icon.Stack * pIcon.Size=" + JSON.stringify(pIcon.Size));
    };
    Icon.Sizes = function (pIcons) { Ctl_1.Ctl.Sizes(pIcons); };
    Icon.Size = function (pIcon, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pIcon, pCL);
    };
    return Icon;
}());
exports.Icon = Icon;
var EIcon;
(function (EIcon) {
    EIcon["Audio"] = "A";
    EIcon["Bug"] = "B";
    EIcon["Clock"] = "Cl";
    EIcon["Copy"] = "Co";
    EIcon["Down"] = "D";
    EIcon["Exit"] = "E";
    EIcon["First"] = "Fi";
    EIcon["Flip"] = "Fl";
    EIcon["Last"] = "La";
    EIcon["Left"] = "Le";
    EIcon["Minus"] = "M";
    EIcon["Next"] = "N";
    EIcon["Off"] = "Of";
    EIcon["On"] = "On";
    EIcon["Overlay"] = "Ov";
    EIcon["Plus"] = "Pl";
    EIcon["Prev"] = "Pr";
    EIcon["Resign"] = "Re";
    EIcon["Right"] = "Ri";
    EIcon["RotateLeft"] = "RL";
    EIcon["RotateRight"] = "RL";
    EIcon["Save"] = "Sa";
    EIcon["Start"] = "St";
    EIcon["Up"] = "Up";
})(EIcon = exports.EIcon || (exports.EIcon = {}));
//# sourceMappingURL=Icon.js.map