"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nav = /** @class */ (function () {
    function Nav() {
    }
    Nav.GoRoute = function (pEvent, pRoute, pView) {
        if (pView === void 0) { pView = null; }
        //console.log("Global.Navigate * Nav.Route=" + Nav.Route);
        //console.log("Global.Navigate * pEvent=" + pEvent + " * pRoute=" + pRoute + " * pView=" + pView);
        Nav.Route_Event = Nav.Route + "_" + pEvent; // Save From Route with Event
        Nav.Route = pRoute; // Save To Route
        Nav.View_Event = Nav.View + "_" + pEvent; // Save From View with Event
        Nav.View = pView === null ? pRoute : pView; // Save To View 
        Nav.Router.navigateByUrl('/' + Nav.Route);
        //console.log("Global.Navigate * Nav.Route=" + Nav.Route);
    };
    Nav.GoView = function (pEvent, pView, pParms) {
        if (pParms === void 0) { pParms = null; }
        Nav.Route_VM.View = pView;
        Nav.View_Event = Nav.View + "_" + pEvent;
        Nav.View = pView;
        if (pParms != null)
            Nav.View_Parms = pParms;
    };
    return Nav;
}());
exports.Nav = Nav;
//# sourceMappingURL=Nav.js.map