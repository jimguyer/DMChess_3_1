import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EButton, IAButton, IButton, Button } from '../../../Common/Ctls/Button';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';

import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

@Component({ selector: 'buttons', templateUrl: './Buttons.html' })

export class Buttons {
    @Input() VM: Array<IButton>;
    @Input() VMP: IViewModel;
    @Output() Click_Button: EventEmitter<any> = new EventEmitter();

    public OnClick(pSender: string) {
        //console.log("Buttons.ngOnInit * Buttons.VM=" + JSON.stringify(Buttons.VM));
        this.Click_Button.emit(pSender);
    }
    public static Init(pButtons: Array<IAButton>, pCL: boolean = false) {
        var buttons = [];
        pButtons.forEach(x => { buttons.push(Button.Init(x)); });
        return buttons;
    }
    //static Stack(pLabels: ILabels, pY: number, pGapY: number = Dft.GapY, pCL: boolean = false) {
    //  //console.log("Labels.Stacks * .pLabels=" + JSON.stringify(pLabels));
    //  //console.log("Labels.Stacks * pY=" + pY);
    //  //console.log("Labels.Stacks * pGapY=" + pGapY);
    //  var y = pY;
    //  pLabels.List.forEach(label => {
    //    this.Stack(label, y, pGapY, pCL); y = label.NextY;
    //    pLabels.NextY = label.NextY;
    //  });
    //}
    //static Train(pLabels: ILabels, pY: number, pGapY: number = Dft.GapY, pCL: boolean = false) {
    //  //console.log("Labels.Stacks * .pLabels=" + JSON.stringify(pLabels));
    //  //console.log("Labels.Stacks * pY=" + pY);
    //  //console.log("Labels.Stacks * pGapY=" + pGapY);
    //  var y = pY;
    //  pLabels.List.forEach(label => {
    //    this.Stack(label, y, pGapY, pCL); y = label.NextY;
    //    pLabels.NextY = label.NextY;
    //  });
    //}
}
