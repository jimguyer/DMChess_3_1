import { Attrs } from '../../Common/Attrs/Attrs';
import { ICtl } from '../../Common/Comps/Ctl/Ctl';
import { Util } from '../../Common/Modules/Util';

export class Margin {
    static Build(pCtl: ICtl, pAttrs: string = null, pCL: boolean = false) {
        if (pCL) {
            //console.log("StyleSvc.Margin * pACtl.M=" + pACtl.M);
            //console.log("Style.Margin * pACtl=" + JSON.stringify(pACtl));
            //console.log("Style.Margin * pCtl.Size=" + JSON.stringify(pCtl.Size));
            //console.log("Style.Margin * pCtl.Style=" + JSON.stringify(pCtl.Style));
            //console.log("Style.Margin * pACtl.M=" + pACtl.M);
        }
        var sides: Array<string> = [], sizes: Array<any> = [];

        if (pAttrs === null) return "0px"
        else {

            var parsed = Attrs.Parse(pAttrs, pCL);
            if (pCL) {
                //console.log("Control.Margin * pACtl.F=" + pACtl.M);
                //console.log("Control.Margin * parsed.Pascals=" + JSON.stringify(parsed.Pascals));
                //console.log("Control.Margin * parsed.Alphas=" + JSON.stringify(parsed.Alphas));
                //console.log("Control.Margin * parsed.AlphaNums=" + JSON.stringify(parsed.AlphaNums));
                //console.log("Control.Margin * parsed.Nums=" + JSON.stringify(parsed.Nums));
            }

            for (x = 0; x < parsed.Pascals.length; x++) {
                if (sides.length < 4 && Util.IsSide(parsed.Pascals[x], pCL)) { sides.push(parsed.Pascals[x]); continue; }
                if (parsed.Pascals[x].toLowerCase().substr(0, 1) === "a" || parsed.Pascals[x].toLowerCase().substr(0, 1) === "auto") { sizes.push("a"); pCtl.Style.display = "block"; continue }
                if (Util.IsNum(parsed.Pascals[x])) sizes.push(Util.IsNum(parsed.Pascals[x]));
            }
            if (sides.length === 0) {
                switch (sizes.length) {
                    case 0: pCtl.Size.M = 0; break;
                    case 1: if (sizes[0] === "a") { pCtl.Style["margin-left"] = "auto"; pCtl.Style["margin-right"] = "auto" } else pCtl.Size.M = sizes[0]; break;
                    case 2:
                        if (sizes[0] === "a" && sizes[1] === "a") pCtl.Style["margin"] = "auto";
                        else if (sizes[0] === "a") { pCtl.Style["margin-top"] = "auto"; pCtl.Style["margin-bottom"] = "auto"; pCtl.Size.ML = +sizes[0]; pCtl.Size.MR = +sizes[0] }
                        else { pCtl.Style["margin-left"] = "auto"; pCtl.Style["margin-right"] = "auto"; pCtl.Size.MT = +sizes[0]; pCtl.Size.MB = +sizes[0] }
                }
            }
            else {
                for (var x = 1; x < sides.length; x++) {
                    switch (sides[x]) {
                        case "T": if (x < sizes.length) { if (sizes[x] === "a") pCtl.Style["margin-top"] = "auto"; else pCtl.Size.MT = +sizes[x]; } break;
                        case "R": if (x < sizes.length) { if (sizes[x] === "a") pCtl.Style["margin-right"] = "auto"; else pCtl.Size.MR = +sizes[x]; } break;
                        case "B": if (x < sizes.length) { if (sizes[x] === "a") pCtl.Style["margin-bottom"] = "auto"; else pCtl.Size.MB = +sizes[x]; } break;
                        case "L": if (x < sizes.length) { if (sizes[x] === "a") pCtl.Style["margin-left"] = "auto"; else pCtl.Size.ML = +sizes[x]; } break;
                    }
                }
            }
        }
    }
}
