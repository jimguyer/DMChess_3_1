"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = require("../../Main/Shared/Modules/Default");
var Win = /** @class */ (function () {
    function Win() {
    }
    Win.Init = function () {
    };
    Win.Measure = function () {
        //console.log("Window.Measure");
        var leftMarginMult = .2, rightMarginMult = .2;
        var colPX = window.innerWidth / Default_1.Dft.Cols;
        var rowPX = window.innerHeight / Default_1.Dft.Rows;
        var squarePX = colPX < rowPX ? colPX : rowPX;
        var squaresCPX = Default_1.Dft.Cols * squarePX;
        var leftMarginMinPX = squarePX * leftMarginMult, rightMarginMinPX = squarePX * rightMarginMult;
        var cellsWPX = window.innerWidth - squaresCPX > leftMarginMinPX + rightMarginMinPX ?
            squaresCPX : squaresCPX - (leftMarginMinPX + rightMarginMinPX);
        var leftMarginPX = cellsWPX == squaresCPX ? 0 : leftMarginMinPX;
        Win.CellPX = cellsWPX / Default_1.Dft.Cols;
        Win.LeftPX = (window.innerWidth - squaresCPX) / 2 + leftMarginPX;
        Win.CenterPX = window.innerWidth / 2 + (leftMarginPX - rightMarginMinPX);
        Win.MiddlePX = Default_1.Dft.Rows * Win.CellPX / 2;
        Win.BorderPX = Win.CellPX * Default_1.Dft.BorderMult;
        Win.FontPX = Win.CellPX * Default_1.Dft.FontMult;
    };
    return Win;
}());
exports.Win = Win;
//# sourceMappingURL=Win.js.map