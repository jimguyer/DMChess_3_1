import { IACtl, ICtl, Ctl } from '../../../Common/Comps/Ctl/Ctl';
import { IAImg, IImg } from '../../../Common/Ctls/Img';
import { ISize } from '../../../Common/Modules/Size';
import { IAPos, IPos } from '../../../Main/Shared/Ctls/Pos';
import { EPiece } from '../../../Main/Shared/Ctls/Piece';
import { Dft } from '../../../Main/Shared/Modules/Default';

export class Move {
    public static Inits(pPieceIdx: number, pCL: boolean = false) {
        var moves: Array<IMove> = [];
        var type: EPiece;
        var src: string;
        switch (pPieceIdx) {
            case 0: type = EPiece.BlackKing; src = Dft.Src.Board.Piece.BlackKing; break;
            case 1: type = EPiece.BlackQueen; src = Dft.Src.Board.Piece.BlackQueen; break;
            case 2: type = EPiece.BlackRook; src = Dft.Src.Board.Piece.BlackRook; break;
            case 3: type = EPiece.BlackBishop; src = Dft.Src.Board.Piece.BlackBishop; break;
            case 4: type = EPiece.BlackKnight; src = Dft.Src.Board.Piece.BlackKnight; break;
            case 5: type = EPiece.BlackPawn; src = Dft.Src.Board.Piece.BlackPawn; break;
            case 6: type = EPiece.BlackPawn; src = Dft.Src.Board.Piece.BlackPawn; break;
            case 7: type = EPiece.BlackPawn; src = Dft.Src.Board.Piece.BlackPawn; break;
            case 8: type = EPiece.BlackPawn; src = Dft.Src.Board.Piece.BlackPawn; break;
            case 9: type = EPiece.BlackPawn; src = Dft.Src.Board.Piece.BlackPawn; break;
            case 10: type = EPiece.WhiteKing; src = Dft.Src.Board.Piece.WhiteKing; break;
            case 11: type = EPiece.WhiteQueen; src = Dft.Src.Board.Piece.WhiteQueen; break;
            case 12: type = EPiece.WhiteRook; src = Dft.Src.Board.Piece.WhiteRook; break;
            case 13: type = EPiece.WhiteBishop; src = Dft.Src.Board.Piece.WhiteBishop; break;
            case 14: type = EPiece.WhiteKnight; src = Dft.Src.Board.Piece.WhiteKnight; break;
            case 15: type = EPiece.WhitePawn; src = Dft.Src.Board.Piece.WhitePawn; break;
            case 16: type = EPiece.WhitePawn; src = Dft.Src.Board.Piece.WhitePawn; break;
            case 17: type = EPiece.WhitePawn; src = Dft.Src.Board.Piece.WhitePawn; break;
            case 18: type = EPiece.WhitePawn; src = Dft.Src.Board.Piece.WhitePawn; break;
            case 19: type = EPiece.WhitePawn; src = Dft.Src.Board.Piece.WhitePawn; break;
        }
        return null;
    }
    public static Init(pAMove: IAMove, pCL: boolean = false) {
        var aCtl: IACtl;
        //switch (pAMove.PieceIdx) {
        //    case EPiece.BlackKing: aCtl = Dft.ABoard.Move.BlackKing, pCL; break;
        //    case EPiece.BlackQueen: aCtl = Dft.ABoard.Move.BlackQueen, pCL; break;
        //    case EPiece.BlackRook: aCtl = Dft.ABoard.Move.BlackRook, pCL; break;
        //    case EPiece.BlackBishop: aCtl = Dft.ABoard.Move.BlackBishop, pCL; break;
        //    case EPiece.BlackKnight: aCtl = Dft.ABoard.Move.BlackKnight, pCL; break;
        //    case EPiece.BlackPawn: aCtl = Dft.ABoard.Move.BlackPawn, pCL; break;
        //    case EPiece.WhiteKing: aCtl = Dft.ABoard.Move.WhiteKing, pCL; break;
        //    case EPiece.WhiteRook: aCtl = Dft.ABoard.Move.WhiteRook, pCL; break;
        //    case EPiece.WhiteBishop: aCtl = Dft.ABoard.Move.WhiteBishop, pCL; break;
        //    case EPiece.WhiteKnight: aCtl = Dft.ABoard.Move.WhiteKnight, pCL; break;
        //    case EPiece.WhitePawn: aCtl = Dft.ABoard.Move.WhitePawn, pCL; break;
        //}
        var move = Ctl.Init(pAMove, aCtl, pCL);
        return move;
    }
    static Stack(pMove: IMove, pSize: ISize, pCL: boolean = false) {
    }
    public static Sizes(pMoves: Array<IMove>) { Ctl.Sizes(pMoves); }
    public static Size(pMove: IMove) { Ctl.Size(pMove); }
}

export interface IAMove extends IAImg { PieceIdx: number}
export interface IMove extends IImg { }

