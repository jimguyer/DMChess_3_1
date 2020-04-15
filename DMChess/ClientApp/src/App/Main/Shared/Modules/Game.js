"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../../../Common/Modules/Util");
var Default_1 = require("../../../Main/Shared/Modules/Default");
var Piece_1 = require("../../../Main/Shared/Ctls/Piece");
var Turn = /** @class */ (function () {
    function Turn() {
    }
    //#region Page
    Turn.GetFirst = function (pGame) {
        //console.log("Turn.GetFirst");
        //console.log("Turn.GetFirst * pGame=" + JSON.stringify(pGame));
        var turn = {
            Idx: -1,
            PiecePos: this.First.PiecePos.slice(),
            MoveSets: this.First.MoveSets.slice(),
            Checks: []
        };
        return this.Extend(pGame, turn);
    };
    Turn.GetPrev = function (pGame, pTurn) {
        //console.log("Turn.GetPrev");
        //console.log("Turn.GetPrev * pGame=" + JSON.stringify(pGame));
        //console.log("Turn.GetPrev * pTurn=" + JSON.stringify(pTurn));
        if (pTurn.Idx === 0)
            return this.GetFirst(pGame);
        for (var x = 0; x < pGame.Script[pTurn.Idx].length; x++)
            pTurn.PiecePos[pGame.Script[pTurn.Idx][x].PieceIdx] = pGame.Script[pTurn.Idx][x].PrevIdx;
        pTurn.Idx--;
        pTurn.MoveSets = null;
        pTurn.Checks = null;
        //console.log("Turn.GetPrev * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        var turn = this.Extend(pGame, pTurn);
        //console.log("Turn.GetPrev * Script: " + (pTurn.Idx + 1) + "/" + pGame.Turn.Idx + "=" + JSON.stringify(pGame.Script[pTurn.Idx + 1]));
        //console.log("Turn.GetPrev * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.GetPrev * WhitesTurn: " + pTurn.WhitesTurn);
        return turn;
    };
    Turn.GetNext = function (pGame, pTurn) {
        //console.log("Turn.GetNext");
        //console.log("Turn.GetNext * pGame=" + JSON.stringify(pGame));
        //console.log("Turn.GetNext * pTurn.Idx=" + pTurn.Idx);
        //console.log("Turn.GetNext * pGame.Script=" + JSON.stringify(pGame.Script));
        //console.log("Turn.GetNext * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        if (pTurn.Idx === pGame.Turn.Idx - 1)
            return this.GetLast(pGame);
        pTurn.Idx++;
        pTurn.MoveSets = null;
        pTurn.Checks = null;
        for (var x = 0; x < pGame.Script[pTurn.Idx].length; x++)
            pTurn.PiecePos[pGame.Script[pTurn.Idx][x].PieceIdx] = pGame.Script[pTurn.Idx][x].PosIdx;
        var turn = this.Extend(pGame, pTurn);
        //console.log("Turn.GetNext * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.GetPrev * Script: " + (pTurn.Idx + 1) + "=" + JSON.stringify(pGame.Script[pTurn.Idx + 1]));
        return turn;
    };
    Turn.GetLast = function (pGame) {
        //console.log("Turn.GetLast");
        //console.log("Turn.GetLast * pGame=" + JSON.stringify(pGame));
        var turn = {
            Idx: pGame.Script === undefined || pGame.Script === null ? -1 : pGame.Script.length - 1,
            PiecePos: pGame.Turn.PiecePos.slice(),
            MoveSets: pGame.Turn.MoveSets === undefined || pGame.Turn.MoveSets === null ? null : pGame.Turn.MoveSets.slice(),
            Checks: pGame.Turn.Checks === undefined || pGame.Turn.Checks === null ? null : pGame.Turn.Checks.slice()
        };
        return this.Extend(pGame, turn);
    };
    //#endregion
    //#region Util
    Turn.Copy = function (pTurn) {
        //console.log("Turn.Copy * pTurn.PiecePos=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.Copy * pTurn.MoveSets=" + JSON.stringify(pTurn.MoveSets));
        //console.log("Turn.Copy * pTurn.Checks=" + JSON.stringify(pTurn.Checks));
        var turn = {
            Idx: pTurn.Idx,
            Color: pTurn.Color,
            WhitesTurn: pTurn.WhitesTurn,
            MeTurn: pTurn.MeTurn,
            PiecePos: pTurn.PiecePos.slice(),
            MoveSets: pTurn.MoveSets === undefined || pTurn.MoveSets === null ? null : pTurn.MoveSets.slice(),
            Checks: pTurn.Checks === undefined || pTurn.Checks === null ? null : pTurn.Checks.slice()
        };
        //console.log("Turn.Copy * turn.PiecePos=" + JSON.stringify(turn.PiecePos));
        return turn;
    };
    Turn.ExtendForGame = function (pGame) {
        //console.log("Turn.Extend * pEvent=" + pEvent);
        pGame.Turn.Idx = pGame.Script === undefined || pGame.Script === null ? -1 : pGame.Script.length - 1;
        pGame.Turn.WhitesTurn = pGame.Turn.Idx % 2 != 0;
        pGame.Turn.Color = pGame.Turn.WhitesTurn ? "White" : "Black";
        pGame.Turn.MeTurn = pGame.PlayingAsWhite === pGame.Turn.WhitesTurn;
        pGame.Turn.Checks = pGame.Turn.Checks === null ? [] : pGame.Turn.Checks;
        //console.log("Turn.ExtendForGame * pGame.Script.length=" + pGame.Script.length);
        //console.log("Turn.ExtendForGame * pGame.Turn.WhitesTurn=" + pGame.Turn.WhitesTurn);
        return pGame.Turn;
    };
    Turn.Extend = function (pGame, pTurn) {
        //console.log("Turn.Extend * pGame=" + JSON.stringify(pGame));
        //console.log("Turn.Extend * pTurn=" + JSON.stringify(pTurn));
        pTurn.WhitesTurn = pTurn.Idx % 2 != 0;
        pTurn.Color = pTurn.WhitesTurn ? "White" : "Black";
        pTurn.MeTurn = pGame.PlayingAsWhite === pGame.Turn.WhitesTurn;
        return pTurn;
    };
    Turn.GetRedeems = function (pTurn, pTurnNew) {
        //console.log("Turn.GetRedeems * pTurn=" + JSON.stringify(pTurn));
        //console.log("Turn.GetRedeems * pTurnNew=" + JSON.stringify(pTurnNew));
        //console.log("Turn.GetRedeems * pTurnNew.Piece=" + JSON.stringify(pTurnNew.Piece));
        //console.log("Turn.GetRedeems * pTurnNew.Pos=" + JSON.stringify(pTurnNew.Pos));
        if (pTurnNew.Piece.Rank !== Piece_1.EPieceRank.Pawn)
            return null;
        var redeems = [];
        var x;
        if (pTurnNew.Piece.IsWhite) {
            if (this.WhiteRedeemables.indexOf(pTurnNew.Pos.Idx) === -1)
                return null;
            for (x = 11; x < 15; x++)
                if (pTurn.PiecePos[x] > 48)
                    redeems.push(pTurn.PiecePos[x]);
        }
        else {
            if (this.BlackRedeemables.indexOf(pTurnNew.Pos.Idx) === -1)
                return null;
            for (x = 1; x < 5; x++)
                if (pTurn.PiecePos[x] > 48)
                    redeems.push(pTurn.PiecePos[x]);
        }
        //console.log("Turn.GetRedeems * redeems=" + JSON.stringify(redeems));
        return redeems.length === 0 ? null : redeems;
    };
    Turn.New_Init = function (pTurn, pPos, pPiece) {
        return {
            Idx: pTurn.Idx + 1,
            Show: true,
            Stage: "Move",
            Piece: pPiece,
            Pos: null,
            Prev: pPos,
            Moves: pTurn.MoveSets[pPiece.MovesIdx],
            Redeems: null,
            Script: [{ PieceIdx: pPiece.Idx, PosIdx: null, PrevIdx: pPos.Idx }],
            PossOn: true
        };
    };
    Turn.WebResult = function (pTurn, pResultData) {
        //console.log("Turn.WebResult * pTurn.PiecePos=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.WebResult * pResultData.PiecePos=" + JSON.stringify(pResultData.PiecePos));
        //console.log("Turn.WebResult * pResultData.MoveSets=" + JSON.stringify(pResultData.MoveSets));
        //console.log("Turn.WebResult * pResultData.Checks=" + JSON.stringify(pResultData.Checks));
        if (pResultData.PiecePos !== undefined && pResultData.PiecePos !== null)
            pTurn.PiecePos = pResultData.PiecePos;
        pTurn.MoveSets = pResultData.MoveSets === undefined || pResultData.MoveSets === null ? [] : pResultData.MoveSets;
        pTurn.Checks = pResultData.Checks === undefined || pResultData.Checks === null ? [] : pResultData.Checks;
        //console.log("Turn.WebResult * pTurn.PiecePos=" + JSON.stringify(pTurn.PiecePos));
        return pTurn;
    };
    Turn.PiecePos_AddLastScript = function (pGame) {
        //console.log("Turn.PiecePos * pScript=" + JSON.stringify(pGame.Turn.PiecePos));
        for (var x = 0; x < pGame.Script[pGame.Turn.Idx].length; x++)
            pGame.Turn.PiecePos[pGame.Script[pGame.Turn.Idx][x].PieceIdx] = pGame.Script[pGame.Turn.Idx][x].PosIdx;
        //console.log("Turn.PiecePos * pScript=" + JSON.stringify(pGame.Turn.PiecePos));
        return pGame.Turn.PiecePos;
    };
    Turn.First = {
        PiecePos: [0, 1, 14, 7, 2, 8, 3, 9, 15, 21, 48, 47, 34, 41, 46, 40, 45, 39, 33, 27],
        MoveSets: [[], [], [], [], [38, 32, 44], [32], [44, 37, 38], [38, 31, 32], [32, 25, 26], [26, 19, 20]],
        Checks: [],
        Idx: -1,
        WhitesTurn: true,
        Color: "White",
        MeTurn: true
    };
    Turn.BlackRedeemables = [27, 33, 34, 39, 40, 41, 45, 46, 47, 48];
    Turn.WhiteRedeemables = [0, 1, 2, 3, 7, 8, 9, 14, 15, 21];
    return Turn;
}());
exports.Turn = Turn;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.Copy = function (pGame) {
        //console.log("Game.Copy * pGame=" + JSON.stringify(pGame));
        var game = {
            Id: pGame.Id,
            ProfileIdx: pGame.ProfileIdx,
            Script: pGame.Script.slice(),
            Turn: Turn.Copy(pGame.Turn),
            PlayingAsWhite: pGame.PlayingAsWhite,
            OpUserId: pGame.OpUserId,
            OpImgSrc: pGame.OpImgSrc,
            Rated: pGame.Rated,
            TimeInc: pGame.TimeInc,
            TimeAmt: pGame.TimeAmt,
        };
        //console.log("Game.Copy * game=" + JSON.stringify(game));
        return Game.Extend(game);
    };
    Game.Extend = function (pGame) {
        //console.log("Game.Extend * pGame=" + JSON.stringify(pGame));
        if (pGame.Id === undefined || pGame.Id === null) {
            //console.log("DMCSvc.GameFunc.Extend * pGame.Turn=" + JSON.stringify(pGame.Turn));
            pGame.Id = null;
            pGame.PlayingAsWhite = true;
            pGame.OpUserId = "Black";
            pGame.History = false;
        }
        else {
            pGame.Rated_O = Util_1.Util.Bool("X", { "Bool": pGame.Rated });
            pGame.Time_O = Util_1.Util.Time("AmtInc", { Inc: pGame.TimeInc, Amt: pGame.TimeAmt, Short: true });
        }
        pGame.TurnColorIdx = pGame.PlayingAsWhite ? 0 : 1;
        pGame.Turn = Turn.ExtendForGame(pGame);
        if (pGame.EndSts === undefined)
            pGame.EndSts = pGame.Turn.MoveSets === null ? "CheckMate" : null;
        //console.log("Game.Extend * pGame=" + JSON.stringify(pGame));
        //console.log("Game.Extend * pGame.Script=" + JSON.stringify(pGame.Script));
        //console.log("Game.Extend * pGame.Script.length=" + JSON.stringify(pGame.Script.length));
        //console.log("Game.Extend * pGame.Turn.Idx=" + JSON.stringify(pGame.Turn.Idx));
        //console.log("Game.Extend * pGame.Turn.WhitesTurn=" + JSON.stringify(pGame.Turn.WhitesTurn));
        return pGame;
    };
    Game.WebResult = function (pResultData) {
        //console.log("Game.WebResult * pResultData=" + JSON.stringify(pResultData));
        //console.log("Game.WebResult * pResultData.Script=" + JSON.stringify(pResultData.Script));
        //console.log("Game.WebResult * pResultData.Script.length=" + JSON.stringify(pResultData.Script.length));
        pResultData.Turn = Turn.WebResult(pResultData.Turn, pResultData.Turn);
        return this.Extend(pResultData);
    };
    Game.PiecePos = function (pPiecePos, pScript) {
        var piecePos = pPiecePos.slice();
        for (var xS = 0; xS < pScript.length; xS++) {
            pScript[xS].PrevIdx = piecePos[pScript[xS].PieceIdx];
            piecePos[pScript[xS].PieceIdx] = pScript[xS].PosIdx;
        }
        return piecePos;
    };
    Game.New = {
        PlayingAsWhite: true,
        Script: [],
        Turn: Turn.First,
        Id: null,
        ProfileIdx: null,
        OpUserId: "Black",
        OpImgSrc: Default_1.Dft.Src.Photo.Blank,
        Rated: null,
        TimeInc: null,
        TimeAmt: null,
        EndSts: null,
        RematchReceived: false,
        RematchSent: false,
        TurnColorIdx: 0,
        MeUserId: "White",
        MeImgSrc: Default_1.Dft.Src.Photo.Blank,
        Rated_O: null,
        Time_O: null,
        History: false
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map