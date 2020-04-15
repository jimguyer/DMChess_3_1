import { Dft } from '../../Main/Shared/Modules/Default';

export class Win {
  public static CellPX: number;
  public static LeftPX: number;
  public static CenterPX: number;
  public static MiddlePX: number;
  public static AdjustPX: number;
  public static BorderPX: number;
  public static FontPX: number;


  public static Init() {
  }
  public static Measure() {
    //console.log("Window.Measure");
    var leftMarginMult = .2, rightMarginMult = .2;
    var colPX = window.innerWidth / Dft.Cols; var rowPX = window.innerHeight / Dft.Rows;
    var squarePX = colPX < rowPX ? colPX : rowPX;
    var squaresCPX = Dft.Cols * squarePX;
    var leftMarginMinPX = squarePX * leftMarginMult, rightMarginMinPX = squarePX * rightMarginMult;
    var cellsWPX = window.innerWidth - squaresCPX > leftMarginMinPX + rightMarginMinPX ?
      squaresCPX : squaresCPX - (leftMarginMinPX + rightMarginMinPX);
    var leftMarginPX = cellsWPX == squaresCPX ? 0 : leftMarginMinPX;

    Win.CellPX = cellsWPX / Dft.Cols;
    Win.LeftPX = (window.innerWidth - squaresCPX) / 2 + leftMarginPX;
    Win.CenterPX = window.innerWidth / 2 + (leftMarginPX - rightMarginMinPX);
    Win.MiddlePX = Dft.Rows * Win.CellPX / 2;

    Win.BorderPX = Win.CellPX * Dft.BorderMult;
    Win.FontPX = Win.CellPX * Dft.FontMult;
  }
}
