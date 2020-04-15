import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ELabel, IALabel, ILabel, Label } from '../../../Common/Ctls/Label';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../Common/Combos/LabelCtl/LabelCtl';
import { ECtl, IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';
import { ISize } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

@Component({ selector: 'labels', templateUrl: './labels.html' })

export class Labels {
    @Input() VMP: IViewModel;
    @Input() VM: Array<ILabel>;
    @Output() Click_Label: EventEmitter<any> = new EventEmitter();

    public OnClick(pCont: string) { this.Click_Label.emit(pCont); }
    public static Init(pLabels: Array<IALabel> = [], pCL: boolean = false) {
        //console.log("Line.Init * pCL=" + pCL);
        var labels: Array<ILabel> = [];
        pLabels.forEach(x => { labels.push(Label.Init(x.Value, pCL));});
        return labels;
    }
    static Stack(pLabels: Array<ILabel>, pSize: ISize, pCL: boolean = false) {
        //console.log("Labels.Stacks * .pLabels=" + JSON.stringify(pLabels));
        //console.log("Labels.Stacks * pY=" + pY);
        //console.log("Labels.Stacks * pGapY=" + pGapY);
        //pLabels.forEach(label => {
        //  Label.Stack(label, y, pGapY, pCL); y = label.NextY;
        //  pLabels.NextY = label.NextY;
        //});
    }

    static Size(pLabels: Array<ILabel>, pCL = false) {
        if (pCL) {
            //console.log("SizeSvc.ContFunc * pCont.Size=" + JSON.stringify(pCont.Size));
            //console.log("SizeSvc.ContFunc * Win=" + JSON.stringify(Win));
        }
        //if (pLine !== undefined) {
        //  if (pLine.Label !== undefined) Cont.Size(pLine.Label);
        //  if (pLine.Data !== undefined) Cont.Size(pLine.Data);
        //}
    }
}
