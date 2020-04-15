import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { ISize } from '../../../Common/Modules/Size';
import { Dft } from '../../../Main/Shared/Modules/Default';
import { GM } from '../../../Main/Shared/Modules/Global';

export class Piece {
    public static Init(pAPiece: IAPiece, pCL: boolean = false) {
        //console.log("Piece.Init * pAPiece=" + JSON.stringify(pAPiece));
        if (pCL) {
            //console.log("Piece.Init * pAPiece=" + JSON.stringify(pAPiece));
            alert("Piece.Init * pAPiece=" + JSON.stringify(pAPiece));
        }
        var piece: IPiece;
        switch (pAPiece.Type) {
            default: alert("Piece.Init * Unknown * pAPiece=" + JSON.stringify(pAPiece)); return;
            case EPiece.BlackKing: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.BlackKing, pCL);
                piece.IsWhite = false, piece.Rank = EPieceRank.King; piece.Color = "Black"; piece.Name = "King"; piece.ColorName = "Black King"; piece.C_Name = "B_King"; break;
            case EPiece.BlackQueen: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.BlackQueen, pCL);
                piece.IsWhite = false; piece.Rank = EPieceRank.Queen; piece.Color = "Black"; piece.Name = "Queen"; piece.ColorName = "Black Queen"; piece.C_Name = "B_Queen"; break; 
            case EPiece.BlackRook: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.BlackRook, pCL);
                piece.IsWhite = false; piece.Rank = EPieceRank.Rook; piece.Color = "Black"; piece.Name = "Rook"; piece.ColorName = "Black Rook"; piece.C_Name = "B_Rook"; break;
            case EPiece.BlackBishop: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.BlackBishop, pCL);
                piece.IsWhite = false; piece.Rank = EPieceRank.Bishop; piece.Color = "Black"; piece.Name = "Bishop"; piece.ColorName = "Black Bishop"; piece.C_Name = "B_Bishop"; break;
            case EPiece.BlackKnight: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.BlackKnight, pCL);
                piece.IsWhite = false; piece.Rank = EPieceRank.Pawn; piece.Color = "Black"; piece.Name = "Knight"; piece.ColorName = "Black Knight"; piece.C_Name = "B_Knight"; break;
            case EPiece.BlackPawn: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.BlackPawn, pCL);
                piece.IsWhite = false; piece.Rank = EPieceRank.Pawn; piece.Color = "Black"; piece.Name = "Pawn"; piece.ColorName = "Black Pawn"; piece.C_Name = "B_Pawn"; break;

            case EPiece.WhiteKing: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.WhiteKing, pCL);
                piece.IsWhite = true; piece.Rank = EPieceRank.King; piece.Color = "White"; piece.Name = "King"; piece.ColorName = "White King"; piece.C_Name = "W_King"; break;
            case EPiece.WhiteQueen: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.WhiteQueen, pCL);
                piece.IsWhite = true; piece.Rank = EPieceRank.Queen; piece.Color = "White"; piece.Name = "Queen"; piece.ColorName = "White Queen"; piece.C_Name = "W_Queen"; break;
            case EPiece.WhiteRook: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.WhiteRook, pCL);
                piece.IsWhite = true; piece.Rank = EPieceRank.Rook; piece.Color = "White"; piece.Name = "Rook"; piece.ColorName = "White Rook"; piece.C_Name = "W_Rook"; break;
            case EPiece.WhiteBishop: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.WhiteBishop, pCL);
                piece.IsWhite = true; piece.Rank = EPieceRank.Bishop; piece.Color = "White"; piece.Name = "Bishop"; piece.ColorName = "White Bishop"; piece.C_Name = "W_Bishop"; break;
            case EPiece.WhiteKnight: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.WhiteKnight, pCL);
                piece.IsWhite = true; piece.Rank = EPieceRank.Knight; piece.Color = "White"; piece.Name = "Knight"; piece.ColorName = "White Knight"; piece.C_Name = "W_Knight"; break;
            case EPiece.WhitePawn: piece = Ctl.Init(pAPiece, Dft.ABoard.Piece.WhitePawn, pCL);
                piece.IsWhite = true; piece.Rank = EPieceRank.Pawn; piece.Color = "White"; piece.Name = "Pawn"; piece.ColorName = "White Pawn"; piece.C_Name = "W_Pawn"; break;
        }
        piece.MovesIdx = pAPiece.MovesIdx; piece.CapPosIdx = pAPiece.CapPosIdx;
        return piece;
    }
    static GetType(pPieceIdx: IPiece, pCL: boolean = false) {
        switch (pPieceIdx) {
            case 0: return EPiece.BlackKing; case 1: return EPiece.BlackQueen; case 2: return EPiece.BlackRook; case 3: return EPiece.BlackBishop; case 4: return EPiece.BlackKnight;
            case 5: return EPiece.BlackPawn; case 6: return EPiece.BlackPawn; case 7: return EPiece.BlackPawn; case 8: return EPiece.BlackPawn; case 9: return EPiece.BlackPawn;
            case 10: return EPiece.WhiteKing; case 11: return EPiece.WhiteQueen; case 12: return EPiece.WhiteRook; case 13: return EPiece.WhiteBishop; case 14: return EPiece.WhiteKnight;
            case 15: return EPiece.WhitePawn; case 16: return EPiece.WhitePawn; case 17: return EPiece.WhitePawn; case 18: return EPiece.WhitePawn; case 19: return EPiece.WhitePawn;
        }
    }
    public static Sizes(pPieces: Array<IPiece>) { Ctl.Sizes(pPieces); }
    public static Size(pPiece: IPiece) { Ctl.Size(pPiece); }
}

export interface IAPiece extends IACtl { Type?: EPiece, MovesIdx: number, CapPosIdx?:number  }
export interface IPiece extends ICtl {
    PieceType?: EPiece,
    IsWhite?: boolean,
    Rank?: EPieceRank,
    MovesIdx?: number,
    CapPosIdx?: number,

    Color?: string,
    Name?: string,
    ColorName? : string,
    C_Name? : string

}
export enum EPiece {
    BlackKing = "BK", BlackQueen = "BQ", BlackRook = "BR", BlackBishop = "BB", BlackKnight = "BN", BlackPawn = "BP",
    WhiteKing = "WK", WhiteQueen = "WQ", WhiteRook = "WR", WhiteBishop = "WB", WhiteKnight = "WN", WhitePawn = "WP"
}
export enum EPieceRank { King = "K", Queen = "Q", Rook = "R", Bishop = "B", Knight = "N", Pawn = "P" }
