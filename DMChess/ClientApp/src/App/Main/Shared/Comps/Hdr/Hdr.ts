import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { EDiv, IADiv, IDiv, Div } from '../../../../Common/Ctls/Div';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { IViewModel } from '../../../../Common/Modules/Nav';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { IGM, GM } from '../../../../Main/Shared/Modules/Global';

@Component({ selector: 'hdr', templateUrl: './Hdr.html' })

export class Hdr {
  @Input() VMP: IViewModel;
  @Input() VM: IHdr;
  @Output() Child_Click: EventEmitter<any> = new EventEmitter();
  GM: any; static GM: any;
  constructor() { this.GM = GM; }
  ngOnInit() { }
  public OnClick(pSender: string) { this.Child_Click.emit(pSender); }

  public static Init(pAHdr: IAHdr = null, pCL: boolean = false) {
    //console.log("Hdr.Init");
    var hdr: IHdr =  {
      Div: Div.Init({ Type: EDiv.Hdr }, false),
      IconL: Img.Init({ Type: EImg.IconL, Z: 2, S: 4 }, false),
      IconR: Img.Init({ Type: EImg.IconR, Z: 2 }, false),
      Banner: Label.Init({ Type: ELabel.Banner, Z: 1, F: "1WhBGeorgia", Value: pAHdr.Banner.Value }, false)
    }
    Div.Stack(hdr.Div, { Y: Dft.Y }, pCL);
    GM.Hdr_NextY = hdr.Div.Size.NextY;
    if (pCL) {
      //console.log("Hdr.Init.End * hdr.Div.NextY=" + hdr.Div.Size.NextY);
      //console.log("Hdr.Init.End * GM.Hdr_NextY=" + GM.Hdr_NextY);

      //console.log("Hdr.Init.End * hdr.Div.Size=" + JSON.stringify(hdr.Div.Size));
      //console.log("Hdr.Init.End * hdr.IconL.Size=" + JSON.stringify(hdr.IconL.Size));
      //console.log("Hdr.Init.End * hdr.IconR.Size=" + JSON.stringify(hdr.IconR.Size));
      //console.log("Hdr.Init.End * hdr.Banner.Size=" + JSON.stringify(hdr.Banner.Size));
      //console.log("Hdr.Init.End * hdr.BackgroundImg.Size=" + JSON.stringify(hdr.BackgroundImg.Size));


      //console.log("Hdr.Init.End * hdr.Div.Style=" + JSON.stringify(hdr.Div.Style));
      //console.log("Hdr.Init.End * hdr.IconL.Style=" + JSON.stringify(hdr.IconL.Style));
      //console.log("Hdr.Init.End * hdr.IconR.Style=" + JSON.stringify(hdr.IconR.Style));
      //console.log("Hdr.Init.End * hdr.Banner.Style=" + JSON.stringify(hdr.Banner.Style));
      //console.log("Hdr.Init.End * hdr.BackgroundImg.Style=" + JSON.stringify(hdr.BackgroundImg.Style));
      //console.log("Hdr.Init.End --------------------------------------------------");
    }
    return hdr;
  }

  public static Size(pHdr: IHdr, pCL: boolean = false) {
    //console.log("Hdr.Size * hdr=" + JSON.stringify(hdr));
    Div.Size(pHdr.Div, false);
    Label.Size(pHdr.Banner, false);
    Img.Size(pHdr.IconL, false);
    Img.Size(pHdr.IconR, false);
    //console.log("Hdr.Size.End * pHdr.Div.Size=" + JSON.stringify(pHdr.Div.Size));
    //console.log("Hdr.Size.End * pHdr.Div.Style=" + JSON.stringify(pHdr.Div.Style));
    //console.log("Hdr.Size.End * pHdr.IconL.Style=" + JSON.stringify(pHdr.IconL.Style));
    //console.log("Hdr.Size.End * pHdr.IconR.Style=" + JSON.stringify(pHdr.IconR.Style));
    //console.log("Hdr.Size.End * pHdr.Banner.Style=" + JSON.stringify(pHdr.Banner.Style));
  }
}
export enum EHdr { LoggedOut = "O", Member = "M", Admin = "A" }
export interface IAHdr extends IACtl { Type?: EHdr, Div?: IDiv, IconL?: IImg, IconR?: IImg, Banner?: ILabel }
export interface IHdr { Div?: IDiv, IconL?: IImg, IconR?: IImg, Logo?: IImg, Banner?: ILabel }
