"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VertAlign = /** @class */ (function () {
    function VertAlign() {
    }
    VertAlign.Get = function (pTextAlign, pCL) {
        switch (pTextAlign.toLowerCase()) {
            case "t":
            case "top": return this.EGet(EVertAlign.Top, pCL);
            case "m":
            case "middle": return this.EGet(EVertAlign.Middle, pCL);
            case "b":
            case "bottom": return this.EGet(EVertAlign.Bottom, pCL);
        }
    };
    VertAlign.EGet = function (pVertAlign, pCL) {
        switch (pVertAlign) {
            case EVertAlign.Top: return "top";
            case EVertAlign.Middle: return "middle";
            case EVertAlign.Bottom: return "bottom";
        }
    };
    return VertAlign;
}());
exports.VertAlign = VertAlign;
var EVertAlign;
(function (EVertAlign) {
    EVertAlign["Center"] = "Center";
    EVertAlign["Baseline"] = "Baseline";
    EVertAlign["Top"] = "Top";
    EVertAlign["Super"] = "Super";
    EVertAlign["Middle"] = "Middle";
    EVertAlign["Bottom"] = "Bottom";
    EVertAlign["TextBottom"] = "Text-Bottom";
})(EVertAlign = exports.EVertAlign || (exports.EVertAlign = {}));
//# sourceMappingURL=VerticalAlign.js.map