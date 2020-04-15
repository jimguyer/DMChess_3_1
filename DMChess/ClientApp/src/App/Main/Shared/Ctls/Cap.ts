import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IPlace, ISize } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';


export class Cap {
    public static Init(pACap: IACap, pCL: boolean = false) {
        //console.log("Cap.Init * pACap=" + JSON.stringify(pACap));
        var Cap: ICap = { Size: { X: pACap.X, Y: pACap.Y, W: Dft.ABoard.Pos.W, H: Dft.ABoard.Pos.H }, Places: pACap.Places }
        switch (pACap.Type) {
            case ECap.Black: Cap.Src = Dft.Src.Board.Pos.CapBlack; break;
            case ECap.White: Cap.Src = Dft.Src.Board.Pos.CapWhite; break;
        }
        return Cap;
    }
    static Stack(pCap: ICap, pSize: ISize, pCL: boolean = false) {
        pCap.Size.Y = pSize.Y;
        pCap.NextY = pSize.Y + pSize.H + pSize.GapY;
    }
    static Sizes(pCaps: Array<ICap>) { Ctl.Sizes(pCaps); }
    static Size(pCap: ICap) { Ctl.Size(pCap); }
}

export interface IACap extends IACtl { Type: ECap, Places?: Array<IPlace> }
export interface ICap extends ICtl { Type?: ECap, Places?: Array<IPlace> }
export enum ECap { Black = "B", White = "W" }
