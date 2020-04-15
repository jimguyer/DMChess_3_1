import { Component, OnInit } from '@angular/core';
import { EPosition } from '../../../../Common/Attrs/Position';
import { Nav } from '../../../../Common/Modules/Nav';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';
import { Board } from '../../../../Main/Shared/Views/Board/Board';

import { IGame, Game } from '../../../../Main/Shared/Modules/Game';


@Component({ templateUrl: './Practice.html' })
export class Practice {
  VM: VM; static VM: VM;
  constructor() { this.VM = Practice.VM; }

  ngOnInit() {
    //console.log("Practice.ngOnInit");
    Nav.Route_VM = this.VM;
    if (GM.Loaded.Practice) Board.Load("Data", { Game: Practice.VM.Game });
  }
  public static Init() {
    //console.log("Practice.Init");
    Practice.VM = { View: "Board" };
    GM.Inited.Practice = true;
  }
  public static Size() {
    //console.log("Practice.Size");
  }
  public static Load(pEvent: string, pObj: any) {
    //console.log("Practice.Load * pGame=" + JSON.stringify(pObj.Game));
    //console.log("Practice.Load * Nav.Route=" + Nav.Route);
    Practice.VM.Game = pObj.Game === undefined || pObj.Game === null ? Game.New : pObj.Game;
    GM.Loaded.Practice = true;
    if (Nav.Route == "Practice") Board.Load("Data", { Game: Practice.VM.Game });
  }
}
export interface VM { View?: String, Game?: IGame }
