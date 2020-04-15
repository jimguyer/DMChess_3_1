//import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { IMenu, IMenuParms, Menu } from '../../../Common/Comps/Menu/Menu';
//import { IViewModel, Nav } from '../../../Common/Modules/Nav';

//@Component({ selector: 'menus', templateUrl: './Menus.html' })

//export class Menus {
//  @Input() VMP: IViewModel;
//  @Input() VM: Array<Menu>;
//  @Output() Click_Menu: EventEmitter<any> = new EventEmitter();

//  ngOnInit() {
//    //console.log("Menu.ngOnInit * VM.Size=" + JSON.stringify(this.VM.Size));
//    //console.log("Menu.ngOnInit * VM.Style=" + JSON.stringify(this.VM.Style));
//    //console.log("Menu.ngOnInit * VM.Opts=" + JSON.stringify(this.VM.Opts));
//    this.VM.forEach(x => {
//      //console.log("Menu.ngOnInit * this.VM.Opts.Value=" + x.Value);
//      //console.log("Menu.ngOnInit * this.VM.Opts.Size=" + JSON.stringify(x.Size));
//      //console.log("Menu.ngOnInit * this.VM.Opts.Style=" + JSON.stringify(x.Style));
//    });
//  }
//  public OnClick(pEvent: any) {
//    //console.log("Menu.OnClick * pMenuIdx=" + pMenuIdx + " * pOptIdx=" + pOptIdx);
//    //console.log("Menu.OnClick * MenuLabel=" + this.VM[pMenuIdx].Label + " * OptLabel=" + this.VM[pMenuIdx].Opts[pOptIdx].Label);
//    this.Click_Menu.emit({ pEvent });
//  }

//  static Init(pMenus: Array<IMenuParms>, pCL: boolean = false) {
//    //console.log("Menus.Init * pMenus=" + JSON.stringify(pMenus));
//    var menus: Array<IMenu> = [];
//    var idx = 0;
//    pMenus.forEach(x => {
//      x.Idx = idx;
//      menus.push(Menu.Init(x, false));

//    });

//    Menus.Size(menus, pCL);
//    if (pCL) {
//      //console.log("Menus.Init * menus=" + JSON.stringify(menus));
//    }
//    return menus;
//  }
//  static Size(pMenus: Array<IMenu>, pCL = false) {
//    if (pCL) {
//      pMenus.forEach(x => { 
//        //console.log("Menu.Size * pMenu.Opt.Size=" + JSON.stringify(x.Size));
//      });
//    }
//    pMenus.forEach(x => { Menu.Size(x) });
//  }
//}
