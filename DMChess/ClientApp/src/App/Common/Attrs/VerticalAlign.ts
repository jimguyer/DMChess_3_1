import { ICtl } from '../../Common/Comps/Ctl/Ctl';
export class VertAlign {
  public static Get(pTextAlign: string, pCL: boolean) {
    switch (pTextAlign.toLowerCase()) {
      case "t": case "top": return this.EGet(EVertAlign.Top, pCL);
      case "m": case "middle": return this.EGet(EVertAlign.Middle, pCL);
      case "b": case "bottom": return this.EGet(EVertAlign.Bottom, pCL);
    }
  }
  public static EGet(pVertAlign: EVertAlign, pCL: boolean) {
    switch (pVertAlign) {
      case EVertAlign.Top: return "top";
      case EVertAlign.Middle: return "middle";
      case EVertAlign.Bottom: return "bottom";
    }
  }
}
export enum EVertAlign {
  Center = "Center",
  Baseline = "Baseline",
  Top = "Top",
  Super = "Super",
  Middle = "Middle",
  Bottom = "Bottom",
  TextBottom = "Text-Bottom"
}
