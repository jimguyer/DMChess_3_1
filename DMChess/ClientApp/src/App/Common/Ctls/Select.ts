import { Dft } from '../../Main/Shared/Modules/Default';
import { ECtl, IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Select {
  public static Init(pASelect: IASelect, pCL: boolean = false) {
    //switch (pASelect.Type) {
    //    case ESelect.Generic: break;
    //    case ESelect.Raw: break;
    //    case ESelect.Crop: break;
    //    case ESelect.Square: break;
    //}
    var select = Ctl.Init(pASelect, Dft.ASelect.Center, pCL);
    select.CtlType = ECtl.Select;
    return select;
  }
  static Stack(pSelect: ISelect, pSize: ISize, pCL: boolean = false) {
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
  }
  public static Sizes(pSelects: Array<ISelect>, pCL: boolean = false) { Ctl.Sizes(pSelects); }
  public static Size(pSelect: ISelect, pCL: boolean = false) { Ctl.Size(pSelect); }
}
export enum ESelect { Center = "C", Left = "L", Right = "R" }
export interface IASelect extends IACtl { Type?: ESelect }
export interface ISelect extends ICtl { }
