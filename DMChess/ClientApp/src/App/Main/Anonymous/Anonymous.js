"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../Common/Modules/Global");
var Web_1 = require("../Common/Modules/Web");
var Practice_1 = require("../Custom/Routes/Practice/Practice");
var Board_1 = require("../Custom/Views/Board/Board");
var LogOn_1 = require("../Main/Anonymous/Routes/LogOn/LogOn");
var Privacy_1 = require("../Main/Anonymous/Routes/Privacy/Privacy");
var Recover_1 = require("../Main/Anonymous/Routes/Recover/Recover");
var Register_1 = require("../Main/Anonymous/Routes/Register/Register");
var Registration_1 = require("../Main/Anonymous/Views/Registration/Registration");
var Phone_1 = require("../Main/Shared/Views/Phone/Phone");
var Photo_1 = require("../Main/Shared/Views/Photo/Photo");
var Anonymous = /** @class */ (function () {
    function Anonymous() {
    }
    Anonymous.Init = function () {
        //console.log("Anonymous_Role.Init * GM.Inited.Anonymous=" + GM.Inited.Anonymous);
        Web_1.Web.Get(function (pResult) { return Anonymous.Web(pResult); }, "Anonymous");
        Global_1.GM.IsLoggedIn = false;
        Global_1.GM.Role = "Anonymous";
        if (!Global_1.GM.Inited.Anonymous) {
            if (!Global_1.GM.Inited.Practice)
                Practice_1.Practice.Init();
            if (!Global_1.GM.Inited.Board)
                Board_1.Board.Init();
            if (!Global_1.GM.Inited.LogOn)
                LogOn_1.LogOn.Init();
            if (!Global_1.GM.Inited.Privacy)
                Privacy_1.Privacy.Init();
            if (!Global_1.GM.Inited.Recover)
                Recover_1.Recover.Init();
            if (!Global_1.GM.Inited.Register)
                Register_1.Register.Init();
            if (!Global_1.GM.Inited.Registration)
                Registration_1.Registration.Init();
            if (!Global_1.GM.Inited.Phone)
                Phone_1.Phone.Init();
            if (!Global_1.GM.Inited.Photo)
                Photo_1.Photo.Init();
            Global_1.GM.Inited.Anonymous = true;
        }
    };
    Anonymous.Web = function (pResult) {
        //console.log("Anonymous.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        if (pResult.Error > "") {
        }
        else {
            //console.log("Anonymous.Web.Success * pResult.Data.Carriers=" + JSON.stringify(pResult.Data.Carriers));
            //console.log("Anonymous.Web.Success * pResult.Data.Registration=" + JSON.stringify(pResult.Data.Registration));
            //console.log("Anonymous.Web.Success * pResult.Data.Practice=" + JSON.stringify(pResult.Data.Practice));
            Phone_1.Phone.Load("Carriers", pResult.Data.Carriers);
            Registration_1.Registration.Load("Registration", pResult.Data.Registration);
            Practice_1.Practice.Load(pResult.Data.Practice);
        }
    };
    Anonymous.Size = function () {
        //console.log("******************************************************Anoymous.Size * Nav.View=" + Nav.View);
        switch (Global_1.Nav.View) {
            case "Board":
                if (!Global_1.GM.Sized.Board)
                    Board_1.Board.Size();
                break;
            case "LogOn":
                if (!Global_1.GM.Sized.LogOn)
                    LogOn_1.LogOn.Size();
                break;
            case "Phone":
                if (!Global_1.GM.Sized.Phone)
                    Phone_1.Phone.Size();
                break;
            case "Photo":
                if (!Global_1.GM.Sized.Photo)
                    Photo_1.Photo.Size();
                break;
            case "Privacy":
                if (!Global_1.GM.Sized.Privacy)
                    Privacy_1.Privacy.Size();
                break;
            case "Recover":
                if (!Global_1.GM.Sized.Recover)
                    Recover_1.Recover.Size();
                break;
            case "Registration":
                if (!Global_1.GM.Sized.Registration)
                    Registration_1.Registration.Size();
                break;
        }
    };
    return Anonymous;
}());
exports.Anonymous = Anonymous;
//# sourceMappingURL=Anonymous.js.map
