import { Component, OnInit } from '@angular/core';
import { FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';

import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
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

import { Tabs } from '../../../../Common/Comps/Tabs/Tabs';
import { IPage, Page } from '../../../../Common/Comps/Page/Page';

@Component({ templateUrl: './UserProfiles.html' })
//@Component({ templateUrl: './UserProfiles.html', styleUrls: ['./UserProfiles.css'], encapsulation: ViewEncapsulation.None })
export class UserProfiles {
    VM: IVM; static VM: IVM;

    constructor() {  this.VM = UserProfiles.VM; Nav.Route_VM = UserProfiles.VM; }


    ngOnInit() {
        //console.log("UserProfiles.ngOnInit");
        //console.log("UserProfiles.ngOnInit * GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("UserProfiles.ngOnInit * pView_Event=" + Nav.View_Event);
        var vm = UserProfiles.VM;
        //console.log("UserProfiles.ngOnInit * vm.View=" + vm.View);
        //console.log("UserProfiles.ngOnInit * vm.Show=" + vm.Show);
        //console.log("UserProfiles.ngOnInit * vm.Exit.Style=" + JSON.stringify(vm.Exit.Style));
        switch (Nav.Route_Event) {
            case "Home_ClickProfiles":
                UserProfiles.View({ Enable: "*", Show: "UserProfile_Output", Buttons: "*", Msg: "*" });
                break;
        }
        Tabs.Show(this.VM.Tabs);
        UserProfiles.Stack();
        UserProfiles.Size();
        //console.log("UserProfiles.ngOnInit * vm.Exit.Show=" + vm.Exit.Show);
        //console.log("UserProfiles.ngOnInit * vm.Exit.Style=" + JSON.stringify(vm.Exit.Style));
    }

    public OnClick(pControl: string, pIdx: number = 0) {
        //console.log("UserProfiles.OnClick * pControl=" + pControl + " * pIdx=" + pIdx);
        var vm = UserProfiles.VM;

        switch (pControl) {
            case "Cancel": vm.Show = "Output";
                if (vm.Profiles.length < vm.Max && vm.TabIdx === vm.Max - 1) { vm.Tabs.Idx = vm.Idx }
                UserProfiles.View({ Show: "Output*", Msg: "*" });
                break;
            case "Edit": vm.Show = "Input"; UserProfiles.LoadInput(vm.Profiles, vm.TabIdx); UserProfiles.View({ Show: "*", Msg: "*" }); break;
            case "Exit": Nav.GoRoute("Click" + pControl, "Home"); break;
            case "LogoLeft": break;
            case "IconRight": break;
            case "Tab":
                vm.TabIdx = pIdx;
                UserProfiles.View({ Show: "Tabs" });
                break;
        }
    }

    public static Init() {
        //console.log("UserProfiles.Init");
        //#region VM
        var aLine: IALabelCtl = { ALabel: { Type: ELabel.TARight, X: .25, W: 4.5, H: .8, F: 1 }, AOutput: { Type: ELabel.TALeft, X: .25, W: 4.5, H: .8, F: 1 }, ATextbox: { Type: ETextbox.Left, H: .8, F: 1  }, ASize: { GapX: Dft.GapX } };
        this.VM = {
            Idx: 0,
            TabIdx: 0,
            IdxDefault: 0,
            Last: 0,
            Limit: 1,
            Max: 4,
            Tabs: null,
            Profiles: [],
            Web: EWeb.Loading,
            Disabled: false, View: "UserProfile", Show: "Output",
            //Tabs: Tabs.Init(["Loading"]),
            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),
            Img: Img.Init({ Type: EImg.Border_Black, Z: 5, X: 1.5, Y: 3, S: 6, Bo: "1", Src: Dft.Src.Photo.Loading }, false),
            UserId: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "User ID" }, ASize: aLine.ASize }, false),
            Name: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Name" }, ASize: aLine.ASize }, false),
            Group: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Group" }, ASize: aLine.ASize }, false),
            Rating: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Rating" }, ASize: aLine.ASize }, false),
            Challenges: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Challenges" }, ASize: aLine.ASize }, false),
            ActiveGames: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Active Games" }, ASize: aLine.ASize }, false),
            WinsLosses: LabelCtl.Init({ ALabel: aLine.ALabel, AOutput: aLine.AOutput, AValues: { Label: "Wins Losses" }, ASize: aLine.ASize }, false),

            I_UserId: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "User ID" }, ASize: aLine.ASize }, false),
            I_NameFirst: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "First Name" }, ASize: aLine.ASize }, false),
            I_NameLast: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Last Name" }, ASize: aLine.ASize }, false),
            I_Group: LabelCtl.Init({ ALabel: aLine.ALabel, ATextbox: aLine.ATextbox, AValues: { Label: "Group" }, ASize: aLine.ASize }, false),
            Buttons: Button.Inits([
                //{ Value: "Exit", Type: EButton.Left },
                //{ Value: "Default", Type: EButton.Center },
                //{ Value: "Cancel", Type: EButton.Center },
                //{ Value: "Photo", Type: EButton.Center },
                //{ Value: "Edit", Type: EButton.Right },
                //{ Value: "Save", Type: EButton.Right },
            ]),
            Exit: Button.Init({ Type: EButton.Left }, false),
            Default: Button.Init({ Type: EButton.Center }, false),
            Cancel: Button.Init({ Type: EButton.Center }, false),
            Photo: Button.Init({ Type: EButton.Center }, false),
            Edit: Button.Init({ Type: EButton.Right }, false),
            Save: Button.Init({ Type: EButton.Right }, false)
        };

        //#endregion

        //console.log("UserProfiles.Init * this.VM.Tabs=" + JSON.stringify(this.VM.Tabs));

        UserProfiles.Stack();
        UserProfiles.Size();

        //console.log("this.VM.Tabs=" + JSON.stringify(this.VM.Tabs));
        //console.log("this.VM.Img.Src=" + this.VM.Img.Src);
    }
    public static Stack() {
        var vm = UserProfiles.VM;
        //vm.UserId.Show = false;
        //vm.Name.Show = vm.NameFirstLast >= "";
        //vm.Group.Show = vm.Group >= "";
        //vm.Rating.Show = vm.Rating >= "";
        //vm.Challenges.Show = vm.Challenges != "0";
        //vm.WinsLosses.Show = vm.WinsLosses != "0/0";
        vm.UserId.Label.Show = false;
        vm.Name.Label.Show = true;
        vm.Group.Label.Show = true;
        vm.Rating.Label.Show = true;
        vm.Challenges.Label.Show = true;
        vm.WinsLosses.Label.Show = true;
        //var y = 8.5; vm.UserId.Label.Size.Y = y; vm.UserId.Size.Y = y;
        //var yAdd = .8;
        //if (vm.UserId.Show) { y += yAdd; vm.UserId_Label.Size.Y = y; vm.UserId.Size.Y = y; }
        //if (vm.Name.Show) { y += yAdd; vm.Name_Label.Size.Y = y; vm.Name.Size.Y = y; }
        //if (vm.Group.Show) { y += yAdd; vm.Group_Label.Size.Y = y; vm.Group.Size.Y = y; }
        //if (vm.Rating.Show) { y += yAdd; vm.Rating_Label.Size.Y = y; vm.Rating.Size.Y = y; }
        //if (vm.Challenges.Show) { y += yAdd; vm.Challenges_Label.Size.Y = y; vm.Challenges.Size.Y = y; }
        //if (vm.ActiveGames.Show) { y += yAdd; vm.ActiveGames_Label.Size.Y = y; vm.ActiveGames.Size.Y = y; }
        //if (vm.WinsLosses.Show) { y += yAdd; vm.WinsLosses_Label.Size.Y = y; vm.WinsLosses.Size.Y = y; }

        //var y = 9; vm.I_UserId_Label.Size.Y = y; vm.I_UserId.Size.Y = y;
        //var yAdd = 1;
        //y += yAdd; vm.I_NameFirst_Label.Size.Y = y; vm.I_NameFirst.Size.Y = y;
        //y += yAdd; vm.I_NameLast_Label.Size.Y = y; vm.I_NameLast.Size.Y = y;
        //y += yAdd; vm.I_Group_Label.Size.Y = y; vm.I_Group.Size.Y = y;
        UserProfiles.Size();
    }
    public static Size() {
        var vm = UserProfiles.VM;

        //console.log("UserProfiles.Size * vm.Tabs.Size=" + JSON.stringify(vm.Tabs.Size));
        //Size.ViewModel(vm, false);
        Tabs.Size();
        Img.Size(vm.IconL, false);
        Img.Size(vm.IconR, false);
        Img.Size(vm.Img);
        LabelCtl.Size(vm.UserId);
        LabelCtl.Size(vm.Name);
        LabelCtl.Size(vm.Group);
        LabelCtl.Size(vm.Rating);
        LabelCtl.Size(vm.Challenges);
        LabelCtl.Size(vm.ActiveGames);
        LabelCtl.Size(vm.WinsLosses);
        LabelCtl.Size(vm.I_UserId);
        LabelCtl.Size(vm.I_NameFirst);
        LabelCtl.Size(vm.I_NameLast);
        LabelCtl.Size(vm.I_Group);
        Button.Sizes(vm.Buttons, false);
        Button.Size(vm.Exit);
        Button.Size(vm.Cancel);
        Button.Size(vm.Default);
        Button.Size(vm.Edit);
        Button.Size(vm.Photo);
        Button.Size(vm.Save);
        GM.Sized.UserProfiles = true;
        //console.log("UserProfiles.Size * vm.Tabs.Style=" + JSON.stringify(vm.Tabs.Style));
        //console.log("UserProfiles.Size * vm.IconL.Style=" + JSON.stringify(vm.IconL.Style));
        //console.log("UserProfiles.Size * vm.IconR.Style=" + JSON.stringify(vm.IconR.Style));

        //console.log("UserProfiles.Size * vm.Tabs.IndentL.Size=" + JSON.stringify(vm.Tabs.IndentL.Size));
        //console.log("UserProfiles.Size * vm.Tabs.IndentL.Style=" + JSON.stringify(vm.Tabs.IndentL.Style));
        //console.log("UserProfiles.Size * vm.Tabs.IndentR.Size=" + JSON.stringify(vm.Tabs.IndentR.Size));
        //console.log("UserProfiles.Size * vm.Tabs.IndentR.Style=" + JSON.stringify(vm.Tabs.IndentR.Style));
        //console.log("UserProfiles.Size * vm.Img.Size=" + JSON.stringify(vm.Img.Size));
        //console.log("UserProfiles.Size * vm.Img.Style=" + JSON.stringify(vm.Img.Style));
        //console.log("UserProfiles.Size * vm.Img.Src=" + JSON.stringify(vm.Img.Src));
    }

    public static Load(pObj) {
        //console.log("UserProfiles.Load * pObj=" + JSON.stringify(pObj));
        //console.log("UserProfiles.Load * pObj.Profiles[" + pObj.ProfileIdxDefault + "]=" + JSON.stringify(pObj.Profiles[pObj.ProfileIdxDefault]);
        //console.log("UserProfiles.Load * pObj.ProfileIdxDefault=" + pObj.ProfileIdxDefault);
        //console.log("UserProfiles.Load * pObj.Limit=" + pObj.Limit);
        //console.log("UserProfiles.Load * pObj.Profiles.length=" + pObj.Profiles.length);
        //console.log("UserProfiles.Load * pObj.Profiles[0].UserId=" + pObj.Profiles[0].UserId);
        //console.log("UserProfiles.Load * pObj.Profiles[0].NameFirst=" + pObj.Profiles[0].NameFirst);
        //console.log("UserProfiles.Load * pObj.Profiles[0].NameLast=" + pObj.Profiles[0].NameLast);
        var vm = UserProfiles.VM;

        GM.Profile = pObj.Profiles[pObj.ProfileIdxDefault];
        GM.Profile.Name = "";
        if (pObj.Profiles[pObj.ProfileIdxDefault].NameFirst !== null) GM.Profile.Name += pObj.Profiles[pObj.ProfileIdxDefault].NameFirst + " ";
        if (pObj.Profiles[pObj.ProfileIdxDefault].NameLast !== null) GM.Profile.Name += pObj.Profiles[pObj.ProfileIdxDefault].NameLast;
        GM.Profile.Name = GM.Profile.Name.trim();
        if (GM.Profile.Name === "") GM.Profile.Name = null;
        vm.Profiles = pObj.Profiles;
        vm.TabIdx = pObj.IdxDefault;
        vm.IdxDefault = pObj.IdxDefault;
        vm.Limit = pObj.Limit;
        vm.Tabs.Values = []; for (var x = 0; x < vm.Profiles.length; x++) vm.Tabs.Values.push(vm.Profiles[x].UserId);
        if (vm.Tabs.Values.length < vm.Max) vm.Tabs.Values.push("Add");
        vm.Tabs.Idx = pObj.IdxDefault;
        Tabs.Show(vm.Tabs);

        //console.log("UserProfiles.Load * vm.Tabs.Tabs.length=" + vm.Tabs.Tabs.length);


        UserProfiles.LoadIdx(vm.Profiles, pObj.ProfileIdxDefault);

        vm.Web = EWeb.Done;

        UserProfiles.View({ Enable: "*" });
        //console.log("UserProfiles.Load * labels=" + JSON.stringify(vm.Tabs.Labels));
        //console.log("UserProfiles.Load * vm.Tabs.Tabs.length=" + vm.Tabs.Tabs.length);
        //console.log("UserProfiles.Load * vm.Tabs.Tabs[0]=" + JSON.stringify(vm.Tabs.Tabs[0]));
        //console.log("UserProfiles.Load * vm.Tabs.Tabs[0]=" + JSON.stringify(vm.Tabs.Tabs[1]));
    }
    public static LoadIdx(pProfiles, pIdx) {
        //console.log("UserProfiles.Load * pIdx=" + pIdx);
        var vm = UserProfiles.VM;
        vm.TabIdx = pIdx;
        vm.Img.Src = pProfiles[vm.TabIdx].Photo_Src;
        vm.UserId.Ctl.Value = pProfiles[vm.TabIdx].UserId;
        vm.I_NameFirst.Ctl.Value = pProfiles[vm.TabIdx].NameFirst === null ? "" : pProfiles[vm.TabIdx].NameFirst;
        vm.I_NameLast.Ctl.Value = pProfiles[vm.TabIdx].NameLast === null ? "" : pProfiles[vm.TabIdx].NameLast;
        vm.Name.Ctl.Value = vm.I_NameFirst.Ctl.Value + " " + vm.I_NameLast.Ctl.Value;
        vm.Group.Ctl.Value = pProfiles[vm.TabIdx].Group === undefined ? "" : pProfiles[vm.TabIdx].Group;
        vm.Rating.Ctl.Value = pProfiles[vm.TabIdx].Rating;
        vm.Challenges.Ctl.Value = pProfiles[vm.TabIdx].Challenges;
        vm.WinsLosses.Ctl.Value = pProfiles[vm.TabIdx].WinsLosses.toString();

        //console.log("UserProfiles.Load * vm.Profiles[vm.TabIdx].UserId=" + vm.Profiles[vm.TabIdx].UserId);
        //console.log("UserProfiles.Load * vm.Profiles[vm.TabIdx].Photo_Src.length=" + vm.Profiles[vm.TabIdx].Photo_Src.length);
        //console.log("UserProfiles.Load * vm.Profiles[vm.TabIdx].NameFirst=" + vm.Profiles[vm.TabIdx].NameFirst);
        //console.log("UserProfiles.Load * vm.Profiles[vm.TabIdx].NameLast=" + vm.Profiles[vm.TabIdx].NameLast);
        //console.log("UserProfiles.Load * vm.Profiles[vm.TabIdx].Group=" + vm.Profiles[vm.TabIdx].Group);
        //console.log("UserProfiles.Load * vm.Profiles[vm.TabIdx].Rating=" + vm.Profiles[vm.TabIdx].Rating);
    }
    public static LoadInput(pProfiles = null, pIdx = null) {
        var vm = UserProfiles.VM;
        if (pIdx === null) {
            vm.I_UserId.Ctl.Value = ""; vm.I_NameFirst.Ctl.Value = ""; vm.I_NameLast.Ctl.Value = ""; vm.I_Group.Ctl.Value = "";
        }
        else {
            vm.I_UserId.Ctl.Value = pProfiles[vm.TabIdx].UserId; vm.I_NameFirst.Ctl.Value = pProfiles[vm.TabIdx].NameLast; vm.I_NameLast.Ctl.Value = pProfiles[vm.TabIdx].NameLast; vm.I_Group.Ctl.Value = pProfiles[vm.TabIdx].Group;
        }
    }

    public static View(pObj: any) {
        //console.log("UserProfiles.View");
        var vm = UserProfiles.VM;
        if (pObj.Show != null) {
            //console.log("UserProfiles.View.Buttons.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "UserProfile_Output": vm.View = "UserProfile"; vm.Show = "Output"; break;
                case "UserProfile_Input": vm.View = "UserProfile"; vm.Show = "Input"; break;
                case "Membership":
                case "Photo":
                case "UserProfile": vm.View = pObj.Show; break;
                default: alert("UserProfiles.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("UserProfiles.View.Enable * vm.IsLoading=" + vm.IsLoading + " * pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "*": vm.Disabled = vm.Web != EWeb.Done; break;
                default: alert("UserProfiles.View.Enable * Unknown=" + pObj.Enable); break;
            }
        }


        if (pObj.Buttons != null) {
            //console.log("UserProfiles.View.Buttons." + pObj.Buttons );

            //#region Hide All
            vm.Exit.Show = true;
            vm.Cancel.Show = false;
            vm.Default.Show = false;
            vm.Edit.Show = false;
            vm.Photo.Show = false;
            vm.Save.Show = false;
            //#endregion

            switch (pObj.Buttons) {
                case "*":
                    if (vm.Show === "Input") this.View({ Buttons: "ExitCancelSave" });
                    else if (vm.TabIdx === vm.IdxDefault) this.View({ Buttons: "ExitPhotoEdit" });
                    else this.View({ Buttons: "ExitDefaultEdit" });
                    break;
                case "ExitCancelSave": vm.Cancel.Show = true; vm.Save.Show = true; break;
                case "ExitDefaultEdit": vm.Default.Show = true; vm.Edit.Show = true; break;
                case "ExitPhotoEdit": vm.Photo.Show = true; vm.Edit.Show = true; break;
                default: alert("UserProfiles.View.Buttons * Unknown=" + pObj.Show); break;
            }
            //console.log("UserProfiles.View.Buttons * vm.Exit.Show=" + vm.Exit.Show);
            //console.log("UserProfiles.View.Buttons * vm.Cancel.Show=" + vm.Cancel.Show);
            //console.log("UserProfiles.View.Buttons * vm.Default.Show=" + vm.Default.Show);
            //console.log("UserProfiles.View.Buttons * vm.Edit.Show=" + vm.Edit.Show);
            //console.log("UserProfiles.View.Buttons * vm.Photo.Show=" + vm.Photo.Show);
            //console.log("UserProfiles.View.Buttons * vm.Save.Show=" + vm.Save.Show);
        }
        if (pObj.Msg !== undefined) {
            //console.log("UserProfiles.View * pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*":
                    if (vm.Show === "Input") this.View({ Msg: "Info_Update" });
                    else if (vm.TabIdx === vm.IdxDefault) this.View({ Msg: "Info_Default" });
                    else this.View({ Msg: "Info_NotDefault" });
                    break;
                case "Info_AddCancel": "Profile add canceled."; break;
                case "Info_Default": "This is your primary profile."; break;
                case "Info_NotDefault": GM.Msg = "Click default to make this your primary profile."; break;
                case "Info_Update": GM.Msg = "You may update this profile."; break;
                case "Link_App_WebBoot_JustLoggedIn": GM.Msg = "You successfully logged in as " + vm.UserId + "."; break;
                case "Link_LogOn_LogIn": GM.Msg = "Welcome back " + vm.UserId + "."; break;
                case "Link_LogOn_Registered": GM.Msg = "Welcome " + vm.UserId + "."; break;
                case "Link_Privacy_ClickOK": GM.Msg = "Please LogIn or register."; break;
                case "Link_Membership_Exit":
                case "Link_User_Exit": GM.Msg = "You exited user data."; break;
                case "Link_UserProfiles_ClickExit": GM.Msg = "You exited your profiles."; break;
                case "Link_Board_ClickExit": GM.Msg = "You exited the practice board."; break;
                case "Link_Practice_ClickExit": GM.Msg = "You exited the practice board."; break;
                case "Link_Start_ClickExit": GM.Msg = "Game start cancelled."; break;
                case "Link_Players_ClickExit": GM.Msg = "You exited the player search."; break;
                case "Link_Games_ClickExit": GM.Msg = "You exited games."; break;
                case "Web_LogOut": GM.Msg = "Logging you out..."; break;
                case "Web_LogOutSuccess": GM.Msg = "Opening Log On Screen..."; break;
                default: alert("Home.View.Msg * Unknown=" + pObj.Msg); break;
            }
        }
    }
}
interface IVM extends IViewModel {
    Idx: number,
    IdxDefault: number,
    TabIdx: number,
    Last: number,
    Limit: number,
    Max: number,
    Profiles: Array<IProfile>

    Img: IImg,
    UserId: ILabelCtl, 
    Name: ILabelCtl,
    Group: ILabelCtl,
    Rating: ILabelCtl,
    Challenges: ILabelCtl,
    ActiveGames: ILabelCtl,
    WinsLosses: ILabelCtl,

    I_UserId: ILabelCtl,
    I_NameFirst: ILabelCtl,
    I_NameLast: ILabelCtl,
    I_Group: ILabelCtl,

    Exit: IButton,
    Cancel: IButton,
    Default: IButton,
    Photo: IButton,
    Edit: IButton,
    Save: IButton

}
interface IProfile {
    TabIdx: number, IsDefault: boolean, Photo_Src:
    string, UserId: string, NameFirst: string, NameLast: string, Group: string,
    Rating: string, Challenges: string, WinsLosses: string, Search: any, StartEmail: any, StartParms: any,
};
