import { Dft } from '../../Main/Shared/Modules/Default';
import { ECtl, IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Label {

  public static Inits(pALabels: Array<IALabel>, pCL: boolean = false) {
    var labels: Array<Label> = [];
    pALabels.forEach(x => { labels.push(this.Init(x, pCL)); });
    return labels;
  }

  public static Init(pALabel: IALabel, pCL: boolean = false) {
    //console.log("Label.Init * pALabel=" + JSON.stringify(pALabel));
    if (pCL) {
      //console.log("Common/Ctls/Label.Init * pALabel=" + JSON.stringify(pALabel));
    }
    var aDft: IACtl;
    switch (pALabel.Type) {
      case ELabel.Banner: aDft = Dft.ALabel.Banner; break;
      case ELabel.Msg: aDft = Dft.ALabel.Msg; break;
      case ELabel.LowerLeft: aDft = Dft.ALabel.LowerLeft; break;
      case ELabel.LowerLeft2: aDft = Dft.ALabel.LowerLeft2; break;
      case ELabel.Inner: aDft = Dft.ALabel.Inner; break;
      case ELabel.TALeft: aDft = Dft.ALabel.TALeft; break;
      case ELabel.TACenter: aDft = Dft.ALabel.TACenter; break;
      case ELabel.TARight: aDft = Dft.ALabel.TARight; break;
    }
    //pALabel.Bg = "Yellow";
    var label = Ctl.Init(pALabel, aDft, pCL);
    if (pCL) {
      //console.log("Common/Ctls/Label.Init.End * pALabel=" + JSON.stringify(pALabel));
      //console.log("Common/Ctls/Label.Init.End * label=" + JSON.stringify(label));
    }
    label.CtlType = ECtl.Label;
    return label;
  }
  public static Stacks(pLabels: Array<ILabel>, pSize: ISize = null, pCL: boolean = false) {
    if (pCL) {
      //console.log("Labels.Stack * pSize.Y=" + pSize.Y);
      //console.log("Labels.Stack ------------------------------------------");
    }
    var size: ISize = { Y: pSize.Y };
    pLabels.forEach(
      x => {
        x.Size.Y = size.Y;
        Label.Stack(x, size, pCL);
        size.Y = x.Size.NextY;
      }
    )
    return pLabels;
  }

  static Stack(pLabel: ILabel, pSize: ISize, pCL: boolean = false) {
    pLabel.Size.Y = pSize.Y;
    var gapY = pSize.GapY !== undefined ? pSize.GapY : Dft.GapY;
    pLabel.Size.NextY = pLabel.Size.Y + pLabel.Size.H + gapY;
    if (pCL) {
      //console.log("Labels.Stack * pSize.Y=" + pSize.Y + " * pSize.GapY=" + pSize.GapY);
      //console.log("");
      //console.log("Labels.Stack.End * pLabel.Size.H=" + pLabel.Size.H + " * gapY=" + gapY);
      //console.log("Labels.Stack.End * pLabel.Size.Y=" + pLabel.Size.Y + " * pLabel.Size.NextY=" + pLabel.Size.NextY);
      //console.log("Labels.Stack.End ================================================================================");
    }

  }
  public static Size(pLabel: ILabel, pCL: boolean = false) {
    return Ctl.Size(pLabel);
  }
  public static Sizes(pLabels: Array<ILabel>, pCL: boolean = false) {
    return Ctl.Sizes(pLabels);
  }
}
export enum ELabel { Banner = "B", BigMsg = "BM", Msg = "M", Inner = "I", LowerLeft = "LL", LowerLeft2 = "LL2",  TALeft = "TAL", TACenter = "TAC", TARight = "TAR" }
export interface IALabel extends IACtl { Type?: ELabel }
export interface ILabel extends ICtl { }

