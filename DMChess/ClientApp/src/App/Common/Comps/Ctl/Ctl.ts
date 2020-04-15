import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { Attrs } from '../../../Common/Attrs/Attrs';
import { Background } from '../../../Common/Attrs/Background';
import { Border } from '../../../Common/Attrs/Border';
import { Color } from '../../../Common/Attrs/Color';
import { Font } from '../../../Common/Attrs/Font';
import { Margin } from '../../../Common/Attrs/Margin';
import { Padding } from '../../../Common/Attrs/Padding';
import { EPosition, Position } from '../../../Common/Attrs/Position';
import { ETextAlign, TextAlign } from '../../../Common/Attrs/TextAlign';
import { EVertAlign, VertAlign } from '../../../Common/Attrs/VerticalAlign';

import { Win } from '../../../Common/Modules/Win';
import { IASize, ISize } from '../../../Common/Modules/Size';
import { IStyle } from '../../../Common/Modules/Style';
import { Util } from '../../../Common/Modules/Util';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';




@Component({ selector: 'ctl', templateUrl: './Ctl.html' })

export class Ctl {
  @Input() VMP: any;
  @Input() VM: ICtl;

  static Init(pACtl: IACtl = {}, pADft: IACtl = null, pCL: boolean = false) {
    //console.log("Ctl.Init * pImg=" + JSON.stringify(pACtl));
    if (pCL) {
      //console.log("Common/Comps/Ctl.Init * pACtl=" + JSON.stringify(pACtl));
      //console.log("Common/Comps/Ctl.Init * pADft=" + JSON.stringify(pADft));
    }
    var aCtl = pADft === null ? pACtl : this.Dft(pACtl, pADft, pCL);
    var Ctl: ICtl = { Size: {}, Style: {} };
    this.Build(Ctl, aCtl, pCL);
    return Ctl;
  }

  static InitAlt(pACtl: IACtl = {}, pADft_Reg: IACtl = null, pADft_Alt: IACtl = null, pCL: boolean = false) {
    //console.log("Ctl.Init * pImg=" + JSON.stringify(pACtl));
    if (pCL) {
      //console.log("Common/Comps/Ctl.Init * pACtl=" + JSON.stringify(pACtl));
      //console.log("Common/Comps/Ctl.Init * pADft=" + JSON.stringify(pADft));
    }
    var aCtl_Reg = pADft_Reg === null ? pACtl : this.Dft(pACtl, pADft_Reg, pCL);
    var aCtl_Alt = pADft_Alt === null ? pACtl : this.Dft(pACtl, pADft_Alt, pCL);
    var ctl_Reg: ICtl = { Size: {}, Style: {} };
    var ctl_Alt: ICtl = { Size: {}, Style: {} };
    var ctl: ICtl = { Size: {}, Style: {} };
    this.Build(ctl, aCtl_Reg, pCL);
    this.Build(ctl_Reg, aCtl_Reg, pCL);
    this.Build(ctl_Alt, aCtl_Alt, pCL);
    ctl.Reg = ctl_Reg;
    ctl.Alt = ctl_Alt;
    return ctl;
  }


  static Dft(pACtl: IACtl = {}, pADft: IACtl = {}, pCL = false) {
    if (pCL) {
      //console.log("Ctl.Dft * pACtl=" + JSON.stringify(pACtl));
      //console.log("Ctl.Dft * pADft." + JSON.stringify(pADft));
    }
    var aCtl: IACtl = {};
    aCtl.Label = pACtl.Label ? pACtl.Label : pADft.Label;            //Label
    aCtl.Value = pACtl.Value ? pACtl.Value : pADft.Value;            //Value
    aCtl.Src = pACtl.Src ? pACtl.Src : pADft.Src;                    //Src
    aCtl.Pos = pACtl.Pos ? pACtl.Pos : pADft.Pos;                    //Position
    aCtl.L = pACtl.L ? pACtl.L : pADft.L;                            //Left
    aCtl.T = pACtl.T ? pACtl.T : pADft.T;                            //Top
    aCtl.R = pACtl.R ? pACtl.R : pADft.R;                            //Right
    aCtl.B = pACtl.B ? pACtl.B : pADft.B;                            //Bottom
    aCtl.X = pACtl.X ? pACtl.X : pADft.X;                            //X
    aCtl.Y = pACtl.Y ? pACtl.Y : pADft.Y;                            //Y
    aCtl.Z = pACtl.Z ? pACtl.Z : pADft.Z;                            //Z

    aCtl.FirstX = pACtl.FirstX ? pACtl.FirstX : pADft.FirstX;        //FirstX
    aCtl.FirstY = pACtl.FirstY ? pACtl.FirstY : pADft.FirstY;        //FirstY
    if (pACtl.GapX) aCtl.GapX = pACtl.GapX; else if (pADft.GapX) aCtl.GapX = pADft.GapX; else aCtl.GapX = Dft.GapX;
    if (pACtl.GapY) aCtl.GapY = pACtl.GapY; else if (pADft.GapY) aCtl.GapY = pADft.GapY; else aCtl.GapY = Dft.GapY;

    aCtl.W = pACtl.W !== undefined ? pACtl.W : pADft.S;                            //Width
    if (aCtl.W === undefined) aCtl.W = pADft.W !== undefined ? pADft.W : pADft.S;   //Width
    aCtl.H = pACtl.H !== undefined ? pACtl.H : pADft.S;                             //Height
    if (aCtl.H === undefined) aCtl.H = pADft.H !== undefined ? pADft.H : pADft.S;   //Height

    aCtl.WMax = pACtl.WMax !== undefined ? pACtl.WMax : pADft.SMax;                               //Width Max
    if (aCtl.WMax === undefined) aCtl.WMax = pADft.WMax !== undefined ? pADft.WMax : pADft.SMax;  //Width Max
    aCtl.HMax = pACtl.HMax !== undefined ? pACtl.HMax : pADft.SMax;                               //Height Max
    if (aCtl.HMax === undefined) aCtl.HMax = pADft.HMax !== undefined ? pADft.HMax : pADft.SMax;  //Height Max

    aCtl.WMin = pACtl.WMin !== undefined ? pACtl.WMin : pADft.SMin;                               //Width Min
    if (aCtl.WMin === undefined) aCtl.WMin = pADft.WMin !== undefined ? pADft.WMin : pADft.SMin;  //Width Min
    aCtl.HMin = pACtl.HMin !== undefined ? pACtl.HMin : pADft.SMin;                               //Height Min
    if (aCtl.HMin === undefined) aCtl.HMin = pADft.HMin !== undefined ? pADft.HMin : pADft.SMin;  //Height Min

    aCtl.M = pACtl.M !== undefined ? pACtl.M : pADft.M;          //Margin
    aCtl.ML = pACtl.ML !== undefined ? pACtl.ML : pADft.ML;      //Margin Left
    aCtl.MT = pACtl.MT !== undefined ? pACtl.MT : pADft.MT;      //Margin Top
    aCtl.MR = pACtl.MR !== undefined ? pACtl.MR : pADft.MR;      //Margin Right
    aCtl.MT = pACtl.MT !== undefined ? pACtl.MT : pADft.MT;      //Margin Top

    aCtl.P = pACtl.P !== undefined ? pACtl.P : pADft.P;          //Pad
    aCtl.PL = pACtl.PL !== undefined ? pACtl.PL : pADft.PL;      //Pad Left
    aCtl.PT = pACtl.PT !== undefined ? pACtl.PT : pADft.PT;      //Pad Top
    aCtl.PR = pACtl.PR !== undefined ? pACtl.PR : pADft.PR;      //Pad Right
    aCtl.PT = pACtl.PT !== undefined ? pACtl.PT : pADft.PT;      //Pad Top

    aCtl.Bo = pACtl.Bo !== undefined ? pACtl.Bo : pADft.Bo;      //Border
    aCtl.BoL = pACtl.BoL !== undefined ? pACtl.BoL : pADft.BoL;  //Border Left
    aCtl.BoT = pACtl.BoT !== undefined ? pACtl.BoT : pADft.BoT;  //Border Top
    aCtl.BoR = pACtl.BoR !== undefined ? pACtl.BoR : pADft.BoR;  //Border Right
    aCtl.BoT = pACtl.BoT !== undefined ? pACtl.BoT : pADft.BoT;  //Border Top
    aCtl.BoCollapse = pACtl.BoCollapse !== undefined ? pACtl.BoCollapse : pADft.BoCollapse;  //border-collapse
    aCtl.BoSpacing = pACtl.BoSpacing !== undefined ? pACtl.BoSpacing : pADft.BoSpacing;      //border-spacing

    aCtl.F = pACtl.F !== undefined ? pACtl.F : pADft.F;                                      //Font
    aCtl.Bg = pACtl.Bg !== undefined ? pACtl.Bg : pADft.Bg;                                  //Background
    aCtl.BgRepeat = pACtl.BgRepeat !== undefined ? pACtl.BgRepeat : pADft.BgRepeat;          //Background Repeat
    aCtl.BgSrc = pACtl.BgSrc !== undefined ? pACtl.BgSrc : pADft.BgSrc;                      //Background Source
    aCtl.TA = pACtl.TA !== undefined ? pACtl.TA : pADft.TA;                                  //text-align
    aCtl.VA = pACtl.VA !== undefined ? pACtl.VA : pADft.VA;                                  //vert-align
    aCtl.O = pACtl.O !== undefined ? pACtl.O : pADft.O;                                      //opacity

    if (pCL) {
      //console.log("Ctl.Dft.End * pACtl.X=" + pACtl.X);
      //console.log("Ctl.Dft.End * pADft.X=" + pADft.X);
      //console.log("Ctl.Dft.End * aCtl.X=" + aCtl.X);
      //console.log("Ctl.Dft.End * pACtl.H=" + pACtl.H);
      //console.log("Ctl.Dft.End * pADft.H=" + pADft.H);
      //console.log("Ctl.Dft.End * aCtl.H=" + aCtl.H);
      //console.log("Ctl.Dft.End ------------------------------------------");
    }
    return aCtl;
  }

  static Build(pCtl: ICtl, pACtl: IACtl, pCL = false) {
    if (pCL) {
      //console.log("Ctl.Build =============================================================");
      //console.log("Ctl.Build * pCtl=" + JSON.stringify(pCtl));
      //console.log("Ctl.Build * Dft.Cols=" + Dft.Cols);
      //console.log("Ctl.Build * pCtl.Size=" + JSON.stringify(pCtl.Size));
      //console.log("Ctl.Build * pCtl.Style=" + JSON.stringify(pCtl.Style));
    }
    var size: ISize = pCtl.Size; var style: IStyle = pCtl.Style;
    if (pACtl.Show !== undefined) pCtl.Show = pACtl.Show;
    if (pACtl.T !== undefined) if (pACtl.T === 0) style.top = "0px"; else size.T = pACtl.T;
    if (pACtl.R !== undefined) if (pACtl.R === 0) style.right = "0px"; else size.R = pACtl.R;
    if (pACtl.B !== undefined) if (pACtl.B === 0) style.bottom = "0px"; else size.B = pACtl.B;
    if (pACtl.L !== undefined) if (pACtl.L === 0) style.left = "0px"; else size.L = pACtl.L;
    //if (pACtl.X !== undefined) size.X = pACtl.X === "C" ? (Dft.Cols) / 2 - pACtl.W / 2 : pACtl.X;
    //if (pACtl.Y !== undefined) size.Y = pACtl.Y === "C" ? (Dft.Rows - 1) / 2 - pACtl.Y / 2 : pACtl.Y;
    if (pACtl.X !== undefined) {
      switch (pACtl.X) {
        case "C": size.X = (Dft.Cols) / 2 - pACtl.W / 2; break;
        case "L": size.X = 0; break;
        case "R": size.X = Dft.Cols - pACtl.W; break;
        default: size.X = pACtl.X; break;
      }
    }
    if (pACtl.Y !== undefined) {
      switch (pACtl.Y) {
        case "C": size.Y = (Dft.Rows - 1) / 2 - pACtl.Y / 2; break;
        //case "T": size.Y = 0; break;
        //case "B": size.Y = Dft.Cols - pACtl.W; break;
        default: size.Y = pACtl.Y; break;
      }
    }
    if (pACtl.Z !== undefined) style["z-index"] = pACtl.Z;
    if (pACtl.FirstX !== undefined) size.FirstX = pACtl.FirstX;
    if (pACtl.GapX !== undefined) size.GapX = pACtl.GapX;
    if (pACtl.FirstY !== undefined) size.FirstY = pACtl.FirstY;
    if (pACtl.GapY !== undefined) size.GapY = pACtl.GapY;
    if (pACtl.S !== undefined) {
      if (Util.IsPercent(pACtl.S, pCL)) { style.width = pACtl.S; style.height = pACtl.S; }
      else if (Util.IsNum(pACtl.S)) { size.W = pACtl.S; size.H = pACtl.S; }
    }

    if (pACtl.W !== undefined) { if (Util.IsPercent(pACtl.W)) style.width = pACtl.W; else if (Util.IsNum(pACtl.W)) size.W = pACtl.W; }
    if (pACtl.H !== undefined) { if (Util.IsPercent(pACtl.H)) style.height = pACtl.H; else if (Util.IsNum(pACtl.H)) size.H = pACtl.H; }
    if (pACtl.SMax !== undefined) {
      if (Util.IsPercent(pACtl.SMax)) { style["max-width"] = pACtl.SMax; style["max-height"] = pACtl.SMax; }
      else if (Util.IsNum(pACtl.SMax)) { size.WMax = pACtl.SMax; size.HMax = pACtl.SMax; }
    }
    if (pACtl.WMax !== undefined) { if (Util.IsPercent(pACtl.WMax)) style["max-width"] = pACtl.WMax; else if (Util.IsNum(pACtl.WMax)) size.WMax = pACtl.WMax; }
    if (pACtl.HMax !== undefined) { if (Util.IsPercent(pACtl.HMax)) style["max-height"] = pACtl.WMax; else if (Util.IsNum(pACtl.WMax)) size.HMax = pACtl.WMax; }
    if (pACtl.SMin !== undefined) {
      if (Util.IsPercent(pACtl.SMin)) { style["min-width"] = pACtl.SMin; style["min-height"] = pACtl.SMin; }
      else if (Util.IsNum(pACtl.SMin)) { size.WMin = pACtl.SMin; size.HMin = pACtl.SMin; }
    }
    if (pACtl.WMin !== undefined) { if (Util.IsPercent(pACtl.WMin)) style["min-height"] = pACtl.WMin; else if (Util.IsNum(pACtl.WMin)) size.WMin = pACtl.WMin; }
    if (pACtl.HMin !== undefined) { if (Util.IsPercent(pACtl.HMin)) style["min-height"] = pACtl.WMax; else if (Util.IsNum(pACtl.WMax)) size.HMax = pACtl.WMax; }
    if (pACtl.O !== undefined) { style.opacity = pACtl.O; style.filter = "alpha(opacity=" + pACtl.O * 100 + ")"; }

    if (pACtl.BgRepeat !== undefined) style["background-repeat"] = pACtl.BgRepeat ? "repeat" : "no-repeat";
    if (pACtl.BoCollapse !== undefined) style["border-collapse"] = pACtl.BoCollapse;
    if (pACtl.BoSpacing !== undefined) if (pACtl.BoSpacing === 0) style["border-spacing"] = "0px"; else size.BoSpacing = pACtl.BoSpacing;
    if (pACtl.Pos === undefined) style.position = "fixed";
    else {
      switch (pACtl.Pos.toUpperCase()) {
        case "A": style.position = "absolute"; break;
        case "F": style.position = "fixed"; break;
        case "R": style.position = "relative"; break;
        case "S": style.position = "sticky"; break;
        case "X": break;
      }
    }
    if (pCL) {
      //console.log("Ctl.Build =============================================================");
      //console.log("Ctl.Build * pCtl=" + JSON.stringify(pCtl));
      //console.log("Ctl.Build * Dft.Cols=" + Dft.Cols);
      //console.log("Ctl.Build * pCtl.Size=" + JSON.stringify(pCtl.Size));
      //console.log("Ctl.Build * pCtl.Style=" + JSON.stringify(pCtl.Style));
    }
    if (pACtl.TA !== undefined) {
      switch (pACtl.TA) {
        case ETextAlign.Center: style["text-align"] = "center"; break;
        case ETextAlign.Left: style["text-align"] = "left"; break;
        case ETextAlign.Right: style["text-align"] = "right"; break;
      }
    }
    if (pACtl.Label !== undefined) pCtl.Label = pACtl.Label;
    if (pACtl.Value !== undefined) pCtl.Value = pACtl.Value;
    if (pACtl.Src !== undefined) pCtl.Src = pACtl.Src;
    Margin.Build(pCtl, pACtl.M, pCL);
    Padding.Build(pCtl, pACtl.B, pCL);
    if (pACtl.Bg !== undefined) Background.Build(pCtl, pACtl.Bg, pCL);
    if (pACtl.Bo !== undefined) Border.Build(pCtl, pACtl.Bo, pCL);
    if (pACtl.F !== undefined) Font.Build(pCtl, pACtl.F, pCL);
    if (pCL) {
      //console.log("Ctl.Build.End * pACtl.X=" + pACtl.X);
      //console.log("Ctl.Build.End * pCtl.Size.X=" + pCtl.Size.X);
      //console.log("Ctl.Build.End * pACtl.Y=" + pACtl.Y);
      //console.log("Ctl.Build.End * pCtl.Size.Y=" + pCtl.Size.Y);
      //console.log("Ctl.Build.End * size=" + JSON.stringify(size));
      //console.log("Ctl.Build.End * pCtl.Size=" + JSON.stringify(pCtl.Size));
      //console.log("Ctl.Build.End * pCtl.Style=" + JSON.stringify(pCtl.Style));
      //console.log("Ctl.Build.End  ==============================================================");
    }
  }

  static Stack(pCtl: ICtl, pSize: ISize, pCL = false) {
    if (pCL) {
      //console.log("Ctl.Stack ===============================================================");
      //console.log("Ctl.Stack * pCtl.Size.H=" + pCtl.Size.H);
      //console.log("Ctl.Stack * pSize.Y=" + pSize.Y);
      //console.log("Ctl.Stack * pSize.GapY=" + pSize.GapY);
      //console.log("Ctl.Stack ---------------------------------------------------------------");
    }
    pCtl.Size.Y = pSize.Y;
    var gapY; pSize.GapY ? pSize.GapY : pCtl.Size.GapY;
    if (!gapY) gapY = Dft.GapY;
    pCtl.Size.FirstY = pSize.FirstY !== undefined ? pSize.FirstY: pCtl.Size.Y + gapY;
    pCtl.Size.NextY = pCtl.Size.Y + pCtl.Size.H + gapY;
    if (pCL) {
      //console.log("Ctl.Stack.End * pCtl.Size.Y=" + pCtl.Size.Y);
      //console.log("Ctl.Stack.End * pCtl.Size.H=" + pCtl.Size.H);
      //console.log("Ctl.Stack.End * gapY=" + gapY);
      //console.log("Ctl.Stack.End * pCtl.Size.FirstY=" + pCtl.Size.FirstY);
      //console.log("Ctl.Stack.End * pCtl.Size.NextY=" + pCtl.Size.NextY);
      //console.log("Ctl.Stack ===============================================================");
    }
  }
  static Bottom(pCtl: ICtl, pSize: ISize, pCL = false) {
    if (pCL) {
      //console.log("Ctl.Bottom ===============================================================");
      //console.log("Ctl.Bottom * pCtl.Size.Y=" + pCtl.Size.Y);
      //console.log("Ctl.Bottom * pCtl.Size.H=" + pCtl.Size.H);          
      //console.log("Ctl.Bottom * pSize.NextY=" + pSize.NextY);
      //console.log("Ctl.Bottom * pSize.GapY=" + pSize.GapY);
      //console.log("Ctl.Bottom ---------------------------------------------------------------");
    }
    var gapY; pSize.GapY ? pSize.GapY : pCtl.Size.GapY;
    if (!gapY) gapY = Dft.GapY;
    pCtl.Size.H = pSize.NextY - pCtl.Size.Y;
    pCtl.Size.NextY = pSize.NextY + gapY * 2;
    if (pCL) {
      //console.log("Ctl.Bottom.End * gapY=" + gapY);
      //console.log("Ctl.Bottom.End * pCtl.Size.Y=" + pCtl.Size.Y);
      //console.log("Ctl.Bottom.End * pCtl.Size.H=" + pCtl.Size.H);
      //console.log("Ctl.Bottom.End * pCtl.Size.NextY=" + pCtl.Size.NextY);
      //console.log("Ctl.Bottom ===============================================================");
    }
  }

  static Places(pCtls, pPlaces, pIdx = 0, pCL = false) {
    //console.log("Size.ArrayIdx * pCtls=" + JSON.stringify(pCtls));
    //console.log("Size.ArrayIdx * pIdx=" + pIdx);
    //console.log("Size.ArrayIdx * pCtls[0]=" + JSON.stringify(pCtls[0]));
    //console.log("Size.ArrayIdx * pCtlsPlaces[0]=" + JSON.stringify(pCtlsPlaces[0]));

    if (pCtls === undefined || pCtls === null || pCtls.length === 0) return;
    for (var x = 0; x < pCtls.length; x++) {
      pCtls[x].Size.X = pPlaces[x].Places[pIdx].X;
      pCtls[x].Size.Y = pPlaces[x].Places[pIdx].Y;
      this.Size(pCtls[x]);
      if (pCL) {
        //console.log(pCtls[" + x + "] + ".Size=" + JSON.stringify(pCtls[x].Size));
        //console.log(pCtls[" + x + "] + ".Style=" + JSON.stringify(pCtls[x].Style));
      }
    }
  }

  static Sizes(pCtls: Array<ICtl>, pCL = false) {
    if (pCL) {
      //console.log("pCtls=" + JSON.stringify(pCtls));
    }
    if (pCtls === undefined || pCtls === null || pCtls.length === 0) return;
    pCtls.forEach(x => { this.Size(x, pCL); });
  }

  static Size(pCtl, pCL = false) {
    if (pCL) {
      //console.log("SizeSvc.CtlFunc * pCtl.Size=" + JSON.stringify(pCtl.Size));
      //console.log("SizeSvc.CtlFunc * Win=" + JSON.stringify(Win));
    }

    //#region Init

    //console.log("SizeSvc.CtlFunc * pCtl.Size=" + JSON.stringify(pCtl.Size));
    //console.log("SizeSvc.CtlFunc * pCtl.Style=" + JSON.stringify(pCtl.Style));

    if (pCtl === undefined) return;
    if (pCtl.Size === undefined) return;
    if (pCtl.Style === undefined) pCtl.Style = {};

    var size: ISize = pCtl.Size;
    var style: IStyle = pCtl.Style;

    var cpx = Win.CellPX;
    var lpx = Win.LeftPX;
    var apx = Win.AdjustPX;
    var bpx = Win.BorderPX;
    var fpx = Win.FontPX;

    if (pCL) {
      //console.log("Ctl.Size * cpx=" + cpx);
      //console.log("Ctl.Size * lpx=" + lpx);
      //console.log("Ctl.Size * apx=" + apx);
      //console.log("Ctl.Size * bpx=" + bpx);
      //console.log("Ctl.Size * fs=" + fs);
    }

    //#endregion

    //#region Window Sizes

    if (size.L !== undefined) style.left = Math.round(cpx * size.L) + "px";
    if (size.R !== undefined) style.right = Math.round(cpx * size.R) + "px";
    if (size.T !== undefined) style.top = Math.round(cpx * size.T) + "px";
    if (size.B !== undefined) style.bottom = Math.round(cpx * size.B) + "px";
    if (size.X !== undefined) { style.left = Math.round(lpx + size.X * cpx) + "px"; }
    if (size.Y !== undefined) { style.top = Math.round(size.Y * cpx) + "px"; }
    if (size.S !== undefined) { style.width = Math.round(size.S * cpx) + "px"; style.height = Math.round(size.S * cpx) + "px"; }
    if (size.W !== undefined) { style.width = Math.round(size.W * cpx) + "px"; }
    if (size.H !== undefined) style.height = Math.round(size.H * cpx) + "px";
    if (size.SMin !== undefined) { style["min-width"] = Math.round(size.SMin * cpx) + "px"; style["min-height"] = Math.round(size.SMin * cpx) + "px"; }
    if (size.WMin !== undefined) style["min-width"] = Math.round(size.WMin * cpx) + "px";
    if (size.HMin !== undefined) style["min-height"] = Math.round(size.HMin * cpx) + "px";
    if (size.SMax !== undefined) { style["max-width"] = Math.round(size.SMax * cpx) + "px"; style["max-height"] = Math.round(size.SMax * cpx) + "px"; }
    if (size.WMax !== undefined) style["max-width"] = Math.round(size.WMax * cpx) + "px";
    if (size.HMax !== undefined) style["max-height"] = Math.round(size.HMax * cpx) + "px";
    if (size.M !== undefined) style.margin = Math.round(size.M * apx) + "px";
    if (size.MT !== undefined) style["margin-top"] = Math.round(size.MT * apx) + "px";
    if (size.MR !== undefined) style["margin-right"] = Math.round(size.MR * apx) + "px";
    if (size.MB !== undefined) style["margin-bottom"] = Math.round(size.MB * apx) + "px";
    if (size.ML !== undefined) style["margin-left"] = Math.round(size.ML * apx) + "px";

    if (size.P !== undefined) style.padding = Math.round(size.P * apx) + "px";
    if (size.PT !== undefined) style["padding-top"] = Math.round(size.PT * apx) + "px";
    if (size.PR !== undefined) style["padding-right"] = Math.round(size.PR * apx) + "px";
    if (size.PB !== undefined) style["padding-bottom"] = Math.round(size.PB * apx) + "px";
    if (size.PL !== undefined) style["padding-left"] = Math.round(size.PL * apx) + "px";
    if (size.F !== undefined) style["font-size"] = Math.round(size.F * fpx) + "px";

    if (size.Bo !== undefined) style["border-width"] = Math.round(size.Bo * bpx) + "px"; if (style["border-width"] === "0px") style["border-width"] = "1px";
    if (size.BoT !== undefined) style["border-top-width"] = Math.round(size.BoT * bpx) + "px"; if (style["border-top-width"] === "0px") style["border-top-width"] = "1px";
    if (size.BoR !== undefined) style["border-right-width"] = Math.round(size.BoR * bpx) + "px"; if (style["border-right-width"] === "0px") style["border-right-width"] = "1px";
    if (size.BoB !== undefined) style["border-bottom-width"] = Math.round(size.BoB * bpx) + "px"; if (style["border-bottom-width"] === "0px") style["border-bottom-width"] = "1px";
    if (size.BoL !== undefined) style["border-left-width"] = Math.round(size.BoL * bpx) + "px"; if (style["border-left-width"] === "0px") style["border-left-width"] = "1px";
    if (size.BoSpacing !== undefined) style["border-spacing"] = Math.round(size.BoSpacing * bpx) + "px";
    if (size.BgW !== undefined && size.BgH !== undefined) style["background-size"] = Math.round(pCtl.Size.BgW * cpx) + "px " + Math.round(pCtl.Size.BgH * cpx) + "px";

    if (pCL) {
      //console.log("Ctl.Size * size.BoT=" + size.BoT);
      //console.log("Ctl.Size * size.BoR=" + size.BoR);
      //console.log("Ctl.Size * size.BoB=" + size.BoB);
      //console.log("Ctl.Size * size.BoL=" + size.BoL);
      //console.log("Ctl.Size * style[border-top-color]=" + style["border-top-color"]);
      //console.log("Ctl.Size * style[border-right-color]=" + style["border-right-color"]);
      //console.log("Ctl.Size * style[border-bottom-color]=" + style["border-bottom-color"]);
      //console.log("Ctl.Size * style[border-left-color]=" + style["border-left-color"]);
      //console.log("Ctl.Size * style[border-top-width]=" + style["border-top-width"]);
      //console.log("Ctl.Size * style[border-right-width]=" + style["border-right-width"]);
      //console.log("Ctl.Size * style[border-bottom-width]=" + style["border-bottom-width"]);
      //console.log("Ctl.Size * style[border-left-width]=" + style["border-left-width"]);
    }

    //#endregion

  }

}
export interface IACtl extends IASize {
  CtlType?: ECtl,
  Show?: boolean,
  Idx?: number,
  Z?: number,
  Name?: string,
  Pos?: EPosition,
  Tabbed?: boolean,
  Label?: string
  Value?: any,
  F?: any,
  O?: number,
  BoCollapse?: boolean,
  Bg?: any,
  BgRepeat?: boolean,
  BgSrc?: string,
  TA?: ETextAlign, VA?: EVertAlign,
  Src?: string,
  SrcOn?: string
}
//export interface ICtl extends ICCtl {
export interface ICtl extends ISizeStyle{
  CtlType?: ECtl,
  Idx?: number, Name?: string, Tabbed?: boolean, Show?: boolean, Disabled?: boolean,
  Reg?: ISizeStyle, Alt?: ISizeStyle,
  Src?: string, SrcOn?: string, Label?: string, Value?: any,
  NextY?: number,
  Options?: Array<any>
}
export interface ISizeStyle { Size?: ISize, Style?: IStyle }
export enum ECtl { Button = "B", Checkbox = "C", Img = "I", Label = "L", Password = "P", Radio = "R", Select = "S", Textbox = "T" }
