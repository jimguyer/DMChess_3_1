"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cont_1 = require("../../Common/Conts/Cont");
var Default_1 = require("../../Main/Shared/Modules/Default");
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.Init = function (pValue, pType, pData, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft_attrs;
        switch (pType) {
            case eDataType.Label:
                dft_attrs = Default_1.Dft.Label.TALeft.Attrs;
                break;
            case eDataType.Checkbox:
                dft_attrs = Default_1.Dft.Checkbox.Attrs;
                break;
            case eDataType.Radio:
                dft_attrs = Default_1.Dft.Radio.Attrs;
                break;
            case eDataType.Password:
                dft_attrs = Default_1.Dft.Password.Attrs;
                break;
            //case eDataType.Select: dft_attrs = Dft.Select.Attrs; break;
            case eDataType.Textbox:
                dft_attrs = Default_1.Dft.Textbox.Attrs;
                break;
            //case eDataType.Img: dft_attrs = Dft.Img.Attrs; break;
        }
        var button = Cont_1.Cont.Init(pData, dft_attrs, pCL);
        button.Value = pValue;
        return button;
    };
    Data.Stack = function (pData, pY, pGapY, pCL) {
        if (pGapY === void 0) { pGapY = Default_1.Dft.GapY; }
        if (pCL === void 0) { pCL = false; }
        //console.log("Datas.Stack * pData=" + JSON.stringify(pData));
        //console.log("Datas.Stack * pY=" + pY);
        //console.log("Data.Stack * pGapY=" + pGapY);
        //console.log("Data.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pData.Size.Y = pY;
        pData.NextY = pY + pData.Size.H + pGapY * Default_1.Dft.AdjustS;
        if (pCL) {
            //console.log("Line.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Line.Stack * pData.Size=" + JSON.stringify(pData.Size));
            //console.log("Line.Stack * pData.Size.Y=" + JSON.stringify(pData.Size.Y)) + " * pData.Size.H=" + JSON.stringify(pData.Size.H);
            //console.log("Line.Stack * pData.Size.H=" + pData.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * pData.NextY=" + pData.NextY);
        }
        //console.log("Line.Stack * pData.Size.Y=" + pData.Size.Y);
        //console.log("Line.Stack * pData.Size=" + JSON.stringify(pData.Size));
    };
    return Data;
}());
exports.Data = Data;
var eDataType;
(function (eDataType) {
    eDataType["Label"] = "L";
    eDataType["Checkbox"] = "C";
    eDataType["Radio"] = "R";
    eDataType["Password"] = "P";
    eDataType["Select"] = "S";
    eDataType["Textbox"] = "T";
    eDataType["Img"] = "I";
})(eDataType = exports.eDataType || (exports.eDataType = {}));
//# sourceMappingURL=Data.js.map
