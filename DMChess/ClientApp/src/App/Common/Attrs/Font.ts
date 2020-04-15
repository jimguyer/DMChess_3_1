import { Attrs } from '../../Common/Attrs/Attrs';
import { ICtl } from '../../Common/Comps/Ctl/Ctl';
import { Util } from '../../Common/Modules/Util';
import { Color } from '../../Common/Attrs/Color';

export class Font {
    static Build(pCtl: ICtl, pAttrs: string = null, pCL: boolean = false) {
        if (pCL) {
            //console.log("Common/Attrs/Font * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Common/Attrs/Font * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //console.log("Common/Attrs/Font * pAttrs=" + pAttrs);
        }
        var parsed = Attrs.Parse(pAttrs, pCL);
        if (pCL) {
            //console.log("Common/Attrs/Font.Build * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
            //console.log("Common/Attrs/Font.Build * parsed.Alphas=" + JSON.stringify(parsed.Alphas));
            //console.log("Common/Attrs/Font.Build * parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
            //console.log("Common/Attrs/Font.Build * parsed.Nums=" + JSON.stringify(parsed.Nums));
            //console.log("Common/Attrs/Font.Build * parsed.Pascals.length=" + parsed.Pascals.length);
        }
        if (parsed.Nums[0] !== 0) pCtl.Size.F = parsed.Nums[0];

        for (var x = 0; x < parsed.Pascals.length; x++) {
            if (pCL) {
                //console.log("Common/Attrs/Font.for ------------------------------------------------------");
                //console.log("Common/Attrs/Font.for * parsed.Pascals[" + x + "]=" + parsed.Pascals[x]);
                //console.log("Common/Attrs/Font.for ------------------------------------------------------");
            }
            if (pCtl.Style["font-family"] === undefined) {
                pCtl.Style["font-family"] = this.GetFamily(parsed.Pascals[x], pCL);
                if (pCL) {
                    //console.log("Common/Attrs/Font.Color ffffffffffffffffffffffffffffffffffffffffffffffffffffff");
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-family]=" + pCtl.Style["font-family"]);
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-weight]=" + pCtl.Style["font-weight"]);
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-color]=" + pCtl.Style["font-color"]);
                    //console.log("Common/Attrs/Font.Color ffffffffffffffffffffffffffffffffffffffffffffffffffffff");
                }
                if (pCtl.Style["font-family"] !== undefined) continue;
            }
            if (pCtl.Style["font-weight"] === undefined) {
                pCtl.Style["font-weight"] = this.GetWeight(parsed.Pascals[x], pCL);
                if (pCL) {
                    //console.log("Common/Attrs/Font.Color wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-family]=" + pCtl.Style["font-family"]);
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-weight]=" + pCtl.Style["font-weight"]);
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-color]=" + pCtl.Style["font-color"]);
                    //console.log("Common/Attrs/Font.Color wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
                }
                if (pCtl.Style["font-weight"] !== undefined) continue;
            }
            if (pCtl.Style["color"] === undefined) {
                pCtl.Style["color"] = Color.Get(parsed.Pascals[x], pCL);
                if (pCL) {
                    //console.log("Common/Attrs/Font.Color cccccccccccccccccccccccccccccccccccccccccccccccccccccc");
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-family]=" + pCtl.Style["font-family"]);
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[font-weight]=" + pCtl.Style["font-weight"]);
                    //console.log("Common/Attrs/Font.Color * pCtl.Style[color]=" + pCtl.Style["color"]);
                    //console.log("Common/Attrs/Font.Color cccccccccccccccccccccccccccccccccccccccccccccccccccccc");
                }
                if (pCtl.Style["font-color"] !== undefined) continue;
            }
            //if (pCL) {
            //    //console.log("Common/Attrs/Font.Build_End * parsed.Pascals.length=" + parsed.Pascals.length);
            //    //console.log("Common/Attrs/Font.Build_End * pAttrs=" + pAttrs);
            //    //console.log("Common/Attrs/Font.Build_End * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
            //    //console.log("Common/Attrs/Font.Build_End * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //    //console.log("Common/Attrs/Font.Build_End * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //}
        }
        if (pCL) {
            //console.log("Common/Attrs/Font.Build.Font.Color ===============================================");
            //console.log("Common/Attrs/Font.Build_End * parsed.Pascals.length=" + parsed.Pascals.length);
            //console.log("Common/Attrs/Font.Build_End * pAttrs=" + pAttrs);
            //console.log("Common/Attrs/Font.Build_End * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
            //console.log("Common/Attrs/Font.Build_End * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Common/Attrs/Font.Build_End * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //console.log("Common/Attrs/Font.Build.Font.Color ===============================================");
        }
    }


    public static GetFamily(pFamily: string, pCL: boolean) {
        switch (pFamily) {
            case "Ar": case "Arial": return this.EGetFamily(EFontFamily.Arial, pCL);
            case "Ca": case "Calibri": return this.EGetFamily(EFontFamily.Calibri, pCL);
            case "Cn": case "CourierNew": case "Courier New": return this.EGetFamily(EFontFamily.CourierNew, pCL);
            case "Ge": case "Georgia": return this.EGetFamily(EFontFamily.Georgia, pCL);
            case "He": case "Helvetica": return this.EGetFamily(EFontFamily.Helvetica, pCL);
            case "Tnr": case "TimesNewRoman": case "Times New Roman": return this.EGetFamily(EFontFamily.TimesNewRoman, pCL);
            case "Tre": case "Trebuchet": return this.EGetFamily(EFontFamily.Trebuchet, pCL);
            case "Ve": case "Verdana": return this.EGetFamily(EFontFamily.Verdana, pCL);
        }
    }

    public static EGetFamily(pFamily: EFontFamily, pCL: boolean) {
        switch (pFamily) {
            case EFontFamily.Arial: return "Arial";
            case EFontFamily.Calibri: return "Calibri";
            case EFontFamily.CourierNew: return "Courier New";
            case EFontFamily.Georgia: return "Georgia";
            case EFontFamily.Helvetica: return "Helvetica";
            case EFontFamily.TimesNewRoman: return "Times New Roman";
            case EFontFamily.Trebuchet: return "Trebuchet";
            case EFontFamily.Verdana: return "Verdana";
        }
    }
    public static GetWeight(pWeight: string, pCL: boolean) {
        switch (pWeight.toLowerCase()) {
            default: return;
            case "b": case "bold": return this.EGetWeight(EFontWeight.Bold, pCL);
            case "inh": case "inherit": return this.EGetWeight(EFontWeight.Inherit, pCL);
            case "int": case "initial": return this.EGetWeight(EFontWeight.Initial, pCL);
            case "n": case "normal": return this.EGetWeight(EFontWeight.Normal, pCL);
        }
    }
    public static EGetWeight(pWeight: EFontWeight, pCL?: boolean) {
        switch (pWeight) {
            case EFontWeight.Bold: return "bold";
            case EFontWeight.Inherit: return "inherit";
            case EFontWeight.Initial: return "initial";
            case EFontWeight.Normal: return "normal";
        }
    }
}
export enum ECFontFamily { DomesticUncial = "DomesticUncial" }
export enum EFontFamily { Arial = "Arial", Calibri = "Calibri", CourierNew = "CourierNew", Georgia = "Georgia", Helvetica = "Helvetica", TimesNewRoman = "TimesNewRoman", Trebuchet = "Trebuchet", Verdana = "Verdana" }
export enum EFontWeight { Bold = "Bold", Inherit = "Inherit", Initial = "Initial", Normal = "Normal" }
