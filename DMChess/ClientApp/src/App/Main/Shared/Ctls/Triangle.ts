import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IPlace, ISize } from '../../../Common/Modules/Size';
export class Tri { 
    public static Init(pATriangle: IATri, pCL: boolean = false) {
        var pos: ITri;
        return pos;
    }
}
export interface IATri extends IACtl { Type: ETri }
export interface ITri extends ICtl { Type?: ETri }
export enum ETri { Me = "M", Op = "O" }
