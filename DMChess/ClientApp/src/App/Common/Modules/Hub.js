"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../../Main/Shared/Modules/Global");
var Hub = /** @class */ (function () {
    function Hub() {
    }
    Hub.Init = function () {
        //console.log("Hub.Init")
        Global_1.GM.Hub.start()
            .then(function () {
        }).catch(function (err) {
            return alert("Hub error");
        });
        //GM.Hub.on("Ping",  pData => alert("2-Way is working \n" + pData));    
    };
    return Hub;
}());
exports.Hub = Hub;
//# sourceMappingURL=Hub.js.map