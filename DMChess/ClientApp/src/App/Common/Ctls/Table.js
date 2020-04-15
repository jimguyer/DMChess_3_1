"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.Init = function (pATable, pCL) {
        if (pCL === void 0) { pCL = false; }
        var dft;
        switch (pATable.Frame.Type) {
            //case ETableType.Select: dft = Dft.ATable.Select;
        }
        var Table = {
        //    Frame: { Ctl.Init(pATable, dft, pCL) }
        };
        return Table;
    };
    Table.Init_Col = function (pATH, pATD, pCL) {
        if (pCL === void 0) { pCL = false; }
    };
    Table.Build = function (pData, pLPP, pCL) {
        if (pCL === void 0) { pCL = false; }
    };
    Table.Stack = function (pTable, pY, pGapY, pCL) {
        if (pGapY === void 0) { pGapY = Default_1.Dft.GapY; }
        if (pCL === void 0) { pCL = false; }
        //console.log("Tables.Stack * pTable=" + JSON.stringify(pTable));
        //console.log("Tables.Stack * pY=" + pY);
        //console.log("Table.Stack * pGapY=" + pGapY);
        //console.log("Table.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pTable.Size.Y = pY;
        pTable.NextY = pY + pTable.Size.H + pGapY;
        if (pCL) {
            //console.log("Table.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
            //console.log("Table.Stack * pTable.Size.Y=" + JSON.stringify(pTable.Size.Y)) + " * pTable.Size.H=" + JSON.stringify(pTable.Size.H);
            //console.log("Table.Stack * pTable.Size.H=" + pTable.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * pTable.NextY=" + pTable.NextY);
        }
        //console.log("Table.Stack * pTable.Size.Y=" + pTable.Size.Y);
        //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
    };
    Table.Size = function (pTable, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Tables.Stack * pTable=" + JSON.stringify(pTable));
        //console.log("Tables.Stack * pY=" + pY);
        //console.log("Table.Stack * pGapY=" + pGapY);
        //console.log("Table.Stack * Dft.AdjustS=" + Dft.AdjustS);
        //pTable.Size.Y = pY;
        //pTable.NextY = pY + pTable.Size.H + pGapY;
        if (pCL) {
            //console.log("Table.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
            //console.log("Table.Stack * pTable.Size.Y=" + JSON.stringify(pTable.Size.Y)) + " * pTable.Size.H=" + JSON.stringify(pTable.Size.H);
            //console.log("Table.Stack * pTable.Size.H=" + pTable.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * pTable.NextY=" + pTable.NextY);
        }
        //console.log("Table.Stack * pTable.Size.Y=" + pTable.Size.Y);
        //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
    };
    return Table;
}());
exports.Table = Table;
var ETable;
(function (ETable) {
    ETable["Data"] = "S";
    ETable["Select"] = "S";
})(ETable = exports.ETable || (exports.ETable = {}));
var ETCol;
(function (ETCol) {
    ETCol["Data"] = "D";
    ETCol["Select"] = "S";
})(ETCol = exports.ETCol || (exports.ETCol = {}));
var ETFrame;
(function (ETFrame) {
    ETFrame["Select"] = "S";
    ETFrame["Img"] = "I";
    ETFrame["TAL"] = "L";
    ETFrame["TAR"] = "R";
})(ETFrame = exports.ETFrame || (exports.ETFrame = {}));
var ETH;
(function (ETH) {
    ETH["Select"] = "S";
    ETH["Img"] = "I";
    ETH["TAL"] = "L";
    ETH["TAR"] = "R";
})(ETH = exports.ETH || (exports.ETH = {}));
var ETD;
(function (ETD) {
    ETD["Select"] = "S";
    ETD["Img"] = "I";
    ETD["TAL"] = "L";
    ETD["TAR"] = "R";
})(ETD = exports.ETD || (exports.ETD = {}));
//# sourceMappingURL=Table.js.map