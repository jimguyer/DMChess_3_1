"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctl_1 = require("../../../Common/Comps/Ctl/Ctl");
var Default_1 = require("../../../Main/Shared/Modules/Default");
var Cap = /** @class */ (function () {
    function Cap() {
    }
    Cap.Init = function (pACap, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Cap.Init * pACap=" + JSON.stringify(pACap));
        var Cap = { Size: { X: pACap.X, Y: pACap.Y, W: Default_1.Dft.ABoard.Pos.W, H: Default_1.Dft.ABoard.Pos.H }, Places: pACap.Places };
        switch (pACap.Type) {
            case ECap.Black:
                Cap.Src = Default_1.Dft.Src.Board.Pos.CapBlack;
                break;
            case ECap.White:
                Cap.Src = Default_1.Dft.Src.Board.Pos.CapWhite;
                break;
        }
        return Cap;
    };
    Cap.Stack = function (pCap, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        pCap.Size.Y = pSize.Y;
        pCap.NextY = pSize.Y + pSize.H + pSize.GapY;
    };
    Cap.Sizes = function (pCaps) { Ctl_1.Ctl.Sizes(pCaps); };
    Cap.Size = function (pCap) { Ctl_1.Ctl.Size(pCap); };
    return Cap;
}());
exports.Cap = Cap;
var ECap;
(function (ECap) {
    ECap["Black"] = "B";
    ECap["White"] = "W";
})(ECap = exports.ECap || (exports.ECap = {}));
//# sourceMappingURL=Cap.js.map