import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EPosition as EPos } from '../../../../Common/Attrs/Position';
import { ETextAlign } from '../../../../Common/Attrs/TextAlign';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';

import { IFieldLeg, FieldLeg } from '../../../../Common/Combos/FieldLeg/FieldLeg';
import { IALabelCtl, ILabelCtl, LabelCtl } from '../../../../Common/Combos/LabelCtl/LabelCtl';
import { IAPage, IPage, Page } from '../../../../Common/Comps/Page/Page';
import { IATabs, ITabs, Tabs } from '../../../../Common/Comps/Tabs/Tabs';

import { EButton, IAButton, IButton, Button } from '../../../../Common/Ctls/Button';
import { EDiv, IADiv, IDiv, Div } from '../../../../Common/Ctls/Div';
import { EFieldset, IAFieldset, IFieldset, Fieldset } from '../../../../Common/Ctls/Fieldset';
import { EIcon, IAIcon, IIcon, Icon } from '../../../../Common/Ctls/Icon';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { ELegend, IALegend, ILegend, Legend } from '../../../../Common/Ctls/Legend';
import { ETable, IATable, ITable, Table } from '../../../../Common/Ctls/Table';
import { ETextarea, IATextarea, ITextarea, Textarea } from '../../../../Common/Ctls/Textarea';

import { IViewModel, Nav } from '../../../../Common/Modules/Nav';
import { Util } from '../../../../Common/Modules/Util';
import { IASize } from '../../../../Common/Modules/Size'
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { IGM, GM } from '../../../../Main/Shared/Modules/Global';


@Component({ selector: 'photo', templateUrl: './Photo.html' })

export class Photo {
    VM: IVM; static VM: IVM; GM: IGM;
    constructor() { this.VM = Photo.VM; this.GM = GM; }

    ngOnInit() {
        //console.log("Photo.ngOnInit");
        //console.log("Photo.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        var vm = Photo.VM;
        //console.log("Photo.ngOnInit * Nav.Route=" + Nav.Route);
        //console.log("Photo.ngOnInit * Nav.View=" + Nav.View);
        //console.log("Photo.ngOnInit * pView_Event=" + Nav.View_Event);
        Nav.View = "Photo";

        switch (Nav.View_Event) {
            case "App_WebBoot":
            case "Phone_ClickSkip":
            case "Phone_WebPhone": vm.Web = EWeb.Loading; Photo.View({ Show: "Square", Src: Dft.Src.Photo.Click, Enables: "*", Buttons: "*", Msg: "Link_Phone_Save" }); break;
            case "User_TabClick": Photo.View({ Msg: "Link_Photo_Save" }); break;
            default: alert("Photo.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        }

        if (GM.Sized.Photo === undefined) Photo.Size();
    }
    public OnChange(pFiles) {
        //console.log("Photo.OnChange * pFiles=" + JSON.stringify(pFiles));
        //console.log("Photo.OnChange * pFiles[0]=" + JSON.stringify(pFiles[0]));
        //console.log("Photo.OnChange * pFiles[0]=" + JSON.stringify(pFiles[0].name));
        var vm = Photo.VM;
        var fr = new FileReader();
        fr.readAsDataURL(pFiles[0]);
        fr.onload = () => {
            //console.log("fr.result.toString()=" + fr.result.toString());
            vm.Web = EWeb.Loading;
            var src = fr.result.toString();
            Photo.View({ Show: "Splash", Src: src, Enable: "*", Msg: "Web_Load" });
            vm.SplashImg.Src = src;
            this.Rotate(src);
        }
    }

    public OnClick(pSender: string) {
        //console.log("Photo.OnClick * pSender=" + pSender);
        var vm = Photo.VM;
        switch (pSender) {
            case "Exit": Nav.GoRoute("Click" + pSender, "Home"); break;
            case "IconLeft": break;
            case "IconRight": this.OnClick("Register"); break;
            case "Save":
                vm.Web = EWeb.Loading; Photo.View({ Enable: "*", Msg: "Web_Save" });
                Web.Post((pResult) => Photo.Web(pResult), "Photo", { Src: vm.SaveImg.Src });

                break;
            case "Skip": window.location.reload(); break;

            //#region case "Back":

            case "Back":
                //console.log("Photo.OnClick.Back * vm.Show=" + vm.Show);
                switch (vm.Show) {
                    case "Rotate": Photo.View({ Show: "Square", Src: src, Enables: "*", Buttons: "*", Msg: "Back_Square" }); break;
                    case "Crop": Photo.View({ Show: "Rotate", Enables: "*", Buttons: "*", Msg: "Back_Rot" }); break;
                    case "Save": Photo.View({ Show: "Crop", Enables: "*", Buttons: "*", Msg: "Back_Crop" }); break;
                }
                break;

            //#endregion

            //#region case "Crop":
            case "CropLeft": case "CropUp": case "CropRight": case "CropDown": case "CropPlus": case "CropMinus":
                //console.log("Photo.OnClick." + pSender + " * vm.CropImg.Size=" + JSON.stringify(vm.CropImg.Size));
                vm.CropImg.Size = Util.Img("CropStep", { Crop: pSender, BaseSize: vm.BaseImg.Size, CropSize: vm.CropImg.Size, Step: vm.Step });
                //console.log("Photo.OnClick." + pSender + " * vm.CropImg.Size=" + JSON.stringify(vm.CropImg.Size));
                this.Crop();
                break;

            //#endregion

            //#region case "Done":
            case "Done":
                //console.log("Photo.OnClick.Done * vm.Show=" + vm.Show);
                switch (vm.Show) {
                    case "Rotate":
                        vm.CropImg.Size = Util.Img("GetCropSize", { BaseSize: vm.BaseImg.Size });
                        this.Crop();
                        Photo.View({ Show: "Crop", Src: vm.CropImg.Src, Enables: "*", Buttons: "*", Msg: "Info_Save" }); break;
                    case "Crop": Photo.View({ Show: "Save", Src: vm.CropImg.Src, Enables: "*", Buttons: "*", Msg: "Info_Save" }); break;
                }
                break;
            //#endregion

            //#region case "Rotate":

            case "RotateLeft": case "RotateRight":
                vm.Web = EWeb.Loading;
                Photo.View({ Enable: "*", Msg: "Web_Rot" });
                var src = Util.Img("GetRotateSrc", { Rotate: pSender, Img: vm.TempImg });
                this.Rotate(src);
                vm.Web = EWeb.Done;
                Photo.View({ Show: "Rotate", Src: src, Enables: "*", Buttons: "*", Msg: "Info_Rot" });
                break;

            //#endregion
        }
    }
    public Rotate(pSrc: string) {
        var vm = Photo.VM;
        vm.TempImg = document.createElement('img');
        vm.TempImg.src = pSrc;
        vm.TempImg.onload = () => {
            vm.RotateImg.Size = Util.Img("GetRotateSize", { Img: vm.TempImg, Max: vm.BaseDiv.Size });
            Ctl.Size(vm.RotateImg, false);
            vm.Web = EWeb.Done;
            Photo.View({ Show: "Rotate", Src: pSrc, Enable: "*", Buttons: "*", Msg: "Info_Rot" });
        }
    }

    public Crop() {
        //console.log("Photo.Crop * vm.Img.src.length=" + Photo.DM.Img.src.length);
        //console.log("Photo.Crop * VM.BaseImg.Size=" + JSON.stringify(Photo.VM.BaseImg.Size));
        //console.log("Photo.Crop * VM.CropImg.Size=" + JSON.stringify(Photo.VM.CropImg.Size));
        var vm = Photo.VM;
        //vm.CropImg.Size.X += 10;


        vm.CropImg.Src = Util.Img("GetCropSrc", { BaseSize: vm.BaseImg.Size, CropSize: vm.CropImg.Size, RawImg: vm.TempImg });
        Ctl.Size(vm.CropImg, false);
        Photo.View({ Show: "Crop", Enables: "*", Buttons: "*", Msg: "Info_Crop" });
        //console.log("Photo.Crop * VM.BaseImg.Size=" + JSON.stringify(Photo.VM.BaseImg.Size));
        //console.log("Photo.Crop * VM.CropImg.Size=" + JSON.stringify(Photo.VM.CropImg.Size));
    }

    public static Init() {
        //console.log("Photo.Init");
        var y = 1, w = 1, h = 1;
        this.VM = {
            Step: .1,
            CropMin: .5,
            TempImg: null,
            Web: EWeb.Loading,
            Disabled: true,
            IconL: Img.Init({ Type: EImg.IconL }, false),
            IconR: Img.Init({ Type: EImg.IconR }, false),
            Show: "Loading",
            BaseDiv: Div.Init({ Type: EDiv.Border_Black, X: 0, Y: y, Z: 4, W: 9, H: 11.5, Bo: 1 }, false),
            SquareImg: Img.Init({ Type: EImg.Border_Black, X: 0, Y: y, Z: 4, W: 9, H: 9, Bo: 2 }, false),
            SplashImg: Img.Init({ Pos: EPos.None, WMax: 9, HMax: 11, M: "ALR", Bo: 1 }, false),
            RotateImg: Img.Init({ Type: EImg.Border_Black, X: 0, Y: y, Z: 3, W: 9, H: 9, Bo: 1 }, false),
            BaseImg: Img.Init({ Type: EImg.Border_Black, X: 0, Y: y, Z: 3, W: 9, H: 9, Bo: 1 }, false),
            CropImg: Img.Init({ Type: EImg.Border_None, Z: 5 }, false),
            SaveImg: Img.Init({ Type: EImg.Border_Black, X: 0, Y: y, Z: 4, W: 9, H: 9, Bo: 2 }, false),
            IconDiv: Div.Init({ Type: EDiv.Border_Black, X: 0, Y: y, W: 9, H: h, Bo: "2", Bg: "G1" }),
            RotateLeft: Icon.Init({ Type: EIcon.RotateLeft, X: .5, Y: y, W: w, H: h }, false),
            RotateRight: Icon.Init({ Type: EIcon.RotateRight, X: 7.5, Y: y, W: w, H: h }, false),
            CropLeft: Icon.Init({ Type: EIcon.Left,X: .25, Y: y, W: w, H: h }, false),
            CropRight: Icon.Init({ Type: EIcon.Right, X: 1.75, Y: y, W: w, H: h }, false),
            CropUp: Icon.Init({ Type: EIcon.Up,X: 3.25, Y: y, W: w, H: h }, false),
            CropDown: Icon.Init({ Type: EIcon.Down,X: 4.75, Y: y, W: w, H: h }, false),
            CropPlus: Icon.Init({ Type: EIcon.Plus, X: 6.25, Y: y, W: w, H: h }, false),
            CropMinus: Icon.Init({ Type: EIcon.Minus, X: 7.75, Y: y, W: w, H: h }, false),
            Exit: Button.Init({ Type: EButton.Left, Value: "Exit" }, false),
            Browse: Button.Init({ Type: EButton.Left }, false),
            Back: Button.Init({ Type: EButton.Left }, false),
            Add: Button.Init({ Type: EButton.Right }, false),
            Change: Button.Init({ Type: EButton.Right }, false),
            Done: Button.Init({ Type: EButton.Right }, false),
            Save: Button.Init({ Type: EButton.Right }, false),
            Skip: Button.Init({ Type: EButton.Right }, false)
        }
        var vm = Photo.VM;
        vm.BaseImg = vm.RotateImg;
        y = vm.BaseDiv.Size.Y + vm.BaseDiv.Size.H + .3;
        vm.IconDiv.Size.Y = y;
        y += .1; var w = .9, h = .9;
        vm.RotateLeft.Size.Y = y; vm.RotateLeft.Size.W = w; vm.RotateLeft.Size.H = h;
        vm.RotateRight.Size.Y = y; vm.RotateRight.Size.W = w; vm.RotateRight.Size.H = h;

        vm.CropLeft.Size.Y = y; vm.CropLeft.Size.W = w; vm.CropLeft.Size.H = h;
        vm.CropRight.Size.Y = y; vm.CropRight.Size.W = w; vm.CropRight.Size.H = h;
        vm.CropUp.Size.Y = y; vm.CropUp.Size.W = w; vm.CropUp.Size.H = h;
        vm.CropDown.Size.Y = y; vm.CropDown.Size.W = w; vm.CropDown.Size.H = h;
        vm.CropPlus.Size.Y = y; vm.CropPlus.Size.W = w; vm.CropPlus.Size.H = h;
        vm.CropMinus.Size.Y = y; vm.CropMinus.Size.W = w; vm.CropMinus.Size.H = h;
        //console.log("Photo.Size * vm.BaseDiv.Size=" + JSON.stringify(vm.BaseDiv.Size));
        //console.log("Photo.Style * vm.BaseDiv.Style=" + JSON.stringify(vm.BaseDiv.Style));
        //console.log("Photo.Size * vm.RotateLeft.Size=" + JSON.stringify(vm.RotateLeft.Size));
        //console.log("Photo.Style * vm.RotateLeft.Style=" + JSON.stringify(vm.RotateLeft.Style));

        //console.log("LogOn.Size *  GM.Sized.LogOn=" + GM.Sized.LogOn);
        //console.log("LogOn.Size * vm.FieldSet.Style=" + JSON.stringify(vm.FieldSet.Style));

        //console.log("LogOn.Size * vm.EmailUserId.Style=" + JSON.stringify(vm.EmailUserId.Style));
        //console.log("LogOn.Size * vm.Recover.Style=" + JSON.stringify(vm.Recover.Style));
    }

    public static Size() {
        //console.log("Photo.Size");
        var vm = Photo.VM;
        //Size.ViewModel(vm, false);
        //console.log("Photo.Size * vm.BaseDiv.Size=" + JSON.stringify(vm.BaseDiv.Size));
        //console.log("Photo.Size * vm.SplashImg.Size=" + JSON.stringify(vm.SplashImg.Size));
        Img.Size(vm.IconL); Img.Size(vm.IconR);
        Img.Size(vm.BaseDiv, false); Img.Size(vm.SplashImg, false);
        Img.Size(vm.BaseImg, false);
        Img.Size(vm.CropImg, false);
        Img.Size(vm.RotateImg, false);
        Img.Size(vm.SaveImg, false);
        Img.Size(vm.SquareImg, false);
        Div.Size(vm.IconDiv, false);
        Icon.Size(vm.RotateLeft, false); Icon.Size(vm.RotateRight, false);
        Icon.Size(vm.CropLeft, false); Icon.Size(vm.CropRight, false);
        Icon.Size(vm.CropUp, false); Icon.Size(vm.CropDown, false);
        Icon.Size(vm.CropPlus, false); Icon.Size(vm.CropMinus, false);
        Icon.Size(vm.Exit, false); Icon.Size(vm.Browse, false);
        Icon.Size(vm.Back, false); Icon.Size(vm.Add, false);
        Icon.Size(vm.Change, false); Icon.Size(vm.Done, false);
        Icon.Size(vm.Save, false); Icon.Size(vm.Skip, false);
        //console.log("Photo.Style * vm.BaseDiv.Style=" + JSON.stringify(vm.BaseDiv.Style));
        //console.log("Photo.Style * vm.SplashImg.Style=" + JSON.stringify(vm.SplashImg.Style));
    }

    public static Web(pResult: any) {
        //console.log("Registration.Web * pResult.Method=" + pResult.Method);
        //console.log("Registration.Web * pResult.Action=" + pResult.Action);
        //console.log("Registration.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        //console.log("Registration.Web * pResult.Error=" + pResult.Error);
        var vm = Photo.VM;
        vm.Web = EWeb.Done;

        if (pResult.Error > "") Photo.View({ Enables: "*", Msg: "Error_" + pResult.Error });
        else {
            switch (pResult.Method) {
                case "Post":
                    switch (pResult.Action) {
                        case "Photo":
                            //console.log("Registration.Web.Post.Photo");
                            if (Nav.Route === "Register") window.location.reload();
                            else { Nav.GoView("Web" + pResult.Action, 'UserProfile'); }
                            break;
                        default: alert("Photo.Web.Post * Unknown Action=" + pResult.Action);
                    }
                    break;
            }
            Photo.View({ Enables: "*" });
        }
    }

    public static View(pObj) {
        //console.log("Photo.View")    
        var vm = Photo.VM;
        if (pObj.Show != null) {
            //console.log("Photo.View.Show * pObj.Show=" + pObj.Show);
            switch (pObj.Show) {
                case "Rotate": vm.Show = "Rotate"; if (pObj.Src != null) vm.RotateImg.Src = pObj.Src; break;
                case "Save": vm.Show = "Save"; if (pObj.Src != null) vm.SaveImg.Src = pObj.Src; break;
                case "Square": vm.Show = "Square"; if (pObj.Src != null) vm.SquareImg.Src = pObj.Src; break;
                case "Splash": vm.Show = "Splash"; if (pObj.Src != null) vm.SplashImg.Src = pObj.Src; break;
                //#region  case "Crop":
                case "Crop":
                    //console.log("PhotoSvc.View.Show.Crop * CropImg.Size.S=" + JSON.stringify(vm.CropImg.Size.S));
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropMin=" + vm.CropMin);
                    vm.Show = "Crop";
                    vm.BaseImg.Show = true;
                    var m = Util.Img("GetCropMargins", { BaseSize: vm.BaseImg.Size, CropSize: vm.CropImg.Size });

                    vm.CropLeft.Show = vm.CropImg.Size.S > vm.CropMin || m.L > 0;
                    vm.CropUp.Show = vm.CropImg.Size.S > vm.CropMin || m.T > 0;
                    vm.CropRight.Show = vm.CropImg.Size.S > vm.CropMin || m.R > 0;
                    vm.CropDown.Show = vm.CropImg.Size.S > vm.CropMin || m.B > 0;
                    vm.CropMinus.Show = vm.CropImg.Size.S > vm.CropMin;
                    vm.CropPlus.Show = (m.L + m.R > 0 && m.T + m.B > 0);

                    //console.log("Photo.View.Crop * m=" + JSON.stringify(m));
                    //console.log("PhotoSvc.View.Show.Crop * m=" + JSON.stringify(m));
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropLeft.Show=" + vm.CropLeft.Show);
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropUp.Show=" + vm.CropUp.Show);
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropRight.Show=" + vm.CropRight.Show);
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropDown.Show=" + vm.CropDown.Show);
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropMinus.Show=" + vm.CropMinus.Show);
                    //console.log("PhotoSvc.View.Show.Crop * vm.CropPlus.Show=" + vm.CropPlus.Show);
                    break;
                //#endregion
                default:

            }
        }
        if (pObj.Enables != null) {
            //console.log("Photo.View * pObj.Enables=" + pObj.Enables);
            switch (pObj.Enables) {
                case "*":
                    //console.log("Photo.View * vm.Web=" + vm.Web + " * vm.Show=" + vm.Show);
                    if (vm.Web !== EWeb.Done) this.View({ Enables: "Disable" });
                    else {
                        vm.Disabled = false;
                        switch (vm.Show) {
                            case "Crop": this.View({ Enables: "Crop" }); break;
                            case "Rotate": this.View({ Enables: "Rotate" }); break;
                            case "Save": this.View({ Enables: "Save" }); break;
                            case "Splash": this.View({ Enables: "Splash" }); break;
                        }
                    }
                    break;
                case "Disable":
                    //console.log("PhotoSvc.ViewFunc.Disable * VM.Photo.Show=" + VM.Photo.Show);
                    //this.ViewFunc({ Enable: "Photo_Disable" });
                    vm.Disabled = true;
                    this.View({ Disable: "BaseImg" }); this.View({ Disable: "RotateLeft" }); this.View({ Disable: "RotateRight" });
                    this.View({ Disable: "CropImg" });
                    this.View({ Disable: "CropLeft" }); this.View({ Disable: "CropUp" }); this.View({ Disable: "CropRight" }); this.View({ Disable: "CropDown" });
                    this.View({ Disable: "CropPlus" }); this.View({ Disable: "CropMinus" });
                    this.View({ Disable: "RotateImg" });
                    this.View({ Disable: "SaveImg" });
                    this.View({ Disable: "SplashImg" });
                    break;
                case "Splash": this.View({ Enable: "SplashImg" }); break;
                case "Rotate": this.View({ Enable: "RotateImg" }); break;
                case "Crop": this.View({ Disable: "BaseImg" }); this.View({ Enable: "CropImg" }); break;
            }
        }
        if (pObj.Enable != null) {
            //console.log("Photo.View.Enable * pObj.Enable=" + pObj.Enable);
            switch (pObj.Enable) {
                case "BaseImg": vm.BaseImg.Style.filter = undefined; vm.BaseImg.Style.opacity = undefined; break;
                case "CropImg": vm.CropImg.Style.filter = undefined; vm.CropImg.Style.opacity = undefined; break;
                case "CropLeft": vm.CropLeft.Style.filter = undefined; vm.CropLeft.Style.opacity = undefined; break;
                case "CropUp": vm.CropUp.Style.filter = undefined; vm.CropUp.Style.opacity = undefined; break;
                case "CropRight": vm.CropRight.Style.filter = undefined; vm.CropRight.Style.opacity = undefined; break;
                case "CropDown": vm.CropDown.Style.filter = undefined; vm.CropDown.Style.opacity = undefined; break;
                case "CropPlus": vm.CropPlus.Style.filter = undefined; vm.CropPlus.Style.opacity = undefined; break;
                case "RotateImg": vm.RotateImg.Style.filter = undefined; vm.RotateImg.Style.opacity = undefined; break;
                case "RotateLeft": vm.RotateLeft.Style.filter = undefined; vm.RotateLeft.Style.opacity = undefined; break;
                case "RotateRight": vm.RotateLeft.Style.filter = undefined; vm.RotateRight.Style.opacity = undefined; break;
                case "SaveImg": vm.SaveImg.Style.filter = undefined; vm.SaveImg.Style.opacity = undefined; break;
                case "SplashImg": vm.SplashImg.Style.filter = undefined; vm.SplashImg.Style.opacity = undefined; break;
            }
        }
        if (pObj.Disable != null) {
            switch (pObj.Disable) {
                case "SplashImg": vm.SplashImg.Style.filter = Dft.DisableFilter; vm.SplashImg.Style.opacity = Dft.DisableOpacity; break;
                case "BaseImg": vm.BaseImg.Style.filter = Dft.DisableFilter; vm.BaseImg.Style.opacity = Dft.DisableOpacity; break;
                case "RotateLeft": vm.RotateLeft.Style.filter = Dft.DisableFilter; vm.RotateLeft.Style.opacity = Dft.DisableOpacity; break;
                case "RotateRight": vm.RotateLeft.Style.filter = Dft.DisableFilter; vm.RotateRight.Style.opacity = Dft.DisableOpacity; break;
                case "CropImg": vm.CropImg.Style.filter = Dft.DisableFilter; vm.CropImg.Style.opacity = Dft.DisableOpacity; break;
                case "CropLeft": vm.CropLeft.Style.filter = Dft.DisableFilter; vm.CropLeft.Style.opacity = Dft.DisableOpacity; break;
                case "CropUp": vm.CropUp.Style.filter = Dft.DisableFilter; vm.CropUp.Style.opacity = Dft.DisableOpacity; break;
                case "CropRight": vm.CropRight.Style.filter = Dft.DisableFilter; vm.CropRight.Style.opacity = Dft.DisableOpacity; break;
                case "CropDown": vm.CropDown.Style.filter = Dft.DisableFilter; vm.CropDown.Style.opacity = Dft.DisableOpacity; break;
                case "CropPlus": vm.CropPlus.Style.filter = Dft.DisableFilter; vm.CropPlus.Style.opacity = Dft.DisableOpacity; break;
            }
        }

        if (pObj.Buttons != null) {
            //console.log("PhotoSvc.View.Buttons * pObj.Buttons=" + pObj.Buttons);

            //#region Set all to false
            vm.Back.Show = false;
            vm.Add.Show = false;
            vm.Change.Show = false;
            vm.Done.Show = false;
            vm.Save.Show = false;
            vm.Skip.Show = false;
            vm.Browse.Show = false;
            //#endregion

            switch (pObj.Buttons) {
                //#region case "*":
                case "*":
                    //console.log("PhotoSvc.View.Buttons.* vm.Show=" + vm.Show);
                    if (GM.IsAnonymous) {
                        switch (vm.Show) {
                            case "Square": vm.Browse.Show = true; vm.Skip.Show = true; break;
                            case "Rotate": vm.Back.Show = true; vm.Done.Show = true; break;
                            case "Crop": vm.Back.Show = true; vm.Done.Show = true; break;
                            case "Save": vm.Back.Show = true; vm.Save.Show = true; break;
                        }
                    }
                    else {
                        switch (vm.Show) {
                            case "Square": vm.Exit.Show = true; vm.Browse.Show = true; vm.Done.Show = true; break;
                            case "Rotate": vm.Exit.Show = true; vm.Back.Show = true; vm.Done.Show = true; break;
                            case "Crop": vm.Exit.Show = true; vm.Back.Show = true; vm.Done.Show = true; break;
                            case "Save": vm.Exit.Show = true; vm.Back.Show = true; vm.Save.Show = true; break;
                        }
                    }
                    break;

                //#endregion 
            }
        }
        if (pObj.Msg != null) {
            //console.log("Photo.View * pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {
                case "*":
                    if (Nav.Route === "Register") this.View({ Msg: "Info_Add" });
                    //else if (MM.UserProfiles.List[VM.Tabs.Idx].Photo_Src.length == 0) this.View({ Msg: "Info_Add" });
                    //else this.View({ Msg: "Info_Chg" });
                    break;
                case "Info_Add": GM.Msg = "You may upload a photo."; break;

                //#region case  "ExitBackSave":
                case "Info_Back":
                    //console.log("Photo.View.Msg.Info_Back * pObj.Msg=" + pObj.Msg);
                    if (Nav.Route === "Home") GM.Msg = "Photo change canceled.";
                    else {
                        switch (vm.Show) {
                            case "Square": if (Nav.Route === "Register") this.View({ Msg: "Info_Add" }); else this.View({ Msg: "Info_Chg" }); break;
                            case "Rotate": this.View({ Msg: "Info_Rot" }); break;
                            case "Crop": this.View({ Msg: "Info_Crop" }); break;
                            case "Save": this.View({ Msg: "Info_Save" }); break;
                        }
                    }
                    break;
                case "Back_Crop": GM.Msg = "You may change the crop."; break;
                case "Back_Rot": GM.Msg = "You may change the rotation."; break;
                case "Back_Square": GM.Msg = "You may select a different photo."; break;

                case "Info_Exit": GM.Msg = "You have exited your profiles."; break;
                case "Info_Chg": GM.Msg = "You may change your photo."; break;

                case "Info_Crop": GM.Msg = "You may crop the photo."; break;
                case "Info_Done": GM.Msg = "Click Done when finshed."; break;
                case "Info_Rot": GM.Msg = "You may rotate the photo."; break;
                case "Info_Save": GM.Msg = "Save your photo."; break;
                case "Info_Updated": GM.Msg = "Your photo was updated."; break;
                case "Link_Back": GM.Msg = "Photo change cancelled."; break;
                case "Link_Exit": GM.Msg = "You have exited your profiles."; break;
                case "Web_Load": GM.Msg = "Loading photo..."; break;
                case "Web_LogIn": GM.Msg = "Logging you in..."; break;
                case "Web_Process": GM.Msg = "Processing photo..."; break;
                case "Web_RotateRight": GM.Msg = "Rotating photo to the right..."; break;
                case "Web_RotateLeft": GM.Msg = "Rotating photo to the left..."; break;
                case "Web_Save": GM.Msg = "Saving photo..."; break;
                case "Web_Skip": GM.Msg = "Skipping photo upload..."; break;
                case "Web_Size": GM.Msg = "Sizing photo..."; break;
                case "Web_PhotoChanged": GM.Msg = "Photo change completed."; break;
            }
        }
    }
}

interface IVM extends IViewModel {
    TempImg?: any, Step: number, CropMin: number 
    BaseDiv: ICtl, SquareImg: IImg, SplashImg: IImg, RotateImg: IImg, BaseImg: IImg, SaveImg: IImg,
    IconDiv?: ICtl, RotateLeft?: IImg, RotateRight?: IImg,
    CropImg: IImg, CropLeft?: IImg, CropRight?: IImg, CropUp?: IImg, CropDown?: IImg, CropPlus?: IImg, CropMinus?: IImg,
    Exit: IButton,
    Add: IButton,
    Back: IButton,
    Browse: IButton,
    Change: IButton,
    Done: IButton,
    Save: IButton,
    Skip: IButton
}
