import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ELabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { IViewModel } from '../../../../Common/Modules/Nav';
import { IGM, GM } from '../../../../Main/Shared/Modules/Global';



@Component({ selector: 'ftr', templateUrl: './Ftr.html' })

export class Ftr {
  @Input() VMP: IViewModel;
  @Input() VM: IFtr;
  @Output() Child_Click: EventEmitter<any> = new EventEmitter();
  GM: IGM;

  constructor() { this.GM = GM; }
  ngOnInit() { }

  public OnClick(pSender: string) {
    //console.log("Ftr.OnClick");
    this.Child_Click.emit(pSender);
  }
  public static Init(pAFtr: IAFtr = null, pCL: boolean = false) {
    //console.log("Ftr.Init");
    var ftr : IFtr = {
      Msg: Label.Init({ Type: ELabel.Msg }, false)
    }
    //console.log("Ftr.Init * this.VM.Msg=" + JSON.stringify(this.VM.Msg));
    return ftr;
  }

  public static Size(pFtr: IFtr, pCL: boolean = false) {
    //console.log("Ftr.Size * this.VM.Msg.Size=" + JSON.stringify(this.VM.Msg.Size));
    Label.Size(pFtr.Msg);
    //console.log("Ftr.Size * this.VM.Msg=" + JSON.stringify(this.VM.Msg.Style));
  }
}
export enum EFtr { Standard = "S" }
export interface IAFtr { Type: EFtr, Msg?: ILabel }
export interface IFtr { Msg?: ILabel }
