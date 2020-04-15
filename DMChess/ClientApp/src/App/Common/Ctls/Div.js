"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Div = /** @class */ (function () {
    function Div() {
    }
    Div.Init = function (pADiv, pCL) {
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("Div.Init * pADiv=" + JSON.stringify(pADiv));
        }
        var dft;
        switch (pADiv.Type) {
            case EDiv.Border_Black:
                dft = Default_1.Dft.ADiv.Border_Black;
                break;
            case EDiv.Hdr:
                dft = Default_1.Dft.ADiv.Hdr;
                break;
            case EDiv.Left:
                dft = Default_1.Dft.ADiv.Left;
                break;
            case EDiv.Center:
                dft = Default_1.Dft.ADiv.Center;
                break;
            case EDiv.Right:
                dft = Default_1.Dft.ADiv.Right;
                break;
        }
        var div = Ctl_1.Ctl.Init(pADiv, dft, pCL);
        if (pCL) {
            //console.log("Div.Init.End * pADiv=" + JSON.stringify(pADiv));
            //console.log("Div.Init.End * dft=" + JSON.stringify(dft));
            //console.log("Div.Init.End * div.Size.X=" + div.Size.X + " * Y=" + div.Size.X + " * W=" + div.Size.W + " * H=" + div.Size.H);
            //console.log("Div.Init.End * div.Size=" + JSON.stringify(div.Size));
            //console.log("Div.Init.End * div.Style=" + JSON.stringify(div.Style));
            //console.log("Div.Init.End * pADiv=" + JSON.stringify(pADiv.H));
            //console.log("Div.Init.End * dft=" + JSON.stringify(dft.H));
            //console.log("Div.Init.End * div.Size=" + JSON.stringify(div.Size.H));
            //console.log("Div.Init.End -------------------------------------");
        }
        return div;
    };
    Div.Stack = function (pDiv, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Stack(pDiv, pSize, pCL);
    };
    Div.Bottom = function (pDiv, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Bottom(pDiv, pSize, pCL);
    };
    Div.Size = function (pDiv, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pDiv, pCL);
    };
    return Div;
}());
exports.Div = Div;
var EDiv;
(function (EDiv) {
    EDiv["Hdr"] = "H";
    EDiv["Left"] = "L";
    EDiv["Center"] = "C";
    EDiv["Right"] = "R";
    EDiv["Border_Black"] = "B";
    EDiv["Border_White"] = "W";
})(EDiv = exports.EDiv || (exports.EDiv = {}));
//# sourceMappingURL=Div.js.map