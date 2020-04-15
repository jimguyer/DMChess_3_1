import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISize, Size } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';

import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../Common/Ctls/Fieldset';
import { ELegend, IALegend, ILegend, Legend } from '../../../Common/Ctls/Legend';

import { IASize } from '../../../Common/Modules/Size';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';


@Component({ selector: 'fieldleg', templateUrl: './FieldLeg.html' })
export class FieldLeg {
  @Input() VMP: IViewModel;
  @Input() VM: IFieldLeg;

  static Init(pAFieldleg: IAFieldLeg, pCL: boolean = false) {
    //console.log("FieldLeg.Init * pAFieldleg.AFieldset=" + JSON.stringify(pAFieldleg.AFieldset));
    if (pCL) {
      //console.log("FieldLeg.Init * pAFieldleg.AFieldset=" + JSON.stringify(pAFieldleg.AFieldset));
      //console.log("FieldLeg.Init * pAFieldleg.ALegend=" + JSON.stringify(pAFieldleg.ALegend));
      //console.log("FieldLeg.Init * pFirstGapY=" + pFirstGapY);
      //console.log("FieldLeg.Init * pNextGapY=" + pNextGapY);
    }
    //if (pAFieldleg.Type !== undefined) {
    //  switch (pAFieldleg.Type) {
    //    case EFieldLeg.Border_Black:
    //      if (pAFieldleg.AFieldset.Type === undefined) pAFieldleg.AFieldset.Type = EFieldset.Border_Black;
    //      if (pAFieldleg.ALegend.Type === undefined) pAFieldleg.ALegend.Type = ELegend.Border_Black;
    //      break;
    //    case EFieldLeg.Border_White:
    //      if (pAFieldleg.AFieldset.Type === undefined) pAFieldleg.AFieldset.Type = EFieldset.Border_White;
    //      if (pAFieldleg.ALegend.Type === undefined) pAFieldleg.ALegend.Type = ELegend.Border_White;
    //      break;
    //  }
    //}
    //switch (pAFieldleg.AFieldset.Type) {
    //  case EFieldset.Border_Black: pAFieldleg.ALegend.Type = ELegend.Border_Black; break;
    //  case EFieldset.Border_White: pAFieldleg.ALegend.Type = ELegend.Border_White; legend = Legend.Init(pAFieldleg.ALegend, pCL); break;
    //}
    var fieldset: IFieldset = Fieldset.Init(pAFieldleg.AFieldset, pCL);
    var legend: ILegend = Legend.Init(pAFieldleg.ALegend, pCL);
    if (pCL) {
      //console.log("FieldLeg.Init.End * pAFieldleg=" + JSON.stringify(pAFieldleg));
      //console.log("FieldLeg.Init.End * Dft.GapY=" + JSON.stringify(Dft.GapY));
      //console.log("FieldLeg.Init.End * fieldSet.Size=" + JSON.stringify(fieldset.Size));
      //console.log("FieldLeg.Init.End * legend.Size=" + JSON.stringify(legend.Size));
      //console.log("FieldLeg.Init.End * fieldSet=" + JSON.stringify(fieldset));
      //console.log("FieldLeg.Init.End * legend=" + JSON.stringify(legend));
    }
    return { Fieldset: fieldset, Legend: legend };
  }
  static Stack(pFieldLeg: IFieldLeg, pSize: ISize, pCL = false) {
    if (pCL) {
      //console.log("FieldLeg.Stack * pFieldLeg.Legend=" + JSON.stringify(pFieldLeg.Legend));
      //console.log("FieldLeg.Stack * pFieldLeg.Fieldset=" + JSON.stringify(pFieldLeg.Fieldset));
      //console.log("FieldLeg.Stack * pSize=" + JSON.stringify(pSize));
    }
    Legend.Stack(pFieldLeg.Legend, pSize, pCL);
    Fieldset.Stack(pFieldLeg.Fieldset, { Y: pFieldLeg.Legend.Size.NextY, FirstY: pFieldLeg.Legend.Size.FirstY, GapY: pSize.GapY }, pCL);
    if (pCL) {
      //console.log("FieldLeg.Stack.End * pFieldLeg.Legend.Y=" + pFieldLeg.Legend.Size.Y + " * FirstY=" + pFieldLeg.Legend.Size.FirstY + " * NextY=" + pFieldLeg.Legend.Size.NextY);
      //console.log("FieldLeg.Stack.End * pFieldLeg.Fieldset.Y=" + pFieldLeg.Fieldset.Size.Y + " * FirstY=" + pFieldLeg.Fieldset.Size.FirstY + " * NextY=" + pFieldLeg.Fieldset.Size.NextY);
    }

  }
  static Size(pFieldLeg: IFieldLeg, pCL = false) {
    if (pCL) {
      //console.log("FieldLeg.Size * pFieldLeg.Fieldset=" + JSON.stringify(pFieldLeg.Fieldset));
      //console.log("FieldLeg.Size * pFieldLeg.Legend=" + JSON.stringify(pFieldLeg.Legend));
    }
    Fieldset.Size(pFieldLeg.Fieldset);
    if (pFieldLeg.Legend !== undefined) Legend.Size(pFieldLeg.Legend);
  }
}
export enum EFieldLeg { Border_Black = "B", Border_White = "W" }
export interface IAFieldLeg { Type?: EFieldLeg, AFieldset?: IAFieldset, ALegend?: IALegend, Value?: string, ASize?: IASize }
export interface IFieldLeg { Fieldset: IFieldset, Legend?: ILegend, Size?: ISize }
