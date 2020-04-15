import { ICtl } from '../../Common/Comps/Ctl/Ctl';
export class TextAlign {
    public static Get(pTextAlign: string, pCL: boolean) {
        switch (pTextAlign.toLowerCase()) {
            case "c": case "center": return this.EGet(ETextAlign.Center, pCL);
            case "l": case "left": return this.EGet(ETextAlign.Left, pCL);
            case "r": case "right": return this.EGet(ETextAlign.Right, pCL);
        }
    }
    public static EGet(pTextAlign: ETextAlign, pCL: boolean) {
        switch (pTextAlign) {
            case ETextAlign.Center: return "center";
            case ETextAlign.Left: return "left";
            case ETextAlign.Right: return "right";
        }
    }
}
export enum ETextAlign { Center = "Center", Left = "Left", Right = "Right" }
