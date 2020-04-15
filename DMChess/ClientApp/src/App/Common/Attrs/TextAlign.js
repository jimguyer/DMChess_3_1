"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextAlign = /** @class */ (function () {
    function TextAlign() {
    }
    TextAlign.Get = function (pTextAlign, pCL) {
        switch (pTextAlign.toLowerCase()) {
            case "c":
            case "center": return this.EGet(ETextAlign.Center, pCL);
            case "l":
            case "left": return this.EGet(ETextAlign.Left, pCL);
            case "r":
            case "right": return this.EGet(ETextAlign.Right, pCL);
        }
    };
    TextAlign.EGet = function (pTextAlign, pCL) {
        switch (pTextAlign) {
            case ETextAlign.Center: return "center";
            case ETextAlign.Left: return "left";
            case ETextAlign.Right: return "right";
        }
    };
    return TextAlign;
}());
exports.TextAlign = TextAlign;
var ETextAlign;
(function (ETextAlign) {
    ETextAlign["Center"] = "Center";
    ETextAlign["Left"] = "Left";
    ETextAlign["Right"] = "Right";
})(ETextAlign = exports.ETextAlign || (exports.ETextAlign = {}));
//# sourceMappingURL=TextAlign.js.map