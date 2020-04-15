import { Component, OnInit } from '@angular/core';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { Tabs } from '../../../../Common/Comps/Tabs/Tabs';
import { IPage, Page } from '../../../../Common/Comps/Page/Page';

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

@Component({ templateUrl: './Players.html' })

export class Players {
    VM: IVM; static VM: IVM;


    constructor() { this.VM = Players.VM; Nav.Route_VM = Players.VM; }

    ngOnInit() {
        //console.log("Players.ngOnInit");
        //console.log("Players.ngOnInit * Route_Event=" + Nav.Route_Event);
        //console.log("Players.ngOnInit * View_Event=" + Nav.View_Event);
        //console.log("Players.ngOnInit *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("Players.ngOnInit * Route_Event=" + Nav.Route_Event);

        //console.log("Players.ngOnInit * Players.DM=" + JSON.stringify(Games.DM));
        this.VM.View = "Search";

        switch (Nav.Route_Event) {
            case "Home_ClickPlayers":
                break;
            default: alert("Players.ngOnInit * Unknown Nav.Route_Event=" + Nav.Route_Event); break;
        }
    }
    public static Init() {
        //console.log("Players.Init");
        this.VM = { Web: EWeb.Loading, View: "Search" };
    }

}
interface IVM extends IViewModel { }
