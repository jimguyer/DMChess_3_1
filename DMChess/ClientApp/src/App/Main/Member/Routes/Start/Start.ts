import { Component, OnInit } from '@angular/core';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EFieldset, IAFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ETextbox, IATextbox, ITextbox, Textbox } from '../../../../Common/Ctls/Textbox';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';


@Component({ templateUrl: './Start.html' })

export class Start {
  VM: any; static VM: any;

  constructor() { this.VM = Start.VM; Nav.Route_VM = Start.VM; }

  ngOnInit() {
    //console.log("Recover.ngOnInit");
    //console.log("Recover.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
    //console.log("Recover.ngOnInit pView_Event=" + Nav.View_Event);
  }

  public static Init() {
    //console.log("Start.Init");
    this.VM = { View: "StartParms" };
  }
}
interface IVM extends IViewModel { }
