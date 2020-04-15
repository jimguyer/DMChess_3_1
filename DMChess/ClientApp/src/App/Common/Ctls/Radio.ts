import { Dft } from '../../Main/Shared/Modules/Default';
import { ECtl, IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';


export class Radio {

  public static Inits(pARadios: Array<IARadio>, pCL: boolean = false) {
    var buttons: Array<Radio> = [];
    pARadios.forEach(x => { buttons.push(this.Init(x, pCL)); });
    return buttons;
  }

  public static Init(pARadio: IARadio, pCL: boolean = false) {
    var dft: IACtl;
    switch (pARadio.Type) {
      case ERadio.Left: dft = Dft.ARadio.Left;
      case ERadio.Right: dft = Dft.ARadio.Right;
    }
    var radio = Ctl.Init(pARadio, dft, pCL);
    radio.CtlType = ECtl.Radio;
    return radio;
  }
  static Stack(pRadio: IRadio, pY: number, pGapY: number = Dft.GapY, pCL: boolean = false) {
    //console.log("Radios.Stack * pRadio=" + JSON.stringify(pRadio));
    //console.log("Radios.Stack * pY=" + pY);
    //console.log("Radio.Stack * pGapY=" + pGapY);
    //console.log("Radio.Stack * Dft.AdjustS=" + Dft.AdjustS);
    pRadio.Size.Y = pY;
    pRadio.NextY = pY + pRadio.Size.H + pGapY;
    if (pCL) {
      //console.log("Radio.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
      //console.log("Radio.Stack * pRadio.Size=" + JSON.stringify(pRadio.Size));
      //console.log("Radio.Stack * pRadio.Size.Y=" + JSON.stringify(pRadio.Size.Y)) + " * pRadio.Size.H=" + JSON.stringify(pRadio.Size.H);

      //console.log("Radio.Stack * pRadio.Size.H=" + pRadio.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
      //console.log("Radio.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
      //console.log("Radio.Stack * pRadio.NextY=" + pRadio.NextY);
    }
    //console.log("Radio.Stack * pRadio.Size.Y=" + pRadio.Size.Y);
    //console.log("Radio.Stack * pRadio.Size=" + JSON.stringify(pRadio.Size));
  }
}
export enum ERadio { Left = "L", Right = "R" }
export interface IARadio extends IACtl { Type?: ERadio }
export interface IRadio extends ICtl { }

