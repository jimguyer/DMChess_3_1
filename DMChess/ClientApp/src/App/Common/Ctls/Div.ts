import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Div {

  public static Init(pADiv: IADiv, pCL: boolean = false) {
    if (pCL) {
      //console.log("Div.Init * pADiv=" + JSON.stringify(pADiv));
    }
    var dft: IACtl;
    switch (pADiv.Type) {
      case EDiv.Border_Black: dft = Dft.ADiv.Border_Black; break;
      case EDiv.Hdr: dft = Dft.ADiv.Hdr; break;
      case EDiv.Left: dft = Dft.ADiv.Left; break;
      case EDiv.Center: dft = Dft.ADiv.Center; break;
      case EDiv.Right: dft = Dft.ADiv.Right; break;
    }
    var div: IDiv = Ctl.Init(pADiv, dft, pCL);
    if (pCL) {
      //console.log("Div.Init.End * pADiv=" + JSON.stringify(pADiv));
      //console.log("Div.Init.End * dft=" + JSON.stringify(dft));
      //console.log("Div.Init.End * div.Size.X=" + div.Size.X + " * Y=" + div.Size.X + " * W=" + div.Size.W + " * H=" + div.Size.H);
      //console.log("Div.Init.End * div.Size=" + JSON.stringify(div.Size));
      //console.log("Div.Init.End * div.Style=" + JSON.stringify(div.Style));

      //console.log("Div.Init.End * pADiv=" + JSON.stringify(pADiv.H));
      //console.log("Div.Init.End * dft=" + JSON.stringify(dft.H));
      //console.log("Div.Init.End * div.Size=" + JSON.stringify(div.Size.H));
      //console.log("Div.Init.End -------------------------------------");
    }
    return div;
  }
  static Stack(pDiv: IDiv, pSize: ISize, pCL: boolean = false) { Ctl.Stack(pDiv, pSize, pCL); }
  static Bottom(pDiv: IDiv, pSize: ISize, pCL: boolean = false) { Ctl.Bottom(pDiv, pSize, pCL); }
  static Size(pDiv: IDiv, pCL: boolean = false) { Ctl.Size(pDiv, pCL); }
}

export enum EDiv { Hdr = "H", Left = "L", Center = "C", Right = "R", Border_Black = "B", Border_White = "W" }
export interface IADiv extends IACtl { Type?: EDiv }
export interface IDiv extends ICtl { }

