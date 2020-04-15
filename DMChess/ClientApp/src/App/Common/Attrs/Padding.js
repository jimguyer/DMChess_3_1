"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attrs_1 = require("../../Common/Attrs/Attrs");
var Util_1 = require("../../Common/Modules/Util");
var Padding = /** @class */ (function () {
    function Padding() {
    }
    Padding.Build = function (pCtl, pAttrs, pCL) {
        if (pAttrs === void 0) { pAttrs = null; }
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("StyleSvc.Padding * pACtl.M=" + pACtl.M);
            //console.log("Style.Padding * pACtl=" + JSON.stringify(pACtl));
            //console.log("Style.Padding * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Style.Padding * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //console.log("Style.Padding * pACtl.M=" + pACtl.M);
        }
        var sides = [], sizes = [];
        if (pAttrs === null)
            return "0px";
        else {
            var parsed = Attrs_1.Attrs.Parse(pAttrs, pCL);
            if (pCL) {
                //console.log("Control.Padding * pACtl.F=" + pACtl.M);
                //console.log("Control.Padding * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
                //console.log("Control.Padding * parsed.Alphas=" + JSON.stringify(parsed.Alphas));
                //console.log("Control.Padding * parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
                //console.log("Control.Padding * parsed.Nums=" + JSON.stringify(parsed.Nums));
            }
            parsed.Pascals.forEach(function (x) { if (sides.length < 4 && Util_1.Util.IsSide(x, pCL))
                sides.push(x); });
            parsed.Nums.forEach(function (x) { return sizes.push(x); });
            if (sides.length === 0) {
                if (pCL) {
                    //console.log("Control.Padding *sides.length === 0)");
                }
                switch (sizes.length) {
                    case 0:
                        pCtl.Size.P = 0;
                        break;
                    case 1:
                        pCtl.Size.P = sizes[0];
                        break;
                    case 2:
                        pCtl.Size.PT = sizes[0];
                        pCtl.Size.PR = sizes[1];
                        pCtl.Size.PT = sizes[0];
                        pCtl.Size.PR = pCtl.Size[1];
                        break;
                    case 3:
                        pCtl.Size.P = sizes[0];
                        break;
                    case 4:
                        pCtl.Size.PT = sizes[0];
                        pCtl.Size.PR = sizes[1];
                        pCtl.Size.PT = sizes[2];
                        pCtl.Size.PR = pCtl.Size[3];
                        break;
                }
            }
            else {
                if (pCL) {
                    //console.log("Control.Padding *sides.length != 0)");
                }
                if (sides.length < 4)
                    pCtl.Size.P = 0;
                for (var x = 0; x < sides.length; x++) {
                    switch (sides[x]) {
                        case "T":
                            if (x < sizes.length)
                                pCtl.Size.PT = sizes[x];
                            break;
                        case "R":
                            if (x < sizes.length)
                                pCtl.Size.PR = sizes[x];
                            break;
                        case "B":
                            if (x < sizes.length)
                                pCtl.Size.PB = sizes[x];
                            break;
                        case "L":
                            if (x < sizes.length)
                                pCtl.Size.PL = sizes[x];
                            break;
                    }
                }
            }
            if (pCL) {
                //console.log("Control.Padding * pCtl.Size.P=" + pCtl.Size.P);
                //console.log("Control.Padding * pCtl.Size.PT=" + pCtl.Size.PT);
                //console.log("Control.Padding * pCtl.Size.PR=" + pCtl.Size.PR);
                //console.log("Control.Padding * pCtl.Size.PB=" + pCtl.Size.PB);
                //console.log("Control.Padding * pCtl.Size.PL=" + pCtl.Size.PL);
            }
        }
    };
    return Padding;
}());
exports.Padding = Padding;
//# sourceMappingURL=Padding.js.map