"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctl_1 = require("../../../Common/Comps/Ctl/Ctl");
var Piece_1 = require("../../../Main/Shared/Ctls/Piece");
var Default_1 = require("../../../Main/Shared/Modules/Default");
var Move = /** @class */ (function () {
    function Move() {
    }
    Move.Inits = function (pPieceIdx, pCL) {
        if (pCL === void 0) { pCL = false; }
        var moves = [];
        var type;
        var src;
        switch (pPieceIdx) {
            case 0:
                type = Piece_1.EPiece.BlackKing;
                src = Default_1.Dft.Src.Board.Piece.BlackKing;
                break;
            case 1:
                type = Piece_1.EPiece.BlackQueen;
                src = Default_1.Dft.Src.Board.Piece.BlackQueen;
                break;
            case 2:
                type = Piece_1.EPiece.BlackRook;
                src = Default_1.Dft.Src.Board.Piece.BlackRook;
                break;
            case 3:
                type = Piece_1.EPiece.BlackBishop;
                src = Default_1.Dft.Src.Board.Piece.BlackBishop;
                break;
            case 4:
                type = Piece_1.EPiece.BlackKnight;
                src = Default_1.Dft.Src.Board.Piece.BlackKnight;
                break;
            case 5:
                type = Piece_1.EPiece.BlackPawn;
                src = Default_1.Dft.Src.Board.Piece.BlackPawn;
                break;
            case 6:
                type = Piece_1.EPiece.BlackPawn;
                src = Default_1.Dft.Src.Board.Piece.BlackPawn;
                break;
            case 7:
                type = Piece_1.EPiece.BlackPawn;
                src = Default_1.Dft.Src.Board.Piece.BlackPawn;
                break;
            case 8:
                type = Piece_1.EPiece.BlackPawn;
                src = Default_1.Dft.Src.Board.Piece.BlackPawn;
                break;
            case 9:
                type = Piece_1.EPiece.BlackPawn;
                src = Default_1.Dft.Src.Board.Piece.BlackPawn;
                break;
            case 10:
                type = Piece_1.EPiece.WhiteKing;
                src = Default_1.Dft.Src.Board.Piece.WhiteKing;
                break;
            case 11:
                type = Piece_1.EPiece.WhiteQueen;
                src = Default_1.Dft.Src.Board.Piece.WhiteQueen;
                break;
            case 12:
                type = Piece_1.EPiece.WhiteRook;
                src = Default_1.Dft.Src.Board.Piece.WhiteRook;
                break;
            case 13:
                type = Piece_1.EPiece.WhiteBishop;
                src = Default_1.Dft.Src.Board.Piece.WhiteBishop;
                break;
            case 14:
                type = Piece_1.EPiece.WhiteKnight;
                src = Default_1.Dft.Src.Board.Piece.WhiteKnight;
                break;
            case 15:
                type = Piece_1.EPiece.WhitePawn;
                src = Default_1.Dft.Src.Board.Piece.WhitePawn;
                break;
            case 16:
                type = Piece_1.EPiece.WhitePawn;
                src = Default_1.Dft.Src.Board.Piece.WhitePawn;
                break;
            case 17:
                type = Piece_1.EPiece.WhitePawn;
                src = Default_1.Dft.Src.Board.Piece.WhitePawn;
                break;
            case 18:
                type = Piece_1.EPiece.WhitePawn;
                src = Default_1.Dft.Src.Board.Piece.WhitePawn;
                break;
            case 19:
                type = Piece_1.EPiece.WhitePawn;
                src = Default_1.Dft.Src.Board.Piece.WhitePawn;
                break;
        }
        return null;
    };
    Move.Init = function (pAMove, pCL) {
        if (pCL === void 0) { pCL = false; }
        var aCtl;
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
        var move = Ctl_1.Ctl.Init(pAMove, aCtl, pCL);
        return move;
    };
    Move.Stack = function (pMove, pSize, pCL) {
        if (pCL === void 0) { pCL = false; }
    };
    Move.Sizes = function (pMoves) { Ctl_1.Ctl.Sizes(pMoves); };
    Move.Size = function (pMove) { Ctl_1.Ctl.Size(pMove); };
    return Move;
}());
exports.Move = Move;
//# sourceMappingURL=Move.js.map