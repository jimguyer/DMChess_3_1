"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attrs_1 = require("../../Common/Attrs/Attrs");
var Color_1 = require("../../Common/Attrs/Color");
var Util_1 = require("../../Common/Modules/Util");
var Border = /** @class */ (function () {
    function Border() {
    }
    Border.Build = function (pCtl, pAttrs, pCL) {
        if (pAttrs === void 0) { pAttrs = null; }
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("StyleSvc.Border * pACtl.M=" + pACtl.M);
            //console.log("Style.Border * pACtl=" + JSON.stringify(pACtl));
            //console.log("Style.Border * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Style.Border * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //console.log("Style.Border * pACtl.M=" + pACtl.M);
        }
        //#region Init
        var size = pCtl.Size;
        var style = pCtl.Style;
        var x, color, boStyle;
        var sides = [], sizes = [], colors = [], styles = [];
        style["border-width"] = undefined;
        style["border-style"] = undefined;
        style["border-color"] = undefined;
        style["border-top-width"] = undefined;
        style["border-style"] = undefined;
        style["border-color"] = undefined;
        style["border-right-width"] = undefined;
        style["border-right-style"] = undefined;
        style["border-right-color"] = undefined;
        style["border-bottom-width"] = undefined;
        style["border-bottom-style"] = undefined;
        style["border-bottom-color"] = undefined;
        style["border-left-width"] = undefined;
        style["border-left-style"] = undefined;
        style["border-left-color"] = undefined;
        //#endregion
        var parsed = Attrs_1.Attrs.Parse(pAttrs);
        if (pCL) {
            //console.log("Control.Border * size=" + JSON.stringify(size));
            //console.log("Control.Border * style=" + JSON.stringify(style));
            //console.log("Control.Border * pACtl.Bo=" + pACtl.Bo);
            //console.log("Control.Border * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
            //console.log("Control.Border * parsed.Alphas=" + JSON.stringify(parsed.Alphas));
            //console.log("Control.Border * parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
            //console.log("Control.Border * parsed.Nums=" + JSON.stringify(parsed.Nums));
        }
        for (x = 0; x < parsed.Pascals.length; x++) {
            if (sides.length < 4 && Util_1.Util.IsSide(parsed.Pascals[x], pCL)) {
                sides.push(parsed.Pascals[x]);
                continue;
            }
            if (styles.length < 4) {
                boStyle = this.GetStyle(parsed.Pascals[x], pCL);
                if (boStyle !== undefined) {
                    styles.push(boStyle);
                    continue;
                }
            }
            if (colors.length < 4) {
                color = Color_1.Color.Get(parsed.Pascals[x], pCL);
                if (color !== undefined) {
                    colors.push(color);
                    continue;
                }
            }
        }
        for (x = 0; x < parsed.AlphaNums.length; x++) {
            if (colors.length < 4) {
                var color = Color_1.Color.Get(parsed.AlphaNums[x], pCL);
                if (color !== undefined)
                    colors.push(color);
                continue;
            }
        }
        for (x = 0; x < parsed.Nums.length; x++) {
            sizes.push(parsed.Nums[x]);
            continue;
        }
        if (sizes.length === 0)
            sizes.push(1);
        if (styles.length === 0)
            styles.push("solid");
        if (colors.length === 0)
            colors.push("black");
        if (sides.length === 0) {
            switch (sizes.length) {
                case 0:
                    size.BoT = 1;
                    size.BoR = 1;
                    size.BoB = 1;
                    size.BoL = 1;
                    break;
                case 1:
                    size.BoT = sizes[0];
                    size.BoR = sizes[0];
                    size.BoB = sizes[0];
                    size.BoL = sizes[0];
                    break;
                case 2:
                    size.BoT = sizes[0];
                    size.BoR = sizes[1];
                    size.BoB = sizes[0];
                    size.BoL = sizes[1];
                    break;
                case 3:
                    size.BoT = sizes[0];
                    size.BoR = sizes[1];
                    size.BoB = sizes[0];
                    size.BoL = sizes[2];
                    break;
                case 4:
                    size.BoT = sizes[0];
                    size.BoR = sizes[1];
                    size.BoB = sizes[2];
                    size.BoL = sizes[3];
                    break;
            }
            switch (styles.length) {
                case 0:
                    style["border-top-style"] = "solid";
                    style["border-right-style"] = "solid";
                    style["border-bottom-style"] = "solid";
                    style["border-left-style"] = "solid";
                    break;
                case 1:
                    style["border-top-style"] = styles[0];
                    style["border-right-style"] = styles[0];
                    style["border-bottom-style"] = styles[0];
                    style["border-left-style"] = styles[0];
                    break;
                case 2:
                    style["border-top-style"] = styles[0];
                    style["border-right-style"] = styles[1];
                    style["border-bottom-style"] = styles[0];
                    style["border-left-style"] = styles[1];
                    break;
                case 3:
                    style["border-top-style"] = styles[0];
                    style["border-right-style"] = styles[1];
                    style["border-bottom-style"] = styles[0];
                    style["border-left-style"] = styles[2];
                    break;
                case 4:
                    style["border-top-style"] = styles[0];
                    style["border-right-style"] = styles[1];
                    style["border-bottom-style"] = styles[2];
                    style["border-left-style"] = styles[3];
                    break;
            }
            switch (colors.length) {
                case 0:
                    style["border-top-color"] = "black";
                    style["border-right-color"] = "black";
                    style["border-bottom-color"] = "black";
                    style["border-left-color"] = "black";
                    break;
                case 1:
                    style["border-top-color"] = colors[0];
                    style["border-right-color"] = colors[0];
                    style["border-bottom-color"] = colors[0];
                    style["border-left-color"] = colors[0];
                    break;
                case 2:
                    style["border-top-color"] = colors[0];
                    style["border-right-color"] = colors[1];
                    style["border-bottom-color"] = colors[0];
                    style["border-left-color"] = colors[1];
                    break;
                case 3:
                    style["border-top-color"] = colors[0];
                    style["border-right-color"] = colors[1];
                    style["border-bottom-color"] = colors[0];
                    style["border-left-color"] = colors[2];
                    break;
                case 4:
                    style["border-top-color"] = colors[0];
                    style["border-right-color"] = colors[1];
                    style["border-bottom-color"] = colors[2];
                    style["border-left-color"] = colors[3];
                    break;
            }
        }
        else {
            if (pCL) {
                //console.log("Control.Border * sides=" + JSON.stringify(sides));
                //console.log("Control.Border * styles=" + JSON.stringify(styles));
                //console.log("Control.Border * colors=" + JSON.stringify(colors));
            }
            for (x = 0; x < sides.length; x++) {
                switch (sides[x]) {
                    case "T":
                        size.BoT = x < sizes.length ? sizes[x] : sizes[0];
                        style["border-top-style"] = x < styles.length ? styles[x] : styles[0];
                        style["border-top-color"] = x < colors.length ? colors[x] : colors[0];
                        break;
                    case "R":
                        size.BoR = x < sizes.length ? sizes[x] : sizes[0];
                        style["border-right-style"] = x < styles.length ? styles[x] : styles[0];
                        style["border-right-color"] = x < colors.length ? colors[x] : colors[0];
                        break;
                    case "B":
                        size.BoB = x < sizes.length ? sizes[x] : sizes[0];
                        style["border-bottom-style"] = x < styles.length ? styles[x] : styles[0];
                        style["border-bottom-color"] = x < colors.length ? colors[x] : colors[0];
                        break;
                    case "L":
                        size.BoL = x < sizes.length ? sizes[x] : sizes[0];
                        style["border-left-style"] = x < styles.length ? styles[x] : styles[0];
                        style["border-left-color"] = x < colors.length ? colors[x] : colors[0];
                        break;
                }
            }
        }
        if (pCL) {
            //console.log("Control.Border  * style=" + JSON.stringify(style));
            //console.log("Control.Border  * style.border-style=" + style["border-style"]);
            //console.log("Control.Border * sides=" + JSON.stringify(sides));
            //console.log("Control.Border * sides=" + JSON.stringify(sides));
            //console.log("Control.Border * size.Bo=" + size.Bo);
            //console.log("Control.Border * style[border-style]=" + style["border-style"]);
            //console.log("Control.Border * style[border-color]=" + style["border-color"]);
            //console.log("Control.Border * size.BoT=" + size.BoT);
            //console.log("Control.Border * size.BoR=" + size.BoR);
            //console.log("Control.Border * size.BoB=" + size.BoB);
            //console.log("Control.Border * size.BoL=" + size.BoL);
            //console.log("Control.Border * style[border-top-style]=" + style["border-top-style"]);
            //console.log("Control.Border * style[border-right-style]=" + style["border-right-style"]);
            //console.log("Control.Border * style[border-bottom-style]=" + style["border-bottom-style"]);
            //console.log("Control.Border * style[border-left-style]=" + style["border-left-style"]);
            //console.log("Control.Border * style[border-top-color]=" + style["border-top-color"]);
            //console.log("Control.Border * style[border-right-color]=" + style["border-right-color"]);
            //console.log("Control.Border * style[border-bottom-color]=" + style["border-bottom-color"]);
            //console.log("Control.Border * style[border-left-color]=" + style["border-left-color"]);
        }
    };
    Border.GetStyle = function (pStyle, pCL) {
        if (pCL === void 0) { pCL = false; }
        if (pStyle) {
            //console.log("ACtl.GetBorderStyle * pAttr=" + pAttr);
        }
        switch (pStyle.toLowerCase()) {
            case "dashed":
            case "das": return this.EGetStyle(EBorderStyle.Dashed);
            case "dotted":
            case "dot": return this.EGetStyle(EBorderStyle.Dotted);
            case "double":
            case "dou": return this.EGetStyle(EBorderStyle.Double);
            case "groove":
            case "gro": return this.EGetStyle(EBorderStyle.Groove);
            case "hidden":
            case "hid": return this.EGetStyle(EBorderStyle.Hidden);
            case "inset":
            case "ins": return this.EGetStyle(EBorderStyle.Inset);
            case "outset":
            case "out": return this.EGetStyle(EBorderStyle.Outset);
            case "ridge":
            case "rid": return this.EGetStyle(EBorderStyle.Ridge);
            case "solid":
            case "sol": return this.EGetStyle(EBorderStyle.Solid);
        }
    };
    Border.EGetStyle = function (pStyle, pCL) {
        if (pCL === void 0) { pCL = false; }
        switch (pStyle) {
            case EBorderStyle.Dashed: return "dashed";
            case EBorderStyle.Dotted: return "dotted";
            case EBorderStyle.Double: return "double";
            case EBorderStyle.Groove: return "groove";
            case EBorderStyle.Hidden: return "hidden";
            case EBorderStyle.Inset: return "inset";
            case EBorderStyle.Outset: return "outset";
            case EBorderStyle.Ridge: return "ridge";
            case EBorderStyle.Solid: return "solid";
        }
    };
    return Border;
}());
exports.Border = Border;
var EBorderStyle;
(function (EBorderStyle) {
    EBorderStyle["Dashed"] = "Dashed";
    EBorderStyle["Dotted"] = "Dotted";
    EBorderStyle["Double"] = "double";
    EBorderStyle["Groove"] = "Groove";
    EBorderStyle["Hidden"] = "hidden";
    EBorderStyle["Inset"] = "inset";
    EBorderStyle["Outset"] = "outset";
    EBorderStyle["Ridge"] = "ridge";
    EBorderStyle["Solid"] = "solid";
})(EBorderStyle = exports.EBorderStyle || (exports.EBorderStyle = {}));
//# sourceMappingURL=Border.js.map