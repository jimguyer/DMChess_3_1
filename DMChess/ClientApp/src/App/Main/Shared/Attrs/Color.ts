export class Color {
    public static Get(pColor: string, pCL: boolean = false) {
        if (pCL) {
            //console.log("Main/Shared/Color.Get * pColor=" + pColor);
        }
        switch (pColor.toLowerCase()) {
            default: return;
            case "coshadow": case "cob":return this.EGet(EColor.Shadow, pCL);
            case "coback": case "cob":return this.EGet(EColor.Back, pCL);
            case "cofore": case "cob":return this.EGet(EColor.Fore, pCL);
            case "cohigh": case "cob":return this.EGet(EColor.High, pCL);
        }
    }
    public static EGet(pEColor: EColor, pCL: boolean = false) {
        if (pCL) {
            //console.log("CColor.Get * pECColor=" + pECColor);
        }
        switch (pEColor) {
            default: return;
            case EColor.Shadow: return "rgb(215, 215, 135)";
            case EColor.Back: return "rgb(225, 225, 145)";
            case EColor.Fore: return "rgb(235, 235, 160)";
            case EColor.High: return "rgb(255, 255, 200)";
        }
    }
}
export enum EColor { Back = "B", Fore = "F", High = "H", Shadow = "S" }

