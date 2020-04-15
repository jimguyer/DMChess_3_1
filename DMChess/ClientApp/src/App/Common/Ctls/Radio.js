"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.Inits = function (pARadios, pCL) {
        var _this = this;
        if (pCL === void 0) { pCL = false; }
        var buttons = [];
        pARadios.forEach(function (x) { buttons.push(_this.Init(x, pCL)); });
        return buttons;
    };
    Radio.Init = function (pARadio, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft;
        switch (pARadio.Type) {
            case ERadio.Left: dft = Default_1.Dft.ARadio.Left;
            case ERadio.Right: dft = Default_1.Dft.ARadio.Right;
        }
        var radio = Ctl_1.Ctl.Init(pARadio, dft, pCL);
        radio.CtlType = Ctl_1.ECtl.Radio;
        return radio;
    };
    Radio.Stack = function (pRadio, pY, pGapY, pCL) {
        if (pGapY === void 0) { pGapY = Default_1.Dft.GapY; }
        if (pCL === void 0) { pCL = false; }
        //console.log("Radios.Stack * pRadio=" + JSON.stringify(pRadio));
        //console.log("Radios.Stack * pY=" + pY);
        //console.log("Radio.Stack * pGapY=" + pGapY);
        //console.log("Radio.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pRadio.Size.Y = pY;
        pRadio.NextY = pY + pRadio.Size.H + pGapY;
        if (pCL) {
            //console.log("Radio.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Radio.Stack * pRadio.Size=" + JSON.stringify(pRadio.Size));
            //console.log("Radio.Stack * pRadio.Size.Y=" + JSON.stringify(pRadio.Size.Y)) + " * pRadio.Size.H=" + JSON.stringify(pRadio.Size.H);
            //console.log("Radio.Stack * pRadio.Size.H=" + pRadio.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Radio.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Radio.Stack * pRadio.NextY=" + pRadio.NextY);
        }
        //console.log("Radio.Stack * pRadio.Size.Y=" + pRadio.Size.Y);
        //console.log("Radio.Stack * pRadio.Size=" + JSON.stringify(pRadio.Size));
    };
    return Radio;
}());
exports.Radio = Radio;
var ERadio;
(function (ERadio) {
    ERadio["Left"] = "L";
    ERadio["Right"] = "R";
})(ERadio = exports.ERadio || (exports.ERadio = {}));
//# sourceMappingURL=Radio.js.map