"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.Get = function (pColor, pCL) {
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("Main/Shared/Color.Get * pColor=" + pColor);
        }
        switch (pColor.toLowerCase()) {
            default: return;
            case "coshadow":
            case "cob": return this.EGet(EColor.Shadow, pCL);
            case "coback":
            case "cob": return this.EGet(EColor.Back, pCL);
            case "cofore":
            case "cob": return this.EGet(EColor.Fore, pCL);
            case "cohigh":
            case "cob": return this.EGet(EColor.High, pCL);
        }
    };
    Color.EGet = function (pEColor, pCL) {
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("CColor.Get * pECColor=" + pECColor);
        }
        switch (pEColor) {
            default: return;
            case EColor.Shadow: return "rgb(215, 215, 135)";
            case EColor.Back: return "rgb(225, 225, 145)";
            case EColor.Fore: return "rgb(235, 235, 160)";
            case EColor.High: return "rgb(255, 255, 200)";
        }
    };
    return Color;
}());
exports.Color = Color;
var EColor;
(function (EColor) {
    EColor["Back"] = "B";
    EColor["Fore"] = "F";
    EColor["High"] = "H";
    EColor["Shadow"] = "S";
})(EColor = exports.EColor || (exports.EColor = {}));
//# sourceMappingURL=Color.js.map
