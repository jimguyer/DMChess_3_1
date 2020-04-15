import { Component, OnInit } from '@angular/core';
import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ templateUrl: './Home.html' })

export class Home {
    VM: IVM; static VM: IVM;

    constructor() { this.VM = Home.VM; Nav.Route_VM = Home.VM; }

    ngOnInit() {
        //console.log("Home.ngOnInit");
        //console.log("Home.ngOnInit Route_Event=" + Nav.Route_Event);
        //console.log("Home.ngOnInit pView_Event=" + Nav.View_Event);
        //console.log("Home.ngOnInit *  GM.Sized.Home=" + GM.Sized.Home);
        //console.log("Home.ngOnInit * this.VM.ToggleShow=" + this.VM.ToggleShow);
        var vm = Home.VM;
        Nav.Route = "Home"; Nav.View = "Home";
        switch (Nav.Route_Event) {
            case "Home_ClickUser": case "User_ClickExit":
            case "Home_ClickProfiles": case "UserProfiles_ClickExit":
            case "Home_ClickPractice": case "Practice_ClickExit":
            case "Home_ClickStart": case "Start_ClickExit":
            case "Home_ClickPlayers": case "Players_ClickExit":
            case "Home_ClickGames": case "Games_ClickExit":
            case "Home_ClickHistory": case "History_ClickExit":
                Home.View({ Enable: "*", Msg: "Link_" + Nav.Route_Event });
                break;
            default:
                switch (Nav.View_Event) {
                    case "App_WebBoot": case "Home_WebBoot":
                        Home.Load(Nav.View_Event, Nav.View_Parms);
                        var msg = "Link_" + Nav.View_Event;
                        if (vm.IsJustRegistered) msg += "_JustRegistered";
                        else if (vm.IsJustLoggedIn) msg += "_JustLoggedIn";
                        Home.View({ Enable: "*", Msg: msg });
                        break;
                    case "App_ngOnInit":
                        break;
                    case "LogOn_LogIn":
                        Home.View({ Enable: "*", Msg: "Link_" + Nav.View_Event });
                        break;

                    case "LogOn_Register":
                        Home.View({ Enable: "*", Msg: "Link_" + Nav.View_Event });
                        break;
                    case "LogOn_GetUser":

                        break;
                    case "Home_ClickUser":
                    case "Home_ClickProfiles":
                    case "Home_ClickPractice":
                    case "Home_ClickStart":
                    case "Home_ClickPlayers":
                    case "Home_ClickGames":
                    case "Home_ClickHistory":
                        Home.View({ Enable: "*", Msg: Nav.View_Event }); break;
                    case "Board_ClickExit":
                    case "User_ClickExit":
                    case "Link_UserProfiles_ClickExit":
                    case "UserProfiles_ClickExit":
                    case "Practice_ClickExit":
                    case "Start_ClickExit":
                    case "Players_ClickExit":
                    case "Games_ClickExit":
                    case "History_ClickExit":
                    case "Membership_ClickExit": case "Link_Membership_ClickExit":

                        Home.View({ Enable: "*", Msg: "Link_" + Nav.View_Event }); break;
                    default: alert("Home.ngOnInit * Unknown Nav.View_Event=" + Nav.View_Event); break;
                }
        }
        Home.Size();
    }

    public OnClick(pSender: string) {
        //console.log("Home.OnClick * pControl=" + pControl);
        var vm = Home.VM;
        switch (pSender) {
            case "Games":
            case "History":
            case "Players":
            case "Practice": Nav.GoRoute("Click" + pSender, pSender); break;
            case "Profiles": Nav.GoRoute("Click" + pSender, "UserProfiles"); break;
            case "Start":
            case "User": Nav.GoRoute("Click" + pSender, pSender); break;
            case "LogOut":
                Home.View({ Enable: "*", Msg: "Web_LogOut" });
                Web.Get((pResult) => Home.Web(pResult), "LogOut");
                break;
        }
    }

    public static Init() {
        //console.log("Home.Init");

        //#region VM

        Home.VM = {
            Web: EWeb.Loading, IsJustLoggedIn: false, IsJustRegistered: false, UserId: "",
            Disabled: false,
            User: Button.Init({ Type: EButton.Left }), Profiles: Button.Init({ Type: EButton.Right }, false),
            Practice: Button.Init({ Type: EButton.Center }, false),
            Start: Button.Init({ Type: EButton.Left }), Players: Button.Init({ Type: EButton.Right }, false),
            Games: Button.Init({ Type: EButton.Left }), History: Button.Init({ Type: EButton.Right }, false),
            LogOut: Button.Init({ Type: EButton.Center }, false)
        };
        //console.log("Home.Init * vm.User =" + JSON.stringify(vm.User));
        //console.log("Home.Init * vm.Profiles =" + JSON.stringify(vm.Profiles));
    }
    public static Stack() {

    }
    public static Size() {
        //console.log("Home.Size * GM.Sized.Home=" + GM.Sized.Home);
        var vm = Home.VM;
        //console.log("Home.Size *  GM.Sized.Home=" + GM.Sized.Home);
        //console.log("Home.Size * vm.User.Size=" + JSON.stringify(vm.User.Size));
        //console.log("Home.Size * vm.Profiles.Size=" + JSON.stringify(vm.Profiles.Size));
        //console.log("Home.Size * vm.Practice.Size=" + JSON.stringify(vm.Practice.Size));
        //console.log("Home.Size * vm.Start.Size=" + JSON.stringify(vm.Start.Size));
        //console.log("Home.Size * vm.Players.Size=" + JSON.stringify(vm.Players.Size));
        //console.log("Home.Size * vm.Games.Size=" + JSON.stringify(vm.Games.Size));
        //console.log("Home.Size * vm.History.Size=" + JSON.stringify(vm.History.Size));
        //console.log("Home.Size * vm.LogOut.Size=" + JSON.stringify(vm.LogOut.Size));

        //Size.ViewModel(vm, false);
        Button.Size(vm.User); Button.Size(vm.Profiles);
        Button.Size(vm.Practice);
        Button.Size(vm.Start); Button.Size(vm.Players);
        Button.Size(vm.Games); Button.Size(vm.History);
        Button.Size(vm.LogOut);
        GM.Sized.Home = true;

        //console.log("Home.Size *  GM.Sized.Home=" + GM.Sized.Home);
        //console.log("Home.Size * vm.User.Style=" + JSON.stringify(vm.User.Style));
        //console.log("Home.Size * vm.Profiles.Style=" + JSON.stringify(vm.Profiles.Style));
        //console.log("Home.Size * vm.Practice.Style=" + JSON.stringify(vm.Practice.Style));
        //console.log("Home.Size * vm.Start.Style=" + JSON.stringify(vm.Start.Style));
        //console.log("Home.Size * vm.Players.Style=" + JSON.stringify(vm.Players.Style));
        //console.log("Home.Size * vm.Games.Style=" + JSON.stringify(vm.Games.Style));
        //console.log("Home.Size * vm.History.Style=" + JSON.stringify(vm.History.Style));
        //console.log("Home.Size * vm.LogOut.Style=" + JSON.stringify(vm.LogOut.Style));
    }

    public static Load(pEvent: string, pObj: any) {
        GM.UserId = pObj.UserId;
        //GM.IsJustRegistered = pObj.IsJustRegistered;
        GM.IsJustLoggedIn = pObj.IsJustLoggedIn;
        GM.UserId = pObj.UserId;
        Home.VM.Web = EWeb.Done;
    }

    public static Web(pResult: any) {
        //console.log("Home.Web * pResult=" + JSON.stringify(pResult));
        //console.log("Home.Web * pResult.Action=" + pResult.Action);
        var vm = Home.VM;
        vm.Web = EWeb.Done;
        switch (pResult.Action) {
            case "LogOut": window.location.reload(); break;
            case "User": GM.Role = "Member"; break;
        }
    }

    public static View(pObj: any) {
        //console.log("Home.View");
        var vm = Home.VM;
        if (pObj.Show != null) {
            //console.log("pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                default: alert("Home.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable != null) {
            //console.log("pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "*": break;
                default: alert("Home.View.Enable * Unknown=" + pObj.Enable); break;

            }
        }
        if (pObj.Msg != null) {
            //console.log("Home.View * pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "Link_Home_WebBoot":
                case "Link_App_WebBoot": GM.Msg = GM.UserId + ", you did not log out on your last visit."; break;
                case "Link_App_WebBoot_JustRegistered": GM.Msg = "You successfully registered as " + GM.UserId + "."; break;
                case "Link_App_WebBoot_JustLoggedIn": GM.Msg = "You successfully logged in as " + GM.UserId + "."; break;

                case "Home_ClickGames":
                case "Link_Games_ClickExit": GM.Msg = "You exited your games."; break;
                case "Link_Home_ClickHistory":
                case "Link_History_ClickExit": GM.Msg = "You exited your history."; break;
                case "Link_Home_ClickPlayers":
                case "Link_Players_ClickExit": GM.Msg = "You exited the player search."; break;
                case "Link_Home_ClickPractice":
                case "Link_Practice_ClickExit": GM.Msg = "You exited the practice board."; break;
                case "Link_Home_ClickStart":
                case "Link_Start_ClickExit": GM.Msg = "Game start cancelled."; break;
                case "Link_Home_ClickUser":
                case "Link_User_ClickExit": GM.Msg = "You exited your user data."; break;
                case "Link_Home_ClickUserProfiles":
                case "Link_UserProfiles_ClickExit": GM.Msg = "You exited your profiles."; break;

                case "Web_LogOut": GM.Msg = "Logging you out..."; break;
                case "Web_LogOutSuccess": GM.Msg = "Opening Log On Screen..."; break;
                default: alert("Home.View.Msg * Unknown=" + pObj.Msg); break;
            }
        }
    }
}

export interface IVM extends IViewModel {
    IsJustRegistered: boolean, IsJustLoggedIn: boolean, UserId: string
    User?: IButton, Profiles?: IButton, Practice?: IButton, Start?: IButton, Players?: IButton, Games?: IButton, History?: IButton,  LogOut?: IButton
}
