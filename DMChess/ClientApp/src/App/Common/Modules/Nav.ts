import { Router } from '@angular/router';
import { ITable } from '../../Common/Ctls/Table';
import { IPage } from '../../Common/Comps/Page/Page';
import { ITabs } from '../../Common/Comps/Tabs/Tabs';
import { IFieldLeg } from '../../Common/Combos/FieldLeg/FieldLeg';
import { IButton } from '../../Common/Ctls/Button';
import { IFieldset } from '../../Common/Ctls/Fieldset';
import { ILabel } from '../../Common/Ctls/Label';
import { EWeb } from '../../Common/Modules/Web';

import { IGM } from '../../Main/Shared/Modules/Global';
import { IHdr } from '../../Main/Shared/Comps/Hdr/Hdr';


export class Nav {
    public static Router: Router;
    public static Route: string;
    public static Route_VM: any;
    public static Route_DM: any;
    public static Route_Event: string;
    public static View: string;
    public static View_Event: string;
    public static View_Parms: any;


    public static GoRoute(pEvent: string, pRoute: string, pView: string = null) {
        //console.log("Global.Navigate * Nav.Route=" + Nav.Route);
        //console.log("Global.Navigate * pEvent=" + pEvent + " * pRoute=" + pRoute + " * pView=" + pView);
        Nav.Route_Event = Nav.Route + "_" + pEvent;     // Save From Route with Event
        Nav.Route = pRoute;                            // Save To Route
        Nav.View_Event = Nav.View + "_" + pEvent;       // Save From View with Event
        Nav.View = pView === null ? pRoute : pView;    // Save To View 
        Nav.Router.navigateByUrl('/' + Nav.Route);
        //console.log("Global.Navigate * Nav.Route=" + Nav.Route);
    }
    public static GoView(pEvent: string, pView: string, pParms: any = null) {
        Nav.Route_VM.View = pView;
        Nav.View_Event = Nav.View + "_" + pEvent;
        Nav.View = pView;
        if (pParms != null) Nav.View_Parms = pParms;
    }
}
export interface IViewModel extends IHdr {
    BigMsg?: ILabel,
    Buttons?: Array<IButton>
    Disabled?: boolean,
    Entry?: boolean,
    FieldLegs?: Array<IFieldLeg>,
    FieldLeg?: IFieldLeg,
    Input_Disabled?: boolean,
    Loaded?: boolean,
    Page?: IPage, 
    Route?: string,
    View?: string,
    Switch?: string, Show?: string,
    Tabs?: ITabs,
    Table?: ITable,
    Web?: EWeb 
}
