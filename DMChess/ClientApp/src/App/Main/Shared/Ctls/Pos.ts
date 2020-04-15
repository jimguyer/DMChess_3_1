import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IPlace, ISize } from '../../../Common/Modules/Size';
export class Pos {
 
    public static Init(pAPos: IAPos, pCL: boolean = false) {
        var pos: IPos;
        return pos;
    }
}
export interface IAPos extends IACtl { Type: EPos, Places?: Array<IPlace> }
export interface IPos extends ICtl { Type?: EPos, Places?: Array<IPlace> }
export enum EPos { Cap = "C", Hex = "H" }
