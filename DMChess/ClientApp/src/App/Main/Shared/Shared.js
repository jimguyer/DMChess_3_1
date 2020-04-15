"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nav_1 = require("../../Common/Modules/Nav");
var Hub_1 = require("../../Common/Modules/Hub");
var Practice_1 = require("../../Main/Shared/Routes/Practice/Practice");
var Global_1 = require("../../Main/Shared/Modules/Global");
var Board_1 = require("../../Main/Shared/Views/Board/Board");
var Loading_1 = require("../../Main/Shared/Routes/Loading/Loading");
var Phone_1 = require("../../Main/Shared/Views/Phone/Phone");
var Photo_1 = require("../../Main/Shared/Views/Photo/Photo");
var Shared = /** @class */ (function () {
    function Shared() {
    }
    Shared.Init = function () {
        //console.log("Shared.Init * GM.Inited.Shared=" + GM.Inited.Shared);
        if (!Global_1.GM.Inited.Shared) {
            if (!Global_1.GM.Inited.Practice)
                Practice_1.Practice.Init();
            if (!Global_1.GM.Inited.Board)
                Board_1.Board.Init();
            if (!Global_1.GM.Inited.Loading)
                Loading_1.Loading.Init();
            if (!Global_1.GM.Inited.Phone)
                Phone_1.Phone.Init();
            if (!Global_1.GM.Inited.Photo)
                Photo_1.Photo.Init();
            if (!Global_1.GM.Inited.Hub)
                Hub_1.Hub.Init();
            Global_1.GM.Inited.Common = true;
            //console.log("Shared.Init * GM.ButtonBL.Size=" + JSON.stringify(GM.ButtonBL.Size));
            //console.log("Shared.Init * GM.ButtonBC.Size=" + JSON.stringify(GM.ButtonBC.Size));
            //console.log("Shared.Init * GM.ButtonBR.Size=" + JSON.stringify(GM.ButtonBR.Size));
        }
    };
    Shared.Web = function (pResult) {
        //console.log("Anonymous.Web * pResult.Action=" + JSON.stringify(pResult.Action));
        //console.log("Anonymous.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        if (pResult.Error > "") {
            if (Global_1.GM.IsTest)
                alert("Anonymous.Web.Error=" + pResult.Error);
        }
        else {
            switch (pResult.Action) {
                case "GetCarriers":
                    Phone_1.Phone.Load("Carriers", pResult.Data.Carriers);
                    break;
            }
        }
    };
    Shared.Size = function () {
        //console.log("Shared.Size * Nav.Route=" + Nav.Route);
        //console.log("Shared.Size * Nav.View=" + Nav.View);
        if (!Global_1.GM.Sized.Shared) {
            switch (Nav_1.Nav.Route) {
                case "Loading":
                    Loading_1.Loading.Size();
                    break;
                case "Practice":
                    Practice_1.Practice.Size();
                    break;
            }
            switch (Nav_1.Nav.View) {
                case "Board":
                    Board_1.Board.Size();
                    break;
                case "Phone":
                    Phone_1.Phone.Size();
                    break;
                case "Photo":
                    Photo_1.Photo.Size();
                    break;
            }
            Global_1.GM.Sized.Shared = true;
        }
    };
    return Shared;
}());
exports.Shared = Shared;
//# sourceMappingURL=Shared.js.map