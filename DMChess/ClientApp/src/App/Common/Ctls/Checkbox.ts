import { Dft } from '../../Main/Shared/Modules/Default';
import { ECtl, IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Checkbox {

    public static Inits(pACheckboxs: Array<IACheckbox>, pCL: boolean = false) {
        var buttons: Array<Checkbox> = [];
        pACheckboxs.forEach(x => { buttons.push(this.Init(x, pCL)); });
        return buttons;
    }

    public static Init(pACheckbox: IACheckbox, pCL: boolean = false) {
        var dft: IACtl;
        switch (pACheckbox.Type) {
            case ECheckbox.Left: dft = Dft.ACheckbox.Left;
            case ECheckbox.Right: dft = Dft.ACheckbox.Right;
        }
      var checkbox = Ctl.Init(pACheckbox, dft, pCL);
      checkbox.CtlType = ECtl.Checkbox;
      return checkbox;
    }
    public static Stack(pCheckbox: ICheckbox, pY: number, pGapY: number = Dft.GapY, pCL: boolean = false) {
        //console.log("Checkboxs.Stack * pCheckbox=" + JSON.stringify(pCheckbox));
        //console.log("Checkboxs.Stack * pY=" + pY);
        //console.log("Checkbox.Stack * pGapY=" + pGapY);
        //console.log("Checkbox.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pCheckbox.Size.Y = pY;
        pCheckbox.NextY = pY + pCheckbox.Size.H + pGapY;
        if (pCL) {
            //console.log("Checkbox.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Checkbox.Stack * pCheckbox.Size=" + JSON.stringify(pCheckbox.Size));
            //console.log("Checkbox.Stack * pCheckbox.Size.Y=" + JSON.stringify(pCheckbox.Size.Y)) + " * pCheckbox.Size.H=" + JSON.stringify(pCheckbox.Size.H);

            //console.log("Checkbox.Stack * pCheckbox.Size.H=" + pCheckbox.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Checkbox.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Checkbox.Stack * pCheckbox.NextY=" + pCheckbox.NextY);
        }
        //console.log("Checkbox.Stack * pCheckbox.Size.Y=" + pCheckbox.Size.Y);
        //console.log("Checkbox.Stack * pCheckbox.Size=" + JSON.stringify(pCheckbox.Size));
    }
    public static Sizes(pCheckboxs: Array<ICheckbox>) { Ctl.Sizes(pCheckboxs); }
    public static Size(pCheckbox: ICheckbox) { Ctl.Size(pCheckbox); }
}
export enum ECheckbox { Left = "L", Right = "R", }
export interface IACheckbox extends IACtl { Type?: ECheckbox }
export interface ICheckbox extends ICtl { }

