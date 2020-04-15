import { Dft } from '../../Main/Shared/Modules/Default';
import { IACtl, ICtl, Ctl } from '../../Common/Comps/Ctl/Ctl';

export class Table {

    public static Init(pATable: IATable, pCL: boolean = false) {
        var dft: IACtl;
        switch (pATable.Frame.Type) {
            //case ETableType.Select: dft = Dft.ATable.Select;
        }
        var Table: ITable = {
        //    Frame: { Ctl.Init(pATable, dft, pCL) }
        };
        return Table;
    }
    public static Init_Col(pATH: IATH, pATD: IATD,  pCL: boolean = false) {
    }
    public static Build(pData: any, pLPP: number, pCL: boolean = false) {
    }
    static Stack(pTable: ITable, pY: number, pGapY: number = Dft.GapY, pCL: boolean = false) {
        //console.log("Tables.Stack * pTable=" + JSON.stringify(pTable));
        //console.log("Tables.Stack * pY=" + pY);
        //console.log("Table.Stack * pGapY=" + pGapY);
        //console.log("Table.Stack * Dft.AdjustS=" + Dft.AdjustS);
        pTable.Size.Y = pY;
        pTable.NextY = pY + pTable.Size.H + pGapY;
        if (pCL) {
            //console.log("Table.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
            //console.log("Table.Stack * pTable.Size.Y=" + JSON.stringify(pTable.Size.Y)) + " * pTable.Size.H=" + JSON.stringify(pTable.Size.H);

            //console.log("Table.Stack * pTable.Size.H=" + pTable.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * pTable.NextY=" + pTable.NextY);
        }
        //console.log("Table.Stack * pTable.Size.Y=" + pTable.Size.Y);
        //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
    }
    static Size(pTable: ITable, pCL: boolean = false) {
        //console.log("Tables.Stack * pTable=" + JSON.stringify(pTable));
        //console.log("Tables.Stack * pY=" + pY);
        //console.log("Table.Stack * pGapY=" + pGapY);
        //console.log("Table.Stack * Dft.AdjustS=" + Dft.AdjustS);
        //pTable.Size.Y = pY;
        //pTable.NextY = pY + pTable.Size.H + pGapY;
        if (pCL) {
            //console.log("Table.Stack * pLine.Y=" + JSON.stringify(pLine.Y));
            //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
            //console.log("Table.Stack * pTable.Size.Y=" + JSON.stringify(pTable.Size.Y)) + " * pTable.Size.H=" + JSON.stringify(pTable.Size.H);

            //console.log("Table.Stack * pTable.Size.H=" + pTable.Size.H + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * gapY=" + gapY + " * pGapY=" + pGapY + " * Dft.GapY=" + Dft.GapY + " * gapY=" + gapY);
            //console.log("Table.Stack * pTable.NextY=" + pTable.NextY);
        }
        //console.log("Table.Stack * pTable.Size.Y=" + pTable.Size.Y);
        //console.log("Table.Stack * pTable.Size=" + JSON.stringify(pTable.Size));
    }
}

export enum ETable { Data = "S", Select = "S" }
export enum ETCol { Data = "D", Select = "S" }
export enum ETFrame { Select = "S", Img = "I", TAL = "L", TAR = "R" }
export enum ETH { Select = "S", Img = "I", TAL = "L", TAR = "R" }
export enum ETD { Select = "S", Img = "I", TAL = "L", TAR = "R" }

export interface IATable extends IACtl { Type: ETable, Frame?: IATFrame, Cols?: Array<IATCol> }
export interface IATFrame extends IACtl { Type?: ETable }
export interface IATCol { TH?: IATH,  }
export interface IATH extends IACtl { Type?: ETH }
export interface IATD extends IACtl { Type?: ETD }

export interface ITable extends ICtl { Frame?: ITFrame, Cols?: Array<ITCol>  }
export interface ITFrame extends IACtl { Type?: ETFrame }
export interface ITCol { TH?: ITH, }
export interface ITH extends ICtl {}
export interface ITD extends ICtl {  }
