"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.Inits = function (pACheckboxs, pCL) {
        var _this = this;
        if (pCL === void 0) { pCL = false; }
        var buttons = [];
        pACheckboxs.forEach(function (x) { buttons.push(_this.Init(x, pCL)); });
        return buttons;
    };
    Checkbox.Init = function (pACheckbox, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft;
        switch (pACheckbox.Type) {
            case ECheckbox.Left: dft = Default_1.Dft.ACheckbox.Left;
            case ECheckbox.Right: dft = Default_1.Dft.ACheckbox.Right;
        }
        var checkbox = Ctl_1.Ctl.Init(pACheckbox, dft, pCL);
        checkbox.CtlType = Ctl_1.ECtl.Checkbox;
        return checkbox;
    };
    Checkbox.Stack = function (pCheckbox, pY, pGapY, pCL) {
        if (pGapY === void 0) { pGapY = Default_1.Dft.GapY; }
        if (pCL === void 0) { pCL = false; }
        //console.log("Checkboxs.Stack * pCheckbox=" + JSON.stringify(pCheckbox));
        //console.log("Checkboxs.Stack * pY=" + pY);
        //console.log("Checkbox.Stack * pGapY=" + pGapY);
        //console.log("Checkbox.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pCheckbox.Size.Y = pY;
        pCheckbox.NextY = pY + pCheckbox.Size.H + pGapY;
        if (pCL) {
            //console.log("Checkbox.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Checkbox.Stack * pCheckbox.Size=" + JSON.stringify(pCheckbox.Size));
            //console.log("Checkbox.Stack * pCheckbox.Size.Y=" + JSON.stringify(pCheckbox.Size.Y)) + " * pCheckbox.Size.H=" + JSON.stringify(pCheckbox.Size.H);
            //console.log("Checkbox.Stack * pCheckbox.Size.H=" + pCheckbox.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Checkbox.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Checkbox.Stack * pCheckbox.NextY=" + pCheckbox.NextY);
        }
        //console.log("Checkbox.Stack * pCheckbox.Size.Y=" + pCheckbox.Size.Y);
        //console.log("Checkbox.Stack * pCheckbox.Size=" + JSON.stringify(pCheckbox.Size));
    };
    Checkbox.Sizes = function (pCheckboxs) { Ctl_1.Ctl.Sizes(pCheckboxs); };
    Checkbox.Size = function (pCheckbox) { Ctl_1.Ctl.Size(pCheckbox); };
    return Checkbox;
}());
exports.Checkbox = Checkbox;
var ECheckbox;
(function (ECheckbox) {
    ECheckbox["Left"] = "L";
    ECheckbox["Right"] = "R";
})(ECheckbox = exports.ECheckbox || (exports.ECheckbox = {}));
//# sourceMappingURL=Checkbox.js.map