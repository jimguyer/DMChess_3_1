"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../Common/Modules/Global");
var Web_1 = require("../Common/Modules/Web");
var Arrows_1 = require("../Common/Comps/Arrows/Arrows");
var Tabs_1 = require("../Common/Comps/Tabs/Tabs");
var Phone_1 = require("../Main/Shared/Views/Phone/Phone");
var Photo_1 = require("../Main/Shared/Views/Photo/Photo");
var Board_1 = require("../Custom/Views/Board/Board");
var Games_1 = require("./Routes/Games/Games");
var Home_1 = require("./Routes/Home/Home");
var Start_1 = require("./Routes/Start/Start");
var User_1 = require("./Routes/User/User");
var Email_1 = require("./Views/Email/Email");
var Game_1 = require("./Views/Game/Game");
var GamesView_1 = require("./Views/GamesView/GamesView");
var Membership_1 = require("./Views/Membership/Membership");
var Options_1 = require("./Views/Options/Options");
var Password_1 = require("./Views/Password/Password");
var Profile_1 = require("./Views/Profile/Profile");
var Search_1 = require("./Views/Search/Search");
var StartEmail_1 = require("./Views/StartEmail/StartEmail");
var StartParms_1 = require("./Views/StartParms/StartParms");
var Member = /** @class */ (function () {
    function Member() {
    }
    Member.Init = function () {
        //console.log("Member_Role.Init");
        Web_1.Web.Get(function (pResult) { return Member.Web(pResult); }, "Member");
        Global_1.GM.IsLoggedIn = true;
        Global_1.GM.Role = "Member";
        if (!Global_1.GM.Inited.Member) {
            if (!Global_1.GM.Inited.Home)
                Home_1.Home.Init();
            if (!Global_1.GM.Inited.Board)
                Board_1.Board.Init;
            if (!Global_1.GM.Inited.Games)
                Games_1.Games.Init();
            if (!Global_1.GM.Inited.Start)
                Start_1.Start.Init();
            if (!Global_1.GM.Inited.User)
                User_1.User.Init();
            if (!Global_1.GM.Inited.Email)
                Email_1.Email.Init();
            if (!Global_1.GM.Inited.Game)
                Game_1.Game.Init();
            if (!Global_1.GM.Inited.GamesView)
                GamesView_1.GamesView.Init();
            if (!Global_1.GM.Inited.Membership)
                Membership_1.Membership.Init();
            if (!Global_1.GM.Inited.Options)
                Options_1.Options.Init();
            if (!Global_1.GM.Inited.Password)
                Password_1.Password.Init();
            if (!Global_1.GM.Inited.Profile)
                Profile_1.Profile.Init();
            if (!Global_1.GM.Inited.Search)
                Search_1.Search.Init();
            if (!Global_1.GM.Inited.StartEmail)
                StartEmail_1.StartEmail.Init();
            if (!Global_1.GM.Inited.StartParms)
                StartParms_1.StartParms.Init();
            if (!Global_1.GM.Inited.Arrows)
                Arrows_1.Arrows.Init();
            Tabs_1.Tabs.Init();
            if (!Global_1.GM.Inited.Board)
                Board_1.Board.Init();
            if (!Global_1.GM.Inited.Phone)
                Phone_1.Phone.Init();
            if (!Global_1.GM.Inited.Photo)
                Photo_1.Photo.Init();
            Global_1.GM.Inited.Member = true;
        }
    };
    Member.Web = function (pResult) {
        //console.log("Anonymous.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        if (pResult.Error > "") {

        }
        else {
            Phone_1.Phone.Load("Carriers", pResult.Data.Carriers);
        }
    };
    Member.Size = function () {
        //console.log("Member.Size * Nav.View=" + Nav.View);
        switch (Global_1.Nav.View) {
            case "Games":
                GamesView_1.GamesView.Size();
                break;
            case "Home":
                Home_1.Home.Size();
                break;
            //case "User": User.Size(); break;
            case "Email":
                Email_1.Email.Size();
                break;
            case "Game":
                Game_1.Game.Size();
                break;
            case "GamesView":
                GamesView_1.GamesView.Size();
                break;
            case "Membership":
                Membership_1.Membership.Size();
                break;
            case "Message":
                Membership_1.Membership.Size();
                break;
            case "Options":
                Options_1.Options.Size();
                break;
            case "Password":
                Password_1.Password.Size();
                break;
            case "Profile":
                Profile_1.Profile.Size();
                break;
            case "Search":
                Search_1.Search.Size();
                break;
            case "StartEmail":
                StartEmail_1.StartEmail.Size();
                break;
            case "StartParms":
                StartParms_1.StartParms.Size();
                break;
        }
    };
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=Member.js.map
