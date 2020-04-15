"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Legend = /** @class */ (function () {
    function Legend() {
    }
    Legend.Init = function (pALegend, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Legend.Init * pALegend=" + JSON.stringify(pALegend));
        if (pCL) {
            //console.log("Legend.Init * pALegend=" + JSON.stringify(pALegend));
            //console.log("Legend.Init * pFirstGapY=" + pFirstGapY);
            //console.log("Legend.Init * pNextGapY=" + pNextGapY);
        }
        var dft = null;
        switch (pALegend.Type) {
            default:
            case ELegend.Border_Black:
                dft = Default_1.Dft.ALegend.Tab;
                break;
            case ELegend.Border_White:
                dft = Default_1.Dft.ALegend.NoTab;
                break;
        }
        if (pALegend.Value === undefined)
            pALegend.Value = "Loading....";
        var legend = Ctl_1.Ctl.Init(pALegend, dft, pCL);
        legend.Show = true;
        return legend;
    };
    Legend.Stack = function (pLegend, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("Legends.Stack * pLegend=" + JSON.stringify(pLegend));
            //console.log("Legends.Stack * pSize=" + JSON.stringify(pSize));
            //console.log("Legends.Stack * pSize.Y=" + pSize.Y + " * GapY=" + pSize.GapY + " * H=" + pLegend.Size.H );
            //console.log("Legends.Stack * pLegend.Size.H=" + pLegend.Size.H);
        }
        var gapY = pSize !== undefined && pSize.GapY !== undefined && pSize.GapY !== null ? pSize.GapY : Default_1.Dft.GapY;
        pLegend.Size.Y = pSize.Y;
        pLegend.Size.NextY = pLegend.Size.Y + pLegend.Size.H / 2;
        pLegend.Size.FirstY = pLegend.Size.Y + pLegend.Size.H + gapY;
        if (pCL) {
            //console.log("Legend.Stack.End * pLegend.Size.Y=" + pLegend.Size.Y);
            //console.log("Legend.Stack.End * pLegend.Size.H=" + pLegend.Size.H);
            //console.log("Legend.Stack.End * gapY=" + gapY);
            //console.log("Legend.Stack.End * pLegend.Size.NextY=" + pLegend.Size.NextY);
            //console.log("Legend.Stack.End * pLegend.Size.FirstY=" + pLegend.Size.FirstY);
            //console.log("Legend.Stack.End --------------------------------------------------");
        }
    };
    Legend.Size = function (pLegend, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Legends.Size * pLegend=" + JSON.stringify(pLegend));
        Ctl_1.Ctl.Size(pLegend);
    };
    return Legend;
}());
exports.Legend = Legend;
var ELegend;
(function (ELegend) {
    ELegend["Border_Black"] = "B";
    ELegend["Border_White"] = "W";
})(ELegend = exports.ELegend || (exports.ELegend = {}));
//# sourceMappingURL=Legend.js.map