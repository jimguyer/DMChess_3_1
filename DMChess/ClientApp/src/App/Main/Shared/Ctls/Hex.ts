import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IPlace, ISize } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';

export class Hex {
    public static Init(pAHex: IAHex, pCL: boolean = false) {
        var hex: IHex = { Size: { X: pAHex.X, Y: pAHex.Y, Z: Dft.ABoard.Pos.Z, W: Dft.ABoard.Pos.W, H: Dft.ABoard.Pos.H }, Places: pAHex.Places }
        switch (pAHex.Type) {
            case EHex.Black: hex.Src = Dft.ABoard.Hex.Black.Src; hex.SrcOn = Dft.ABoard.Hex.Black.SrcOn; break;
            case EHex.Red: hex.Src = Dft.ABoard.Hex.Red.Src; hex.SrcOn = Dft.ABoard.Hex.Red.SrcOn; break;
            case EHex.White: hex.Src = Dft.ABoard.Hex.White.Src; hex.SrcOn = Dft.ABoard.Hex.White.SrcOn; break;
        }
        return hex;
    }
    static Stack(pHex: IHex, pSize: ISize, pCL: boolean = false) {
        pHex.Size.Y = pSize.Y;
        pHex.NextY = pSize.Y + pSize.H + pSize.GapY;
    }
    public static Sizes(pHexs: Array<IHex>) { Ctl.Sizes(pHexs); }
    public static Size(pHex: IHex) { Ctl.Size(pHex); }
}

export interface IAHex extends IACtl { Type: EHex, Places?: Array<IPlace> }
export interface IHex extends ICtl { Type?: EHex, Places?: Array<IPlace> }
export enum EHex { Black = "B", White = "W", Red = "R" }
