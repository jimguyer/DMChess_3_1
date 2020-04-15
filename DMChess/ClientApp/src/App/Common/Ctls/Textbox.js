"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Textbox = /** @class */ (function () {
    function Textbox() {
    }
    Textbox.Inits = function (pATextboxs, pCL) {
        var _this = this;
        if (pCL === void 0) { pCL = false; }
        var Textboxs = [];
        pATextboxs.forEach(function (x) { Textboxs.push(_this.Init(x, pCL)); });
        return Textboxs;
    };
    Textbox.Init = function (pATextbox, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft;
        switch (pATextbox.Type) {
            case ETextbox.Center:
                dft = Default_1.Dft.ATextbox.Center;
                break;
            case ETextbox.Left:
                dft = Default_1.Dft.ATextbox.Left;
                break;
            case ETextbox.Right:
                dft = Default_1.Dft.ATextbox.Right;
                break;
        }
        var textbox = Ctl_1.Ctl.Init(pATextbox, dft, pCL);
        textbox.CtlType = Ctl_1.ECtl.Textbox;
        return textbox;
    };
    Textbox.Stacks = function (pTextboxs, pSize, pCL) {
        if (pSize === void 0) { pSize = null; }
        if (pCL === void 0) { pCL = false; }
        return pTextboxs;
    };
    Textbox.Stack = function (pTextbox, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Textboxs.Stack * pTextbox=" + JSON.stringify(pTextbox));
        //console.log("Textboxs.Stack * pY=" + pY);
        //console.log("Textbox.Stack * pGapY=" + pGapY);
        pTextbox.Size.Y = pSize.Y;
        pTextbox.NextY = pSize.Y + pTextbox.Size.H + pSize.GapY;
        if (pCL) {
            //console.log("Line.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Line.Stack * pTextbox.Size=" + JSON.stringify(pTextbox.Size));
            //console.log("Line.Stack * pTextbox.Size.Y=" + JSON.stringify(pTextbox.Size.Y)) + " * pTextbox.Size.H=" + JSON.stringify(pTextbox.Size.H);
            //console.log("Line.Stack * pTextbox.Size.H=" + pTextbox.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * pTextbox.NextY=" + pTextbox.NextY);
        }
        //console.log("Line.Stack * pTextbox.Size.Y=" + pTextbox.Size.Y);
        //console.log("Line.Stack * pTextbox.Size=" + JSON.stringify(pTextbox.Size));
    };
    Textbox.Size = function (pTextbox, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pTextbox);
    };
    return Textbox;
}());
exports.Textbox = Textbox;
var ETextbox;
(function (ETextbox) {
    ETextbox["Center"] = "C";
    ETextbox["Left"] = "L";
    ETextbox["Right"] = "R";
})(ETextbox = exports.ETextbox || (exports.ETextbox = {}));
//# sourceMappingURL=Textbox.js.map