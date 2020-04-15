"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctl_1 = require("../../../Common/Comps/Ctl/Ctl");
var Default_1 = require("../../../Main/Shared/Modules/Default");
var Hex = /** @class */ (function () {
    function Hex() {
    }
    Hex.Init = function (pAHex, pCL) {
        if (pCL === void 0) { pCL = false; }
        var hex = { Size: { X: pAHex.X, Y: pAHex.Y, Z: Default_1.Dft.ABoard.Pos.Z, W: Default_1.Dft.ABoard.Pos.W, H: Default_1.Dft.ABoard.Pos.H }, Places: pAHex.Places };
        switch (pAHex.Type) {
            case EHex.Black:
                hex.Src = Default_1.Dft.ABoard.Hex.Black.Src;
                hex.SrcOn = Default_1.Dft.ABoard.Hex.Black.SrcOn;
                break;
            case EHex.Red:
                hex.Src = Default_1.Dft.ABoard.Hex.Red.Src;
                hex.SrcOn = Default_1.Dft.ABoard.Hex.Red.SrcOn;
                break;
            case EHex.White:
                hex.Src = Default_1.Dft.ABoard.Hex.White.Src;
                hex.SrcOn = Default_1.Dft.ABoard.Hex.White.SrcOn;
                break;
        }
        return hex;
    };
    Hex.Stack = function (pHex, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        pHex.Size.Y = pSize.Y;
        pHex.NextY = pSize.Y + pSize.H + pSize.GapY;
    };
    Hex.Sizes = function (pHexs) { Ctl_1.Ctl.Sizes(pHexs); };
    Hex.Size = function (pHex) { Ctl_1.Ctl.Size(pHex); };
    return Hex;
}());
exports.Hex = Hex;
var EHex;
(function (EHex) {
    EHex["Black"] = "B";
    EHex["White"] = "W";
    EHex["Red"] = "R";
})(EHex = exports.EHex || (exports.EHex = {}));
//# sourceMappingURL=Hex.js.map