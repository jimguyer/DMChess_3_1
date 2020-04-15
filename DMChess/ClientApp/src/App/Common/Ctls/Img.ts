import { Dft } from '../../Main/Shared/Modules/Default';
import { ECtl, IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Img {
  public static Init(pAImg: IAImg, pCL: boolean = false) {
    if (pCL) {
      //console.log("Img.Init * pImg=" + JSON.stringify(pAImg));
    }
    var dft: IACtl;
    switch (pAImg.Type) {
      case EImg.Background: dft = Dft.AImg.Background; break;
      case EImg.Generic: dft = Dft.AImg.Generic; break;
      case EImg.Hdr: dft = Dft.AImg.Hdr; break;
      case EImg.IconL: dft = Dft.AImg.IconL; break;
      case EImg.IconR: dft = Dft.AImg.IconR; break;
      case EImg.Logo: dft = Dft.AImg.Logo; break;
      case EImg.Raw: dft = Dft.AImg.Raw; break;
      case EImg.Crop: dft = Dft.AImg.Crop; break;
      case EImg.Square: dft = Dft.AImg.Square; break;
    }
    var img = Ctl.Init(pAImg, dft, pCL);
    img.CtlType = ECtl.Img;
    if (pCL) {
      //console.log("Img.Init.End * pAImg=" + JSON.stringify(pAImg));
      //console.log("Img.Init.End * dft=" + JSON.stringify(dft));
      //console.log("Img.Init.End * img=" + JSON.stringify(img));
      //console.log("Img.Init.End * ---------------------------------------");
    }
    return img;
  }
  static Stack(pImg: IImg, pSize: ISize, pCL: boolean = false) {
    //console.log("Img.Stack * pImg=" + JSON.stringify(pImg));
    //console.log("Img.Stack * pY=" + pY);
    //console.log("Img.Stack * pGapY=" + pGapY);
    //console.log("Img.Stack * Dft.AdjustS=" + Dft.AdjustS);
    pImg.Size.Y = pSize.Y;
    pImg.NextY = pSize.Y + pSize.H + pSize.GapY;
    if (pCL) {
      //console.log("Img.Stack * pImg.Y=" + JSON.stringify(pImg.Y));
      //console.log("Img.Stack * pImg.Size=" + JSON.stringify(pImg.Size));
      //console.log("Img.Stack * pImg.Size.Y=" + JSON.stringify(pImg.Size.Y)) + " * pImg.Size.H=" + JSON.stringify(pImg.Size.H);

      //console.log("Img.Stack * pImg.Size.H=" + pImg.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
      //console.log("Img.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
      //console.log("Img.Stack * pImg.NextY=" + pImg.NextY);
    }
    //console.log("Img.Stack * pImg.Size.Y=" + pImg.Size.Y);
    //console.log("Img.Stack * pImg.Size=" + JSON.stringify(pImg.Size));
  }
  public static Sizes(pImgs: Array<IImg>, pCL: boolean = false) { Ctl.Sizes(pImgs); }
  public static Size(pImg: IImg, pCL: boolean = false) { Ctl.Size(pImg); }
}
export enum EImg { Background = "BG", BigMsg = "BM", Border_None = "BN", Border_Black = "BB", Border_White = "BW", Hdr= "H", IconL = "IL", IconR = "IR", Generic = "G", Square = "S", Crop = "C", Raw = "R", Logo = "L"}
export interface IAImg extends IACtl { Type?: EImg }
export interface IImg extends ICtl { }
