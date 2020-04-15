"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Textarea = /** @class */ (function () {
    function Textarea() {
    }
    Textarea.Inits = function (pATextareas, pCL) {
        var _this = this;
        if (pCL === void 0) { pCL = false; }
        var Textareas = [];
        pATextareas.forEach(function (x) { Textareas.push(_this.Init(x, pCL)); });
        return Textareas;
    };
    Textarea.Init = function (pATextarea, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft;
        switch (pATextarea.Type) {
            //case ETextarea.Left: dft = Dft.ATextarea; break;
            //case ETextarea.TALeft: dft = Dft.ATextarea.TALeft; break;
            //case ETextarea.TACenter: dft = Dft.ATextarea.TACenter; break;
            //case ETextarea.TARight: dft = Dft.ATextarea.TARight; break;
        }
        var Textarea = Ctl_1.Ctl.Init(pATextarea, dft, pCL);
        return Textarea;
    };
    Textarea.Stacks = function (pTextareas, pSize, pCL) {
        if (pSize === void 0) { pSize = null; }
        if (pCL === void 0) { pCL = false; }
        return pTextareas;
    };
    Textarea.Stack = function (pTextarea, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Textareas.Stack * pTextarea=" + JSON.stringify(pTextarea));
        //console.log("Textareas.Stack * pY=" + pY);
        //console.log("Textarea.Stack * pGapY=" + pGapY);
        pTextarea.Size.Y = pSize.Y;
        pTextarea.NextY = pSize.Y + pTextarea.Size.H + pSize.GapY;
        if (pCL) {
            //console.log("Line.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Line.Stack * pTextarea.Size=" + JSON.stringify(pTextarea.Size));
            //console.log("Line.Stack * pTextarea.Size.Y=" + JSON.stringify(pTextarea.Size.Y)) + " * pTextarea.Size.H=" + JSON.stringify(pTextarea.Size.H);
            //console.log("Line.Stack * pTextarea.Size.H=" + pTextarea.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * pTextarea.NextY=" + pTextarea.NextY);
        }
        //console.log("Line.Stack * pTextarea.Size.Y=" + pTextarea.Size.Y);
        //console.log("Line.Stack * pTextarea.Size=" + JSON.stringify(pTextarea.Size));
    };
    Textarea.Size = function (pTextarea, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pTextarea);
    };
    return Textarea;
}());
exports.Textarea = Textarea;
var ETextarea;
(function (ETextarea) {
    ETextarea["Left"] = "L";
    ETextarea["Right"] = "R";
})(ETextarea = exports.ETextarea || (exports.ETextarea = {}));
//# sourceMappingURL=Textarea.js.map