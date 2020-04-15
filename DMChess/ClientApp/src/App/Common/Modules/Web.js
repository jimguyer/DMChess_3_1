"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var Global_1 = require("../../Main/Shared/Modules/Global");
var httpOptions = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
var Web = /** @class */ (function () {
    function Web() {
    }
    Web.Get = function (pSubscribe, pAction, pKey, pKey2) {
        if (pKey === void 0) { pKey = null; }
        if (pKey2 === void 0) { pKey2 = null; }
        //console.log("Web.Get * GM.URL=" + GM.URL + " * pAction=" + pAction + " * pKey=" + pKey);
        //console.log("Web.Get * GM.URL=" + GM.URL + " * pAction=" + pAction + " * pKey=" + pKey);
        Global_1.GM.Http.get('/api/Web/Get', { params: new http_1.HttpParams().set('pAction', pAction).set('pKey', pKey).set('pKey2', pKey2) })
            //GM.Http.get(GM.URL + '/api/Web/Get', { params: new HttpParams().set('pAction', pAction).set('pKey', pKey).set('pKey2', pKey2) })
            .subscribe(function (Result) { return pSubscribe({ Method: "Get", Action: pAction, Error: Result.Error, Data: Result.Data }); }, function (error) { return pSubscribe({ Method: "Get", Action: pAction, Error: error }); });
    };
    Web.Post = function (pSubscribe, pAction, pData) {
        //console.log("Web.Post * GM.URL=" + GM.URL + " * pAction=" + pAction + " * pData=" + JSON.stringify(pData));
        Global_1.GM.Http.post('/api/Web/Post/', { Action: pAction, Data: pData }, { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) })
            .subscribe(function (Result) { return pSubscribe({ Method: "Post", Action: pAction, Error: Result.Error, Data: Result.Data }); }, function (error) { return pSubscribe({ Method: "Post", Action: pAction, Error: error }); });
    };
    return Web;
}());
exports.Web = Web;
var EWeb;
(function (EWeb) {
    EWeb[EWeb["Loading"] = 0] = "Loading";
    EWeb[EWeb["Server"] = 1] = "Server";
    EWeb[EWeb["Done"] = 2] = "Done";
})(EWeb = exports.EWeb || (exports.EWeb = {}));
//# sourceMappingURL=Web.js.map