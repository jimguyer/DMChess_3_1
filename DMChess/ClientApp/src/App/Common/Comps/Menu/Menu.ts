import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IViewModel, Nav } from '../../../Common/Modules/Nav';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IAFrame, IFrame } from '../../../Common/Modules/Size';
@Component({ selector: 'menu', templateUrl: './Menu.html' })

export class Menu {
  @Input() VMP: IViewModel;
  @Input() VM: IMenu;
  @Output() child: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit() { }
  public OnEnter(pMIdx: number, pOIdx: number) {
    //console.log("Menu.OnMouseEnter * pMIdx=" + pMIdx + " * pOIdx=" + pOIdx);
    this.VM[pMIdx].Opts[pOIdx].Size = this.VM[pMIdx].Opts[pOIdx].Alt.Size; this.VM[pMIdx].Opts[pOIdx].Style = this.VM[pMIdx].Opts[pOIdx].Alt.Style;
    this.child.emit({ Sender: "Menu", Event: "Enter", MIdx: pMIdx, OIdx: pOIdx });
  }
  public OnLeave(pMIdx: number, pOIdx: number) {
    //console.log("Menu.OnMouseLeave * pMIdx=" + pMIdx + " * pOIdx=" + pOIdx);
    this.VM[pMIdx].Opts[pOIdx].Size = this.VM[pMIdx].Opts[pOIdx].Reg.Size; this.VM[pMIdx].Opts[pOIdx].Style = this.VM[pMIdx].Opts[pOIdx].Reg.Style;
    this.child.emit({ Sender: "Menu", Event: "Leave", MIdx: pMIdx, OIdx: pOIdx });
  }
  public OnClick(pMIdx: number, pOIdx: number) {
    //console.log("Menu.OnClick * pMenuIdx=" + pMIdx + " * pOptIdx=" + pOIdx);
    this.child.emit({ Sender: "Menu", Event: "Click", MIdx: pMIdx, OIdx: pOIdx });
  }

  static Inits(pAMenus: Array<IAMenu>, pCL: boolean = false) {
    //alert("Menu.Inits");
    if (pCL) {
      //console.log("Menu.Init * pAMenu=" + JSON.stringify(pAMenu));
    }
    var menus: Array<IMenu> = [];
    pAMenus.forEach(x => { menus.push(this.Init(x, pCL)) })
    Menu.Sizes(menus, pCL);
    if (pCL) {
      //console.log("Menu.Inits.End * menu=" + JSON.stringify(menus));
    }
    return menus;
  }
  static Init(pAMenu: IAMenu, pCL: boolean = false) {
    //console.log("Menu.Init * pAMenu=" + JSON.stringify(pAMenu));
    //console.log("Menu.Init * pAMenu.Type=" + pAMenu.Type);
    if (pCL) {
      //console.log("Menu.Init * pAMenu=" + JSON.stringify(pAMenu));
    }
    var aDft: IACtl;
    switch (pAMenu.Type) {
      case EMenu.Root: aDft = Dft.AMenu; break;
      case EMenu.Sub: aDft = Dft.AMenu_Sub; break;
    }
    var menu: IMenu = Ctl.Init(pAMenu, aDft, pCL);
    menu.Type = pAMenu.Type;
    menu.Show = pAMenu.Show;
    menu.Opts = [];
    pAMenu.Opts.forEach(x => {
      //console.log("Menu.Init * pMenu.Opt=" + JSON.stringify(x));
      //console.log("Menu.Init * pMenu.Opt=" + JSON.stringify(x));
      var aDft_Reg: IACtl; var aDft_Alt: IACtl;
      switch (menu.Type) {
        case EMenu.Root:
          //console.log("Menu.Init.Opt.Root * pMenu.Opt=" + JSON.stringify(x));
          switch (x.Type) {
            case EOpt.Menu: aDft_Reg = Dft.AMenu.Opt.Menu, pCL; aDft_Alt = Dft.AMenu.Opt.Menu_Alt, pCL; break;
            case EOpt.Link: aDft_Reg = Dft.AMenu.Opt.Link, pCL; aDft_Alt = Dft.AMenu.Opt.Link_Alt, pCL; break;
            case EOpt.Route: aDft_Reg = Dft.AMenu.Opt.Route, pCL; aDft_Alt = Dft.AMenu.Opt.Route_Alt, pCL; break;
          }
          break;
        case EMenu.Sub:
          //console.log("Menu.Init.Opt.Sub * Menu.Type=" + menu.Type + " Sub.Type=" + x.Type);
          switch (x.Type) {
            case EOpt.Menu: aDft_Reg = Dft.AMenu_Sub.Opt.Menu, pCL; aDft_Alt = Dft.AMenu_Sub.Opt.Menu_Alt, pCL; break;
            case EOpt.Link: aDft_Reg = Dft.AMenu_Sub.Opt.Link, pCL; aDft_Alt = Dft.AMenu_Sub.Opt.Link_Alt, pCL; break;
            case EOpt.Route: aDft_Reg = Dft.AMenu_Sub.Opt.Route, pCL; aDft_Alt = Dft.AMenu_Sub.Opt.Route_Alt, pCL; break;
          }
          //console.log("Menu.Init.Opt * Dft.AMenu_Sub.Opt.Route=" + JSON.stringify(Dft.AMenu_Sub.Opt.Route));
          //console.log("Menu.Init.Opt *          aDft_Reg.aDft_Reg=" + JSON.stringify(aDft_Reg));

          break;
      }
      //console.log("Menu.Init.Opt * aDft_Reg.aDft_Reg=" + JSON.stringify(aDft_Reg));
      //console.log("Menu.Init.Opt * aDft_Reg.aDft_Reg=" + JSON.stringify(aDft_Reg));
      //console.log("Menu.Initt.Opt * aDft_Reg.aDft_Alt=" + JSON.stringify(aDft_Alt));
      menu.Opts.push(Ctl.InitAlt(x, aDft_Reg, aDft_Alt, pCL));
    });
    if (pCL) {
      //console.log("Menu.Init.End * menu=" + JSON.stringify(menu));
    }
    return menu;
  }
  static Sizes(pMenus: Array<IMenu>, pCL = false) {
    pMenus.forEach(x => {
      this.Size(x);
    });
  }
  static Size(pMenu: IMenu, pCL = false) {
    Ctl.Size(pMenu);
    pMenu.Opts.forEach(x => {
      Ctl.Size(x);
      Ctl.Size(x.Reg);
      Ctl.Size(x.Alt);
    });
  }
}

export interface IAMenu extends IACtl { Type?: EMenu, Opts?: Array<IAOpt>}
export interface IAOpt extends IACtl  { Type?: EOpt }
//export interface IMenus =  Array<IMenu>; 
export interface IMenu extends ICtl { Type?: EMenu, Opts?: Array<IOpt>; }
export interface IOpt extends ICtl { Type?: EOpt }
export enum EMenu { Root = "R", Sub = "S", Sub2 = "S2", Sub3 = "S3", Sub4 = "S4" }
export enum EOpt { Link = "L", Route = "R", Menu = "M" }
