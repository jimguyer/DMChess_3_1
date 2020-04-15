"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Size = /** @class */ (function () {
    function Size() {
    }
    Size.Copys = function (pControls, pFroms, pStart, pCL) {
        if (pStart === void 0) { pStart = 0; }
        if (pCL === void 0) { pCL = false; }
        for (var x = 0; x < pControls.length; x++) {
            //console.log("SizeSvc.ControlsCopy * x=" + x);
            var xFromIdx = x + pStart;
            if (pFroms.length <= xFromIdx)
                break;
            else {
                this.Copy(pControls[x], pFroms[xFromIdx]);
                if (pCL) {
                    //console.log(pControls[" + x + "] + ".Size=" + JSON.stringify(pControls[x].Size));
                    //console.log(pControls[" + x + "] + ".Style=" + JSON.stringify(pControls[x].Style));
                }
            }
        }
    };
    Size.Copy = function (pControl, pDefault, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("pControl=" + JSON.stringify(pControl));
        //console.log("pControl.Size=" + JSON.stringify(pControl.Size));
        //console.log("pControl.Style=" + JSON.stringify(pControl.Style));
        if (pControl === undefined || pControl === null)
            pControl = { Size: {} };
        if (pControl.Size === undefined || pControl.Size === null)
            pControl.Size = {};
        if (!pControl.Size.Y)
            pControl.Size.Y = pDefault.Size.Y;
        if (!pControl.Size.H)
            pControl.Size.H = pDefault.Size.H;
        if (!pControl.Size.GapX)
            pControl.Size.GapX = pDefault.Size.GapX;
        if (!pControl.Size.GapY)
            pControl.Size.GapY = pDefault.Size.GapY;
        if (!pControl.Size.NextY)
            pControl.Size.NextY = pDefault.Size.NextY;
        //if (!pControl.Size.L) pControl.Size.L = pDefault.Size.L;
        //if (!pControl.Size.R) pControl.Size.R = pDefault.Size.R;
        //if (!pControl.Size.X) pControl.Size.X = pDefault.Size.X;
        //if (!pControl.Size.Z) pControl.Size.Z = pDefault.Size.Z;
        //if (!pControl.Size.Places) pControl.Size.Places = pDefault.Size.Places;
        //if (!pControl.Size.W) pControl.Size.W = pDefault.Size.W;
        //if (!pControl.Size.H) pControl.Size.H = pDefault.Size.H;
        //if (!pControl.Size.S) pControl.Size.S = pDefault.Size.S;
        //if (!pControl.Size.GapX) pControl.Size.GapX = pDefault.Size.GapX;
        //if (!pControl.Size.GapY) pControl.Size.GapY = pDefault.Size.GapY;
        //if (!pControl.Size.NextY) pControl.Size.NextY = pDefault.Size.NextY;
        //if (!pControl.Size.WMax) pControl.Size.WMax = pDefault.Size.WMax;
        //if (!pControl.Size.HMax) pControl.Size.HMax = pDefault.Size.HMax;
        //if (!pControl.Size.SMax) pControl.Size.SMax = pDefault.Size.SMax;
        //if (!pControl.Size.WMin) pControl.Size.WMin = pDefault.Size.WMin;
        //if (!pControl.Size.HMin) pControl.Size.HMin = pDefault.Size.HMin;
        //if (!pControl.Size.SMin) pControl.Size.SMin = pDefault.Size.SMin;
        //if (!pControl.Size.M) pControl.Size.M = pDefault.Size.M;
        //if (!pControl.Size.MT) pControl.Size.MT = pDefault.Size.MT;
        //if (!pControl.Size.MR) pControl.Size.MR = pDefault.Size.MR;
        //if (!pControl.Size.MB) pControl.Size.MB = pDefault.Size.MB;
        //if (!pControl.Size.ML) pControl.Size.ML = pDefault.Size.ML;
        //if (!pControl.Size.P) pControl.Size.P = pDefault.Size.P;
        //if (!pControl.Size.PT) pControl.Size.PT = pDefault.Size.PT;
        //if (!pControl.Size.PR) pControl.Size.PR = pDefault.Size.PR;
        //if (!pControl.Size.PB) pControl.Size.PB = pDefault.Size.PB;
        //if (!pControl.Size.PL) pControl.Size.PL = pDefault.Size.PL;
    };
    Size.Default = function (pControl, pDefault, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("pControl=" + JSON.stringify(pControl));
        //console.log("pControl.Size=" + JSON.stringify(pControl.Size));
        //console.log("pControl.Style=" + JSON.stringify(pControl.Style));
        if (!pControl) {
            pControl = { Size: pDefault && pDefault.Size ? pDefault.Size : {} };
            return;
        }
        ;
        if (!pControl.Size) {
            pControl.Size = pDefault ? pDefault.Size : {};
            return;
        }
        //pControl.Size.L = pDefault.Size.L;
        //pControl.Size.R = pDefault.Size.R;
        pControl.Size.X = pDefault.Size.X;
        pControl.Size.Y = pDefault.Size.Y;
        pControl.Size.W = pDefault.Size.W;
        pControl.Size.H = pDefault.Size.H;
        pControl.Size.Places = pDefault.Size.Places;
    };
    return Size;
}());
exports.Size = Size;
//# sourceMappingURL=Size.js.map