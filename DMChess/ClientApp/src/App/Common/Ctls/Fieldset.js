"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Fieldset = /** @class */ (function () {
    function Fieldset() {
    }
    Fieldset.Init = function (pAFieldset, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Fieldset.Init * pAFieldset=" + JSON.stringify(pAFieldset));
        var dft;
        switch (pAFieldset.Type) {
            case EFieldset.Border_Black:
                ;
                dft = Default_1.Dft.AFieldset.Border_Black;
                break;
            case EFieldset.Border_White:
                dft = Default_1.Dft.AFieldset.Border_White;
                break;
        }
        var fieldset = Ctl_1.Ctl.Init(pAFieldset, dft, pCL);
        if (pCL) {
            //console.log("Fieldset.Init.End * dft.FirstY=" + dft.FirstY);
            //console.log("Fieldset.Init.End * fieldset.Size.FirstY=" + fieldset.Size.FirstY);
            //console.log("Fieldset.Init.End * dft=" + JSON.stringify(dft));
            //console.log("Fieldset.Init.End * pAFieldset=" + JSON.stringify(pAFieldset));
            //console.log("Fieldset.Init.End * fieldset=" + JSON.stringify(fieldset));
            //console.log("Fieldset.Init.End -------------------------------------");
        }
        //console.log("Fieldset.Init.End * dft.FirstY=" + dft.FirstY);
        //console.log("Fieldset.Init.End * fieldset.Size.FirstY=" + fieldset.Size.FirstY);
        //console.log("Fieldset.Init.End -------------------------------------");
        return fieldset;
    };
    Fieldset.Stack = function (pFieldset, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Stack(pFieldset, pSize, pCL);
    };
    Fieldset.Bottom = function (pFieldset, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Bottom(pFieldset, pSize, pCL);
    };
    Fieldset.Size = function (pFieldset, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pFieldset, pCL);
    };
    return Fieldset;
}());
exports.Fieldset = Fieldset;
var EFieldset;
(function (EFieldset) {
    EFieldset["Border_Black"] = "B";
    EFieldset["Border_White"] = "W";
})(EFieldset = exports.EFieldset || (exports.EFieldset = {}));
//# sourceMappingURL=Fieldset.js.map