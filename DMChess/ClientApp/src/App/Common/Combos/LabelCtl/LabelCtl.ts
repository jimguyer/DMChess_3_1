import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISize } from '../../../Common/Modules/Size';
import { ECheckbox, IACheckbox, ICheckbox, Checkbox } from '../../../Common/Ctls/Checkbox';
import { EImg, IAImg, IImg, Img } from '../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../Common/Ctls/Label';
import { ERadio, IARadio, IRadio, Radio } from '../../../Common/Ctls/Radio';
import { ESelect, IASelect, ISelect, Select } from '../../../Common/Ctls/Select';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../Common/Ctls/Textbox';
import { ECtl, IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';
import { IASize } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';


@Component({ selector: 'labelctl', templateUrl: './LabelCtl.html' })

export class LabelCtl {
  @Input() VMP: IViewModel;
  @Input() VM: ILabelCtl;
  @Output() Child_Change: EventEmitter<any> = new EventEmitter();
  @Output() Child_Click: EventEmitter<any> = new EventEmitter();

  OnChange() { this.Child_Change.emit({ Label: this.VM.Label.Value, Value: this.VM.Ctl.Value }); }
  OnClick() { this.Child_Click.emit({ Label: this.VM.Label.Value, Value: this.VM.Ctl.Value }); }

  static Init(pALabelCtl: IALabelCtl, pCL: boolean = false) {
    //console.log("LabelCtl.Init * pALabelCtl=" + JSON.stringify(pALabelCtl));
    if (pCL) {
      //console.log("LabelCtl.Init * pALabelCtl=" + JSON.stringify(pALabelCtl));
    }
    var label: ILabel = Label.Init(pALabelCtl.ALabel, pCL);

    //#region gapX

    //console.log("LabelCtl.Init * aCtl=" + JSON.stringify(aCtl));
    //console.log("LabelCtl.Init * pALabelCtl=" + JSON.stringify(aCtl));

    //#endregion



    //#region aType

    var aType: ECtl;
    if (pALabelCtl.ACheckbox !== undefined) aType = ECtl.Checkbox;
    else if (pALabelCtl.AImg !== undefined) aType = ECtl.Img;
    else if (pALabelCtl.AOutput !== undefined) aType = ECtl.Label;
    else if (pALabelCtl.ARadio !== undefined) aType = ECtl.Radio;
    else if (pALabelCtl.ASelect !== undefined) aType = ECtl.Select;
    else if (pALabelCtl.ATextbox !== undefined) aType = ECtl.Textbox;
    else aType = null;
    //#endregion

    //#region aCtl

    var aCtl: any;
    switch (aType) {
      default: alert("LabelCtl.Init");
      case ECtl.Checkbox: aCtl = pALabelCtl.ACheckbox; break;
      case ECtl.Img: aCtl = pALabelCtl.AImg; break;
      case ECtl.Label: aCtl = pALabelCtl.AOutput; break;
      case ECtl.Radio: aCtl = pALabelCtl.ARadio; break;
      case ECtl.Select: aCtl = pALabelCtl.ASelect; break;
      case ECtl.Textbox: aCtl = pALabelCtl.ATextbox; break;
    }

    var size: ISize = {}
    if (pALabelCtl.ASize && pALabelCtl.ASize.Y) size.Y = pALabelCtl.ASize.Y;
    else if (pALabelCtl.ALabel && pALabelCtl.ALabel.Y) size.Y = pALabelCtl.ALabel.Y;
    else if (aCtl.Y) size.Y = aCtl.Y;

    if (pALabelCtl.ASize && pALabelCtl.ASize.H) size.H = pALabelCtl.ASize.H;
    else if (pALabelCtl.ALabel.H) size.H = pALabelCtl.ALabel.H;
    else if (aCtl.H) size.H = aCtl.H;
    else size.H = Dft.H;

    if (pALabelCtl.ASize && pALabelCtl.ASize.S) size.S = pALabelCtl.ASize.S;
    else if (pALabelCtl.ALabel.S) size.S = pALabelCtl.ALabel.S;
    else if (aCtl.S) size.S = aCtl.S;

    if (pALabelCtl.ASize && pALabelCtl.ASize.GapX) size.GapX = pALabelCtl.ASize.GapX;
    else if (pALabelCtl.ALabel && pALabelCtl.ALabel.GapX) size.GapX = pALabelCtl.ALabel.GapX;
    else if (aCtl.GapX) size.GapX = aCtl.GapX;
    else size.GapX = Dft.GapX;

    if (pALabelCtl.ASize && pALabelCtl.ASize.GapY) size.GapY = pALabelCtl.ASize.GapY;
    else if (pALabelCtl.ALabel && pALabelCtl.ALabel.GapY) size.GapY = pALabelCtl.ALabel.GapY;
    else if (aCtl.GapY) size.GapX = aCtl.GapY;
    else size.GapY = Dft.GapY;

    //#endregion

    //#region ASize

    if (!aCtl.X) aCtl.X = label.Size.X + label.Size.W + size.GapX;
    if (!aCtl.S) aCtl.H = Dft.H;
    if (!aCtl.W) aCtl.W = Dft.Cols - label.Size.X - aCtl.X;
    if (!aCtl.H) aCtl.H = size.H;

    //#endregion

    //#region Init Ctl

    var ctl: any;

    switch (aType) {
      default: alert("Unknown Control Type");
      case ECtl.Checkbox: ctl = Checkbox.Init(pALabelCtl.ACheckbox, pCL); break;
      case ECtl.Img: ctl = Img.Init(pALabelCtl.AImg, pCL); break;
      case ECtl.Label: ctl = Label.Init(pALabelCtl.ALabel, pCL); break;
      case ECtl.Radio: ctl = Radio.Init(pALabelCtl.ARadio, pCL); break;
      case ECtl.Select: ctl = Select.Init(pALabelCtl.ASelect, pCL); break;
      case ECtl.Textbox: ctl = Textbox.Init(pALabelCtl.ATextbox, pCL); break;
    }
    //#endregion

    if (pALabelCtl.AValues !== undefined) {
      label.Value = pALabelCtl.AValues.Label;
      ctl.Value = pALabelCtl.AValues.Ctl;
    }
    return { Label: label, Ctl: ctl, Size: size };
  }
  static Stacks(pLabelCtls: Array<ILabelCtl>, pSize: ISize, pCL: boolean = false) { }
  static Stack(pLabelCtl: ILabelCtl, pSize: ISize, pCL: boolean = false) {
    if (pCL) {
      //console.log("LabelCtl.Stack.End ============================================================================");
      //console.log("LabelCtl.Stack * pLabelCtl.Size.H=" + pLabelCtl.Size.H);
      //console.log("LabelCtl.Stack * pLabelCtl.Label.Size.H=" + pLabelCtl.Label.Size.H);
      //console.log("LabelCtl.Stack * pLabelCtl.Ctl.Size.H=" + pLabelCtl.Ctl.Size.H);
    }
    var gapY = pSize.GapY ? pSize.GapY : pLabelCtl.Size.GapY;
    pLabelCtl.Size.Y = pSize.Y; pLabelCtl.Size.NextY = pLabelCtl.Size.Y + pLabelCtl.Size.H + gapY;

    pLabelCtl.Label.Size.Y = pLabelCtl.Size.Y; pLabelCtl.Label.Size.NextY = pLabelCtl.Size.NextY;
    pLabelCtl.Ctl.Size.Y = pLabelCtl.Size.Y; pLabelCtl.Ctl.Size.NextY = pLabelCtl.Size.NextY;
    if (pCL) {
      //console.log("LabelCtl.Stack.End * pLabelCtl.Size=" + JSON.stringify(pLabelCtl.Size));
      //console.log("LabelCtl.Stack.End * pLabelCtl.Label.Size * Y=" + pLabelCtl.Label.Size.Y + " * NextY=" + pLabelCtl.Label.Size.NextY + " * GapY=" + pLabelCtl.Label.Size.GapY);
      //console.log("LabelCtl.Stack.End * pLabelCtl.Ctl.Size   * Y=" + pLabelCtl.Ctl.Size.Y + " * NextY=" + pLabelCtl.Ctl.Size.NextY + " * GapY=" + pLabelCtl.Ctl.Size.GapY);
      //console.log("LabelCtl.Stack.End ============================================================================");
    }
  }
  static Sizes(pLabelCtls: Array<ILabelCtl>, pCL: boolean = false) {
  }
  static Size(pLabelCtl: ILabelCtl, pCL: boolean = false) {
    if (pCL) {
      //console.log("LabelCtl.Size * pLabelCtl.Size=" + JSON.stringify(pLabelCtl.Size));
    }
    if (pLabelCtl) {
      if (pLabelCtl.Label) Ctl.Size(pLabelCtl.Label);
      if (pLabelCtl.Ctl) Ctl.Size(pLabelCtl.Ctl);
    }
  }
}
export interface IALabelCtl {
  ALabel?: IALabel,
  ACheckbox?: IACheckbox,
  AImg?: IAImg,
  AOutput?: IALabel,
  ARadio?: IARadio,
  ASelect?: IASelect,
  ATextbox?: IATextbox,
  AValues?: IAValues,
  ASize?: IASize
}
export interface ILabelCtl {
  Show?: boolean,
  Label?: ILabel,
  Ctl?: ICtl,
  Size?: ISize
}
export interface IAValues { Label?: string, Ctl?: any }
