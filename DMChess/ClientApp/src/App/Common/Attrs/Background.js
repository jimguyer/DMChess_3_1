"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("../../Common/Attrs/Color");
var Attrs_1 = require("../../Common/Attrs/Attrs");
var Util_1 = require("../../Common/Modules/Util");
var Background = /** @class */ (function () {
    function Background() {
    }
    Background.Build = function (pCtl, pAttrs, pCL) {
        if (pAttrs === void 0) { pAttrs = null; }
        if (pCL === void 0) { pCL = false; }
        var x;
        var parsed = Attrs_1.Attrs.Parse(pAttrs, pCL);
        if (pCL) {
            //console.log("Common/Attrs/Background * pAttrs=" + pAttrs);
            //console.log("Common/Attrs/Background *  parsed.Pascals=" + JSON.stringify(parsed.Pascals));
            //console.log("Common/Attrs/Background *  parsed.Alphas=" + JSON.stringify(parsed.Alphas));
            //console.log("Common/Attrs/Background *  parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
            //console.log("Common/Attrs/Background * parsed.Nums=" + JSON.stringify(parsed.Nums));
            //console.log("Common/Attrs/Background-----------------------------------------------");
        }
        for (x = 0; x < parsed.Pascals.length; x++) {
            if (pCL) {
                //console.log("Common/Attrs/Background * parsed.Pascals[" + x + "]=" + parsed.Pascals[x]);
            }
            if (pCtl.Style["background-color"] === undefined) {
                pCtl.Style["background-color"] = Color_1.Color.Get(parsed.Pascals[x], pCL);
                if (pCL) {
                    //console.log("Control.Background * pCtl.Style[background-color]=" + pCtl.Style["background-color"]);
                }
                if (pCtl.Style["background-color"] !== null)
                    continue;
            }
        }
        for (x = 0; x < parsed.Pascals.length; x++) {
            if (pCL) {
                //console.log("Control.Background * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
            }
            if (pCtl.Style["background-color"] === undefined) {
                pCtl.Style["background-color"] = Color_1.Color.Get(parsed.Pascals[x], pCL);
                if (pCtl.Style["background-color"] !== null)
                    continue;
            }
        }
        for (x = 0; x < parsed.AlphaNums.length; x++) {
            if (pCL) {
                //console.log("Control.Background * parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
            }
            var percent = null;
            if (Util_1.Util.IsPercent(parsed.AlphaNums[x])) {
                if (percent === null) {
                    percent = parsed.AlphaNums[x];
                    pCtl.Style["background-size"] = percent + " " + percent;
                }
                else {
                    pCtl.Style["background-size"] = percent + " " + parsed.AlphaNums[x];
                }
            }
            if (pCtl.Style["background-color"] === undefined) {
                pCtl.Style["background-color"] = Color_1.Color.Get(parsed.Pascals[x], pCL);
                if (pCtl.Style["background-color"] !== null)
                    continue;
            }
        }
        for (x = 0; x < parsed.Nums.length; x++) {
            if (x === 0) {
                pCtl.Size.BgW = parsed.Nums[x];
                pCtl.Size.BgH = parsed.Nums[x];
            }
            else if (x === 1)
                pCtl.Size.BgH = parsed.Nums[x];
            ;
        }
        if (pCtl.Style["background-size"] === undefined) {
            if (pCtl.Size.BgW === undefined)
                pCtl.Size.BgW = pCtl.Size.W;
            if (pCtl.Size.BgH === undefined)
                pCtl.Size.BgH = pCtl.Size.H;
        }
        if (pCtl.Style["background-repeat"] === undefined)
            pCtl.Style["background-repeat"] = "no-repeat";
        if (pCL) {
            //console.log("Control.Background * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Control.Background * pCtl.Style=" + JSON.stringify(pCtl.Style));
        }
    };
    return Background;
}());
exports.Background = Background;
//# sourceMappingURL=Background.js.map