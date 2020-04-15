import { ICtl } from '../../Common/Comps/Ctl/Ctl';
import { Win } from '../../Common/Modules/Win';

export class Size {


    static Copys(pControls, pFroms, pStart = 0, pCL = false) {
        for (var x = 0; x < pControls.length; x++) {
            //console.log("SizeSvc.ControlsCopy * x=" + x);
            var xFromIdx = x + pStart;
            if (pFroms.length <= xFromIdx) break;
            else {
                this.Copy(pControls[x], pFroms[xFromIdx]);
                if (pCL) {
                    //console.log(pControls[" + x + "] + ".Size=" + JSON.stringify(pControls[x].Size));
                    //console.log(pControls[" + x + "] + ".Style=" + JSON.stringify(pControls[x].Style));
                }
            }
        }
    }

    static Copy(pControl: ICtl, pDefault: ICtl, pCL = false) {
        //console.log("pControl=" + JSON.stringify(pControl));
        //console.log("pControl.Size=" + JSON.stringify(pControl.Size));
        //console.log("pControl.Style=" + JSON.stringify(pControl.Style));
        if (pControl === undefined || pControl === null) pControl = { Size: {} };
        if (pControl.Size === undefined || pControl.Size === null) pControl.Size = {};
        if (!pControl.Size.Y) pControl.Size.Y = pDefault.Size.Y;
        if (!pControl.Size.H) pControl.Size.H = pDefault.Size.H;
        if (!pControl.Size.GapX) pControl.Size.GapX = pDefault.Size.GapX;
        if (!pControl.Size.GapY) pControl.Size.GapY = pDefault.Size.GapY;
        if (!pControl.Size.NextY) pControl.Size.NextY = pDefault.Size.NextY;

        //if (!pControl.Size.L) pControl.Size.L = pDefault.Size.L;
        //if (!pControl.Size.R) pControl.Size.R = pDefault.Size.R;
        //if (!pControl.Size.X) pControl.Size.X = pDefault.Size.X;

        //if (!pControl.Size.Z) pControl.Size.Z = pDefault.Size.Z;
        //if (!pControl.Size.Places) pControl.Size.Places = pDefault.Size.Places;
        //if (!pControl.Size.W) pControl.Size.W = pDefault.Size.W;
        //if (!pControl.Size.H) pControl.Size.H = pDefault.Size.H;
        //if (!pControl.Size.S) pControl.Size.S = pDefault.Size.S;
        //if (!pControl.Size.GapX) pControl.Size.GapX = pDefault.Size.GapX;
        //if (!pControl.Size.GapY) pControl.Size.GapY = pDefault.Size.GapY;
        //if (!pControl.Size.NextY) pControl.Size.NextY = pDefault.Size.NextY;
        //if (!pControl.Size.WMax) pControl.Size.WMax = pDefault.Size.WMax;
        //if (!pControl.Size.HMax) pControl.Size.HMax = pDefault.Size.HMax;
        //if (!pControl.Size.SMax) pControl.Size.SMax = pDefault.Size.SMax;
        //if (!pControl.Size.WMin) pControl.Size.WMin = pDefault.Size.WMin;
        //if (!pControl.Size.HMin) pControl.Size.HMin = pDefault.Size.HMin;
        //if (!pControl.Size.SMin) pControl.Size.SMin = pDefault.Size.SMin;
  
        //if (!pControl.Size.M) pControl.Size.M = pDefault.Size.M;
        //if (!pControl.Size.MT) pControl.Size.MT = pDefault.Size.MT;
        //if (!pControl.Size.MR) pControl.Size.MR = pDefault.Size.MR;
        //if (!pControl.Size.MB) pControl.Size.MB = pDefault.Size.MB;
        //if (!pControl.Size.ML) pControl.Size.ML = pDefault.Size.ML;
        //if (!pControl.Size.P) pControl.Size.P = pDefault.Size.P;
        //if (!pControl.Size.PT) pControl.Size.PT = pDefault.Size.PT;
        //if (!pControl.Size.PR) pControl.Size.PR = pDefault.Size.PR;
        //if (!pControl.Size.PB) pControl.Size.PB = pDefault.Size.PB;
        //if (!pControl.Size.PL) pControl.Size.PL = pDefault.Size.PL;
    }
    static Default(pControl: ICtl, pDefault: ICtl, pCL = false) {
        //console.log("pControl=" + JSON.stringify(pControl));
        //console.log("pControl.Size=" + JSON.stringify(pControl.Size));
        //console.log("pControl.Style=" + JSON.stringify(pControl.Style));
        if (!pControl) { pControl = { Size: pDefault && pDefault.Size ? pDefault.Size : {} }; return; };
        if (!pControl.Size) { pControl.Size = pDefault ? pDefault.Size : {}; return; }
        //pControl.Size.L = pDefault.Size.L;
        //pControl.Size.R = pDefault.Size.R;
        pControl.Size.X = pDefault.Size.X;
        pControl.Size.Y = pDefault.Size.Y;
        pControl.Size.W = pDefault.Size.W;
        pControl.Size.H = pDefault.Size.H;
        pControl.Size.Places = pDefault.Size.Places;
    }

}
export interface IPlace { X?: any, Y?: any }
export interface IAFrame {
  L?: any, T?: any, R?: any, B?: any,
  X?: any, Y?: any, Z?: number, Places?: Array<IPlace>,
  W?: any, H?: any, S?: any
}
export interface IFrame {
  L?: number, T?: number, R?: number, B?: number,
  X?: number, Y?: number, Z?: number, Places?: Array<IPlace>,
  W?: number, H?: number, S?: number,
}
export interface IASize extends IAFrame {
    SMax?: any, WMax?: any, HMax?: any,
    SMin?: any, WMin?: any, HMin?: any,
    M?: any, MT?: number, MR?: number, MB?: number, ML?: number,
    P?: any, PL?: number, PT?: number, PR?: number, PB?: number,
    Bo?: any, BoT?: number, BoR?: number, BoB?: number, BoL?: number, BoSpacing?: number,
    F?: any, BgW?: number, BgH?: number,
    GapX?: number, GapY?: number,
    FirstX?: number, NextX?: number, //FirstGapX?: number, NextGapX?: number
    FirstY?: number, NextY?: number//, FirstGapY?: number, NextGapY?: number
}

export interface ISize extends IFrame {    
    SMax?: number, WMax?: number, HMax?: number,
    SMin?: number, WMin?: number, HMin?: number,
    M?: number, MT?: number, MR?: number, MB?: number, ML?: number,
    P?: number, PL?: number, PT?: number, PR?: number, PB?: number,
    Bo?: number, BoT?: number, BoR?: number, BoB?: number, BoL?: number, BoSpacing?: number,
    F?: number, BgW?: number, BgH?: number,
    GapX?: number, GapY?: number,
    FirstX?: number, NextX?: number, // FirstGapX?: number, NextGapX?: number
    FirstY?: number, NextY?: number//, FirstGapY?: number, NextGapY?: number
}
