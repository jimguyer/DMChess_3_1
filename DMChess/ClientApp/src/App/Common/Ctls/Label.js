"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Label = /** @class */ (function () {
    function Label() {
    }
    Label.Inits = function (pALabels, pCL) {
        var _this = this;
        if (pCL === void 0) { pCL = false; }
        var labels = [];
        pALabels.forEach(function (x) { labels.push(_this.Init(x, pCL)); });
        return labels;
    };
    Label.Init = function (pALabel, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Label.Init * pALabel=" + JSON.stringify(pALabel));
        if (pCL) {
            //console.log("Common/Ctls/Label.Init * pALabel=" + JSON.stringify(pALabel));
        }
        var aDft;
        switch (pALabel.Type) {
            case ELabel.Banner:
                aDft = Default_1.Dft.ALabel.Banner;
                break;
            case ELabel.Msg:
                aDft = Default_1.Dft.ALabel.Msg;
                break;
            case ELabel.LowerLeft:
                aDft = Default_1.Dft.ALabel.LowerLeft;
                break;
            case ELabel.LowerLeft2:
                aDft = Default_1.Dft.ALabel.LowerLeft2;
                break;
            case ELabel.Inner:
                aDft = Default_1.Dft.ALabel.Inner;
                break;
            case ELabel.TALeft:
                aDft = Default_1.Dft.ALabel.TALeft;
                break;
            case ELabel.TACenter:
                aDft = Default_1.Dft.ALabel.TACenter;
                break;
            case ELabel.TARight:
                aDft = Default_1.Dft.ALabel.TARight;
                break;
        }
        //pALabel.Bg = "Yellow";
        var label = Ctl_1.Ctl.Init(pALabel, aDft, pCL);
        if (pCL) {
            //console.log("Common/Ctls/Label.Init.End * pALabel=" + JSON.stringify(pALabel));
            //console.log("Common/Ctls/Label.Init.End * label=" + JSON.stringify(label));
        }
        label.CtlType = Ctl_1.ECtl.Label;
        return label;
    };
    Label.Stacks = function (pLabels, pSize, pCL) {
        if (pSize === void 0) { pSize = null; }
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("Labels.Stack * pSize.Y=" + pSize.Y);
            //console.log("Labels.Stack ------------------------------------------");
        }
        var size = { Y: pSize.Y };
        pLabels.forEach(function (x) {
            x.Size.Y = size.Y;
            Label.Stack(x, size, pCL);
            size.Y = x.Size.NextY;
        });
        return pLabels;
    };
    Label.Stack = function (pLabel, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        pLabel.Size.Y = pSize.Y;
        var gapY = pSize.GapY !== undefined ? pSize.GapY : Default_1.Dft.GapY;
        pLabel.Size.NextY = pLabel.Size.Y + pLabel.Size.H + gapY;
        if (pCL) {
            //console.log("Labels.Stack * pSize.Y=" + pSize.Y + " * pSize.GapY=" + pSize.GapY);
            //console.log("");
            //console.log("Labels.Stack.End * pLabel.Size.H=" + pLabel.Size.H + " * gapY=" + gapY);
            //console.log("Labels.Stack.End * pLabel.Size.Y=" + pLabel.Size.Y + " * pLabel.Size.NextY=" + pLabel.Size.NextY);
            //console.log("Labels.Stack.End ================================================================================");
        }
    };
    Label.Size = function (pLabel, pCL) {
        if (pCL === void 0) { pCL = false; }
        return Ctl_1.Ctl.Size(pLabel);
    };
    Label.Sizes = function (pLabels, pCL) {
        if (pCL === void 0) { pCL = false; }
        return Ctl_1.Ctl.Sizes(pLabels);
    };
    return Label;
}());
exports.Label = Label;
var ELabel;
(function (ELabel) {
    ELabel["Banner"] = "B";
    ELabel["BigMsg"] = "BM";
    ELabel["Msg"] = "M";
    ELabel["Inner"] = "I";
    ELabel["LowerLeft"] = "LL";
    ELabel["LowerLeft2"] = "LL2";
    ELabel["TALeft"] = "TAL";
    ELabel["TACenter"] = "TAC";
    ELabel["TARight"] = "TAR";
})(ELabel = exports.ELabel || (exports.ELabel = {}));
//# sourceMappingURL=Label.js.map