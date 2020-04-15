"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position = /** @class */ (function () {
    function Position() {
    }
    Position.Get = function (pPosition, pCL) {
        switch (pPosition.toLowerCase()) {
            case "a":
            case "absolute": return this.EGet(EPosition.Absolute, pCL);
            case "f":
            case "fixed": return this.EGet(EPosition.Fixed, pCL);
            case "r":
            case "relative": return this.EGet(EPosition.Relative, pCL);
            case "s":
            case "sticky": return this.EGet(EPosition.Sticky, pCL);
            case "x":
            case "none": return this.EGet(EPosition.None, pCL);
        }
    };
    Position.EGet = function (pPosition, pCL) {
        switch (pPosition) {
            case EPosition.Absolute: return "absolute";
            case EPosition.Fixed: return "fixed";
            case EPosition.Relative: return "relative";
            case EPosition.Sticky: return "sticky";
            case EPosition.None: return null;
        }
    };
    return Position;
}());
exports.Position = Position;
var EPosition;
(function (EPosition) {
    EPosition["Absolute"] = "Absolute";
    EPosition["Fixed"] = "Fixed";
    EPosition["Relative"] = "Relative";
    EPosition["Sticky"] = "Sticky";
    EPosition["None"] = "X";
})(EPosition = exports.EPosition || (exports.EPosition = {}));
//# sourceMappingURL=Position.js.map