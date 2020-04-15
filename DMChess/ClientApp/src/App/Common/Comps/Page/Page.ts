import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

@Component({ selector: 'page', templateUrl: './Page.html' })

export class Page {
    @Input() VMP: IViewModel;
    @Input() VM: IPage;
    @Output() Click_Page: EventEmitter<any> = new EventEmitter();
    //constructor() { this.VM = Page.VM; }
    ngOnInit() {
        //console.log("Page.ngOnInit");
        //console.log("Page.ngOnInit * Nav.Route_Event=" + Nav.Route_Event);
        //console.log("Page.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        //console.log("Page.ngOnInit * Nav.View_Parms=" + JSON.stringify(Nav.View_Parms));
        //console.log("Page.ngOnInit * Page.VM=" + JSON.stringify(Page.VM));
        //console.log("Page.ngOnInit * Page.VM.Current=" + Page.VM.Current);
        //console.log("Page.ngOnInit * Page.VM.Last=" + Page.VM.Last);
        //console.log("Page.ngOnInit * Page.VM.LPP=" + Page.VM.LPP);
        //console.log("Page.ngOnInit * Page.VM.Rows.length=" + Page.VM.Rows.length);
        //console.log("Page.ngOnInit * Page.VM.Lines.length=" + Page.VM.Lines.length);
        //if (GM.Sized.Page == null) Page.Size();
        //Page.Load(Nav.View_Parms);
        this.View({ Show: "*" });
    }

    private OnClick(pSender: string) {
        //console.log("Page.OnClick * pButton=" + pSender);
        //console.log("Page.OnClick * Page.VM.Current=" + Page.VM.Current);
        //console.log("Page.OnClick * Page.VM.Last=" + Page.VM.Last);
        //console.log("Page.OnClick * Page.VM.LPP=" + Page.VM.LPP);
        //console.log("Page.OnClick * Page.VM.Rows.length=" + Page.VM.Rows.length);
        //console.log("Page.OnClick * Page.VM.Lines.length=" + Page.VM.Lines.length);
        //console.log("Page.OnClick * Page.VM=" + JSON.stringify(Page.VM));
        var vm = this.VM;
        this.Click_Page.emit(pSender);
        switch (pSender) {
            case "First": vm.PageCurrent = 0; break;
            case "Prev": vm.PageCurrent--; break;
            case "Next": vm.PageCurrent++; break;
            case "Last": vm.PageCurrent = vm.PageLast; break;
        }
        vm.Lines = [];
        for (var x = vm.PageCurrent * vm.LPP; x < vm.Rows.length && x < vm.PageCurrent * vm.LPP + vm.LPP; x++) {
            //console.log("Page.OnClick * vm.Rows[" + x + "].UserId=" + vm.Rows[x].UserId);
            vm.Lines.push(vm.Rows[x]);
            vm.Lines[vm.Lines.length - 1].Select = false;
        }
        this.View({ Show: "*" });
    }
    private View(pObj: any) {
        var vm = this.VM;
        if (pObj.Show !== undefined) {
            //console.log("Profiles.View.Show * pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "*":
                    vm.Frame.Show = vm.Rows.length > vm.LPP;
                    vm.First.Show = vm.PageCurrent > 0;
                    vm.Last.Show = vm.PageCurrent < vm.PageLast;
                    break;
                default: alert("Page.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Msg != null) {
            //console.log("Page.View.Msg * pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "First": GM.Msg = "First"; break;
                case "Prev": GM.Msg = "Prev"; break;
                case "Next": GM.Msg = "Next"; break;
                case "Last": GM.Msg = "Last"; break;
                default: alert("Page.View.Msg * Unknown=" + pObj.Msg); break;
            }
        }
    }
    public static Init(pAPage: IAPage, pCL: boolean) {
        //console.log("Page.Init");
        var page: IPage = {
            PageCurrent: 0, PageLast: 0, LPP: 5, RowIdx: null, Rows: [],
            Lines: [],
            Frame: Ctl.Init(pAPage.Attrs, Dft.APage.Frame, pCL),
            First: Ctl.Init(pAPage.First.Attrs, Dft.APage.First, pCL),
            Prev: Ctl.Init(pAPage.Prev.Attrs, Dft.APage.Prev, pCL),
            Next: Ctl.Init(pAPage.Next.Attrs, Dft.APage.Next, pCL),
            Last: Ctl.Init(pAPage.Next.Attrs, Dft.APage.Next, pCL)
        }
        page.First.Show = true;
        page.Prev.Show = true;
        page.Next.Show = true;
        page.Last.Show = true;
        return page;
    }
    public static Build(pData: any, pLPP: number, pCL: boolean = false) {
    }
    public static Load(pPage: IPage, pRows: Array<any>, pLPP: number = 5) {
        //console.log("Page.Build");
        //console.log("Page.Build * pRows.length=" + pRows.length);
        pPage.LPP = pLPP;
        pPage.Rows = pRows;
        for (var x = 0; x < pRows.length; x++) pPage.Rows[x].Value = x;
        pPage.Lines = [];
        for (var x = pPage.PageCurrent * pPage.LPP; x < pPage.Rows.length && x < pPage.LPP; x++) pPage.Lines.push(pPage.Rows[x]);
        pPage.PageLast = Math.floor(pPage.Rows.length / pPage.LPP - .01);
    };
    public static Size(pPage: IPage) {
        //console.log("Page.Size");
        //Size.ViewModel(this.VM, false);
        Ctl.Size(pPage.Frame, false);
        Ctl.Size(pPage.First, false);
        Ctl.Size(pPage.Prev, false);
        Ctl.Size(pPage.Next, false);
        Ctl.Size(pPage.Last, false);

        //console.log("Page.Size * this.VM.Frame.Size=" + JSON.stringify(this.VM.Frame.Size));
        //console.log("Page.Size * this.VM.Frame.Style=" + JSON.stringify(this.VM.Frame.Style));

        //console.log("Page.Size * this.VM.First.Size=" + JSON.stringify(this.VM.First.Size));
        //console.log("Page.Size * this.VM.First.Style=" + JSON.stringify(this.VM.First.Style));
        //console.log("Page.Size * this.VM.Prev.Size=" + JSON.stringify(this.VM.Prev.Size));
        //console.log("Page.Size * this.VM.Prev.Style=" + JSON.stringify(this.VM.Prev.Style));
        //console.log("Page.Size * this.VM.Next.Size=" + JSON.stringify(this.VM.Next.Size));
        //console.log("Page.Size * this.VM.Next.Style=" + JSON.stringify(this.VM.Next.Style));
        //console.log("Page.Size * this.VM.Last.Size=" + JSON.stringify(this.VM.Last.Size));
        //console.log("Page.Size * this.VM.Last.Style=" + JSON.stringify(this.VM.Last.Style));
    }
}


export interface IAPage { Attrs: IACtl, First: IAIcon, Prev: IAIcon, Next: IAIcon, Last: IAIcon }
export interface IAIcon { Attrs: IACtl }
export interface IPage {
    Select?: number; PageCurrent: number; PageLast: number; LPP: number; RowIdx: number; Rows: Array<any>,
    Lines: Array<any>, Frame: ICtl, First: ICtl, Prev: ICtl, Next: ICtl, Last: ICtl
}
