import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Icon {
    public static Init(pAIcon: IAIcon, pCL: boolean = false) {
        switch (pAIcon.Type) {
            case EIcon.Audio: break;
            case EIcon.Bug: break;
            case EIcon.Copy: break;
        }
        var img = Ctl.Init(pAIcon, null, pCL);
        return img;
    }
    static Stack(pIcon: IIcon, pSize: ISize, pCL: boolean = false) {
        //console.log("Icons.Stack * pIcon=" + JSON.stringify(pIcon));
        //console.log("Icons.Stack * pY=" + pY);
        //console.log("Icon.Stack * pGapY=" + pGapY);
        //console.log("Icon.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pIcon.Size.Y = pSize.Y;
        pIcon.NextY = pSize.Y + pSize.H + pSize.GapY;
        if (pCL) {
            //console.log("Icon.Stack * pIcon.Y=" + JSON.stringify(pIcon.Y));
            //console.log("Icon.Stack * pIcon.Size=" + JSON.stringify(pIcon.Size));
            //console.log("Icon.Stack * pIcon.Size.Y=" + JSON.stringify(pIcon.Size.Y)) + " * pIcon.Size.H=" + JSON.stringify(pIcon.Size.H);

            //console.log("Icon.Stack * pIcon.Size.H=" + pIcon.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Icon.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Icon.Stack * pIcon.NextY=" + pIcon.NextY);
        }
        //console.log("Icon.Stack * pIcon.Size.Y=" + pIcon.Size.Y);
        //console.log("Icon.Stack * pIcon.Size=" + JSON.stringify(pIcon.Size));
    }
    public static Sizes(pIcons: Array<IIcon>) { Ctl.Sizes(pIcons); }
    public static Size(pIcon: IIcon, pCL: boolean = false) { Ctl.Size(pIcon, pCL); }
}
export enum EIcon {
  Audio = "A", Bug = "B", Clock = "Cl", Copy = "Co", Down = "D", Exit = "E", First = "Fi", Flip = "Fl", Last = "La", Left = "Le",
  Minus = "M", Next = "N", Off = "Of", On = "On", Overlay = "Ov", Plus = "Pl", Prev = "Pr", Resign = "Re",
  Right = "Ri", RotateLeft = "RL", RotateRight = "RL", Save = "Sa", Start = "St", Up = "Up"
}
export interface IAIcon extends IACtl { Type?: EIcon }
export interface IIcon extends ICtl { }
