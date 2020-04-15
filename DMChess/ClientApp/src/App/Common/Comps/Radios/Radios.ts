import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';
import { ISize } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

import { ECtl, IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../Common/Combos/LabelCtl/LabelCtl';
import { ERadio, IARadio, IRadio, Radio } from '../../../Common/Ctls/Radio';


@Component({ selector: 'radios', templateUrl: './Radios.html' })

export class Radios {
    @Input() VMP: IViewModel;
    @Input() VM: IRadios;
    @Output() Change_Radio: EventEmitter<any> = new EventEmitter();
    @Output() Click_Radio: EventEmitter<any> = new EventEmitter();

    public OnChange(pIdx: string) { this.Click_Radio.emit({ Idx: pIdx, Label: this.VM.Lines[pIdx].Label.Value, Value: this.VM.Lines[pIdx].Data.Value }); }
    public OnClick(pIdx: string) { this.Change_Radio.emit({ Idx: pIdx, Label: this.VM.Lines[pIdx].Label.Value }); }
    public static Init(pALabelCtls: Array<IALabelCtl>, pCL: boolean = false) {
        var radios = [];
        pALabelCtls.forEach(x => { radios.push(LabelCtl.Init({ ALabel: x.ALabel, ARadio: x.ARadio, AValues: x.AValues, ASize: x.ASize }, pCL)); });
        return radios;
    }
    public static Stack(pALabelCtls: Array<ILabelCtl>, pCL: boolean = false) {
    }
}

export interface IRadios {
    Frame: ICtl, Lines: Array<ILabelCtl>
}


