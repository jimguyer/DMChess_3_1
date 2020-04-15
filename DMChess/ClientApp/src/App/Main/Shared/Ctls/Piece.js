"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ctl_1 = require("../../../Common/Comps/Ctl/Ctl");
var Default_1 = require("../../../Main/Shared/Modules/Default");
var Piece = /** @class */ (function () {
    function Piece() {
    }
    Piece.Init = function (pAPiece, pCL) {
        if (pCL === void 0) { pCL = false; }
        //console.log("Piece.Init * pAPiece=" + JSON.stringify(pAPiece));
        if (pCL) {
            //console.log("Piece.Init * pAPiece=" + JSON.stringify(pAPiece));
            alert("Piece.Init * pAPiece=" + JSON.stringify(pAPiece));
        }
        var piece;
        switch (pAPiece.Type) {
            default:
                alert("Piece.Init * Unknown * pAPiece=" + JSON.stringify(pAPiece));
                return;
            case EPiece.BlackKing:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.BlackKing, pCL);
                piece.IsWhite = false, piece.Rank = EPieceRank.King;
                piece.Color = "Black";
                piece.Name = "King";
                piece.ColorName = "Black King";
                piece.C_Name = "B_King";
                break;
            case EPiece.BlackQueen:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.BlackQueen, pCL);
                piece.IsWhite = false;
                piece.Rank = EPieceRank.Queen;
                piece.Color = "Black";
                piece.Name = "Queen";
                piece.ColorName = "Black Queen";
                piece.C_Name = "B_Queen";
                break;
            case EPiece.BlackRook:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.BlackRook, pCL);
                piece.IsWhite = false;
                piece.Rank = EPieceRank.Rook;
                piece.Color = "Black";
                piece.Name = "Rook";
                piece.ColorName = "Black Rook";
                piece.C_Name = "B_Rook";
                break;
            case EPiece.BlackBishop:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.BlackBishop, pCL);
                piece.IsWhite = false;
                piece.Rank = EPieceRank.Bishop;
                piece.Color = "Black";
                piece.Name = "Bishop";
                piece.ColorName = "Black Bishop";
                piece.C_Name = "B_Bishop";
                break;
            case EPiece.BlackKnight:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.BlackKnight, pCL);
                piece.IsWhite = false;
                piece.Rank = EPieceRank.Pawn;
                piece.Color = "Black";
                piece.Name = "Knight";
                piece.ColorName = "Black Knight";
                piece.C_Name = "B_Knight";
                break;
            case EPiece.BlackPawn:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.BlackPawn, pCL);
                piece.IsWhite = false;
                piece.Rank = EPieceRank.Pawn;
                piece.Color = "Black";
                piece.Name = "Pawn";
                piece.ColorName = "Black Pawn";
                piece.C_Name = "B_Pawn";
                break;
            case EPiece.WhiteKing:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.WhiteKing, pCL);
                piece.IsWhite = true;
                piece.Rank = EPieceRank.King;
                piece.Color = "White";
                piece.Name = "King";
                piece.ColorName = "White King";
                piece.C_Name = "W_King";
                break;
            case EPiece.WhiteQueen:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.WhiteQueen, pCL);
                piece.IsWhite = true;
                piece.Rank = EPieceRank.Queen;
                piece.Color = "White";
                piece.Name = "Queen";
                piece.ColorName = "White Queen";
                piece.C_Name = "W_Queen";
                break;
            case EPiece.WhiteRook:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.WhiteRook, pCL);
                piece.IsWhite = true;
                piece.Rank = EPieceRank.Rook;
                piece.Color = "White";
                piece.Name = "Rook";
                piece.ColorName = "White Rook";
                piece.C_Name = "W_Rook";
                break;
            case EPiece.WhiteBishop:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.WhiteBishop, pCL);
                piece.IsWhite = true;
                piece.Rank = EPieceRank.Bishop;
                piece.Color = "White";
                piece.Name = "Bishop";
                piece.ColorName = "White Bishop";
                piece.C_Name = "W_Bishop";
                break;
            case EPiece.WhiteKnight:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.WhiteKnight, pCL);
                piece.IsWhite = true;
                piece.Rank = EPieceRank.Knight;
                piece.Color = "White";
                piece.Name = "Knight";
                piece.ColorName = "White Knight";
                piece.C_Name = "W_Knight";
                break;
            case EPiece.WhitePawn:
                piece = Ctl_1.Ctl.Init(pAPiece, Default_1.Dft.ABoard.Piece.WhitePawn, pCL);
                piece.IsWhite = true;
                piece.Rank = EPieceRank.Pawn;
                piece.Color = "White";
                piece.Name = "Pawn";
                piece.ColorName = "White Pawn";
                piece.C_Name = "W_Pawn";
                break;
        }
        piece.MovesIdx = pAPiece.MovesIdx;
        piece.CapPosIdx = pAPiece.CapPosIdx;
        return piece;
    };
    Piece.GetType = function (pPieceIdx, pCL) {
        if (pCL === void 0) { pCL = false; }
        switch (pPieceIdx) {
            case 0: return EPiece.BlackKing;
            case 1: return EPiece.BlackQueen;
            case 2: return EPiece.BlackRook;
            case 3: return EPiece.BlackBishop;
            case 4: return EPiece.BlackKnight;
            case 5: return EPiece.BlackPawn;
            case 6: return EPiece.BlackPawn;
            case 7: return EPiece.BlackPawn;
            case 8: return EPiece.BlackPawn;
            case 9: return EPiece.BlackPawn;
            case 10: return EPiece.WhiteKing;
            case 11: return EPiece.WhiteQueen;
            case 12: return EPiece.WhiteRook;
            case 13: return EPiece.WhiteBishop;
            case 14: return EPiece.WhiteKnight;
            case 15: return EPiece.WhitePawn;
            case 16: return EPiece.WhitePawn;
            case 17: return EPiece.WhitePawn;
            case 18: return EPiece.WhitePawn;
            case 19: return EPiece.WhitePawn;
        }
    };
    Piece.Sizes = function (pPieces) { Ctl_1.Ctl.Sizes(pPieces); };
    Piece.Size = function (pPiece) { Ctl_1.Ctl.Size(pPiece); };
    return Piece;
}());
exports.Piece = Piece;
var EPiece;
(function (EPiece) {
    EPiece["BlackKing"] = "BK";
    EPiece["BlackQueen"] = "BQ";
    EPiece["BlackRook"] = "BR";
    EPiece["BlackBishop"] = "BB";
    EPiece["BlackKnight"] = "BN";
    EPiece["BlackPawn"] = "BP";
    EPiece["WhiteKing"] = "WK";
    EPiece["WhiteQueen"] = "WQ";
    EPiece["WhiteRook"] = "WR";
    EPiece["WhiteBishop"] = "WB";
    EPiece["WhiteKnight"] = "WN";
    EPiece["WhitePawn"] = "WP";
})(EPiece = exports.EPiece || (exports.EPiece = {}));
var EPieceRank;
(function (EPieceRank) {
    EPieceRank["King"] = "K";
    EPieceRank["Queen"] = "Q";
    EPieceRank["Rook"] = "R";
    EPieceRank["Bishop"] = "B";
    EPieceRank["Knight"] = "N";
    EPieceRank["Pawn"] = "P";
})(EPieceRank = exports.EPieceRank || (exports.EPieceRank = {}));
//# sourceMappingURL=Piece.js.map