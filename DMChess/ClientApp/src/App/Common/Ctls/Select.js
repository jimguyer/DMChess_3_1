"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Ctl_1 = require("../../Common/Comps/Ctl/Ctl");
var Select = /** @class */ (function () {
    function Select() {
    }
    Select.Init = function (pASelect, pCL) {
        if (pCL === void 0) { pCL = false; }
        //switch (pASelect.Type) {
        //    case ESelect.Generic: break;
        //    case ESelect.Raw: break;
        //    case ESelect.Crop: break;
        //    case ESelect.Square: break;
        //}
        var select = Ctl_1.Ctl.Init(pASelect, Default_1.Dft.ASelect.Center, pCL);
        select.CtlType = Ctl_1.ECtl.Select;
        return select;
    };
    Select.Stack = function (pSelect, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Select.Stack * pSelect=" + JSON.stringify(pSelect));
        //console.log("Select.Stack * pY=" + pY);
        //console.log("Select.Stack * pGapY=" + pGapY);
        //console.log("Select.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pSelect.Size.Y = pSize.Y;
        pSelect.NextY = pSize.Y + pSize.H + pSize.GapY;
        if (pCL) {
            //console.log("Select.Stack * pSelect.Y=" + JSON.stringify(pSelect.Y));
            //console.log("Select.Stack * pSelect.Size=" + JSON.stringify(pSelect.Size));
            //console.log("Select.Stack * pSelect.Size.Y=" + JSON.stringify(pSelect.Size.Y)) + " * pSelect.Size.H=" + JSON.stringify(pSelect.Size.H);
            //console.log("Select.Stack * pSelect.Size.H=" + pSelect.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Select.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Select.Stack * pSelect.NextY=" + pSelect.NextY);
        }
        //console.log("Select.Stack * pSelect.Size.Y=" + pSelect.Size.Y);
        //console.log("Select.Stack * pSelect.Size=" + JSON.stringify(pSelect.Size));
    };
    Select.Sizes = function (pSelects, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Sizes(pSelects);
    };
    Select.Size = function (pSelect, pCL) {
        if (pCL === void 0) { pCL = false; }
        Ctl_1.Ctl.Size(pSelect);
    };
    return Select;
}());
exports.Select = Select;
var ESelect;
(function (ESelect) {
    ESelect["Center"] = "C";
    ESelect["Left"] = "L";
    ESelect["Right"] = "R";
})(ESelect = exports.ESelect || (exports.ESelect = {}));
//# sourceMappingURL=Select.js.map