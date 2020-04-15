import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EPosition } from '../../../../Common/Attrs/Position';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { EIcon, IAIcon, IIcon, Icon } from '../../../../Common/Ctls/Icon';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';
import { Size } from '../../../../Common/Modules/Size';
import { EWeb, IResult, Web } from '../../../../Common/Modules/Web';
import { Nav, IViewModel } from '../../../../Common/Modules/Nav';

import { ECap, ICap, Cap } from '../../../../Main/Shared/Ctls/Cap';
import { IMove, Move } from '../../../../Main/Shared/Ctls/Move';
import { EPiece, IPiece, Piece } from '../../../../Main/Shared/Ctls/Piece';
import { EPos, IAPos, IPos, Pos} from '../../../../Main/Shared/Ctls/Pos';
import { EHex, IAHex, IHex, Hex } from '../../../../Main/Shared/Ctls/Hex';
import { ETri, IATri, ITri, Tri } from '../../../../Main/Shared/Ctls/Triangle';
import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';
import { IGame, IScript, ITurn, ITurnNew, Game, Turn } from '../../../../Main/Shared/Modules/Game';

@Component({ selector: 'board', templateUrl: './board.html' })

export class Board {
    VM: IVM; static VM: IVM;
    constructor() { this.VM = Board.VM; }

    ngOnInit() {
        Nav.View = "Board";
        var vm = Board.VM;

        //console.log("Board.ngOnInit");
        //console.log("Board.ngOnInit * Nav.View_Event=" + Nav.View_Event);
        //console.log("Board.ngOnInit * Nav.View_Parms=" + JSON.stringify(Nav.View_Parms));
        //console.log("Board.ngOnInit * GM.Sized.Board=" + GM.Sized.Board);
        //console.log("=================================================================================");
        vm.TurnNew = null;
        switch (Nav.View_Event) {
            case "App_Boot":
            case "LogOn_ClickPractice": if (Nav.Route == "Practice" && !GM.Loaded.Practice) Board.View({ Msg: "Web_Load" }); break;
        }
        if (GM.Sized.Board == null) Board.Size();
    }

    public OnChange(pSender) {
        //console.log("OnChange * pConrol=" + pSender)
    }

    public OnClick(pSender: string, pIdx: number = 0) {
        //console.log("Board.OnClick * pSender=" + pSender + " * pIdx=" + pIdx);
        var vm = this.VM;
        var msg: string;

        switch (pSender) {

            //#region Icons

            case "Audio": vm.AudioOff.Show = !vm.AudioOff.Show; GM.AudioOn = !vm.AudioOff.Show; Board.View({ Audio: "Click", Msg: "Click_Audio" }); break;
            case "Clock": vm.ClockOff.Show = !vm.ClockOff.Show; Board.View({ Audio: "Click", Shows: "Times", Msg: "Click_Clock" }); break;
            case "Exit": if (GM.IsAnonymous) Nav.GoRoute("Click" + pSender, 'LogOn'); else Nav.GoRoute("Click" + pSender, 'Home'); break;
            case "Flip": vm.FlipOn.Show = !vm.FlipOn.Show; Board.View({ Places: "*", Msg: "Click_Flip" }); break;

            //#region case "Copy":
            case "Copy":

                Web.Get((pResult) => Board.Web(pResult), "BoardCopy");
                //GM.Hub.invoke("SendMessage", "App", "testmessage").catch(function (err) {
                //  return  alert(err.toString());
                //});

                break;
            //#endregion

            //#region case "Resign":
            case "Resign":

                Web.Get((pResult) => Board.Web(pResult), "BoardResign");
                //GM.Hub.invoke("SendMessage", "App", "testmessage").catch(function (err) {
                //  return  alert(err.toString());
                //});

                break;
            //#endregion

            //#region case "Save":

            case "Save":
                //console.log("Board.OnClick.Save * vm.Save_Action=" + vm.Save_Action);

                switch (vm.Save_Action) {

                    //#region case "Restart":

                    case "Restart":
                        //console.log("Board.OnClick.Save.Restart");
                        //console.log("Board.OnClick.Save.Restart * vm.Game.Script" + JSON.stringify(vm.Game.Script));
                        //console.log("Board.OnClick.Save.Restart * vm.TurnNew" + JSON.stringify(vm.TurnNew));
                        vm.Web = EWeb.Loading;
                        Board.View({ Shows: "SaveStart", Enables: "*", Msg: "Click_Save_Restart" });
                        if (vm.Game.Script.length === 0) Board.Web({ Method: "Get", Action: "Restart" })
                        else Web.Get((pResult) => Board.Web(pResult), "Restart");
                        break;
                    //#endregion

                    //#region case "Turn":

                    case "Turn":
                        //console.log("Board.OnClick.Save.Turn");
                        vm.TurnNew.Stage = "Saving";
                        vm.Web = EWeb.Loading;
                        Board.View({ Shows: "SaveStartTurnNew", Ons: "TurnNew", Enables: "*", Msg: "Click_Save_Turn" });
                        Web.Post((pResult) => Board.Web(pResult), "Turn", { GameId: vm.Game.Id, Idx: vm.TurnNew.Idx, Script: vm.TurnNew.Script });
                        break;

                    //#endregion

                }

                break;

            //#endregion

            //#region case "Start":
            case "Start":
                if (vm.Game.Id === null) {
                    vm.StartOn.Show = !vm.StartOn.Show;
                    if (vm.StartOn.Show) vm.Save_Action = "Restart";
                    else vm.Save_Action = vm.TurnNew !== null && vm.TurnNew.Stage === "Save" ? "Turn" : null;
                    Board.View({ Shows: "SaveStart", Msg: "Click_Restart" });
                }
                break;
            //#endregion

            //#endregion

            //#region Arrows

            //#region case "First":

            case "First":
                //console.log("Board.OnClick.First");
                Board.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.Turn.Idx] });
                if (vm.TurnNew !== null && vm.TurnNew.Show) {
                    vm.TurnNew.Show = false; vm.Save_Action === null;
                    Board.View({ Places: "TurnNew", Ons: "TurnNew" });
                    if (vm.TurnNew.Idx < vm.Game.Turn.Idx) vm.TurnNew = null; // Get rid of any new turns that are not at the end
                }
                vm.Turn = Turn.GetFirst(vm.Game);
                vm.Save_Action = null;
                //Board.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew" });
                Board.View({ Shows: "ArrowsSave", Ons: "Turn_Prev", Places: "Pieces", Enables: "PhotosPieces", Msg: "Turn_First" });
                break;
            //#endregion

            //#region case "Prev":

            case "Prev":
                //console.log("Board.OnClick.Prev");
                //console.log("Board.OnClick.Prev * vm.TurnNew=" + JSON.stringify(vm.TurnNew));
                //console.log("Board.OnClick.Prev * vm.Turn.Idx=" + vm.Turn.Idx);
                //console.log("Board.OnClick.Prev * vm.Game.Turn.Idx=" + vm.Game.Turn.Idx);
                if (vm.TurnNew !== null && vm.TurnNew.Show) {
                    //console.log("Board.OnClick.Prev * vm.TurnNew.Show=" + vm.TurnNew.Show);
                    vm.TurnNew.Show = false;
                    Board.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew", Msg: vm.Turn.Idx === -1 ? "Turn_First" : "Turn_Last" });
                    if (vm.TurnNew.Idx <= vm.Game.Turn.Idx) vm.TurnNew = null; // Get rid of any new turns that are not at the end
                }
                else {
                    vm.Turn = Turn.GetPrev(vm.Game, vm.Turn);
                    Board.View({ Places: "Turn_Prev", Ons: "Turn_Prev", Msg: vm.Turn.Idx === -1 ? "Turn_First" : "Turn_Prev" });
                }
                vm.Save_Action = null;
                Board.View({ Shows: "ArrowsSave", Enables: "PhotosPieces" });
                break;

            //#endregion

            //#region case "Next":

            case "Next":
                //console.log("Board.OnClick.Next");
                //console.log("Board.OnClick.Next * vm.Turn.Idx=" + vm.Turn.Idx + " * vm.Game.Turn.Idx=" + vm.Game.Turn.Idx);
                if (vm.Turn.Idx === vm.Game.Turn.Idx) {
                    vm.TurnNew.Show = true;
                    if (vm.TurnNew.Stage === "Redeem" || vm.TurnNew.Stage === "Save") vm.Save_Action = "Turn";
                    Board.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew", Msg: "TurnNew" });
                }
                else {
                    if (vm.TurnNew !== null) { vm.TurnNew.Show = false; Board.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew" }); vm.TurnNew = null; }
                    vm.Turn = Turn.GetNext(vm.Game, vm.Turn);
                    Board.View({ Places: "Turn", Ons: "Turn_Next", Msg: vm.Turn.Idx < vm.Game.Script.length - 1 ? "Turn_Next" : "Turn_Last" });
                }

                Board.View({ Shows: "ArrowsSave", Enables: "PhotosPieces" });
                //console.log("Board.OnClick.Next * vm.Turn.Idx=" + vm.Turn.Idx);
                break;

            //#endregion

            //#region case "Last":

            case "Last":
                //console.log("Board.OnClick.Last");
                //console.log("Board.OnClick.Last * vm.Turn.Idx=" + vm.Turn.Idx);
                Board.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.Turn.Idx === -1 ? 0 : vm.Turn.Idx] });
                vm.Turn = Turn.GetLast(vm.Game);
                Board.View({ Shows: "ArrowsSave", Places: "Pieces", Enables: "PhotosPieces", Msg: "Turn_Last" });
                if (vm.TurnNew !== null) {
                    vm.TurnNew.Show = true;
                    if (vm.TurnNew.Stage == "Redeem" || vm.TurnNew.Stage == "Save") vm.Save_Action = "Turn";
                    Board.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew", Msg: "TurnNew" });
                }
                else Board.View({ Ons: "Turn_Next", Msg: "Turn_Last" });
                Board.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew" });
                break;

            //#endregion

            //#endregion

            //#region case "Pos":

            case "Pos":
                //console.log("Board.OnClick * pSender=" + pSender + " * pIdx=" + pIdx);
                //console.log("Board.OnClick * pSender=" + pSender + " * pIdx=" + pIdx + " * vm.Turn.MoveSets=" + vm.Turn.MoveSets);
                if (vm.Turn.MoveSets === null) {
                    vm.Click_PosIdx = pIdx;
                    vm.Web = EWeb.Loading;
                    Board.View({ Enables: "PhotosPieces", Ons: "Turn_Off", Msg: "Web_GetMove" });
                    Web.Post((pResult) => Board.Web(pResult), "GetMoves", { WhitesTurn: vm.Turn.WhitesTurn, PiecePos: vm.Turn.PiecePos });
                    return;
                }
                else Board.Click_Pos(pIdx);
                break;

            //#endregion

        }
    }

    //#region Static

    public static Click_Pos(pPosIdx: number) {
        //console.log("Board.Click_Pos * pPosIdx=" + pPosIdx);

        //#region Prep

        var vm = this.VM;
        var pos = vm.Poss[pPosIdx];
        var pieceIdx = vm.Turn.PiecePos.indexOf(pPosIdx)
        var piece = pieceIdx === -1 ? null : vm.Pieces[pieceIdx];

        //#endregion

        if (Board.Validate("Click_Pos", { Pos: pos, Piece: piece })) {
            //console.log("Board.Click_Pos * vm.Game.Turn.PiecePos=" + JSON.stringify(vm.Game.Turn.PiecePos));

            //#region Cancel/Switch

            if (vm.TurnNew !== null) {

                //console.log("Board.Click_Pos *  vm.TurnNew.Piece.Color=" + vm.TurnNew.Piece.Color);
                //console.log("Board.Click_Pos * vm.TurnNew.Prev=" + JSON.stringify(vm.TurnNew.Prev));
                //console.log("Board.Click_Pos * vm.TurnNew.Pos=" + JSON.stringify(vm.TurnNew.Pos));
                //console.log("Board.Click_Pos * piece=" + JSON.stringify(piece));
                //console.log("Board.Click_Pos * vm.TurnNew.Show=" + vm.TurnNew.Show);
                //console.log("Board.Click_Pos * vm.TurnNew.Stage=" + vm.TurnNew.Stage);
                //console.log("Board.Click_Pos * vm.TurnNew.Script=" + JSON.stringify(vm.TurnNew.Script));
                if (pos.Idx === vm.TurnNew.Prev.Idx || (vm.TurnNew.Pos !== null && pos.Idx === vm.TurnNew.Pos.Idx) || piece != null && vm.TurnNew.Piece.Color === piece.Color && pPosIdx < 49) {
                    vm.TurnNew.Show = false; vm.Save_Action = null;
                    this.View({ Shows: "TurnNew", Places: "TurnNew", Ons: "TurnNew", Msg: "Turn_Cancel", Pos: vm.TurnNew.Prev, Piece: vm.TurnNew.Piece });
                    if (pos.Idx === vm.TurnNew.Prev.Idx || (vm.TurnNew.Pos !== null && pos.Idx === vm.TurnNew.Pos.Idx) || piece != null && vm.TurnNew.Piece.Idx === pieceIdx) {
                        //console.log("Board.Click_Pos.Cancel * vm.Game.Turn.PiecePos=" + JSON.stringify(vm.Game.Turn.PiecePos));
                        vm.TurnNew = null;
                        this.View({ Audio: "Click", Shows: "ArrowsSave" });
                        return;
                    }
                    vm.TurnNew = null;
                    this.View({ Audio: "Click", Shows: "ArrowsSave" });
                }
            }

            //#endregion

            //console.log("Board.Click_Pos * -----------------------------------------------");
            //console.log("Board.Click_Pos * vm.Game.Turn.Idx=" + JSON.stringify(vm.Game.Turn.Idx));
            //console.log("Board.Click_Pos * vm.Turn=" + JSON.stringify(vm.Turn.Idx));
            if (vm.TurnNew === null) {
                //console.log("Board.Click_Pos * vm.TurnNew=null");
                vm.TurnNew = Turn.New_Init(vm.Turn, pos, piece);
                vm.Moves = []; vm.Moves_Show = true; vm.Moves_Src = Dft.Src.Board.Piece.BlackKing;
                //for (var x = 0; x < vm.TurnNew.Moves.length; x++)
                //    vm.Moves[x] = Move.Init({ Type: EMove.Border_Black }, { Move: GM.Move, VM_Pos: vm.Poss[vm.TurnNew.Moves[x]], Src: GM.Src.Pieces[piece.Idx] });
                this.View({ Audio: "Click", Shows: "ArrowsTurnNew", Places: "TurnNew", Ons: "TurnNew", Msg: "TurnNew", Piece: piece });
                //console.log("Board.Click_Pos * vm.Moves_Src=" + vm.Moves_Src);
            }
            else {
                //console.log("Board.Click_Pos * vm.TurnNew.Stage=" + vm.TurnNew.Stage);
                switch (vm.TurnNew.Stage) {
                    case "Move":
                        //console.log("Board.Click_Pos.move * pos=" + JSON.stringify(pos));
                        //console.log("Board.Click_Pos.move * piece=" + JSON.stringify(piece));
                        vm.TurnNew.Pos = pos;
                        vm.TurnNew.Script = piece === null ? [] : [{ PieceIdx: piece.Idx, PosIdx: vm.Pieces[pieceIdx].CapPosIdx, PrevIdx: pos.Idx }];
                        vm.TurnNew.Script.push({ PieceIdx: vm.TurnNew.Piece.Idx, PosIdx: pos.Idx, PrevIdx: vm.TurnNew.Prev.Idx });
                        //console.log("Board.Click_Pos.move * vm.TurnNew.Script=" + JSON.stringify(vm.TurnNew.Script));
                        vm.TurnNew.Redeems = Turn.GetRedeems(vm.Turn, vm.TurnNew);
                        vm.TurnNew.Stage = vm.TurnNew.Redeems !== null ? "Redeem" : "Save";
                        vm.Save_Action = "Turn";
                        break;
                    case "Redeem":
                        //console.log("Board.Click_Pos.Redeem");
                        //console.log("Board.Click_Pos.Redeem *  vm.TurnNew.Script=" + JSON.stringify(vm.TurnNew.Script));
                        //console.log("Board.Click_Pos.Redeem *  vm.TurnNew.Script.length=" + vm.TurnNew.Script.length);
                        var moveIdx = vm.TurnNew.Script.length - 1;
                        vm.TurnNew.Script[moveIdx].PosIdx = vm.Pieces[vm.TurnNew.Script[moveIdx].PieceIdx].CapPosIdx;
                        vm.TurnNew.Script.push({ PieceIdx: pieceIdx, PosIdx: vm.TurnNew.Pos.Idx, PrevIdx: vm.Pieces[pieceIdx].CapPosIdx });
                        vm.TurnNew.Stage = "Save";
                        break;
                }
                this.View({ Audio: "Click", Shows: "ArrowsSaveStartTurnNew", Places: "TurnNew", Ons: "TurnNew", Msg: "TurnNew", Piece: piece });
            }
        }
    }

    public static Init() {
        //console.log("Board.Init");
        //#region Prep

        var gX = [], gY = []; for (var x = 0; x < 14; x++) gX.push(x * .64); for (var y = 0; y < 14; y++) gY.push(y * 1.06 + 1);
        var x: number = 0;

        //#endregion

        Board.VM = {
            Disabled: false,
            Poss :[],
            Moves_Show: false, Pieces_Show: true, FirstPrev_Show: false, NextLast_Show: false, Photos_Show: false,
            First: Icon.Init({ Type: EIcon.First, X: gX[0], Y: gY[2] }),
            Prev: Icon.Init({ Type: EIcon.Prev, X: gX[0], Y: gY[10] }),
            Next: Icon.Init({ Type: EIcon.Next, X: gX[2], Y: gY[10] }),
            Last: Icon.Init({ Type: EIcon.Last, X: gX[2], Y: gY[2] }),
            Audio: Icon.Init({ Type: EIcon.Audio, X: gX[0], Y: gY[8] }),
            AudioOff: Icon.Init({ Type: EIcon.Off, X: gX[0], Y: gY[8] }),
            Clock: Icon.Init({ Type: EIcon.Clock, X: gX[1], Y: gY[9] }),
            ClockOff: Icon.Init({ Type: EIcon.Off, X: gX[1], Y: gY[9] }),
            Copy: Icon.Init({ Type: EIcon.Copy, X: gX[1], Y: gY[3] }),
            CopyOn: Icon.Init({ Type: EIcon.On, X: gX[1], Y: gY[3] }),
            Exit: Icon.Init({ Type: EIcon.Exit, X: gX[4], Y: gY[0] }),
            Flip: Icon.Init({ Type: EIcon.Flip, X: gX[1], Y: gY[3] }),
            FlipOn: Icon.Init({ Type: EIcon.On, X: gX[1], Y: gY[3] }),
            Resign: Icon.Init({ Type: EIcon.Resign, X: gX[4], Y: gY[12] }),
            ResignOn: Icon.Init({ Type: EIcon.On, X: gX[4], Y: gY[12] }),
            Save: Icon.Init({ Type: EIcon.Save, X: gX[0], Y: gY[4] }),
            Start: Icon.Init({ Type: EIcon.Start, X: gX[4], Y: gY[12] }),
            StartOn: Icon.Init({ Type: EIcon.On, X: gX[4], Y: gY[12] }),
            StartOff: Icon.Init({ Type: EIcon.Off, X: gX[4], Y: gY[12] }),
            OpImg: Img.Init({ Type: EImg.Border_Black, Y: 1, S: 2 }),
            MeImg: Img.Init({ Type: EImg.Border_Black, Y: 13.1, S: 2 }),
            OpTime: Label.Init({ Type: ELabel.TACenter, Z: 3, X: 0, Y: 2.55, W: 2, H: .5, F: ".6B", Bo: "1", Bg: "G2" }),
            MeTime: Label.Init({ Type: ELabel.TACenter, Z: 3, X: 0, Y: 14.85, W: 2, H: .5, F: ".6B", Bo: "1", Bg: "G2" }),
        };
        var vm = Board.VM;
        vm.Hexs = [
            (Hex.Init({ Idx: 0, Type: EHex.Red, Name: "M1", Places: [{ X: gX[6], Y: gY[0] }, { X: gX[6], Y: gY[12] }] }, false)), //Row 0
            (Hex.Init({ Idx: 1, Type: EHex.Black, Name: "L2", Places: [{ X: gX[7], Y: gY[1] }, { X: gX[5], Y: gY[11] }] }, false)),
            (Hex.Init({ Idx: 2, Type: EHex.White, Name: "K3", Places: [{ X: gX[8], Y: gY[2] }, { X: gX[4], Y: gY[10] }] }, false)),
            (Hex.Init({ Idx: 3, Type: EHex.Red, Name: "J4", Places: [{ X: gX[9], Y: gY[3] }, { X: gX[3], Y: gY[9] }] }, false)),
            (Hex.Init({ Idx: 4, Type: EHex.Black, Name: "I5", Places: [{ X: gX[10], Y: gY[4] }, { X: gX[2], Y: gY[8] }] }, false)),
            (Hex.Init({ Idx: 5, Type: EHex.White, Name: "H6", Places: [{ X: gX[11], Y: gY[5] }, { X: gX[1], Y: gY[7] }] }, false)),
            (Hex.Init({ Idx: 6, Type: EHex.Red, Name: "G7", Places: [{ X: gX[12], Y: gY[6] }, { X: gX[0], Y: gY[6] }] }, false)),
            (Hex.Init({ Idx: 7, Type: EHex.White, Name: "L1", Places: [{ X: gX[5], Y: gY[1] }, { X: gX[7], Y: gY[11] }] }, false)), //Row 1
            (Hex.Init({ Idx: 8, Type: EHex.Red, Name: "K2", Places: [{ X: gX[6], Y: gY[2] }, { X: gX[6], Y: gY[10] }] }, false)),
            (Hex.Init({ Idx: 9, Type: EHex.Black, Name: "J3", Places: [{ X: gX[7], Y: gY[3] }, { X: gX[5], Y: gY[9] }] }, false)),
            (Hex.Init({ Idx: 10, Type: EHex.White, Name: "I4", Places: [{ X: gX[8], Y: gY[4] }, { X: gX[4], Y: gY[8] }] }, false)),
            (Hex.Init({ Idx: 11, Type: EHex.Red, Name: "H5", Places: [{ X: gX[9], Y: gY[5] }, { X: gX[3], Y: gY[7] }] }, false)),
            (Hex.Init({ Idx: 12, Type: EHex.Black, Name: "G6", Places: [{ X: gX[10], Y: gY[6] }, { X: gX[2], Y: gY[6] }] }, false)),
            (Hex.Init({ Idx: 13, Type: EHex.White, Name: "F6", Places: [{ X: gX[11], Y: gY[7] }, { X: gX[1], Y: gY[5] }] }, false)),
            (Hex.Init({ Idx: 14, Type: EHex.Black, Name: "K1", Places: [{ X: gX[4], Y: gY[2] }, { X: gX[8], Y: gY[10] }] }, false)), //Row 2
            (Hex.Init({ Idx: 15, Type: EHex.White, Name: "J2", Places: [{ X: gX[5], Y: gY[3] }, { X: gX[7], Y: gY[9] }] }, false)),
            (Hex.Init({ Idx: 16, Type: EHex.Red, Name: "I3", Places: [{ X: gX[6], Y: gY[4] }, { X: gX[6], Y: gY[8] }] }, false)),
            (Hex.Init({ Idx: 17, Type: EHex.Black, Name: "H4", Places: [{ X: gX[7], Y: gY[5] }, { X: gX[5], Y: gY[7] }] }, false)),
            (Hex.Init({ Idx: 18, Type: EHex.White, Name: "G5", Places: [{ X: gX[8], Y: gY[6] }, { X: gX[4], Y: gY[6] }] }, false)),
            (Hex.Init({ Idx: 19, Type: EHex.Black, Name: "F5", Places: [{ X: gX[9], Y: gY[7] }, { X: gX[3], Y: gY[5] }] }, false)),
            (Hex.Init({ Idx: 20, Type: EHex.Black, Name: "E5", Places: [{ X: gX[10], Y: gY[8] }, { X: gX[2], Y: gY[4] }] }, false)),
            (Hex.Init({ Idx: 21, Type: EHex.Red, Name: "J1", Places: [{ X: gX[3], Y: gY[3] }, { X: gX[9], Y: gY[9] }] }, false)), //Row 3
            (Hex.Init({ Idx: 22, Type: EHex.Black, Name: "I2", Places: [{ X: gX[4], Y: gY[4] }, { X: gX[8], Y: gY[8] }] }, false)),
            (Hex.Init({ Idx: 23, Type: EHex.White, Name: "H3", Places: [{ X: gX[5], Y: gY[5] }, { X: gX[7], Y: gY[7] }] }, false)),
            (Hex.Init({ Idx: 24, Type: EHex.Red, Name: "G4", Places: [{ X: gX[6], Y: gY[6] }, { X: gX[6], Y: gY[6] }] }, false)),
            (Hex.Init({ Idx: 25, Type: EHex.Black, Name: "F4", Places: [{ X: gX[7], Y: gY[7] }, { X: gX[5], Y: gY[5] }] }, false)),
            (Hex.Init({ Idx: 26, Type: EHex.White, Name: "E4", Places: [{ X: gX[8], Y: gY[8] }, { X: gX[4], Y: gY[4] }] }, false)),
            (Hex.Init({ Idx: 27, Type: EHex.Red, Name: "D4", Places: [{ X: gX[9], Y: gY[9] }, { X: gX[3], Y: gY[3] }] }, false)),
            (Hex.Init({ Idx: 28, Type: EHex.White, Name: "I1", Places: [{ X: gX[2], Y: gY[4] }, { X: gX[10], Y: gY[8] }] }, false)), //Row 4
            (Hex.Init({ Idx: 29, Type: EHex.Red, Name: "H2", Places: [{ X: gX[3], Y: gY[5] }, { X: gX[9], Y: gY[7] }] }, false)),
            (Hex.Init({ Idx: 30, Type: EHex.Black, Name: "G3", Places: [{ X: gX[4], Y: gY[6] }, { X: gX[8], Y: gY[6] }] }, false)),
            (Hex.Init({ Idx: 31, Type: EHex.White, Name: "F3", Places: [{ X: gX[5], Y: gY[7] }, { X: gX[7], Y: gY[5] }] }, false)),
            (Hex.Init({ Idx: 32, Type: EHex.Red, Name: "E3", Places: [{ X: gX[6], Y: gY[8] }, { X: gX[6], Y: gY[4] }] }, false)),
            (Hex.Init({ Idx: 33, Type: EHex.Black, Name: "D3", Places: [{ X: gX[7], Y: gY[9] }, { X: gX[5], Y: gY[3] }] }, false)),
            (Hex.Init({ Idx: 34, Type: EHex.White, Name: "C3", Places: [{ X: gX[8], Y: gY[10] }, { X: gX[4], Y: gY[2] }] }, false)),
            (Hex.Init({ Idx: 35, Type: EHex.Black, Name: "H1", Places: [{ X: gX[1], Y: gY[5] }, { X: gX[11], Y: gY[7] }] }, false)), //Row 5
            (Hex.Init({ Idx: 36, Type: EHex.White, Name: "G2", Places: [{ X: gX[2], Y: gY[6] }, { X: gX[10], Y: gY[6] }] }, false)),
            (Hex.Init({ Idx: 37, Type: EHex.Red, Name: "F2", Places: [{ X: gX[3], Y: gY[7] }, { X: gX[9], Y: gY[5] }] }, false)),
            (Hex.Init({ Idx: 38, Type: EHex.Black, Name: "E2", Places: [{ X: gX[4], Y: gY[8] }, { X: gX[8], Y: gY[4] }] }, false)),
            (Hex.Init({ Idx: 39, Type: EHex.White, Name: "D2", Places: [{ X: gX[5], Y: gY[9] }, { X: gX[7], Y: gY[3] }] }, false)),
            (Hex.Init({ Idx: 40, Type: EHex.Red, Name: "C2", Places: [{ X: gX[6], Y: gY[10] }, { X: gX[6], Y: gY[2] }] }, false)),
            (Hex.Init({ Idx: 41, Type: EHex.Black, Name: "B2", Places: [{ X: gX[7], Y: gY[11] }, { X: gX[5], Y: gY[1] }] }, false)),
            (Hex.Init({ Idx: 42, Type: EHex.Red, Name: "G1", Places: [{ X: gX[0], Y: gY[6] }, { X: gX[12], Y: gY[6] }] }, false)), //Row 6
            (Hex.Init({ Idx: 43, Type: EHex.Black, Name: "F1", Places: [{ X: gX[1], Y: gY[7] }, { X: gX[11], Y: gY[5] }] }, false)),
            (Hex.Init({ Idx: 44, Type: EHex.White, Name: "E1", Places: [{ X: gX[2], Y: gY[8] }, { X: gX[10], Y: gY[4] }] }, false)),
            (Hex.Init({ Idx: 45, Type: EHex.Red, Name: "D1", Places: [{ X: gX[3], Y: gY[9] }, { X: gX[9], Y: gY[3] }] }, false)),
            (Hex.Init({ Idx: 46, Type: EHex.Black, Name: "C1", Places: [{ X: gX[4], Y: gY[10] }, { X: gX[8], Y: gY[2] }] }, false)),
            (Hex.Init({ Idx: 47, Type: EHex.White, Name: "B1", Places: [{ X: gX[5], Y: gY[11] }, { X: gX[7], Y: gY[1] }] }, false)),
            (Hex.Init({ Idx: 48, Type: EHex.Red, Name: "A1", Places: [{ X: gX[6], Y: gY[12] }, { X: gX[6], Y: gY[0] }] }, false)),
        ];
        vm.Triangles = [
            Tri.Init({ Type: ETri.Op, X: gX[3], Y: gY[3] }), Tri.Init({ Type: ETri.Op, X: gX[5], Y: gY[3] }), Tri.Init({ Type: ETri.Op, X: gX[7], Y: gY[3] }), Tri.Init({ Type: ETri.Op, X: gX[9], Y: gY[3] }),
            Tri.Init({ Type: ETri.Me, X: gX[3], Y: gY[9] }), Tri.Init({ Type: ETri.Me, X: gX[5], Y: gY[9] }), Tri.Init({ Type: ETri.Me, X: gX[7], Y: gY[9] }), Tri.Init({ Type: ETri.Me, X: gX[9], Y: gY[9] })
        ],
        vm.Caps = [
            (Cap.Init({ Idx: 49, Type: ECap.White, Places: [{ X: gX[8], Y: gY[0] }, { X: gX[8], Y: gY[12] }] }, false)),    // White Row 0
            (Cap.Init({ Idx: 50, Type: ECap.White, Places: [{ X: gX[10], Y: gY[0] }, { X: gX[10], Y: gY[12] }] }, false)),
            (Cap.Init({ Idx: 51, Type: ECap.White, Places: [{ X: gX[12], Y: gY[0] }, { X: gX[12], Y: gY[12] }] }, false)),
            (Cap.Init({ Idx: 52, Type: ECap.White, Places: [{ X: gX[9], Y: gY[1] }, { X: gX[9], Y: gY[11] }] }, false)),    // White Row 1
            (Cap.Init({ Idx: 53, Type: ECap.White, Places: [{ X: gX[11], Y: gY[1] }, { X: gX[11], Y: gY[11] }] }, false)),
            (Cap.Init({ Idx: 54, Type: ECap.White, Places: [{ X: gX[10], Y: gY[2] }, { X: gX[10], Y: gY[10] }] }, false)),  // White Row 2
            (Cap.Init({ Idx: 55, Type: ECap.White, Places: [{ X: gX[12], Y: gY[2] }, { X: gX[12], Y: gY[10] }] }, false)),
            (Cap.Init({ Idx: 56, Type: ECap.White, Places: [{ X: gX[11], Y: gY[3] }, { X: gX[12], Y: gY[9] }] }, false)),   // White Inner Two
            (Cap.Init({ Idx: 57, Type: ECap.White, Places: [{ X: gX[12], Y: gY[4] }, { X: gX[11], Y: gY[8] }] }, false)),
            (Cap.Init({ Idx: 58, Type: ECap.Black, Places: [{ X: gX[8], Y: gY[12] }, { X: gX[8], Y: gY[0] }] }, false)),    // Black Row 0
            (Cap.Init({ Idx: 59, Type: ECap.Black, Places: [{ X: gX[10], Y: gY[12] }, { X: gX[10], Y: gY[0] }] }, false)),
            (Cap.Init({ Idx: 60, Type: ECap.Black, Places: [{ X: gX[12], Y: gY[12] }, { X: gX[12], Y: gY[0] }] }, false)),
            (Cap.Init({ Idx: 61, Type: ECap.Black, Places: [{ X: gX[9], Y: gY[11] }, { X: gX[9], Y: gY[1] }] }, false)),    // Black Row 1
            (Cap.Init({ Idx: 62, Type: ECap.Black, Places: [{ X: gX[11], Y: gY[11] }, { X: gX[11], Y: gY[1] }] }, false)),
            (Cap.Init({ Idx: 63, Type: ECap.Black, Places: [{ X: gX[10], Y: gY[10] }, { X: gX[10], Y: gY[2] }] }, false)),  // Black Row 2
            (Cap.Init({ Idx: 64, Type: ECap.Black, Places: [{ X: gX[12], Y: gY[10] }, { X: gX[12], Y: gY[2] }] }, false)),
            (Cap.Init({ Idx: 65, Type: ECap.Black, Places: [{ X: gX[11], Y: gY[9] }, { X: gX[12], Y: gY[3] }] }, false)),   // Black Inner Two
            (Cap.Init({ Idx: 66, Type: ECap.Black, Places: [{ X: gX[12], Y: gY[8] }, { X: gX[11], Y: gY[4] }] }, false))
        ];

        vm.Pieces = [
            (Piece.Init({ Idx: 0, Type: EPiece.BlackKing, MovesIdx: 0, CapPosIdx: 0 }, false)),
            (Piece.Init({ Idx: 1, Type: EPiece.BlackQueen, MovesIdx: 1, CapPosIdx: 58 }, false)),
            (Piece.Init({ Idx: 2, Type: EPiece.BlackRook, MovesIdx: 2, CapPosIdx: 59 }, false)),
            (Piece.Init({ Idx: 3, Type: EPiece.BlackBishop, MovesIdx: 3, CapPosIdx: 60 }, false)),
            (Piece.Init({ Idx: 4, Type: EPiece.BlackKnight, MovesIdx: 4, CapPosIdx: 61 }, false)),
            (Piece.Init({ Idx: 5, Type: EPiece.BlackPawn, MovesIdx: 5, CapPosIdx: 62 }, false)),
            (Piece.Init({ Idx: 6, Type: EPiece.BlackPawn, MovesIdx: 6, CapPosIdx: 63 }, false)),
            (Piece.Init({ Idx: 7, Type: EPiece.BlackPawn, MovesIdx: 7, CapPosIdx: 64 }, false)),
            (Piece.Init({ Idx: 8, Type: EPiece.BlackPawn, MovesIdx: 8, CapPosIdx: 65 }, false)),
            (Piece.Init({ Idx: 9, Type: EPiece.BlackPawn, MovesIdx: 9, CapPosIdx: 66 }, false)),

            (Piece.Init({ Idx: 10, Type: EPiece.WhiteKing, MovesIdx: 0, CapPosIdx: 48 }, false)),
            (Piece.Init({ Idx: 11, Type: EPiece.WhiteQueen, MovesIdx: 1, CapPosIdx: 49 }, false)),
            (Piece.Init({ Idx: 12, Type: EPiece.WhiteRook, MovesIdx: 2, CapPosIdx: 50 }, false)),
            (Piece.Init({ Idx: 13, Type: EPiece.WhiteBishop, MovesIdx: 3, CapPosIdx: 51 }, false)),
            (Piece.Init({ Idx: 14, Type: EPiece.WhiteKnight, MovesIdx: 4, CapPosIdx: 52 }, false)),
            (Piece.Init({ Idx: 15, Type: EPiece.WhitePawn, MovesIdx: 5, CapPosIdx: 53 }, false)),
            (Piece.Init({ Idx: 16, Type: EPiece.WhitePawn, MovesIdx: 6, CapPosIdx: 54 }, false)),
            (Piece.Init({ Idx: 17, Type: EPiece.WhitePawn, MovesIdx: 7, CapPosIdx: 55 }, false)),
            (Piece.Init({ Idx: 18, Type: EPiece.WhitePawn, MovesIdx: 8, CapPosIdx: 56 }, false)),
            (Piece.Init({ Idx: 19, Type: EPiece.WhitePawn, MovesIdx: 9, CapPosIdx: 57 }, false))
        ];
        vm.Hexs.forEach(x => { vm.Poss.push(Pos.Init({ Type: EPos.Hex, X: x.Size.X, Y: x.Size.Y, W: x.Size.W, H: x.Size.H }, false)); });
        vm.Caps.forEach(x => { vm.Poss.push(Pos.Init({ Type: EPos.Hex, X: x.Size.X, Y: x.Size.Y, W: x.Size.W, H: x.Size.H }, false)); });
        //#endregion

        Board.VM.Flip.Show = false;
        Board.VM.OpTime.Show = true;
        Board.VM.MeTime.Show = true;
        //#endregion

        GM.Inited.Board = true;
        //console.log("Board.Init Done");
    }

    public static Load(pEvent: string, pObj: any) {
        //console.log("Board.Load * pEvent=" + pEvent);
        //console.log("Board.Load * pObj=" + JSON.stringify(pObj));
        //console.log("Board.Load * pObj.Game=" + JSON.stringify(pObj.Game));
        //console.log("Board.Load * pObj.Game.Turn=" + JSON.stringify(pObj.Game.Turn));
        //console.log("Board.Load * pObj.Game.OpImg.Src=" + pObj.Game.OpImg.Src);
        //console.log("Board.Load * pObj.Game.MeImg.Src=" + pObj.Game.MeImg.Src);

        var vm = Board.VM;

        vm.Game = Game.Extend(pObj.Game);
        vm.Turn = Turn.Copy(vm.Game.Turn);
        vm.OpImg.Src = Dft.Src.Photo.Blank;
        vm.MeImg.Src = Dft.Src.Photo.Blank;
        if (vm.Game.Id === null) {
            if (GM.IsAnonymous || GM.Profile.Img_Src === null) { vm.OpImg.Src = Dft.Src.Photo.No; vm.MeImg.Src = Dft.Src.Photo.No; }
            else { vm.OpImg.Src = GM.Profile.Img_Src; vm.MeImg.Src = GM.Profile.Img_Src; }
        }
        else {
            if (pObj.Game.OpImg.Src !== null) vm.OpImg.Src = pObj.Game.OpImg.Src;
            if (pObj.Game.MeImg.Src !== null) vm.OpImg.Src = pObj.Game.MeImg.Src;
        }
        if (Nav.View === "Board") this.View({ Shows: "*", Ons: "Script_Hexs", Places: "*", Enables: "*", Msg: "Turn_Last" });
    }

    public static Size() {
        //console.log("Board.Size");
        var vm = Board.VM;
        //Size.ViewModel(vm, false);
        //console.log("Board.Size * vm.Turn=" + JSON.stringify(vm.Turn));
        Ctl.Sizes(vm.Poss);
        Ctl.Sizes(vm.PossOn);
        Ctl.Sizes(vm.Hexs);
        Ctl.Sizes(vm.Triangles);
        Ctl.Sizes(vm.Moves);
        Ctl.Sizes(vm.Pieces);
        Ctl.Size(vm.Audio); Ctl.Size(vm.AudioOff);
        Ctl.Size(vm.Clock); Ctl.Size(vm.ClockOff);
        Ctl.Size(vm.Copy); Ctl.Size(vm.CopyOn);
        Ctl.Size(vm.Exit);
        Ctl.Size(vm.Flip); Ctl.Size(vm.FlipOn);
        Ctl.Size(vm.Resign); Ctl.Size(vm.ResignOn);
        Ctl.Size(vm.Save);
        Ctl.Size(vm.Start); Ctl.Size(vm.StartOn); Ctl.Size(vm.StartOff);
        Ctl.Size(vm.First); Ctl.Size(vm.Prev);
        Ctl.Size(vm.Next); Ctl.Size(vm.Last);

        Ctl.Size(vm.OpImg); Ctl.Size(vm.OpTime);
        Ctl.Size(vm.MeImg); Ctl.Size(vm.MeTime);
    }

    public static Web(pResult: IResult) {
        //console.log("Board.Web * pResult.Method=" + pResult.Method);
        //console.log("Board.Web * pResult.Action=" + pResult.Action);
        //console.log("Board.Web * pResult.Success=" + pResult.Success);
        //console.log("Board.Web * pResult.Data=" + JSON.stringify(pResult.Data));
        var vm = Board.VM;
        vm.Web = EWeb.Done;
        switch (pResult.Method) {
            case "Get":
                switch (pResult.Action) {

                    //#region case "Restart":
                    case "Restart":
                        //console.log("Board.Web.Get.Restart");
                        //console.log("Board.Web.Restart * vm.TurnNew" + JSON.stringify(vm.TurnNew));
                        //console.log("Board.Web.Restart * Game.New.Script=" + JSON.stringify(Game.New.Script));
                        //console.log("Board.Web.Restart * vm.Save_Action=" + vm.Save_Action);
                        if (vm.TurnNew !== null) { vm.TurnNew.Show = false; this.View({ Shows: "TurnNew", Ons: "TurnNew" }); vm.TurnNew = null; }
                        this.View({ Ons: "Turn_Off" });

                        vm.Game = Game.Copy(Game.New);
                        vm.Turn = Turn.Copy(vm.Game.Turn);

                        //console.log("Board.Web.Restart * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                        //console.log("Board.Web.Restart *    Turn.First.PiecePos=" + JSON.stringify(Turn.First.PiecePos));
                        //console.log("Board.Web.Restart * Game.New.Turn.PiecePos=" + JSON.stringify(Game.New.Turn.PiecePos));
                        //console.log("Board.Web.Restart *  vm.Game.Turn.PiecePos=" + JSON.stringify(vm.Game.Turn.PiecePos));
                        //console.log("Board.Web.Restart *       vm.Turn.PiecePos=" + JSON.stringify(vm.Turn.PiecePos));
                        //console.log("Board.Web.Get.Restart --------------------------------");
                        this.View({ Shows: "ArrowsStart", Enables: "*", Places: "*", Msg: "Web_Restart" });
                        vm.TurnNew = null;
                        break;
                    //#endregion

                }
                break;
            case "Post":

                Board.View({ Enables: "*" });
                var msg: string;
                switch (pResult.Action) {

                    //#region case "Copy":

                    case "Copy":
                        //  //console.log("BoardSvc.MainFunc.Web.Copy");
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Game.EndSts = " + MM.Game.EndSts);
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Game.Script = " + JSON.stringify(MM.Game.Script));
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Game.Turn.PiecePos = " + JSON.stringify(MM.Game.Turn.PiecePos));
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Game.Turn.MoveSets = " + JSON.stringify(MM.Game.Turn.MoveSets));
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Game.Turn.Checks = " + JSON.stringify(MM.Game.Turn.Checks));
                        //  MM.Practice = {
                        //    EndSts: MM.Game.EndSts,
                        //    Script: DMCSvc.ScriptFunc("Copy", MM.Game.Script),
                        //    Turn: DMCSvc.TurnFunc("Get", { Game: MM.Game, TrunIdx: MM.Game.Script.length - 1 })
                        //  };
                        //  switch (MM.Game.EndSts) {
                        //    case "MeMated": MM.Practice.EndSts = (MM.Game.PlayingAsWhite) ? "WhiteMated" : "BlackMated"; break;
                        //    case "MeCheckmated": MM.Practice.EndSts = (MM.Game.PlayingAsWhite) ? "WhiteCheckmated" : "BlackCheckmated"; break;
                        //    default: MM.Practice.EndSts = null; break;
                        //  }
                        //  MM.Save_Icon = null;
                        //  this.ViewFunc({ Show: "Start", Enable: "All", Msg: "Web_Copy" });
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Practice.Script = " + JSON.stringify(MM.Practice.Script));
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Practice.Turn.PiecePos = " + JSON.stringify(MM.Practice.Turn.PiecePos));
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Practice.Turn.MoveSets = " + JSON.stringify(MM.Practice.Turn.MoveSets));
                        //  //console.log("BoardSvc.MainFunc.Web.Copy * MM.Practice.Turn.Checks = " + JSON.stringify(MM.Practice.Turn.Checks));
                        break;
                    //#endregion

                    //#region case "GetMoves":

                    case "GetMoves":
                        //console.log("Board.Web.Post.GetMoves");
                        //console.log("Board.Web.Post.GetMoves * pResult.Data=" + JSON.stringify(pResult.Data));
                        //console.log("Board.Web.Post.GetMoves * pResult.Data.MoveSets=" + JSON.stringify(pResult.Data.MoveSets));
                        //console.log("Board.Web.Post.GetMoves * pResult.Data.Checks=" + JSON.stringify(pResult.Data.Checks));
                        //vm.Turn.MoveSets = pResult.Data;
                        vm.Turn = Turn.WebResult(vm.Turn, pResult.Data);
                        this.View({ Enables: "Pieces" });
                        this.Click_Pos(vm.Click_PosIdx);
                        break;

                    //#endregion

                    //#region  case "RematchAccept":
                    //case "RematchAccept":
                    //  //console.log("BoardSvc.Web.RematchAccept * pObj=" + JSON.stringify(pObj));
                    //  MM.Game = DMCSvc.GamesFunc("Accept", { Me: true, MotherGame: MM.Game, Data: pObj.Data });
                    //  this.BatchFunc("Start");
                    //  this.BatchFunc("Orient", { PlayingAsWhite: MM.Game.PlayingAsWhite });
                    //  this.ViewFunc({ Show: "ResignStart", Enable: "All", Place: "Pieces" });
                    //  if (MM.Game.PlayingAsWhite) this.ViewFunc({ Msg: "MeAccepted_White", OpUserId: MM.Game.OpUserId });
                    //  else this.ViewFunc({ Msg: "MeAccepted_Black", OpUserId: MM.Game.OpUserId });
                    //  break;
                    //#endregion

                    //#region  case "RematchDecline":
                    //case "RematchDecline":
                    //  //console.log("BoardSvc.MainFunc.Web.RematchDecline * pObj=" + JSON.stringify(pObj));
                    //  //console.log("BoardSvc.MainFunc.Web.RematchRetract * MM.Game.Id=" + MM.Game.Id + " * MM.Game.RematchId=" + MM.Game.RematchId);  
                    //  game = DMCSvc.GamesFunc("Decline", { Me: true, MotherGame: MM.Game, Data: pObj.Data });
                    //  MM.Save_Icon = null;
                    //  this.ViewFunc({ Show: "Start", Enable: "All", Msg: "MeDeclined", OpUserId: game.OpUserId });
                    //  break;
                    //#endregion

                    //#region case "RematchRetract":
                    case "RematchRetract":
                        ////console.log("BoardSvc.MainFunc.Web.RematchRetract * pObj=" + JSON.stringify(pObj));
                        ////console.log("BoardSvc.MainFunc.Web.RematchRetract * MM.Game.Id=" + MM.Game.Id + " * MM.Game.RematchId=" + MM.Game.RematchId);         
                        //game = DMCSvc.GamesFunc("Retract", { Me: true, MotherGame: MM.Game, Data: pObj.Data });
                        //MM.Save_Icon = null;
                        //this.ViewFunc({ Show: "Start", Enable: "All", Msg: "MeRetracted", OpUserId: game.OpUserId });
                        break;
                    //#endregion

                    //#region case "RematchSend":
                    case "RematchSend":
                        //console.log("BoardSvc.MainFunc.Web.RematchSend * pObj=" + JSON.stringify(pObj));
                        //console.log("BoardSvc.MainFunc.Web.RematchSend * pObj=" + JSON.stringify(MM.Game));

                        //console.log("BoardSvc.MainFunc.Web.RematchSend * MM.Game.Id=" + MM.Game.Id + " * pObj.Data.Id=" + pObj.Data.Id);
                        //var game = DMCSvc.GamesFunc("Send", { Me: true, MotherGame: MM.Game, Data: pObj.Data });
                        //MM.Save_Icon = null;
                        //MM.Game.RematchSent = true;
                        //this.ViewFunc({ Enable: "All", Msg: "MeSent", OpUserId: MM.Game.OpUserId });
                        //console.log("BoardSvc.MainFunc.Click.Icon.Start * MM.Game.RematchReceived=" + MM.Game.RematchReceived);
                        //console.log("BoardSvc.MainFunc.Click.Icon.Start * MM.Game.RematchSent=" + MM.Game.RematchSent);

                        //console.log("RematchSend MM.Games.Sent_Pages.Set[0][0].Id=" + MM.Games.Sent_Pages.Set[0][0].Id);
                        //console.log("RematchSend MM.Games.Sent_Pages.Set[0][0].MotherId=" + MM.Games.Sent_Pages.Set[0][0].MotherId);
                        //console.log("BoardSvc.Web.RematchSend * game=" + JSON.stringify(game));

                        //console.log("game.Rated" + game.Rated);
                        //console.log("game.Time=" + game.Time);
                        //console.log("game.Rated_O=" + game.Rated_O);
                        //console.log("game.Time_O=" + game.Time_O);


                        break;
                    //#endregion

                    //#region  case "Resign":
                    //case "Resign":
                    //  //console.log("BoardSvc.MainFunc.Web.Resign * pObj.Data.Rating=" + pObj.Data.Rating);              
                    //  DMCSvc.GameFunc("End", { Game: MM.Game, Rating: pObj.Data.Rating, EndSts: "MeResigned" });
                    //  MM.Save_Icon = null;
                    //  this.ViewFunc({ Show: "All", Enable: "All", Msg: "MeResigned_Rating", Rating: pObj.Data.Rating });
                    //  break;
                    //#endregion

                    //#region case "Turn":
                    case "Turn":
                        //console.log("Board.Web.Post.Turn");
                        //console.log("Board.Web.Post.Turn * pResult.Data=" + JSON.stringify(pResult.Data));
                        //console.log("Board.Web.Post.Turn * pResult.Data.GameId=" + pResult.Data.GameId);
                        //console.log("Board.Web.Post.Turn * pResult.Data.Turn=" + JSON.stringify(pResult.Data.Turn));
                        //console.log("Board.Web.Post.Turn * pResult.Data.Turn.MoveSets=" + JSON.stringify(pResult.Data.Turn.MoveSets));
                        //console.log("Board.Web.Post.Turn * pResult.Data.Turn.Checks=" + JSON.stringify(pResult.Data.Turn.Checks));
                        //console.log("Board.Web.Post.Turn * vm.Game.Id=" + vm.Game.Id);
                        //console.log("Board.Web.Post.Turn * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                        //console.log("Board.Web.Post.Turn * vm.Game.Script.length=" + vm.Game.Script.length + " * vm.Turn.Idx=" + vm.Turn.Idx + " * vm.TurnNew.Idx=" + vm.TurnNew.Idx);
                        //console.log("Board.Web.Post.Turn * vm.Turn.WhitesTurn=" + vm.Turn.WhitesTurn);

                        //#region vm.Game.Script

                        //console.log("Board.Web.Post.Turn * vm.Game.Script=" + JSON.stringify(vm.Game.Script));

                        if (vm.Game.Script.length > vm.TurnNew.Idx) vm.Game.Script.length = vm.TurnNew.Idx;
                        vm.Game.Script.push(vm.TurnNew.Script);

                        //console.log("Board.Web.Post.Turn * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                        //#endregion

                        //#region vm.Game.Turn

                        if (vm.Game.Script.length > vm.TurnNew.Idx) {
                            vm.Game.Script.length = vm.TurnNew.Idx;
                            if (vm.Game.Script.length === 0) vm.Game.Turn = Turn.GetFirst(vm.Game);
                            else vm.Game.Turn = Turn.Copy(vm.Turn);
                        }
                        vm.Game.Script.push(vm.TurnNew.Script);
                        vm.Game.Turn.Idx = vm.Game.Script.length - 1;
                        vm.Game.Turn.PiecePos = Turn.PiecePos_AddLastScript(vm.Game);
                        vm.Game.Turn = Turn.WebResult(vm.Game.Turn, pResult.Data.Turn);
                        Game.Extend(vm.Game);
                        //#endregion

                        //#region vm.Turn

                        vm.Turn = Turn.Copy(vm.Game.Turn);


                        //#region vm.TurnNew
                        vm.TurnNew.Show = false;
                        Board.View({ Ons: "TurnNew" });
                        vm.TurnNew = null;
                        //#endregion


                        if (vm.Game.Id === null) {
                            if (vm.Turn.MoveSets.length > 0) {
                                if (vm.Turn.Checks === null) msg = vm.Game.Turn.WhitesTurn ? "Turn_White" : "Turn_Black";
                                else msg = vm.Game.Turn.WhitesTurn ? "Turn_WhiteCheck" : "Turn_BlackCheck";
                                if (vm.FlipOn.Show) Board.View({ Places: "*" });
                            }
                            else if (vm.Turn.Checks.length === 0) {
                                vm.Game.EndSts = vm.Game.Turn.WhitesTurn ? "WhiteMate" : "BlackMate";
                                msg = vm.Game.Turn.WhitesTurn ? "Game_WhiteMate" : "Game_BlackMate"; if (vm.FlipOn.Show) Board.View({ Places: "*" });
                            }
                            else {
                                vm.Game.EndSts = vm.Game.Turn.WhitesTurn ? "WhiteCheckmate" : "BlackCheckmate";
                                msg = vm.Game.Turn.WhitesTurn ? "Game_WhiteCheckmate" : "Game_BlackCheckmate";
                            }

                            Board.View({ Shows: "Arrows", Places: vm.FlipOn.Show ? "*" : "Turn", Enables: "Pieces", Msg: "Turn_Last" });
                        }
                        else {
                            Board.View({ Shows: "Arrows", Places: "Turn", Enables: "Pieces", Msg: "Turn_Last" });
                        }
                        //console.log("Board.Web.Post.Turn * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                        //console.log("Board.Web.Post.Turn * pGame=" + JSON.stringify(pGame));
                        //console.log("Board.Web.Post.Turn * vm.Game.Script.length=" + vm.Game.Script.length + " * vm.Turn.Idx=" + vm.Turn.Idx);
                        //console.log("Board.Web.Post.Turn * vm.Game.Turn=" + JSON.stringify(vm.Game.Turn));
                        //console.log("Board.Web.Post.Turn * vm.Turn=" + JSON.stringify(vm.Turn));
                        //console.log("Board.Web.Post.Turn * vm.TurnNew=" + JSON.stringify(vm.TurnNew));

                        //#endregion

                        break;

                    //#endregion

                }
        }
    }

    public static Validate(pEvent, pObj) {
        var vm = Board.VM;
        switch (pEvent) {
            case "Click_Pos":
                //console.log("Board.Validate.Click_Pos * pObj.Pos=" + JSON.stringify(pObj.Pos));
                //console.log("Board.Validate.Click_Pos * pObj.Piece=" + JSON.stringify(pObj.Piece));
                //console.log("Board.Validate.Click_Pos * vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                //console.log("Board.Validate.Click_Pos * vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                //console.log("Board.Validate.Click_Pos * vm.TurnNew=" + JSON.stringify(vm.TurnNew));
                //#region Prep
                var pos: IPos = pObj.Pos;
                var piece: IPiece = pObj.Piece === undefined ? null : pObj.Piece;
                var game: IGame = Board.VM.Game;
                var turn: ITurn = Board.VM.Turn;
                var turnNew: ITurnNew = Board.VM.TurnNew;
                var sameColor = Board.VM.TurnNew === undefined || piece === null ? null : vm.Turn.Color === piece.Color;
                var moveSets = vm.Turn.MoveSets;
                //console.log("Board.Validate.Click_Pos * vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                var moveIdx: number = turnNew === null || turnNew.Piece === null ? -1 : moveSets[turnNew.Piece.MovesIdx].indexOf(pObj.Pos.Idx);
                var redeems = turnNew === null || turnNew.Redeems === null ? [] : Board.VM.TurnNew.Redeems;
                var redeemIdx = redeems.indexOf(pos.Idx);
                //console.log("Board.Validate.Click_Pos * piece.MovesIdx=" + piece.MovesIdx);
                //console.log("Board.Validate.Click_Pos * vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                //console.log("Board.Validate.Click_Pos * vm.Turn.MoveSets[" + piece.MovesIdx + "]=" + vm.Turn.MoveSets[piece.MovesIdx]);
                //console.log("Board.Validate.Click_Pos * moveIdx=" + moveIdx);
                //#endregion

                if (game.EndSts !== null) {
                    if (game.Id === null) { this.View({ Audio: "Error", Msg: "Error_GameOver_Reset", Pos: pObj.Pos }); return false; }
                }
                if (turnNew === null) {
                    //console.log("Board.Validate.Click_Pos * turnNew=null");
                    if (piece === null) { this.View({ Audio: "Error", Msg: "Error_NoPiece", Pos: pObj.Pos }); return false; }
                    if (game.Id === null) {
                        if (piece.IsWhite !== turn.WhitesTurn) { this.View({ Audio: "Error", Msg: "Error_WrongColor" }); return false; }
                    }
                    else {
                        if (!game.Turn.MeTurn) { this.View({ Audio: "Error", Msg: "Error_OpTurn" }); return false; }
                        if (turn.Idx < game.Turn.Idx) { this.View({ Audio: "Error", Msg: "Error_UseArrows" }); return false; }
                    }
                    if (piece !== null) {
                        //console.log("Board.Validate.Click_Pos * pObj.Piece=" + JSON.stringify(pObj.Piece));
                        //console.log("Board.Validate.Click_Pos * moveSets=" + JSON.stringify(moveSets));
                        if (pos.Idx > 48) { this.View({ Audio: "Error", Msg: "Error_PieceCaptured", Piece: piece }); return false; }
                        if (moveSets[piece.MovesIdx].length === 0) { this.View({ Audio: "Error", Msg: "Error_PieceNoMoves", Piece: piece }); return false; }
                    }
                }
                else {
                    //console.log("Board.Validate.Click_Pos.Practice * turnNew.Stage=" + turnNew.Stage);
                    switch (turnNew.Stage) {
                        case "Move":
                            //console.log("Board.Validate.Click_Pos.Practice * turnNew.Stage=" + turnNew.Stage);
                            if (piece === null) { if (moveIdx < 0) { this.View({ Audio: "Error", Msg: "Error_PosInvalid", Pos: pos }); return false; } }
                            else {
                                if (pos.Idx > 48) { this.View({ Audio: "Error", Msg: "Error_PieceCaptured", Piece: piece }); return false; }
                                if (!sameColor && moveIdx < 0) { this.View({ Audio: "Error", Msg: "Error_PieceCapInvalid", Piece: piece }); return; }
                                if (sameColor && moveSets[piece.MovesIdx].length === 0) { this.View({ Audio: "Error", Msg: "Error_PieceNoMoves", Piece: piece }); return false; }
                            }
                            break;
                        case "Redeem":
                            if (piece === null) {
                                if (pos.Idx < 49) { this.View({ Audio: "Error", Msg: "Error_PosRedeem", Pos: pos }); return false; }
                            }
                            else {
                                if (!sameColor && pos.Idx > 48) { this.View({ Audio: "Error", Msg: "Error_PieceCaptured", Piece: piece }); return false; }
                                if (pos.Idx > 48 && redeemIdx < 0) { this.View({ Audio: "Error", Msg: "Error_PieceRedeem", Piece: piece }); return false; }
                            }
                            break;
                    }
                }
                break;
        }
        return true;
    }

    public static View(pObj) {
        //console.log("Board.View * pObj=" + JSON.stringify(pObj));
        var vm = Board.VM;
        if (pObj.Audio !== undefined) {
            if (!vm.AudioOff.Show) {
                switch (pObj.Audio) {
                    default:
                    case "Check": Dft.Audio.Check.play(); break;
                    case "Chime": Dft.Audio.Chime.play(); break;
                    case "Click": Dft.Audio.Click.play(); break;
                    case "Error": Dft.Audio.Error.play(); break;
                }
            };
        }
        if (pObj.Shows !== undefined) {
            //console.log("Board.View.Shows=" + pObj.Shows);
            switch (pObj.Shows) {

                //#region Lists:

                //#region case "*":

                case "*":
                    //console.log("Board.View.Shows.*");
                    this.View({ Shows: "Arrows" });
                    this.View({ Shows: "Icons" });
                    this.View({ Shows: "Photos" });
                    this.View({ Shows: "Pieces" });
                    this.View({ Shows: "Times" });
                    break;

                //#endregion

                //#region case "ArrowsSaveStart"

                case "ArrowsSaveStart":
                    //console.log("Board.View.Shows.ArrowsSaveStart");
                    this.View({ Shows: "Arrows" });
                    this.View({ Show: "Save" });
                    this.View({ Show: "Start" });
                    break;

                //#endregion

                //#region case "ArrowsStart"

                case "ArrowsStart":
                    this.View({ Shows: "Arrows" });
                    this.View({ Show: "Start" });
                    break;

                //#endregion

                //#region case "ArrowsTurnNew":

                case "ArrowsTurnNew":
                    //console.log("BoardSvc.ViewFunc.Show.ArrowsTurnNew");
                    //console.log("BoardSvc.ViewFunc.Show.ArrowsTurnNew * pObj=" + JSON.stringify(pObj));
                    //console.log("BoardSvc.ViewFunc.Show.ArrowsTurnNew * pObj.Pos=" + JSON.stringify(pObj.Pos));
                    this.View({ Shows: "Arrows" });
                    this.View({ Shows: "TurnNew" });
                    break;

                //#endregion

                //#region case "ArrowsSave":

                case "ArrowsSave":
                    //console.log("BoardSvc.ViewFunc.Show.ArrowsSaveTurnNew");
                    this.View({ Shows: "Arrows" });
                    this.View({ Show: "Save" });
                    break;

                //#endregion

                //#region case "ArrowsSaveStartTurnNew":

                case "ArrowsSaveStartTurnNew":
                    //console.log("BoardSvc.ViewFunc.Show.ArrowsSaveTurnNew");
                    this.View({ Shows: "Arrows" });
                    this.View({ Show: "Save" });
                    this.View({ Show: "Start" });
                    this.View({ Shows: "TurnNew" });
                    break;

                //#endregion

                //#region case "ArrowsSaveTurnNew":

                case "ArrowsSaveTurnNew":
                    //console.log("BoardSvc.ViewFunc.Show.ArrowsSaveTurnNew");
                    this.View({ Shows: "Arrows" });
                    this.View({ Show: "Save" });
                    this.View({ Shows: "TurnNew" });
                    break;

                //#endregion

                //#region case "Icons":

                case "Icons":
                    this.View({ Show: "Audio" });
                    this.View({ Show: "Flip" });
                    this.View({ Show: "Clock" });
                    this.View({ Show: "Copy" });
                    this.View({ Show: "Resign" });
                    this.View({ Show: "Save" });
                    this.View({ Show: "Start" });
                    break;

                //#endregion

                //#region case "ResignSave":

                case "ResignSave":
                    this.View({ Show: "Resign" });
                    this.View({ Show: "Save" });
                    break;

                //#endregion

                //#region case "ResignSaveStart":

                case "ResignSaveStart":
                    this.View({ Show: "Resign" });
                    this.View({ Show: "Save" });
                    this.View({ Show: "Start" });
                    break;

                //#endregion

                //#region case "ResignStart"

                case "ResignStart":
                    //console.log("pObj.Show.Icons.ResignStart");
                    this.View({ Show: "Resign" });
                    this.View({ Show: "Start" });
                    break;

                //#endregion

                //#region case "SaveStart"

                case "SaveStart":
                    this.View({ Show: "Save" });
                    this.View({ Show: "Start" });
                    break;

                //#endregion

                //#region case "SaveStartTurnNew"

                case "SaveStartTurnNew":
                    //console.log("Board.View.Shows.SaveTurnNew");
                    this.View({ Show: "Save" });
                    this.View({ Show: "Start" });
                    this.View({ Shows: "TurnNew" });
                    break;

                //#endregion

                //#region case "SaveTurnNew"

                case "SaveTurnNew":
                    //console.log("Board.View.Shows.SaveTurnNew");
                    this.View({ Show: "Save" });
                    this.View({ Shows: "TurnNew" });
                    break;

                //#endregion

                //#endregion

                //#region Multi

                //#region  case "Arrows":
                case "Arrows":
                    //console.log("Board.View.Shows.Show.Arrows * vm.Turn.Idx=" + vm.Turn.Idx + " * vm.Game.Turn.Idx=" + vm.Game.Turn.Idx);
                    //console.log("Board.View.Shows.Show.Arrows * vm.TurnNew=" + JSON.stringify(vm.TurnNew));
                    vm.FirstPrev_Show = vm.Turn.Idx > -1 || vm.TurnNew !== null && vm.TurnNew.Show;
                    vm.NextLast_Show = vm.Turn.Idx < vm.Game.Turn.Idx || vm.TurnNew != null && !vm.TurnNew.Show;// && vm.TurnNew.Pos !== null;
                    break;
                //#endregion

                //#region case "Pieces":

                case "Pieces": vm.Pieces_Show = true; break;
                //case "Pieces": vm.Pieces_Show = vm.Game.Id !== null || GM.Loaded.Practice; break;

                //#endregion

                //#region case "Photos":

                case "Photos": vm.Photos_Show = vm.Game.Id !== null || GM.Loaded.Practice; break;

                //#endregion

                //#region  case "Times":
                case "Times":
                    //console.log("BoardSvc.ViewFunc.Show.Times");
                    //console.log("BoardSvc.ViewFunc.Show.Times * MM.Game.History=" + MM.Game.History);
                    //console.log("BoardSvc.ViewFunc.Show.Times * MM.Game.Turn.MeTurn=" + MM.Game.Turn.MeTurn);
                    //VM.Board.OpTime.Show = MM.Clock.On; VM.Board.MeTime.Show = MM.Clock.On; break;

                    if (vm.Game.Id == null) {
                        if (!GM.Loaded.Practice || !vm.ClockOff.Show) { vm.OpTime.Show = false; vm.MeTime.Show = false; }
                        else { vm.OpTime.Show = true; vm.MeTime.Show = true; }
                    }
                    else {
                        if (!vm.ClockOff.Show) { vm.OpTime.Show = false; vm.MeTime.Show = false; }
                        else { vm.OpTime.Show = true; vm.MeTime.Show = true; }
                    }
                    //console.log("Board.View.Show.Times * VM.Board.OpTime.Show=" + vm.OpTime.Show);
                    //console.log("Board.View.Show.Times * VM.Board.MeTime.Show=" + vm.MeTime.Show);
                    break;
                //#endregion

                //#region  case "TurnNew":
                case "TurnNew":
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Show=" + vm.TurnNew.Show);
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Stage=" + vm.TurnNew.Stage);
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Moves=" + JSON.stringify(vm.TurnNew.Moves));
                    vm.Moves_Show = vm.TurnNew !== null && vm.TurnNew.Moves !== null && vm.TurnNew.Show && vm.TurnNew.Stage === "Move";
                    break;
                //#endregion

                //#endregion

                default: alert("Board.View.Shows * Unknown=" + pObj.Shows); break;
            }
        }
        if (pObj.Show !== undefined) {
            //console.log("Board.View.Show=" + pObj.Show);
            switch (pObj.Show) {

                //#region Icon

                case "Audio": vm.Audio.Show = true; vm.AudioOff.Show = GM.User === undefined || GM.User === null ? false : !GM.User.Options.AudioOn; break;

                //#region case "Clock":

                case "Clock":
                    vm.Clock.Show = !vm.Game.Id === null || GM.Loaded.Practice;
                    vm.ClockOff.Show = vm.Clock.Show && GM.User !== undefined && GM.User !== null && !GM.User.Options.ClockShow;
                    break;

                //#endregion

                case "Copy": vm.Copy.Show = (vm.Game.Id !== null && vm.Game.Script !== null && vm.Game.Script.length > 0); break;
                case "Flip": vm.Flip.Show = vm.Game.Id === null && GM.Loaded.Practice; break;
                case "Resign": vm.Resign.Show = (vm.Game.Id !== null && vm.Game.EndSts === null); vm.ResignOn.Show = (vm.Resign.Show && vm.Save_Action == "Resign"); break;

                //#region  case "Save":

                case "Save":
                    //console.log("Board.View.Show.Save");
                    //console.log("BoardSvc.ViewFunc.Show.Save * vm.Web=" + vm.Web + " * vm.Save_Action=" + vm.Save_Action);

                    vm.Save.Show = vm.Web === EWeb.Done && vm.Save_Action !== null;
                    break;

                //#endregion

                //#region  case "Start":
                case "Start":
                    //console.log("Board.View.Show.Start");
                    //console.log("Board.View.Show.Start * vm.Game.Id=" + vm.Game.Id);
                    //console.log("Board.View.Show.Start *  vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                    //console.log("Board.View.Show.Start *  vm.TurnNew=" + JSON.stringify(vm.TurnNew));
                    //console.log("Board.View.Show.Start *  vm.Game.Script.length=" + vm.Game.Script.length);
                    //console.log("Board.View * Show=Start * vm.Game.EndSts=" + vm.Game.EndSts);
                    //console.log("Board.View * Show=Start * vm.Game.RematchReceived=" + vm.Game.RematchReceived);
                    //console.log("Board.View * Show=Start * vm.Game.RematchSent=" + vm.Game.RematchSent);
                    //console.log("Board.View * Show=Start * vm.Save_Icon=" + vm.Save_Action);
                    //vm.Start.Show = (vm.Game.Id === null && vm.Game.Script.length > 0 || vm.Game.EndSts != null);

                    //#region Start
                    if (vm.Game.Id === null) {
                        if (!GM.Loaded.Practice) vm.Start.Show = false;
                        else if (vm.Game.Script.length === 0 && vm.TurnNew === null) vm.Start.Show = false;
                        else vm.Start.Show = true;
                    }
                    else {
                        if (vm.Game.EndSts === null) vm.Start.Show = false;
                        else vm.Start.Show = true;
                    }
                    //#endregion

                    //#region StartOn

                    if (!vm.Start.Show) vm.StartOn.Show = false;
                    else {
                        if (vm.Game.Id === null) {
                            if (vm.Save_Action !== "Restart") vm.StartOn.Show = false;
                            else vm.StartOn.Show = true;
                        }
                        else {
                            if (vm.Save_Action !== "RematchSend" && vm.Save_Action !== "RematchAccept") vm.StartOn.Show = false;
                            else vm.StartOn.Show = true;
                        }
                    }

                    //#endregion

                    //#region StartOff

                    if (!vm.Start.Show) vm.StartOff.Show = false
                    else {
                        if (vm.Game.Id === null) vm.StartOff.Show = false;
                        else {
                            if (vm.Save_Action !== "RematchRetract" && vm.Save_Action !== "RematchDecline") vm.StartOff.Show = false;
                            else vm.StartOff.Show = true;
                        }
                    }

                    //#endregion

                    break;
                //#endregion

                //#endregion

                default: alert("Board.View.Show * Unknown=" + pObj.Show); break;
            }
        }
        if (pObj.Places !== undefined) {
            //console.log("Board.View.Places * pObj.Places=" + pObj.Places);
            var vm = Board.VM;
            switch (pObj.Places) {

                //#region case "*":

                case "*":
                    //console.log("Board.View.Places * vm.FlipOn.Show=" + vm.FlipOn.Show);
                    //console.log("Board.View.Places * vm.Game.Id=" + vm.Game.Id);
                    //console.log("Board.View.Places * Turn.First.PiecePos=" + JSON.stringify(Turn.First.PiecePos));
                    //console.log("Board.View.Places *    vm.Turn.PiecePos=" + JSON.stringify(vm.Turn.PiecePos));
                    //console.log("Board.View.Places * vm.Game.PlayingAsWhite=" + vm.Game.PlayingAsWhite);
                    //console.log("Board.View.Places * vm.Turn.WhitesTurn=" + vm.Turn.WhitesTurn);
                    //console.log("Board.View.Places * vm.Game.TurnColorIdx=" + vm.Game.TurnColorIdx);

                    if (vm.Game.Id !== null || !vm.FlipOn.Show) vm.Game.TurnColorIdx = 0; else vm.Game.TurnColorIdx = vm.Turn.WhitesTurn ? 0 : 1;
                    Ctl.Places(vm.Poss, vm.Poss, vm.Game.TurnColorIdx);
                    Size.Copys(vm.PossOn, vm.Poss);
                    Size.Copys(vm.Hexs, vm.Poss);
                    this.View({ Places: "Pieces" });
                    if (vm.TurnNew !== null) this.View({ Places: "TurnNew" });
                    break;

                //#endregion

                case "Pieces": for (var x = 0; x < vm.Pieces.length; x++) Size.Copy(vm.Pieces[x], vm.Poss[vm.Turn.PiecePos[x]]); break;
                case "Turn": this.View({ Places: "Script", Script: vm.Game.Script[vm.Turn.Idx] }); break;
                case "Turn_Prev": this.View({ Places: "Script_Prev", Script: vm.Game.Script[vm.Turn.Idx + 1] }); break;

                //#region case "TurnNew":

                case "TurnNew":
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew=" + JSON.stringify(vm.TurnNew));
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Show=" + vm.TurnNew.Show);
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Stage=" + vm.TurnNew.Stage);
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Moves=" + JSON.stringify(vm.TurnNew.Moves));
                    //console.log("Board.View.Places.TurnNew * vm.TurnNew.Script=" + JSON.stringify(vm.TurnNew.Script));
                    if (vm.TurnNew !== null) {
                        if (vm.TurnNew.Moves !== null) {
                            for (var x = 0; x < vm.TurnNew.Moves.length; x++) {
                                Size.Copy(vm.Moves[x], vm.Poss[vm.TurnNew.Moves[x]]);
                                Ctl.Sizes(vm.Moves);
                                //console.log("Board.View.Places.Moves * vm.Moves[" + x + "].Size=" + JSON.stringify(vm.Moves[x].Size));
                                //console.log("Board.View.Places.Moves * vm.Moves[" + x + "].Style=" + JSON.stringify(vm.Moves[x].Style));
                            }
                        };
                        this.View({ Places: "Script", Script: vm.TurnNew.Script });
                        if (vm.TurnNew.Show) this.View({ Places: "Script", Script: vm.TurnNew.Script });
                        else this.View({ Places: "Script_Prev", Script: vm.TurnNew.Script });
                    }
                    break;

                //#endregion

                //#region case "Script":

                case "Script":
                    //console.log("Board.View.Places.Script * pObj.Script=" + JSON.stringify(pObj.Script));
                    for (var x = 0; x < pObj.Script.length; x++)
                        if (pObj.Script[x].PosIdx !== null) Size.Copy(vm.Pieces[pObj.Script[x].PieceIdx], vm.Poss[pObj.Script[x].PosIdx]);
                    break;

                //#endregion

                //#region case "Script_Prev":

                case "Script_Prev":
                    //console.log("Board.View.Places.Script_Prev * vm.Turn.Idx=" + vm.Turn.Idx);
                    //console.log("Board.View.Places.Script_Prev * vm.Game.Script=" + JSON.stringify(vm.Turn.Idx));
                    //console.log("Board.View.Places.Script_Prev * pObj.Script=" + JSON.stringify(pObj.Script));
                    for (var x = 0; x < pObj.Script.length; x++) if (pObj.Script[x].PosIdx !== null) Size.Copy(vm.Pieces[pObj.Script[x].PieceIdx], vm.Poss[pObj.Script[x].PrevIdx]);
                    break;

                //#endregion

                default: alert("Board.View.Places * Unknown=" + pObj.Places); break;
            }
        }
        if (pObj.Enables !== undefined) {
            //console.log("Board.View.Enables=" + pObj.Enables);
            switch (pObj.Enables) {

                //#region Lists

                //#region case "*":

                case "*":
                    Board.View({ Enables: "Arrows" });
                    Board.View({ Enables: "Icons" });
                    Board.View({ Enables: "Photos" });
                    Board.View({ Enables: "Pieces" });
                    break;

                //#endregion

                //#region case "*":

                case "PhotosPieces":
                    Board.View({ Enables: "Photos" });
                    Board.View({ Enables: "Pieces" });
                    break;

                //#endregion

                //#endregion

                //#region case "Arrows":

                case "Arrows":
                    this.View({ Enable: "First" });
                    this.View({ Enable: "Prev" });
                    this.View({ Enable: "Next" });
                    this.View({ Enable: "Last" });
                    break;

                //#endregion

                //#region case "Icons":
                case "Icons":
                    this.View({ Enable: "Audio" });
                    this.View({ Enable: "Flip" });
                    this.View({ Enable: "Clock" });
                    this.View({ Enable: "Copy" });
                    this.View({ Enable: "Resign" });
                    this.View({ Enable: "Save" });
                    this.View({ Enable: "Start" });
                    break;
                //#endregion

                //#region case "Photos":
                case "Photos":
                    this.View({ Enable: "OpImg" });
                    this.View({ Enable: "MeImg" });
                    break;
                //#endregion

                //#region case "Pieces"

                case "Pieces":
                    //console.log("Board.View.Enables.Pieces * vm.Game.Id=" + vm.Game.Id);
                    //console.log("Board.View.Enables.Pieces * GM.Loaded.Practice=" + GM.Loaded.Practice);
                    //console.log("Board.View.Enables.Pieces * vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                    //console.log("Board.View.Enables.Pieces * vm.TurnNew=null" + vm.TurnNew === null);
                    //console.log("Board.View.Enables.Pieces * vm.Game.Turn.MeTurn=" + vm.Turn.MeTurn);
                    //console.log("Board.View.Enables.Pieces * vm.Game.Turn.Idx =" + vm.Game.Turn.Idx);
                    //console.log("Board.View.Enables.Pieces * vm.Turn.Idx=" + vm.Turn.Idx);
                    //console.log("Board.View.Enables.Pieces * vm.Game.EndSts=" + vm.Game.EndSts);
                    //console.log("Board.View.Enables.Pieces * vm.Turn.WhitesTurn=" + vm.Turn.WhitesTurn);

                    if (vm.TurnNew !== null) {
                        //console.log("pObj.Enable.Pieces * vm.TurnNew.Show=" + vm.TurnNew.Show);
                        //console.log("pObj.Enable.Pieces * vm.TurnNew.Stage=" + vm.TurnNew.Stage);
                    }
                    if (vm.Game.Id === null && !GM.Loaded.Practice) this.View({ Enables: "Pieces_Disable" });                         // Practice not loaded
                    else if (vm.Web !== EWeb.Done) this.View({ Enables: "Pieces_Disable" });                                          // Webing
                    else if (vm.Turn.MoveSets === null) this.View({ Enables: "Pieces_EnableAll" });                                   // No Moves
                    else if (vm.TurnNew !== null && vm.TurnNew.Show) this.View({ Enables: "Pieces_EnableAll" });                      // New Turn started and pieces placed
                    else if (vm.Game.Id !== null && !vm.Game.Turn.MeTurn) this.View({ Enables: "Pieces_EnableAll" });                 // Not my Turn online game
                    else if (vm.Game.Id !== null && vm.Turn.Idx < vm.Game.Turn.Idx) this.View({ Enables: "Pieces_EnableAll" });       // Reviewing board with arrows
                    else if (vm.Turn.Idx === vm.Game.Turn.Idx && vm.Game.EndSts !== null) this.View({ Enables: "Pieces_EnableAll" }); // Last move of completed game
                    else {
                        if (vm.Turn.WhitesTurn) this.View({ Enables: "Pieces_EnableWhite" });
                        else this.View({ Enables: "Pieces_EnableBlack" });
                    }
                    break;

                case "Pieces_Disable": for (var x = 0; x < 20; x++) this.View({ Enable: "Piece_Disable", Idx: x }); break;
                case "Pieces_EnableAll": for (var x = 0; x < 20; x++) this.View({ Enable: "Piece", Idx: x }); break;
                case "Pieces_EnableBlack":
                    //console.log("Board.View.Enable.Pieces_EnableBlack *vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                    for (var x = 0; x < 10; x++) {
                        if (vm.Turn.MoveSets[x].length > 0 || vm.Turn.PiecePos[x] > 48) this.View({ Enable: "Piece", Idx: x });
                        else this.View({ Enable: "Piece_Disable", Idx: x });
                    }
                    for (var x = 10; x < 20; x++) this.View({ Enable: "Piece", Idx: x });
                    break;
                case "Pieces_EnableWhite":
                    //console.log("Board.View.Enable.Pieces_EnableWhite *vm.Turn.MoveSets=" + JSON.stringify(vm.Turn.MoveSets));
                    for (var x = 0; x < 10; x++)  this.View({ Enable: "Piece", Idx: x });
                    for (var x = 10; x < 20; x++) {
                        if (vm.Turn.MoveSets[x - 10].length > 0 || vm.Turn.PiecePos[x] > 48) this.View({ Enable: "Piece", Idx: x });
                        else this.View({ Enable: "Piece_Disable", Idx: x });
                    }
                    break;

                //#endregion

                default: alert("Board.View * Unknown Enables=" + pObj.Enables);
            }
        }
        if (pObj.Enable !== undefined) {
            //console.log("Board.View * Enable=" + pObj.Enable);

            switch (pObj.Enable) {

                //#region Arrows

                //#region case "First":

                case "First":
                    vm.First.Disabled = vm.Web !== EWeb.Done;
                    if (vm.First.Disabled) {
                        vm.First.Style.filter = Dft.DisableFilter;
                        vm.First.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.First.Style.filter = null;
                        vm.First.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#region case "Prev":

                case "Prev":
                    vm.Prev.Disabled = vm.Web !== EWeb.Done;
                    if (vm.Prev.Disabled) {
                        vm.Prev.Style.filter = Dft.DisableFilter;
                        vm.Prev.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.Prev.Style.filter = null;
                        vm.Prev.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#region case "Next":

                case "Next":
                    vm.Next.Disabled = vm.Web !== EWeb.Done;
                    if (vm.Next.Disabled) {
                        vm.Next.Style.filter = Dft.DisableFilter;
                        vm.Next.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.Next.Style.filter = null;
                        vm.Next.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#region case "Last":

                case "Last":
                    vm.Last.Disabled = vm.Web !== EWeb.Done;
                    if (vm.Last.Disabled) {
                        vm.Last.Style.filter = Dft.DisableFilter;
                        vm.Last.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.Last.Style.filter = null;
                        vm.Last.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#endregion

                //#region Icons


                case "Audio": break;
                case "Flip": break;
                case "Clock": break;
                case "Copy": break;


                case "Resign": break;
                case "Save": break;

                //#region case "Start":
                case "Start":
                    vm.Start.Disabled = vm.Web !== EWeb.Done;
                    if (vm.Start.Disabled) {
                        vm.Start.Style.filter = Dft.DisableFilter;
                        vm.Start.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.Start.Style.filter = null;
                        vm.Start.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#endregion

                //#region Photos

                //#region case "OpImg":

                case "OpImg":
                    vm.OpImg.Disabled = vm.Web !== EWeb.Done;
                    if (vm.OpImg.Disabled) {
                        vm.OpImg.Style.filter = Dft.DisableFilter;
                        vm.OpImg.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.OpImg.Style.filter = null;
                        vm.OpImg.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#region case "MeImg":

                case "MeImg":
                    vm.MeImg.Disabled = vm.Web !== EWeb.Done;
                    if (vm.MeImg.Disabled) {
                        vm.MeImg.Style.filter = Dft.DisableFilter;
                        vm.MeImg.Style.opacity = Dft.DisableOpacity;
                    }
                    else {
                        vm.MeImg.Style.filter = null;
                        vm.MeImg.Style.opacity = null;
                    }
                    break;

                //#endregion

                //#endregion

                //#region case "Piece":

                case "Piece":
                    //console.log("ViewFunc.Enable.Piece * pObj.Idx=" + pObj.Idx);
                    vm.Pieces[pObj.Idx].Style.filter = null;
                    vm.Pieces[pObj.Idx].Style.opacity = null;
                    break;

                //#endregion

                //#region case "Piece_Disable":

                case "Piece_Disable":
                    vm.Pieces[pObj.Idx].Style.filter = Dft.DisableFilter;
                    vm.Pieces[pObj.Idx].Style.opacity = Dft.DisableOpacity;
                    break;

                //#endregion

                default: alert("Board.View * Unknown Enable=" + pObj.Enable);
            }
        }
        if (pObj.Ons !== undefined) {
            //console.log("Board.View.Ons * pObj=" + JSON.stringify(pObj));
            switch (pObj.Ons) {

                //#region case "Turn":

                case "Turn":
                    if (vm.TurnNew === null || !vm.TurnNew.Show) this.View({ Ons: "Script_Hexs", Script: vm.Game.Script[vm.Turn.Idx] });
                    else this.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.Turn.Idx] });
                    break;

                case "Turn_Off": this.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.Turn.Idx] }); break;

                //#region case "Turn_Next":

                case "Turn_Next":
                    //console.log("Board.View.Ons.Turn_Next * vm.Turn.Idx=" + vm.Turn.Idx);
                    if (vm.Turn.Idx > 0) this.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.Turn.Idx - 1] });
                    this.View({ Ons: "Script_Hexs", Script: vm.Game.Script[vm.Turn.Idx] });
                    break;

                //#endregion

                //#region case "Turn_Prev":

                case "Turn_Prev":
                    //console.log("Board.View.Ons.Turn_Prev * vm.Turn.Idx=" + vm.Turn.Idx);
                    //console.log("Board.View.Ons.Turn_Prev * vm.Game.Script.length=" + vm.Game.Script.length);
                    //console.log("Board.View.Ons.Turn_Prev * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                    if (vm.TurnNew !== null) this.View({ Ons: "Script_Off", Script: vm.TurnNew.Script });
                    if (vm.Turn.Idx + 1 < vm.Game.Script.length) this.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.Turn.Idx + 2] });
                    this.View({ Ons: "Script_Hexs", Script: vm.Game.Script[vm.Turn.Idx + 1] });
                    break;

                //#endregion



                //#endregion

                //#region case "TurnNew":

                case "TurnNew":
                    //console.log("Board.View.Ons.TurnNew * vm.TurnNew=" + JSON.stringify(vm.TurnNew));
                    if (vm.TurnNew !== null) {
                        //console.log("Board.View.Ons.Pos_TurnNew * vm.TurnNew.Stage=" + vm.TurnNew.Stage);
                        //console.log("Board.View.Ons.Pos_TurnNew * vm.TurnNew.Show=" + vm.TurnNew.Show);
                        //console.log("Board.View.Ons.Pos_TurnNew * vm.TurnNew.Script=" + JSON.stringify(vm.TurnNew.Script));
                        if (vm.TurnNew.Show) {
                            //console.log("Board.View.Ons.TurnNew * Show");
                            //console.log("Board.View.Ons.TurnNew.Show * vm.Game.Script[" + vm.TurnNew.Idx + "]= " + JSON.stringify(vm.Game.Script[vm.TurnNew.Idx]));
                            this.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.TurnNew.Idx] });
                            if (vm.TurnNew.Idx > 0) this.View({ Ons: "Script_Off", Script: vm.Game.Script[vm.TurnNew.Idx - 1] });
                            if (vm.TurnNew.Moves !== null) {
                                if (vm.TurnNew.Stage === "Move") for (var x = 0; x < vm.TurnNew.Moves.length; x++) this.View({ On: "Pos", PosIdx: vm.TurnNew.Moves[x] });
                                else for (var x = 0; x < vm.TurnNew.Moves.length; x++) this.View({ On: "Pos_Off", PosIdx: vm.TurnNew.Moves[x] });
                            }
                            if (vm.TurnNew.Redeems !== null) {
                                if (vm.TurnNew.Stage === "Redeem") for (var x = 0; x < vm.TurnNew.Moves.length; x++) this.View({ On: "Pos", PosIdx: vm.TurnNew.Redeems[x] });
                                else for (var x = 0; x < vm.TurnNew.Redeems.length; x++) this.View({ On: "Pos_Off", PosIdx: vm.TurnNew.Redeems[x] });
                            }
                            this.View({ Ons: "Script_Hexs", Script: vm.TurnNew.Script });
                        }
                        else {
                            //console.log("Board.View.Ons.TurnNew * !Show");
                            this.View({ Ons: "Script_Off", Script: vm.TurnNew.Script });
                            if (vm.TurnNew.Moves !== null) for (var x = 0; x < vm.TurnNew.Moves.length; x++) this.View({ On: "Pos_Off", PosIdx: vm.TurnNew.Moves[x] });
                            if (vm.TurnNew.Redeems !== null) for (var x = 0; x < vm.TurnNew.Redeems.length; x++) this.View({ On: "Pos_Off", PosIdx: vm.TurnNew.Redeems[x] });
                            this.View({ Ons: "Script_Hexs", Script: vm.Game.Script[vm.Turn.Idx] });
                        }
                    }
                    break;

                //#endregion

                //#region case "Script_Hexs":

                case "Script_Hexs":
                    //console.log("Board.View.Ons.Script_Hexs * pObj.Script=" + JSON.stringify(pObj.Script));
                    //console.log("Board.View.Ons.Script_Hexs * vm.Turn.Idx=" + vm.Turn.Idx);
                    //console.log("Board.View.Ons.Script_Hexs * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                    var script: IScript[] = pObj.Script !== undefined ? pObj.Script : vm.Turn.Idx === -1 ? [] : vm.Game.Script[vm.Turn.Idx];
                    //console.log("Board.View.Ons.Script_Hexs * script=" + JSON.stringify(script));
                    for (var x = 0; x < script.length; x++) {
                        if (script[x].PrevIdx < 49) this.View({ On: "Pos", PosIdx: script[x].PrevIdx }); else this.View({ On: "Pos_Off", PosIdx: script[x].PrevIdx });
                        if (script[x].PosIdx !== null)
                            if (script[x].PosIdx < 49) this.View({ On: "Pos", PosIdx: script[x].PosIdx }); else this.View({ On: "Pos_Off", PosIdx: script[x].PosIdx });
                    }
                    break;

                //#endregion

                //#region case "Script_Off":

                case "Script_Off":
                    //console.log("Board.View.Ons.Script_Off * vm.Turn.Idx=" + vm.Turn.Idx);
                    //console.log("Board.View.Ons.Script_Off * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                    //console.log("Board.View.Ons.Script_Off * pObj.Script=" + JSON.stringify(pObj.Script));
                    var script: IScript[] = pObj.Script !== undefined ? pObj.Script : vm.Turn.Idx === -1 ? [] : vm.Game.Script[vm.Turn.Idx];
                    for (var x = 0; x < script.length; x++) {
                        this.View({ On: "Pos_Off", PosIdx: script[x].PrevIdx });
                        if (script[x].PosIdx !== null) this.View({ On: "Pos_Off", PosIdx: script[x].PosIdx });
                    }
                    break;

                //#endregion

                default: alert("Board.View * Unknown Ons=" + pObj.Ons);
            }
        }
        if (pObj.On !== undefined) {
            //console.log("Board.View.On * pObj=" + JSON.stringify(pObj));
            switch (pObj.On) {
                case "Pos": if (pObj.Pos !== undefined) vm.PossOn[pObj.Pos.Idx].Show = true; else vm.PossOn[pObj.PosIdx].Show = true; break;
                case "Pos_Off": if (pObj.Pos !== undefined) vm.PossOn[pObj.Pos.Idx].Show = false; else vm.PossOn[pObj.PosIdx].Show = false; break;
            }
        }
        if (pObj.Msg !== undefined) {
            //console.log("Board.View * pObj.Msg=" + pObj.Msg);
            switch (pObj.Msg) {

                //#region case "*":

                case "*":
                    if (vm.Turn.Idx === vm.Game.Turn.Idx) {
                        if (vm.Game.Id === null) GM.Msg = vm.Turn.MeTurn ? "It's " + vm.Game.MeUserId + "'s turn." : "It's " + vm.Game.OpUserId + "'s turn.";
                        else GM.Msg = vm.Turn.MeTurn ? vm.Game.OpUserId + "'s turn." : "It's your turn.";
                    }
                    else if (vm.Turn.Idx === -1) {
                        if (vm.Game.Id === null) GM.Msg = "Start of game.";
                        else GM.Msg = "";
                    }
                    break;

                //#endregion

                //#region case "Error"


                case "Error_GameOver_Reset": GM.Msg = "Game over. Click the reset circle."; break;
                case "Error_GameOver_ResetRematch": GM.Msg = "Game over. Click reset for rematch."; break;
                case "Error_GameOver_SaveRematch": GM.Msg = "Game over. Click save for rematch."; break;
                case "Error_NoPiece": GM.Msg = "No piece on space " + pObj.Pos.Name; break;
                case "Error_PieceCapInvalid": GM.Msg = "The " + vm.TurnNew.Piece.ColorName + " can't capture the " + pObj.Piece.ColorName + "."; break;
                case "Error_PieceCaptured": GM.Msg = "The " + vm.TurnNew.Piece.ColorName + " has been captured."; break;
                case "Error_PieceNoMoves": GM.Msg = "The " + pObj.Piece.ColorName + " has no moves."; break;
                case "Error_PieceRedeem": GM.Msg = "Cannot redeem the " + pObj.Piece.ColorName + "."; break;
                case "Error_PosInvalid": GM.Msg = "The " + vm.TurnNew.Piece.ColorName + " can't move to " + pObj.Pos.Name + "."; break;
                case "Error_PosRedeem": GM.Msg = "Select a piece to redeem or click save."; break;
                case "Error_OpTurn": GM.Msg = "It's " + vm.Game.OpUserId + "'s turn."; break;

                case "Error_UseArrows": GM.Msg = "Use arrows to return to move."; break;
                case "Error_WrongColor": GM.Msg = "It's " + vm.Turn.Color + "'s turn."; break;

                //#endregion

                //#region case "Click

                case "Click_Audio": GM.Msg = vm.AudioOff.Show ? "Audio muted." : "Audio turned on."; break;
                case "Click_Clock": GM.Msg = vm.ClockOff.Show ? "Time hidden." : "Time displayed."; break;
                case "Click_Flip": GM.Msg = vm.FlipOn.Show ? "Board will flip between turns." : "White will always be at the bottom."; break;
                case "Click_Pos_OpTurn": GM.Msg = "It's " + vm.Game.OpUserId + "'s turn."; break;
                case "Click_Restart": GM.Msg = vm.StartOn.Show ? "Click save to restart." : "Restart cancelled."; break;
                case "Click_Save_Restart": GM.Msg = "Resetting the practice board..."; break;
                case "Click_Save_Turn": GM.Msg = "Saving your move..."; break;
                //#endregion

                //#region case "Turn"

                case "Turn_Cancel": GM.Msg = "Move of " + pObj.Piece.ColorName + " cancelled."; break;
                case "Turn_First": GM.Msg = "Start of game."; break;

                //#region case "Turn_Prev": case "Turn_Next":
                case "Turn_Prev":
                case "Turn_Next":
                    //console.log("Board.View." + pObj.Msg + " * vm.Turn.Idx=" + vm.Turn.Idx);
                    //console.log("Board.View." + pObj.Msg + " * vm.Game.Script=" + JSON.stringify(vm.Game.Script));
                    var idx: number = pObj.Msg === "Turn_Prev" ? vm.Turn.Idx + 1 : vm.Turn.Idx;
                    //console.log("Board.View." + pObj.Msg + " * idx=" + idx);
                    var script: Array<IScript> = vm.Game.Script[idx];
                    GM.Msg = "#" + (idx + 1) + " ";
                    switch (script.length) {
                        default:
                        case 1: GM.Msg += vm.Pieces[script[0].PieceIdx].ColorName + ": " + vm.Poss[script[0].PrevIdx].Name + ">" + vm.Poss[script[0].PosIdx].Name; break;
                        case 2:
                            if (script[0].PosIdx > 48) GM.Msg += vm.Pieces[script[1].PieceIdx].C_Name + " captures " + vm.Pieces[script[0].PieceIdx].C_Name + ".";
                            else GM.Msg += vm.Pieces[script[1].PieceIdx].C_Name + " redeemed for " + vm.Pieces[script[0].PieceIdx].C_Name;
                        case 3: GM.Msg += vm.Pieces[script[0].PieceIdx].C_Name + "captured, " + vm.Pieces[script[2].PieceIdx].C_Name + " redeemed.";
                    }
                    break;

                //#endregion

                //#region case "Turn_Last":
                case "Turn_Last":
                    //console.log("Board.View.Msg.Turn_Last * vm.Game.Turn.Checks=" + JSON.stringify(vm.Game.Turn.Checks));
                    if (vm.Game.Id === null) {
                        if (vm.Game.EndSts === null) {
                            if (vm.Game.Turn.Checks.length === 0) GM.Msg = vm.Game.Turn.WhitesTurn ? "It's white's turn." : "It's black's turn."
                            else GM.Msg = vm.Game.Turn.WhitesTurn ? "The white king is in check." : "The black king is in check."
                        }
                        else {
                            switch (vm.Game.EndSts) {
                                case "BlackMated": GM.Msg = "Game Over: Black was mated."; break;
                                case "WhiteMated": GM.Msg = "Game Over: White was mated."; break;
                                case "BlackCheckmated": GM.Msg = "Game Over: Black was checkmated."; break;
                                case "WhiteCheckmated": GM.Msg = "Game Over: White was checkmated."; break;
                            }
                        }
                    }
                    else {
                        if (vm.Game.EndSts === null) {
                            if (vm.Game.Turn.Checks === null) GM.Msg = vm.Game.Turn.MeTurn ? "It's your turn." : "It's " + vm.Game.OpUserId + " turn.";
                            else GM.Msg = vm.Game.Turn.WhitesTurn ? "You are in check." : vm.Game.OpUserId + " is in check."
                        }
                        else {
                            switch (vm.Game.EndSts) {
                                case "MeTimeExpired": GM.Msg = "Your time expired."; break;
                                case "OpTimeExpired": GM.Msg = vm.Game.OpUserId + "'s time expired."; break;
                                case "MeMated": GM.Msg = "You mated " + vm.Game.OpUserId + "."; break;
                                case "OpMated": GM.Msg = vm.Game.OpUserId + " mated you."; break;
                                case "MeCheckmated": GM.Msg = "You checkmated " + vm.Game.OpUserId + "."; break;
                                case "OpCheckmated": GM.Msg = vm.Game.OpUserId + " checkmated you."; break;
                            }
                        }
                    }
                    break;
                //#endregion

                //#region case "TurnNew"
                case "TurnNew":
                    switch (vm.TurnNew.Stage) {
                        case "Cancel": GM.Msg = "The move of the " + vm.TurnNew.Piece.ColorName + " was cancelled."; break;
                        case "Move": GM.Msg = "Select a move for the " + vm.TurnNew.Piece.ColorName + "."; break;
                        case "Redeem": GM.Msg = "You may redeem the " + pObj.Piece.ColorName + "."; break;
                        case "Save": GM.Msg = "You may save the move."; break;
                    }
                    break;
                //#endregion

                //#endregion

                //#region case "Web"
                case "Web_GetMove": GM.Msg = "Getting moves from server..."; break;
                case "Web_Load": GM.Msg = "Loading practice board..."; break;
                //#endregion

                //#region case "Web"
                case "Web_Restart": GM.Msg = "Practice board has been reset."; break;
                //#endregion

                default: alert("Board.View.Msg * Unknown Msg=" + pObj.Msg);
            }
        }
    };

    //#endregion
}

interface IVM extends IViewModel {
    Click_PosIdx?: number,
    Piece?: IPiece,
    Pos?: IPos,
    Game?: IGame,
    Turn?: ITurn,
    TurnFirst?: ITurn,
    TurnNew?: ITurnNew,
    Save_Action?: string,
    RematchReceived?: boolean,
    RematchSent?: boolean,
    //*********************************************
    Disabled?: boolean;
    Poss?: Array<IPos>;
    Pieces?: Array<IPiece>;
    Hexs?: Array<IHex>;
    Caps?: Array<ICap>;
    Triangles?: Array<IImg>;
    PossOn?: Array<IImg>;
    Moves?: Array<IImg>;
    //***********************************************************
    Moves_Show?: boolean; Moves_Src?: string;
    Pieces_Show?: boolean;
    FirstPrev_Show?: boolean; NextLast_Show?: boolean; Photos_Show?: boolean;
    //***********************************************************
    First?: IIcon; Prev?: IIcon; Next?: IIcon; Last?: IIcon;
    Audio?: IIcon; AudioOff?: IIcon;
    Clock?: IIcon; ClockOff?: IIcon;
    Copy?: IIcon; CopyOn?: IIcon;
    Exit?: IIcon;
    Flip?: IIcon; FlipOn?: IIcon;
    Save?: IIcon;
    Resign?: IIcon; ResignOn?: IIcon;
    Start?: IIcon; StartOn?: IIcon; StartOff?: IIcon;
    //***********************************************************
    OpImg?: IImg; OpTime?: ILabel; MeImg?: IImg; MeTime?: ILabel;
}

