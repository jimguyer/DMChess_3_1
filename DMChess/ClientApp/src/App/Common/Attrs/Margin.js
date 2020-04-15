"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attrs_1 = require("../../Common/Attrs/Attrs");
var Util_1 = require("../../Common/Modules/Util");
var Margin = /** @class */ (function () {
    function Margin() {
    }
    Margin.Build = function (pCtl, pAttrs, pCL) {
        if (pAttrs === void 0) { pAttrs = null; }
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("StyleSvc.Margin * pACtl.M=" + pACtl.M);
            //console.log("Style.Margin * pACtl=" + JSON.stringify(pACtl));
            //console.log("Style.Margin * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Style.Margin * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //console.log("Style.Margin * pACtl.M=" + pACtl.M);
        }
        var sides = [], sizes = [];
        if (pAttrs === null)
            return "0px";
        else {
            var parsed = Attrs_1.Attrs.Parse(pAttrs, pCL);
            if (pCL) {
                //console.log("Control.Margin * pACtl.F=" + pACtl.M);
                //console.log("Control.Margin * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
                //console.log("Control.Margin * parsed.Alphas=" + JSON.stringify(parsed.Alphas));
                //console.log("Control.Margin * parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
                //console.log("Control.Margin * parsed.Nums=" + JSON.stringify(parsed.Nums));
            }
            for (x = 0; x < parsed.Pascals.length; x++) {
                if (sides.length < 4 && Util_1.Util.IsSide(parsed.Pascals[x], pCL)) {
                    sides.push(parsed.Pascals[x]);
                    continue;
                }
                if (parsed.Pascals[x].toLowerCase().substr(0, 1) === "a" || parsed.Pascals[x].toLowerCase().substr(0, 1) === "auto") {
                    sizes.push("a");
                    pCtl.Style.display = "block";
                    continue;
                }
                if (Util_1.Util.IsNum(parsed.Pascals[x]))
                    sizes.push(Util_1.Util.IsNum(parsed.Pascals[x]));
            }
            if (sides.length === 0) {
                switch (sizes.length) {
                    case 0:
                        pCtl.Size.M = 0;
                        break;
                    case 1:
                        if (sizes[0] === "a") {
                            pCtl.Style["margin-left"] = "auto";
                            pCtl.Style["margin-right"] = "auto";
                        }
                        else
                            pCtl.Size.M = sizes[0];
                        break;
                    case 2:
                        if (sizes[0] === "a" && sizes[1] === "a")
                            pCtl.Style["margin"] = "auto";
                        else if (sizes[0] === "a") {
                            pCtl.Style["margin-top"] = "auto";
                            pCtl.Style["margin-bottom"] = "auto";
                            pCtl.Size.ML = +sizes[0];
                            pCtl.Size.MR = +sizes[0];
                        }
                        else {
                            pCtl.Style["margin-left"] = "auto";
                            pCtl.Style["margin-right"] = "auto";
                            pCtl.Size.MT = +sizes[0];
                            pCtl.Size.MB = +sizes[0];
                        }
                }
            }
            else {
                for (var x = 1; x < sides.length; x++) {
                    switch (sides[x]) {
                        case "T":
                            if (x < sizes.length) {
                                if (sizes[x] === "a")
                                    pCtl.Style["margin-top"] = "auto";
                                else
                                    pCtl.Size.MT = +sizes[x];
                            }
                            break;
                        case "R":
                            if (x < sizes.length) {
                                if (sizes[x] === "a")
                                    pCtl.Style["margin-right"] = "auto";
                                else
                                    pCtl.Size.MR = +sizes[x];
                            }
                            break;
                        case "B":
                            if (x < sizes.length) {
                                if (sizes[x] === "a")
                                    pCtl.Style["margin-bottom"] = "auto";
                                else
                                    pCtl.Size.MB = +sizes[x];
                            }
                            break;
                        case "L":
                            if (x < sizes.length) {
                                if (sizes[x] === "a")
                                    pCtl.Style["margin-left"] = "auto";
                                else
                                    pCtl.Size.ML = +sizes[x];
                            }
                            break;
                    }
                }
            }
        }
    };
    return Margin;
}());
exports.Margin = Margin;
//# sourceMappingURL=Margin.js.map