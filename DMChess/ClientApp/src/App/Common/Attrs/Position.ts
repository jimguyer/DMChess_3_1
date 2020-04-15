import { ICtl } from '../../Common/Comps/Ctl/Ctl';

export class Position {
    public static Get(pPosition: string, pCL: boolean) {
        switch (pPosition.toLowerCase()) {
            case "a": case "absolute": return this.EGet(EPosition.Absolute, pCL);
            case "f": case "fixed": return this.EGet(EPosition.Fixed, pCL);
            case "r": case "relative": return this.EGet(EPosition.Relative, pCL);
            case "s": case "sticky": return this.EGet(EPosition.Sticky, pCL);
            case "x": case "none": return this.EGet(EPosition.None, pCL);
        }
    }
    public static EGet(pPosition: EPosition, pCL: boolean) {
        switch (pPosition) {
            case EPosition.Absolute: return "absolute";
            case EPosition.Fixed: return "fixed";
            case EPosition.Relative: return "relative";
            case EPosition.Sticky: return "sticky";
            case EPosition.None: return null;
        }
    }
}
export enum EPosition { Absolute = "Absolute", Fixed = "Fixed", Relative = "Relative", Sticky = "Sticky", None = "X" }
