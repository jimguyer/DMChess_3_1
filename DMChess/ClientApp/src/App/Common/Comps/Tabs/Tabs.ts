import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';
import { ISize } from '../../../Common/Modules/Size';
import { IStyle } from '../../../Common/Modules/Style';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';

@Component({ selector: 'tabs', templateUrl: './Tabs.html' })

export class Tabs {
    VM: ITabs; static VM: ITabs;
    @Output() Click_Tab: EventEmitter<any> = new EventEmitter();

    constructor() { this.VM = Tabs.VM; }
    ngOnInit() {
        //console.log("Tabs.ngOnInit");
        //console.log("Tabs.ngOnInit pView_Event=" + Nav.View_Event);
        //console.log("Tabs.ngOnInit Location.path()=" + this.Location.path());  

    }

    public OnClick(pIdx: number) {
        //console.log("Tabs.OnClick * pIdx=" + pIdx);
        this.VM.Styles[this.VM.Idx] = this.VM.Idx === 0 ? this.VM.Inactive0.Style : this.VM.Inactive.Style;
        this.VM.Idx = pIdx;
        this.VM.Styles[this.VM.Idx] = this.VM.Idx === 0 ? this.VM.Active0.Style : this.VM.Active.Style;
        this.Click_Tab.emit({ Idx: pIdx, Value: this.VM.Values[pIdx] });
    }

    public static Init(pATabs: IATabs, pCL: boolean = false) {
        //console.log("Tabs.Init * pValues=" + JSON.stringify(pValues) + " * pIdx=" + pIdx);
        var idx = pATabs.Idx !== undefined ? pATabs.Idx : 0;
        this.VM = {
            Idx: idx,
            View: pATabs.Values[idx],
            Values: pATabs.Values,
            Styles: [],
            Frame: Ctl.Init(pATabs.Frame, Dft.ATabs.Frame, pCL),
            IndentL: Ctl.Init(pATabs.IndentL, Dft.ATabs.IndentL, pCL),
            IndentR: Ctl.Init(pATabs.IndentR, Dft.ATabs.IndentR, pCL),
            Active0: Ctl.Init(pATabs.Active0, Dft.ATabs.Active0, pCL),
            Inactive0: Ctl.Init(pATabs.Inactive0, Dft.ATabs.Inactive0, pCL),
            Active: Ctl.Init(pATabs.Active, Dft.ATabs.Active, pCL),
            Inactive: Ctl.Init(pATabs.Inactive, Dft.ATabs.Inactive, pCL),
            Body: Ctl.Init(pATabs.Body, Dft.ATabs.Body, pCL),
        }
        var vm = this.VM;
        vm.IndentL.Show = pATabs.IndentL ? true : false;
        for (var x = 0; x < pATabs.Values.length; x++) {
            if (x === 0) vm.Styles.push(x === idx ? vm.Active0.Style : vm.Inactive0.Style);
            else vm.Styles.push(x === idx ? vm.Active.Style : vm.Inactive.Style);
        }

        //console.log("Tabs.Init * pIdx=" + pIdx);
        //console.log("Tabs.Init * this.VM.Values=" + JSON.stringify(this.VM.Values));
        //console.log("Tabs.Init * this.VM.Values[" + pIdx + "]=" + this.VM.Values[pIdx]);
        //Nav.View("Click", this.VM.Values[pIdx]);
        return this.VM;
    }

    public static Load(pTabs: ITabs) {
        //console.log("Tabs.Load * pTabs=" + JSON.stringify(pTabs.Values));
        this.VM = pTabs;

    }
    public static Show(pTabs: ITabs) {
        //console.log("Tabs.Show * pTabs=" + JSON.stringify(pTabs.Values));
        //console.log("Tabs.Show * pTabs.Idx=" + pTabs.Idx);

        var vm = this.VM;
        vm.IndentL = pTabs.IndentL;
        vm.IndentR = pTabs.IndentR;
        vm.Values = pTabs.Values;
        vm.Idx = pTabs.Idx;
        vm.Styles = [];

        for (var x = 0; x < vm.Values.length; x++) {
            if (x === 0) vm.Styles.push(x === vm.Idx ? vm.Active0.Style : vm.Inactive0.Style);
            else vm.Styles.push(x === vm.Idx ? vm.Active.Style : vm.Inactive.Style);

            //console.log("Tabs.Show * this.VM.Styles[" + x + "].border-bottom-color=" + this.VM.Styles[x]["border-bottom-color"])
            //console.log("Tabs.Show * this.VM.Styles[" + x + "].border-bottom-style=" + this.VM.Styles[x]["border-bottom-style"])
            //console.log("Tabs.Show * this.VM.Styles[" + x + "].border-bottom-style=" + this.VM.Styles[x]["border-bottom-width"])
        }

        //console.log("Tabs.Show * this.VM.Idx=" + this.VM.Idx);

        //console.log("Tabs.Show * this.VM.Styles[1].border-bottom-color=" + this.VM.Styles[1]["border-bottom-color"])
        //console.log("Tabs.Show * this.VM.Styles[1].border-bottom-style=" + this.VM.Styles[1]["border-bottom-style"])
        //console.log("Tabs.Show * this.VM.Styles[1].border-bottom-style=" + this.VM.Styles[1]["border-bottom-width"])

        //console.log("Tabs.Show * this.VM.Inactive.Style.border-bottom-color=" + this.VM.Inactive.Style["border-bottom-color"])
        //console.log("Tabs.Show * this.VM.Inactive.Style.border-bottom-style=" + this.VM.Inactive.Style["border-bottom-style"])
        //console.log("Tabs.Show * this.VM.Inactive.Style.border-bottom-style=" + this.VM.Inactive.Style["border-bottom-width"])
    }

    public static Size() {
        //console.log("Tabs.Size * pTabs.Tabs.length=" + pTabs.Tabs.length);
        var vm = this.VM;
        Ctl.Size(vm.Frame);
        if (vm.IndentL !== undefined) Ctl.Size(vm.IndentL);
        if (vm.IndentR !== undefined) Ctl.Size(vm.IndentR);
        Ctl.Size(vm.Active0);
        Ctl.Size(vm.Inactive0);
        Ctl.Size(vm.Active);
        Ctl.Size(vm.Inactive);
        Ctl.Size(vm.Body);
    }

}
export interface IATabs {
    Values: Array<string>,
    Idx?: number;
    Attrs?: IACtl,
    Frame?: IACtl,
    IndentL?: IACtl,
    IndentR?: IACtl,
    Active0?: IACtl,
    Inactive0?: IACtl,
    Active?: IACtl,
    Inactive?: IACtl,
    Body?: IACtl
}

export interface ITabs {
    Idx: number, View: string, Values: Array<string>; Styles: Array<IStyle>;
    Frame: ICtl, IndentL?: ICtl, IndentR?: ICtl, Active0: ICtl, Inactive0: ICtl, Active: ICtl, Inactive: ICtl, Body: ICtl
}
