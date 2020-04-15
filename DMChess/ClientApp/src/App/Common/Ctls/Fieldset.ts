import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Fieldset {

  public static Init(pAFieldset: IAFieldset, pCL: boolean = false) {
    //console.log("Fieldset.Init * pAFieldset=" + JSON.stringify(pAFieldset));
    var dft: IACtl;
    switch (pAFieldset.Type) {
      case EFieldset.Border_Black: ; dft = Dft.AFieldset.Border_Black; break;
      case EFieldset.Border_White: dft = Dft.AFieldset.Border_White; break;
    }
    var fieldset: IFieldset = Ctl.Init(pAFieldset, dft, pCL);
    if (pCL) {
      //console.log("Fieldset.Init.End * dft.FirstY=" + dft.FirstY);
      //console.log("Fieldset.Init.End * fieldset.Size.FirstY=" + fieldset.Size.FirstY);
      //console.log("Fieldset.Init.End * dft=" + JSON.stringify(dft));
      //console.log("Fieldset.Init.End * pAFieldset=" + JSON.stringify(pAFieldset));
      //console.log("Fieldset.Init.End * fieldset=" + JSON.stringify(fieldset));
      //console.log("Fieldset.Init.End -------------------------------------");
    }
    //console.log("Fieldset.Init.End * dft.FirstY=" + dft.FirstY);
    //console.log("Fieldset.Init.End * fieldset.Size.FirstY=" + fieldset.Size.FirstY);
    //console.log("Fieldset.Init.End -------------------------------------");
    return fieldset;
  }
  static Stack(pFieldset: IFieldset, pSize: ISize, pCL: boolean = false) { Ctl.Stack(pFieldset, pSize, pCL); }
  static Bottom(pFieldset: IFieldset, pSize: ISize, pCL: boolean = false) { Ctl.Bottom(pFieldset, pSize, pCL); }
  static Size(pFieldset: IFieldset, pCL: boolean = false) { Ctl.Size(pFieldset, pCL); }
}
export enum EFieldset { Border_Black = "B", Border_White = "W" }
export interface IAFieldset extends IACtl { Type?: EFieldset }
export interface IFieldset extends ICtl { }

