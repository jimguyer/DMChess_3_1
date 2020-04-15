import { Util } from '../../../Common/Modules/Util';
import { EWeb, IResult, Web } from '../../../Common/Modules/Web';

import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';
import { EPiece, EPieceRank, IPiece, Piece } from '../../../Main/Shared/Ctls/Piece';
import { IPos, Pos } from '../../../Main/Shared/Ctls/Pos';

export class Turn {
    static First: ITurn = {
        PiecePos: [0, 1, 14, 7, 2, 8, 3, 9, 15, 21, 48, 47, 34, 41, 46, 40, 45, 39, 33, 27],
        MoveSets: [[], [], [], [], [38, 32, 44], [32], [44, 37, 38], [38, 31, 32], [32, 25, 26], [26, 19, 20]],
        Checks: [],
        Idx: -1,
        WhitesTurn: true,
        Color: "White",
        MeTurn: true
    }

    static BlackRedeemables = [27, 33, 34, 39, 40, 41, 45, 46, 47, 48];

    static WhiteRedeemables = [0, 1, 2, 3, 7, 8, 9, 14, 15, 21];

    //#region Page
    static GetFirst(pGame: IGame) {
        //console.log("Turn.GetFirst");
        //console.log("Turn.GetFirst * pGame=" + JSON.stringify(pGame));
        var turn: ITurn = {
            Idx: - 1,
            PiecePos: this.First.PiecePos.slice(),
            MoveSets: this.First.MoveSets.slice(),
            Checks: []
        };
        return this.Extend(pGame, turn);
    }
    static GetPrev(pGame: IGame, pTurn: ITurn) {
        //console.log("Turn.GetPrev");
        //console.log("Turn.GetPrev * pGame=" + JSON.stringify(pGame));
        //console.log("Turn.GetPrev * pTurn=" + JSON.stringify(pTurn));

        if (pTurn.Idx === 0) return this.GetFirst(pGame);
        for (var x = 0; x < pGame.Script[pTurn.Idx].length; x++) pTurn.PiecePos[pGame.Script[pTurn.Idx][x].PieceIdx] = pGame.Script[pTurn.Idx][x].PrevIdx;
        pTurn.Idx--; pTurn.MoveSets = null; pTurn.Checks = null;
        //console.log("Turn.GetPrev * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        var turn = this.Extend(pGame, pTurn);
        //console.log("Turn.GetPrev * Script: " + (pTurn.Idx + 1) + "/" + pGame.Turn.Idx + "=" + JSON.stringify(pGame.Script[pTurn.Idx + 1]));
        //console.log("Turn.GetPrev * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.GetPrev * WhitesTurn: " + pTurn.WhitesTurn);
        return turn;
    }
    static GetNext(pGame: IGame, pTurn: ITurn) {
        //console.log("Turn.GetNext");
        //console.log("Turn.GetNext * pGame=" + JSON.stringify(pGame));
        //console.log("Turn.GetNext * pTurn.Idx=" + pTurn.Idx);
        //console.log("Turn.GetNext * pGame.Script=" + JSON.stringify(pGame.Script));
        //console.log("Turn.GetNext * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        if (pTurn.Idx === pGame.Turn.Idx - 1) return this.GetLast(pGame);
        pTurn.Idx++; pTurn.MoveSets = null; pTurn.Checks = null;
        for (var x = 0; x < pGame.Script[pTurn.Idx].length; x++) pTurn.PiecePos[pGame.Script[pTurn.Idx][x].PieceIdx] = pGame.Script[pTurn.Idx][x].PosIdx;
        var turn = this.Extend(pGame, pTurn);
        //console.log("Turn.GetNext * PiecePos: " + pTurn.Idx + "=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.GetPrev * Script: " + (pTurn.Idx + 1) + "=" + JSON.stringify(pGame.Script[pTurn.Idx + 1]));
        return turn;
    }
    static GetLast(pGame: IGame) {
        //console.log("Turn.GetLast");
        //console.log("Turn.GetLast * pGame=" + JSON.stringify(pGame));
        var turn: ITurn = {
            Idx: pGame.Script === undefined || pGame.Script === null ? -1 : pGame.Script.length - 1,
            PiecePos: pGame.Turn.PiecePos.slice(),
            MoveSets: pGame.Turn.MoveSets === undefined || pGame.Turn.MoveSets === null ? null : pGame.Turn.MoveSets.slice(),
            Checks: pGame.Turn.Checks === undefined || pGame.Turn.Checks === null ? null : pGame.Turn.Checks.slice()
        };
        return this.Extend(pGame, turn);
    }
    //#endregion

    //#region Util

    static Copy(pTurn: ITurn) {
        //console.log("Turn.Copy * pTurn.PiecePos=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.Copy * pTurn.MoveSets=" + JSON.stringify(pTurn.MoveSets));
        //console.log("Turn.Copy * pTurn.Checks=" + JSON.stringify(pTurn.Checks));
        var turn: ITurn = {
            Idx: pTurn.Idx,
            Color: pTurn.Color,
            WhitesTurn: pTurn.WhitesTurn,
            MeTurn: pTurn.MeTurn,
            PiecePos: pTurn.PiecePos.slice(),
            MoveSets: pTurn.MoveSets === undefined || pTurn.MoveSets === null ? null : pTurn.MoveSets.slice(),
            Checks: pTurn.Checks === undefined || pTurn.Checks === null ? null : pTurn.Checks.slice()
        }
        //console.log("Turn.Copy * turn.PiecePos=" + JSON.stringify(turn.PiecePos));

        return turn;
    }
    static ExtendForGame(pGame: IGame) {
        //console.log("Turn.Extend * pEvent=" + pEvent);

        pGame.Turn.Idx = pGame.Script === undefined || pGame.Script === null ? -1 : pGame.Script.length - 1;
        pGame.Turn.WhitesTurn = pGame.Turn.Idx % 2 != 0;
        pGame.Turn.Color = pGame.Turn.WhitesTurn ? "White" : "Black";
        pGame.Turn.MeTurn = pGame.PlayingAsWhite === pGame.Turn.WhitesTurn;
        pGame.Turn.Checks = pGame.Turn.Checks === null ? [] : pGame.Turn.Checks;
        //console.log("Turn.ExtendForGame * pGame.Script.length=" + pGame.Script.length);
        //console.log("Turn.ExtendForGame * pGame.Turn.WhitesTurn=" + pGame.Turn.WhitesTurn);
        return pGame.Turn;
    }
    static Extend(pGame: IGame, pTurn: ITurn) {
        //console.log("Turn.Extend * pGame=" + JSON.stringify(pGame));
        //console.log("Turn.Extend * pTurn=" + JSON.stringify(pTurn));
        pTurn.WhitesTurn = pTurn.Idx % 2 != 0;
        pTurn.Color = pTurn.WhitesTurn ? "White" : "Black";
        pTurn.MeTurn = pGame.PlayingAsWhite === pGame.Turn.WhitesTurn;
        return pTurn;
    }
    static GetRedeems(pTurn: ITurn, pTurnNew: ITurnNew) {
        //console.log("Turn.GetRedeems * pTurn=" + JSON.stringify(pTurn));
        //console.log("Turn.GetRedeems * pTurnNew=" + JSON.stringify(pTurnNew));
        //console.log("Turn.GetRedeems * pTurnNew.Piece=" + JSON.stringify(pTurnNew.Piece));
        //console.log("Turn.GetRedeems * pTurnNew.Pos=" + JSON.stringify(pTurnNew.Pos));
        if (pTurnNew.Piece.Rank !== EPieceRank.Pawn) return null;
        var redeems = [];
        var x: number;
        if (pTurnNew.Piece.IsWhite) {
            if (this.WhiteRedeemables.indexOf(pTurnNew.Pos.Idx) === -1) return null;
            for (x = 11; x < 15; x++) if (pTurn.PiecePos[x] > 48) redeems.push(pTurn.PiecePos[x]);
        }
        else {
            if (this.BlackRedeemables.indexOf(pTurnNew.Pos.Idx) === -1) return null;
            for (x = 1; x < 5; x++) if (pTurn.PiecePos[x] > 48) redeems.push(pTurn.PiecePos[x]);
        }
        //console.log("Turn.GetRedeems * redeems=" + JSON.stringify(redeems));
        return redeems.length === 0 ? null : redeems;
    }
    static New_Init(pTurn: ITurn, pPos: IPos, pPiece: IPiece) {
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
    }

    static WebResult(pTurn: ITurn, pResultData: ITurn) {
        //console.log("Turn.WebResult * pTurn.PiecePos=" + JSON.stringify(pTurn.PiecePos));
        //console.log("Turn.WebResult * pResultData.PiecePos=" + JSON.stringify(pResultData.PiecePos));
        //console.log("Turn.WebResult * pResultData.MoveSets=" + JSON.stringify(pResultData.MoveSets));
        //console.log("Turn.WebResult * pResultData.Checks=" + JSON.stringify(pResultData.Checks));
        if (pResultData.PiecePos !== undefined && pResultData.PiecePos !== null) pTurn.PiecePos = pResultData.PiecePos;
        pTurn.MoveSets = pResultData.MoveSets === undefined || pResultData.MoveSets === null ? [] : pResultData.MoveSets;
        pTurn.Checks = pResultData.Checks === undefined || pResultData.Checks === null ? [] : pResultData.Checks;
        //console.log("Turn.WebResult * pTurn.PiecePos=" + JSON.stringify(pTurn.PiecePos));

        return pTurn;
    }



    static PiecePos_AddLastScript(pGame: IGame) {
        //console.log("Turn.PiecePos * pScript=" + JSON.stringify(pGame.Turn.PiecePos));
        for (var x = 0; x < pGame.Script[pGame.Turn.Idx].length; x++)
            pGame.Turn.PiecePos[pGame.Script[pGame.Turn.Idx][x].PieceIdx] = pGame.Script[pGame.Turn.Idx][x].PosIdx;
        //console.log("Turn.PiecePos * pScript=" + JSON.stringify(pGame.Turn.PiecePos));
        return pGame.Turn.PiecePos;
    }
    //#endregion
}

export class Game {
    static New: IGame = {
        PlayingAsWhite: true,
        Script: [],
        Turn: Turn.First,

        Id: null,
        ProfileIdx: null,
        OpUserId: "Black",
        OpImgSrc: Dft.Src.Photo.Blank,
        Rated: null,
        TimeInc: null,
        TimeAmt: null,
        EndSts: null,
        RematchReceived: false,
        RematchSent: false,

        TurnColorIdx: 0,
        MeUserId: "White",
        MeImgSrc: Dft.Src.Photo.Blank,
        Rated_O: null,
        Time_O: null,
        History: false
    }
    static Copy(pGame: IGame) {
        //console.log("Game.Copy * pGame=" + JSON.stringify(pGame));
        var game: IGame = {
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
        }
        //console.log("Game.Copy * game=" + JSON.stringify(game));
        return Game.Extend(game);
    }
    static Extend(pGame: IGame) {
        //console.log("Game.Extend * pGame=" + JSON.stringify(pGame));
        if (pGame.Id === undefined || pGame.Id === null) {
            //console.log("DMCSvc.GameFunc.Extend * pGame.Turn=" + JSON.stringify(pGame.Turn));
            pGame.Id = null;
            pGame.PlayingAsWhite = true; pGame.OpUserId = "Black"; pGame.History = false;
        }
        else {
            pGame.Rated_O = Util.Bool("X", { "Bool": pGame.Rated });
            pGame.Time_O = Util.Time("AmtInc", { Inc: pGame.TimeInc, Amt: pGame.TimeAmt, Short: true });
        }
        pGame.TurnColorIdx = pGame.PlayingAsWhite ? 0 : 1;
        pGame.Turn = Turn.ExtendForGame(pGame);
        if (pGame.EndSts === undefined) pGame.EndSts = pGame.Turn.MoveSets === null ? "CheckMate" : null;

        //console.log("Game.Extend * pGame=" + JSON.stringify(pGame));
        //console.log("Game.Extend * pGame.Script=" + JSON.stringify(pGame.Script));
        //console.log("Game.Extend * pGame.Script.length=" + JSON.stringify(pGame.Script.length));
        //console.log("Game.Extend * pGame.Turn.Idx=" + JSON.stringify(pGame.Turn.Idx));
        //console.log("Game.Extend * pGame.Turn.WhitesTurn=" + JSON.stringify(pGame.Turn.WhitesTurn));

        return pGame;
    }
    static WebResult(pResultData: IGame) {
        //console.log("Game.WebResult * pResultData=" + JSON.stringify(pResultData));
        //console.log("Game.WebResult * pResultData.Script=" + JSON.stringify(pResultData.Script));
        //console.log("Game.WebResult * pResultData.Script.length=" + JSON.stringify(pResultData.Script.length));
        pResultData.Turn = Turn.WebResult(pResultData.Turn, pResultData.Turn);
        return this.Extend(pResultData);
    }
    static PiecePos(pPiecePos: Array<number>, pScript: Array<IScript>) {
        var piecePos = pPiecePos.slice();
        for (var xS = 0; xS < pScript.length; xS++) {
            pScript[xS].PrevIdx = piecePos[pScript[xS].PieceIdx];
            piecePos[pScript[xS].PieceIdx] = pScript[xS].PosIdx;
        }
        return piecePos;
    }
}

export interface IGame {
    Id?: string;
    ProfileIdx?: number;
    Script: Array<Array<IScript>>;
    Turn: ITurn;

    PlayingAsWhite: boolean;
    OpUserId?: string;
    OpImgSrc?: string;
    Rated?: boolean;
    TimeInc?: string;
    TimeAmt?: number;
    EndSts?: string;
    TurnColorIdx?: number;
    MeUserId?: string;
    MeImgSrc?: string;
    Rated_O?: string;
    Time_O?: string;
    History?: boolean;

    RematchReceived?: boolean;
    RematchSent?: boolean;
}

export interface IChallenge {
    Id?: string;
    MotherId?: string;
    ProfileIdx?: number;
    Rated?: boolean;
    TimeInc?: string;
    TimeAmt?: number;
    OpUserId?: string;
    OpImgSrc: string;
    OpName?: string;
    OpGroup?: string;
    OpRating?: number;
}

export interface ITurn {
    PiecePos?: Array<number>;
    MoveSets?: Array<Array<number>>;
    Checks?: Array<number>;

    Idx?: number;
    WhitesTurn?: boolean;
    Color?: string;
    MeTurn?: boolean;
    NeedMoves?: boolean;
}

export interface ITurnNew {
    Idx: number;
    Show: boolean;
    Stage: string;
    Piece: IPiece;
    Pos: IPos;
    Prev: IPos;
    Script: Array<IScript>;
    Moves: Array<number>;
    Redeems: Array<number>;
}

export interface IScript {
    PieceIdx: number,
    PosIdx: number,
    PrevIdx: number
}

export interface ISize {
    CX?: true,
    CH?: true,
    L?: number,
    T?: number,
    R?: number,
    B?: number,
    X?: number,
    Y?: number,
    W?: number,
    H?: number,
    S?: number,
    MaxW?: number,
    MaxH?: number,
    MaxS?: number,
    WP?: string,
    HP?: string
    BgS?: string
}
