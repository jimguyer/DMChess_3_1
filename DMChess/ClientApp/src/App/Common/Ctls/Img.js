"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Img = /** @class */ (function () {
    function Img() {
    }
    Img.Init = function (pAImg, pCL) {
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("Img.Init * pImg=" + JSON.stringify(pAImg));
        }
        var dft;
        switch (pAImg.Type) {
            case EImg.Background:
                dft = Default_1.Dft.AImg.Background;
                break;
            case EImg.Generic:
                dft = Default_1.Dft.AImg.Generic;
                break;
            case EImg.Hdr:
                dft = Default_1.Dft.AImg.Hdr;
                break;
            case EImg.IconL:
                dft = Default_1.Dft.AImg.IconL;
                break;
            case EImg.IconR:
                dft = Default_1.Dft.AImg.IconR;
                break;
            case EImg.Logo:
                dft = Default_1.Dft.AImg.Logo;
                break;
            case EImg.Raw:
                dft = Default_1.Dft.AImg.Raw;
                break;
            case EImg.Crop:
                dft = Default_1.Dft.AImg.Crop;
                break;
            case EImg.Square:
                dft = Default_1.Dft.AImg.Square;
                break;
        }
        var img = Ctl_1.Ctl.Init(pAImg, dft, pCL);
        img.CtlType = Ctl_1.ECtl.Img;
        if (pCL) {
            //console.log("Img.Init.End * pAImg=" + JSON.stringify(pAImg));
            //console.log("Img.Init.End * dft=" + JSON.stringify(dft));
            //console.log("Img.Init.End * img=" + JSON.stringify(img));
            //console.log("Img.Init.End * ---------------------------------------");
        }
        return img;
    };
    Img.Stack = function (pImg, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Img.Stack * pImg=" + JSON.stringify(pImg));
        //console.log("Img.Stack * pY=" + pY);
        //console.log("Img.Stack * pGapY=" + pGapY);
        //console.log("Img.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pImg.Size.Y = pSize.Y;
        pImg.NextY = pSize.Y + pSize.H + pSize.GapY;
        if (pCL) {
            //console.log("Img.Stack * pImg.Y=" + JSON.stringify(pImg.Y));
            //console.log("Img.Stack * pImg.Size=" + JSON.stringify(pImg.Size));
            //console.log("Img.Stack * pImg.Size.Y=" + JSON.stringify(pImg.Size.Y)) + " * pImg.Size.H=" + JSON.stringify(pImg.Size.H);
            //console.log("Img.Stack * pImg.Size.H=" + pImg.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Img.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Img.Stack * pImg.NextY=" + pImg.NextY);
        }
        //console.log("Img.Stack * pImg.Size.Y=" + pImg.Size.Y);
        //console.log("Img.Stack * pImg.Size=" + JSON.stringify(pImg.Size));
    };
    Img.Sizes = function (pImgs, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Sizes(pImgs);
    };
    Img.Size = function (pImg, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pImg);
    };
    return Img;
}());
exports.Img = Img;
var EImg;
(function (EImg) {
    EImg["Background"] = "BG";
    EImg["BigMsg"] = "BM";
    EImg["Border_None"] = "BN";
    EImg["Border_Black"] = "BB";
    EImg["Border_White"] = "BW";
    EImg["Hdr"] = "H";
    EImg["IconL"] = "IL";
    EImg["IconR"] = "IR";
    EImg["Generic"] = "G";
    EImg["Square"] = "S";
    EImg["Crop"] = "C";
    EImg["Raw"] = "R";
    EImg["Logo"] = "L";
})(EImg = exports.EImg || (exports.EImg = {}));
//# sourceMappingURL=Img.js.map