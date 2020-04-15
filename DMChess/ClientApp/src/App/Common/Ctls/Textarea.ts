import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';

export class Textarea {

    public static Inits(pATextareas:Array<IATextarea>, pCL: boolean = false) {
        var Textareas: Array<Textarea> = [];
        pATextareas.forEach(x => { Textareas.push(this.Init(x, pCL)); });
        return Textareas;
    }

    public static Init(pATextarea: IATextarea, pCL: boolean = false) {
        var dft: IACtl;
        switch (pATextarea.Type) {
            //case ETextarea.Left: dft = Dft.ATextarea; break;
            //case ETextarea.TALeft: dft = Dft.ATextarea.TALeft; break;
            //case ETextarea.TACenter: dft = Dft.ATextarea.TACenter; break;
            //case ETextarea.TARight: dft = Dft.ATextarea.TARight; break;
        }
        var Textarea = Ctl.Init(pATextarea, dft, pCL);
        return Textarea;
    }
    public static Stacks(pTextareas: Array<ITextarea>, pSize: ISize = null, pCL: boolean = false) {
        return pTextareas;
    }

    static Stack(pTextarea: ITextarea, pSize: ISize, pCL: boolean = false) {
        //console.log("Textareas.Stack * pTextarea=" + JSON.stringify(pTextarea));
        //console.log("Textareas.Stack * pY=" + pY);
        //console.log("Textarea.Stack * pGapY=" + pGapY);
        pTextarea.Size.Y = pSize.Y;
        pTextarea.NextY = pSize.Y + pTextarea.Size.H + pSize.GapY;
        if (pCL) {
            //console.log("Line.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Line.Stack * pTextarea.Size=" + JSON.stringify(pTextarea.Size));
            //console.log("Line.Stack * pTextarea.Size.Y=" + JSON.stringify(pTextarea.Size.Y)) + " * pTextarea.Size.H=" + JSON.stringify(pTextarea.Size.H);

            //console.log("Line.Stack * pTextarea.Size.H=" + pTextarea.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Line.Stack * pTextarea.NextY=" + pTextarea.NextY);
        }
        //console.log("Line.Stack * pTextarea.Size.Y=" + pTextarea.Size.Y);
        //console.log("Line.Stack * pTextarea.Size=" + JSON.stringify(pTextarea.Size));
    }
    static Size(pTextarea: ITextarea, pCL: boolean = false) {
        Ctl.Size(pTextarea);
    }
}
export enum ETextarea { Left = "L", Right = "R", }
export interface IATextarea extends IACtl { Type?: ETextarea }
export interface ITextarea extends ICtl { }

