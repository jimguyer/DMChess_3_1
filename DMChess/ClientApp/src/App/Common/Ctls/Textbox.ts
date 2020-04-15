import { Dft } from '../../Main/Shared/Modules/Default';
import { ECtl, IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Textbox {

  public static Inits(pATextboxs: Array<IATextbox>, pCL: boolean = false) {
    var Textboxs: Array<Textbox> = [];
    pATextboxs.forEach(x => { Textboxs.push(this.Init(x, pCL)); });
    return Textboxs;
  }

  public static Init(pATextbox: IATextbox, pCL: boolean = false) {
    var dft: IACtl;
    switch (pATextbox.Type) {
      case ETextbox.Center: dft = Dft.ATextbox.Center; break;
      case ETextbox.Left: dft = Dft.ATextbox.Left; break;
      case ETextbox.Right: dft = Dft.ATextbox.Right; break;
    }
    var textbox = Ctl.Init(pATextbox, dft, pCL);
    textbox.CtlType = ECtl.Textbox;
    return textbox;
  }
  public static Stacks(pTextboxs: Array<ITextbox>, pSize: ISize = null, pCL: boolean = false) {
    return pTextboxs;
  }

  static Stack(pTextbox: ITextbox, pSize: ISize, pCL: boolean = false) {
    //console.log("Textboxs.Stack * pTextbox=" + JSON.stringify(pTextbox));
    //console.log("Textboxs.Stack * pY=" + pY);
    //console.log("Textbox.Stack * pGapY=" + pGapY);
    pTextbox.Size.Y = pSize.Y;
    pTextbox.NextY = pSize.Y + pTextbox.Size.H + pSize.GapY;
    if (pCL) {
      //console.log("Line.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
      //console.log("Line.Stack * pTextbox.Size=" + JSON.stringify(pTextbox.Size));
      //console.log("Line.Stack * pTextbox.Size.Y=" + JSON.stringify(pTextbox.Size.Y)) + " * pTextbox.Size.H=" + JSON.stringify(pTextbox.Size.H);

      //console.log("Line.Stack * pTextbox.Size.H=" + pTextbox.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
      //console.log("Line.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
      //console.log("Line.Stack * pTextbox.NextY=" + pTextbox.NextY);
    }
    //console.log("Line.Stack * pTextbox.Size.Y=" + pTextbox.Size.Y);
    //console.log("Line.Stack * pTextbox.Size=" + JSON.stringify(pTextbox.Size));
  }
  static Size(pTextbox: ITextbox, pCL: boolean = false) {
    Ctl.Size(pTextbox);
  }
}
export enum ETextbox { Center = "C", Left = "L", Right = "R", }
export interface IATextbox extends IACtl { Type?: ETextbox }
export interface ITextbox extends ICtl { }

