"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../../Common/Attrs/Position");
var TextAlign_1 = require("../../../Common/Attrs/TextAlign");
var Dft = /** @class */ (function () {
    function Dft() {
    }
    //#region Init
    Dft.Rows = 16;
    Dft.Cols = 9;
    //#endregion
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //#region Init
    Dft.X = .5;
    Dft.Y = 0;
    Dft.W = 4;
    Dft.H = 1;
    Dft.GapX = .25;
    Dft.GapY = .5;
    Dft.AdjustS = .1;
    Dft.MarginS = 1;
    Dft.PaddingS = 1;
    Dft.BorderS = 1;
    Dft.FontS = 1;
    Dft.BorderMult = .04;
    Dft.FontMult = .75;
    Dft.DisableOpacity = .4;
    Dft.DisableFilter = "alpha(opacity=" + Dft.DisableOpacity + ")";
    Dft.ShadowOpacity = .4;
    Dft.ShadowFilter = "alpha(opacity=" + Dft.ShadowOpacity + ")";
    Dft.test_BG1 = "";
    Dft.test_BG2 = "";
    //#endregion
    //#region Assets
    Dft.Audio = {
        Chime: new Audio('assets/Common/Audio/Chime.mp3'),
        Click: new Audio('assets/Common/Audio/Click.mp3'),
        Error: new Audio('assets/Common/Audio/Error.mp3'),
        Ping: new Audio('assets/Common/Audio/Ping.mp3'),
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        Check: new Audio('assets/Shared/Audio/Check.mp3'),
        Lose: new Audio('assets/Shared/Audio/Lose.mp3'),
        MeTurn: new Audio('assets/Shared/Audio/MeTurn.mp3'),
        Win: new Audio('assets/Shared/Audio/Win.mp3')
    };
    Dft.BgUrl = "URL('assets/Common/Images/General/Background.png')";
    Dft.Src = {
        Facebook: 'assets/Common/Images/General/Facebook.png',
        Paypal: 'assets/Common/Images/General/Paypal.png',
        Icon: {
            Audio: 'assets/Common/Images/General/Icons/Audio.png',
            Clock: 'assets/Common/Images/General/Icons/Clock.png',
            Copy: 'assets/Common/Images/General/Icons/Copy.png',
            Down: 'assets/Common/Images/General/Icons/Down.png',
            Exit: 'assets/Common/Images/General/Icons/Exit.png',
            First: 'assets/Common/Images/General/Icons/First.png',
            Flip: 'assets/Common/Images/General/Icons/Flip.png',
            Last: 'assets/Common/Images/General/Icons/Last.png',
            Left: 'assets/Common/Images/General/Icons/Left.png',
            Minus: 'assets/Common/Images/General/Icons/Minus.png',
            Next: 'assets/Common/Images/General/Icons/Next.png',
            Off: 'assets/Common/Images/General/Icons/Off.png',
            On: 'assets/Common/Images/General/Icons/On.png',
            IconOverlay: 'assets/Common/Images/General/Icons/Overlay.png',
            Plus: 'assets/Common/Images/General/Icons/Plus.png',
            Prev: 'assets/Common/Images/General/Icons/Prev.png',
            Right: 'assets/Common/Images/General/Icons/Right.png',
            RotateLeft: 'assets/Common/Images/General/Icons/RotateLeft.png',
            RotateRight: 'assets/Common/Images/General/Icons/RotateRight.png',
            Save: 'assets/Common/Images/General/Icons/Save.png',
            Start: 'assets/Common/Images/General/Icons/Start.png',
            Up: 'assets/Common/Images/General/Icons/Up.png',
        },
        Photo: {
            Blank: 'assets/Common/Images/General/Photos/PhotoBlank.png',
            Click: 'assets/Common/Images/General/Photos/PhotoClick.png',
            Loading: 'assets/Common/Images/General/Photos/PhotoLoading.png',
            No: 'assets/Common/Images/General/Photos/PhotoNo.png'
        },
        //*********************************************************************************
        //*********************************************************************************
        Logo: 'assets/Shared/Images/General/IconL.png',
        Background: 'assets/Shared/Images/General/Background.png',
        BgUrl: "URL('assets/Shared/Images/General/Background.png')",
        Hdr: {
            Background: 'assets/Shared/Images/General/Hdr_Background.png',
            IconL: 'assets/Shared/Images/General/Icon.png',
            IconR: 'assets/Shared/Images/General/Icon.png',
            Logo: 'assets/Shared/Images/General/Logo.png'
        },
        Ftr: {},
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        //*********************************************************************************
        Board: {
            Pos: {
                CapBlack: 'assets/Shared/Images/Board/Captures/Black.png',
                CapOverlay: 'assets/Shared/Images/Board/Captures/Overlay.png',
                CapWhite: 'assets/Shared/Images/Board/Captures/White.png',
                HexBlack: 'assets/Shared/Images/Board/Hex/Black.png',
                HexBlackOn: 'assets/Shared/Images/Board/Hex/BlackOn.png',
                HexOverlay: 'assets/Shared/Images/Board/Hex/Overlay.png',
                HexRed: 'assets/Shared/Images/Board/Hex/Red.png',
                HexRedOn: 'assets/Shared/Images/Board/Hex/RedOn.png',
                HexWhite: 'assets/Shared/Images/Board/Hex/White.png',
                HexWhiteOn: 'assets/Shared/Images/Board/Hex/WhiteOn.png',
                TriangleMe: 'assets/Shared/Images/Board/Hex/TriangleMe.png',
                TriangleOp: 'assets/Shared/Images/Board/Hex/TriangleOp.png',
            },
            Piece: {
                BlackKing: 'assets/Shared/Images/Board/Pieces/BlackKing.png', BlackQueen: 'assets/Shared/Images/Board/Pieces/BlackQueen.png', BlackRook: 'assets/Shared/Images/Board/Pieces/BlackRook.png',
                BlackBishop: 'assets/Shared/Images/Board/Pieces/BlackBishop.png', BlackKnight: 'assets/Shared/Images/Board/Pieces/BlackKnight.png', BlackPawn: 'assets/Shared/Images/Board/Pieces/BlackPawn.png',
                WhiteKing: 'assets/Shared/Images/Board/Pieces/WhiteKing.png', WhiteQueen: 'assets/Shared/Images/Board/Pieces/WhiteQueen.png', WhiteRook: 'assets/Shared/Images/Board/Pieces/WhiteRook.png',
                WhiteBishop: 'assets/Shared/Images/Board/Pieces/WhiteBishop.png', WhiteKnight: 'assets/Shared/Images/Board/Pieces/WhiteKnight.png', WhitePawn: 'assets/Shared/Images/Board/Pieces/WhitePawn.png'
            }
        }
    };
    //#endregion
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //*********************************************************************************
    //#region ACtls
    Dft.AButton = {
        HomeLeft: { X: 0, Y: 14.125, Z: 5, W: 3.25, H: 1, PT: 1, F: 1 },
        HomeCenter: { X: "C", Y: 14.125, Z: 5, W: 3.25, H: 1, PT: 1, F: 1 },
        HomeRight: { X: "R", Y: 14.125, Z: 5, W: 3.25, H: 1, PT: 1, F: 1 },
        Left: { X: 0, Y: 14.125, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        Center: { X: 3.05, Y: 14.125, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        Right: { X: 6.1, Y: 14.125, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        InnerLeft: { X: 0, Y: 14.125, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        InnerCenter: { X: 3.05, Y: 14.125, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        InnerRight: { X: 6.1, Y: 14.125, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        UpperLeft: { X: 0, Y: 12.25, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        UpperCenter: { X: 3.05, Y: 12, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 },
        UpperRight: { X: 6.1, Y: 12, Z: 5, W: 2.9, H: 1, PT: 1, F: 1 }
    };
    Dft.ACtl = {
        Gen: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1, Bg: Dft.test_BG2 }
    };
    Dft.ACheckbox = {
        Left: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Right: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 }
    };
    Dft.ADiv = {
        Border_Black: { X: 0, Z: 2, W: Dft.Cols, Bo: 1, Bg: "Coback" },
        Hdr: { Z: 0, L: 0, T: 0, H: .8, W: "100%", Bg: "Black", TA: TextAlign_1.ETextAlign.Center },
        Center: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Left: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Right: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 }
    };
    Dft.AFieldset = {
        Border_Black: { X: 0, Y: 2.25, Z: 2, W: 9, H: 15, FirstY: 3.25, Bo: 1, Bg: "Coback" },
        Border_White: { X: 0, Y: 1.5, Z: 2, W: 9, H: 15, FirstY: 2.25, Bo: 1, Bg: "Coback" }
    };
    Dft.AIcon = {
        Inner: { X: Dft.X, Z: 5, H: 1, PT: 1, F: "A1", TA: TextAlign_1.ETextAlign.Right, Bg: Dft.test_BG2 }
    };
    Dft.AImg = {
        Background: { Z: -1, T: 0, R: 0, S: "100%", Src: Dft.Src.Background },
        Hdr: { Z: -1, T: 0, R: 0, H: 2.25, W: "100%", Src: Dft.Src.Hdr.Background },
        IconL: { Z: 2, L: .2, T: .05, S: .8, Src: Dft.Src.Logo },
        IconR: { Z: 2, R: .2, T: .05, S: .8, Src: Dft.Src.Logo },
        Logo: { Z: 2, L: .2, T: .05, H: 2, W: 7, Src: Dft.Src.Logo },
        Crop: { X: "C", Z: 5, S: 5, Bo: 1 },
        Generic: { X: "C", Z: 5, S: 5, Bo: 1 },
        Raw: { X: "C", Z: 5, S: 5, Bo: 1 },
        Square: { X: "C", Z: 5, S: 5, Bo: 1 }
    };
    Dft.ALabel = {
        Banner: { X: "C", Y: 0, Z: 1, W: 8, H: 1, F: "1WhBGeorgia", TA: TextAlign_1.ETextAlign.Center, Value: "Diamond Chess" },
        BigMsg: { X: "C", Z: 1, T: 0, W: 8, F: 2, Value: "Diamond Chess" },
        Inner: { X: Dft.X, Z: 5, H: 1, PT: 1, F: "A1", TA: TextAlign_1.ETextAlign.Right, Bg: Dft.test_BG2 },
        LowerLeft: { X: "C", Y: 15.35, Z: 1, W: 9, F: .7, TA: TextAlign_1.ETextAlign.Center },
        LowerLeft2: { X: "C", Y: 15.35, Z: 1, W: 9, F: .7, TA: TextAlign_1.ETextAlign.Center },
        Msg: { X: "C", Y: 15.35, Z: 1, W: 9, F: .7, TA: TextAlign_1.ETextAlign.Center },
        TALeft: { X: Dft.X, Z: 5, H: 1, PT: 1, F: "A1", TA: TextAlign_1.ETextAlign.Left, Bg: Dft.test_BG2 },
        TACenter: { X: Dft.X, Z: 5, H: 1, PT: 1, F: "A1", TA: TextAlign_1.ETextAlign.Center, Bg: Dft.test_BG2 },
        TARight: { X: Dft.X, Z: 5, H: 1, PT: 1, F: "A1", TA: TextAlign_1.ETextAlign.Right, Bg: Dft.test_BG2 }
    };
    Dft.ALegend = {
        NoTab: { X: "C", Y: 1.25, Z: 2, W: 4, H: 1, P: "T1", Bo: 1, TA: TextAlign_1.ETextAlign.Center, F: "A1", Bg: "Cohigh" },
        Tab: { X: "C", Y: 2.0, Z: 2, W: 4, H: 1, P: "T1", Bo: 1, TA: TextAlign_1.ETextAlign.Center, F: "A1", Bg: "Cohigh" }
    };
    Dft.AMenu = {
        X: 28, Y: .75, Z: 5, H: 1, W: 12, F: 1,
        Opt: {
            Menu: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1 },
            Menu_Alt: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1, Bg: "Ivory" },
            Link: { Pos: Position_1.EPosition.None, F: 1 },
            Link_Alt: { Pos: Position_1.EPosition.None, F: 1 },
            Route: { Pos: Position_1.EPosition.None, F: 1, AF: 1 },
            Route_Alt: { Pos: Position_1.EPosition.None, F: 1, AF: 1 }
        }
    };
    Dft.AMenu_Sub = {
        X: 0, Y: 1.84, Z: 5, H: 1.5, W: 48, F: 1, Bo: 1, Bg: "Ivory",
        Opt: {
            Menu: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1 },
            Menu_Alt: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1, Bg: "White" },
            Link: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1 },
            Link_Alt: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1, Bg: "White" },
            Route: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1, Bg: "Ivory" },
            Route_Alt: { Pos: Position_1.EPosition.None, TA: TextAlign_1.ETextAlign.Center, F: 1, Bo: 1 },
        }
    };
    Dft.APage = {
        Frame: { X: .25, Y: 12.5, Z: 4, W: Dft.Cols, H: 1.25, PT: 1, Bo: 1, Bg: "Coback" },
        First: { X: .25, Y: 12.5, Z: 5, W: 1.25, H: 1.25, PT: 1, Src: Dft.Src.Icon.First },
        Prev: { X: 2.5, Y: 12.5, Z: 5, W: 1.25, H: 1.25, PT: 1, Src: Dft.Src.Icon.Prev },
        Next: { X: 5.125, Y: 12.5, Z: 5, W: 1.25, H: 1.25, PT: 1, Src: Dft.Src.Icon.Next },
        Last: { X: 7.5, Y: 12.5, Z: 5, W: 1.25, H: 1.25, PT: 1, Src: Dft.Src.Icon.Last },
    };
    Dft.APassword = {
        Gen: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1, Bg: Dft.test_BG2 }
    };
    Dft.ARadio = {
        Left: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Right: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 }
    };
    Dft.ASelect = {
        Center: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Left: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Right: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 }
    };
    Dft.ATextbox = {
        Center: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Left: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 },
        Right: { X: .5, Y: 2, Z: 5, H: 1, W: 8, F: 1 }
    };
    //#endregion
    //#region Comps
    Dft.Background = {
        Attrs: { Z: -1, T: 0, R: 0, S: "100%", Src: null }
    };
    Dft.Hdr = {
        Frame: { Z: 1, L: 0, T: .0, H: 2, W: "100%", Src: Dft.Src.Hdr.Background },
        IconL: { Attrs: { Z: 2, L: .1, T: .1, S: 1.8, Src: Dft.Src.Hdr.IconL } },
        Logo: { Attrs: { Z: 2, L: 0, T: .1, H: 1.8, Src: Dft.Src.Logo } },
        Banner: { Attrs: { Z: 2, X: 8, T: .1, F: 2, Value: "Supplier Quality Database" } },
        IconR: { Attrs: { Z: 2, R: .1, T: .1, S: 1.8, Src: Dft.Src.Hdr.IconR } }
    };
    Dft.Ftr = {
        Frame: { Attrs: { Z: 1, L: 0, T: .05, H: 1 } },
        Msg: { Attrs: { Z: 1, L: 0, B: .05, H: .5 } },
    };
    Dft.Menu = {
        Frame_Main: { Attrs: { X: 28, Y: .25, Z: 5, H: 1.5, W: 12, F: 1.5, AF: 1 } },
        Frame_Sub: { Attrs: { X: 5, Y: 2.5, Z: 5, H: 1.5, W: 4, F: 1, AF: 1 } },
        Opt: {
            Menu: { Attrs: { Pos: "X", F: 1, AF: 1 } },
            Link: { Attrs: { Pos: "X", F: 1, AF: 1 } },
            Route: { Attrs: { Pos: "X", F: 1, AF: 1 } }
        }
    };
    Dft.ATabs = {
        Frame: { X: 0, Y: 1.25, Z: 5, W: 9.125, H: 1 },
        IndentL: { Pos: Position_1.EPosition.None, W: .5, H: 1, Bo: "BR" },
        IndentR: { Pos: Position_1.EPosition.None, W: .5, H: 1, Bo: "BL" },
        Active0: { Pos: Position_1.EPosition.None, H: 1, F: 1, P: "T1", TA: TextAlign_1.ETextAlign.Center, Bo: "LTR", Bg: "Cofore" },
        Inactive0: { Pos: Position_1.EPosition.None, H: 1, F: .75, P: "T1", TA: TextAlign_1.ETextAlign.Center, Bo: "LTRB", Bg: "Coshadow" },
        Active: { Pos: Position_1.EPosition.None, H: 1, F: 1, P: "T1", TA: TextAlign_1.ETextAlign.Center, Bo: "TR", Bg: "Cofore" },
        Inactive: { Pos: Position_1.EPosition.None, H: 1, F: .75, P: "T1", TA: TextAlign_1.ETextAlign.Center, Bo: "TRB", Bg: "Coshadow" },
        Body: { Pos: Position_1.EPosition.None, H: 11.25, W: 9, Bo: "RBL", Bg: "Ccolorfore" }
    };
    Dft.Loading = {
        Label: { Attrs: { Z: 1, X: "C", T: 3, W: 8, TA: TextAlign_1.ETextAlign.Center, F: "2BBGeorgia" } },
        Img: { Attrs: { Z: 2, X: "C", T: 5, W: 5, H: 5, Src: Dft.Src.Logo } }
    };
    Dft.ABoard = {
        Cap: {
            Z: 2,
            Black: { Z: 5, Src: Dft.Src.Board.Pos.CapBlack },
            White: { Z: 5, Src: Dft.Src.Board.Pos.CapWhite }
        },
        Hex: {
            Z: 2,
            Black: { Z: 2, Src: Dft.Src.Board.Pos.HexBlack, SrcOn: Dft.Src.Board.Pos.HexBlackOn },
            Red: { Z: 2, Src: Dft.Src.Board.Pos.HexRed, SrcOn: Dft.Src.Board.Pos.HexRedOn },
            White: { Z: 2, Src: Dft.Src.Board.Pos.HexWhite, SrcOn: Dft.Src.Board.Pos.HexRedOn },
        },
        Move: {
            BlackKing: { Z: 4, Src: Dft.Src.Board.Piece.BlackKing },
            BlackQueen: { Z: 4, Src: Dft.Src.Board.Piece.BlackQueen },
            BlackRook: { Z: 4, Src: Dft.Src.Board.Piece.BlackRook },
            BlackBishop: { Z: 4, Src: Dft.Src.Board.Piece.BlackBishop },
            BlackKnight: { Z: 4, Src: Dft.Src.Board.Piece.BlackKnight },
            BlackPawn: { Z: 4, Src: Dft.Src.Board.Piece.BlackPawn },
            WhiteKing: { Z: 4, Src: Dft.Src.Board.Piece.WhiteKing },
            WhiteQueen: { Z: 4, Src: Dft.Src.Board.Piece.WhiteQueen },
            WhiteRook: { Z: 4, Src: Dft.Src.Board.Piece.WhiteRook },
            WhiteBishop: { Z: 4, Src: Dft.Src.Board.Piece.WhiteBishop },
            WhiteKnight: { Z: 4, Src: Dft.Src.Board.Piece.WhiteKnight },
            WhitePawn: { Z: 4, Src: Dft.Src.Board.Piece.WhitePawn }
        },
        Pos: { Z: 5, W: 1.35, H: 1.47, SrcCapOverlay: Dft.Src.Board.Pos.CapOverlay, SrcHexOverlay: Dft.Src.Board.Pos.HexOverlay },
        Tri: {
            Z: 4,
            Op: { Z: 4, Src: Dft.Src.Board.Pos.TriangleOp },
            Me: { Z: 4, Src: Dft.Src.Board.Pos.TriangleMe }
        },
        Icon: {
            Icon: { Z: 1 },
            Off: { Z: 2, Src: Dft.Src.Icon.Off },
            On: { Z: 2, Src: Dft.Src.Icon.On },
        },
        Img: {
            Op: { Z: 2, X: 0, Y: 1, S: 2, Bo: "1", Src: Dft.Src.Photo.Loading },
            Me: { Z: 2, X: 0, Y: 13.35, S: 2, Bo: "1", Src: Dft.Src.Photo.Loading },
        },
        Piece: {
            BlackKing: { Z: 4, Src: Dft.Src.Board.Piece.BlackKing },
            BlackQueen: { Z: 4, Src: Dft.Src.Board.Piece.BlackQueen },
            BlackRook: { Z: 4, Src: Dft.Src.Board.Piece.BlackRook },
            BlackBishop: { Z: 4, Src: Dft.Src.Board.Piece.BlackBishop },
            BlackKnight: { Z: 4, Src: Dft.Src.Board.Piece.BlackKnight },
            BlackPawn: { Z: 4, Src: Dft.Src.Board.Piece.BlackPawn },
            WhiteKing: { Z: 4, Src: Dft.Src.Board.Piece.WhiteKing },
            WhiteQueen: { Z: 4, Src: Dft.Src.Board.Piece.WhiteQueen },
            WhiteRook: { Z: 4, Src: Dft.Src.Board.Piece.WhiteRook },
            WhiteBishop: { Z: 4, Src: Dft.Src.Board.Piece.WhiteBishop },
            WhiteKnight: { Z: 4, Src: Dft.Src.Board.Piece.WhiteKnight },
            WhitePawn: { Z: 4, Src: Dft.Src.Board.Piece.WhitePawn }
        }
    };
    return Dft;
}());
exports.Dft = Dft;
//# sourceMappingURL=Default.js.map