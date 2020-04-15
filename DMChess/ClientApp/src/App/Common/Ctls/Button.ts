import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../Common/Modules/Size';


export class Button {

    static Inits(pAButtons: Array<IAButton>, pCL: boolean = false) {
        var buttons: Array<Button> = [];
        pAButtons.forEach(x => { buttons.push(this.Init(x, pCL)); });
        return buttons;
    }
    static Init(pAButton: IAButton, pCL: boolean = false) {
        var dft: IACtl;
        switch (pAButton.Type) {
            case EButton.Left: dft = Dft.AButton.Left; break;
            case EButton.Center: dft = Dft.AButton.Center; break;
            case EButton.Right: dft = Dft.AButton.Right; break;
            case EButton.HomeLeft: dft = Dft.AButton.HomeLeft; break;
            case EButton.HomeCenter: dft = Dft.AButton.HomeCenter; break;
            case EButton.HomeRight: dft = Dft.AButton.HomeRight; break;
            case EButton.InnerLeft: dft = Dft.AButton.InnerLeft; break;
            case EButton.InnerCenter: dft = Dft.AButton.InnerCenter; break;
            case EButton.InnerRight: dft = Dft.AButton.InnerRight; break;
            case EButton.UpperLeft: dft = Dft.AButton.UpperLeft; break;
            case EButton.UpperCenter: dft = Dft.AButton.UpperCenter; break;
            case EButton.UpperRight: dft = Dft.AButton.UpperRight; break;
        }
        var button = Ctl.Init(pAButton, dft, pCL);
        return button;
    }
    static Stack(pButton: IButton, pSize: ISize, pCL: boolean = false) { Ctl.Stack(pButton, pSize, pCL); }
    static Sizes(pButtons: Array<IButton>, pCL: boolean = false) { Ctl.Sizes(pButtons); }
    static Size(pButton: IButton, pCL: boolean = false) { Ctl.Size(pButton); }
}
export enum EButton {
    Left = "L", Center = "C", Right = "R",
    HomeLeft = "HL", HomeCenter = "HC", HomeRight = "HR",
    InnerLeft = "IL", InnerCenter = "IC", InnerRight = "IR",
    UpperLeft = "UL", UpperCenter = "UC", UpperRight = "UR"
}
export interface IAButton extends IACtl { Type?: EButton }
export interface IButton extends ICtl { }
