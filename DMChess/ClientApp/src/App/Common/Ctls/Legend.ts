import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Legend {
  public static Init(pALegend: IALegend, pCL: boolean = false) {
    //console.log("Legend.Init * pALegend=" + JSON.stringify(pALegend));
    if (pCL) {
      //console.log("Legend.Init * pALegend=" + JSON.stringify(pALegend));
      //console.log("Legend.Init * pFirstGapY=" + pFirstGapY);
      //console.log("Legend.Init * pNextGapY=" + pNextGapY);
    }
    var dft: IALegend = null;
    switch (pALegend.Type) {
      default:
      case ELegend.Border_Black: dft = Dft.ALegend.Tab; break;
      case ELegend.Border_White: dft = Dft.ALegend.NoTab; break;
    }
    if (pALegend.Value === undefined) pALegend.Value = "Loading....";
    var legend = Ctl.Init(pALegend, dft, pCL);
    legend.Show = true;
    return legend;
  }
  static Stack(pLegend: ILegend, pSize: ISize, pCL: boolean = false) {
    if (pCL) {
      //console.log("Legends.Stack * pLegend=" + JSON.stringify(pLegend));
      //console.log("Legends.Stack * pSize=" + JSON.stringify(pSize));
      //console.log("Legends.Stack * pSize.Y=" + pSize.Y + " * GapY=" + pSize.GapY + " * H=" + pLegend.Size.H );
      //console.log("Legends.Stack * pLegend.Size.H=" + pLegend.Size.H);
    }
    var gapY = pSize !== undefined && pSize.GapY !== undefined && pSize.GapY !== null ? pSize.GapY : Dft.GapY
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
  }
  static Size(pLegend: ILegend,  pCL: boolean = false) {
    //console.log("Legends.Size * pLegend=" + JSON.stringify(pLegend));
    Ctl.Size(pLegend);
  }
}
export enum ELegend { Border_Black = "B", Border_White = "W" }
export interface IALegend extends IACtl { Type?: ELegend }
export interface ILegend extends ICtl { }

