import { Color as SharedColor } from '../../Main/Shared/Attrs/Color';
export class Color {
    public static Get(pColor: string, pCL: boolean = false) {
        if (pCL) {
            //console.log("Common/Attrs/Color.Get * pColor=" + pColor);
        }
        var sharedColor = SharedColor.Get(pColor, pCL);
        if (pCL) {
            //console.log("Common/Attrs/Color.Get =================");
            //console.log("Common/Attrs/Color.Get * sharedColor=" + sharedColor);
        }
        if (sharedColor) return sharedColor;
        else {
            if (pCL) {
                //console.log("Common/Attrs/Color.Get - Noshare * pColor=" + pColor);
            }
            switch (pColor.toLowerCase()) {
                default: return;
                case "alicebBlue": case "albu": return this.EGet(EColor.AliceBlue);
                case "antiqueWhite": case "anwh":return this.EGet(EColor.AntiqueWhite);
                case "aqua": case "aq":return this.EGet(EColor.Aqua);
                case "aquamarine": case "aqma":return this.EGet(EColor.Aquamarine);
                case "azure": case "az":return this.EGet(EColor.Azure);
                case "beige": case "be":return this.EGet(EColor.Beige);
                case "bisque" : case "bi":return this.EGet(EColor.Bisque);
                case "black": case "ba": return this.EGet(EColor.Black);
                case "blanchedalmond" : case "baal":return this.EGet(EColor.BlanchedAlmond);
                case "blue": case "bu":return this.EGet(EColor.Blue);
                case "blueviolet" : case "buvi":return this.EGet(EColor.BlueViolet);
                case "brown": case "br": return this.EGet(EColor.Brown);
                case "burlywood" : case "buwo":return this.EGet(EColor.BurlyWood);
                case "cadetblue" : case "cabu":return this.EGet(EColor.CadetBlue);
                case "chartreuse" : case "chbu":return this.EGet(EColor.Chartreuse);
                case "chocolate" : case "ch":return this.EGet(EColor.Chocolate);
                case "coral" : case "co":return this.EGet(EColor.Coral);
                case "cornflowerblue" : case "cobu":return this.EGet(EColor.CornflowerBlue);
                case "cornsilk" : case "cosi":return this.EGet(EColor.Cornsilk);
                case "crimson" : case "cr":return this.EGet(EColor.Crimson);
                case "cyan" : case "cy":return this.EGet(EColor.Cyan);
                case "darkblue" : case "dabu":return this.EGet(EColor.DarkBlue);
                case "darkcyan" : case "dacy":return this.EGet(EColor.DarkCyan);
                case "darkgoldenrod" : case "dago":return this.EGet(EColor.DarkGoldenRod);
                case "darkgray" : case "daga":return this.EGet(EColor.DarkGray);
                case "darkgrey" : case "dage":return this.EGet(EColor.DarkGrey);
                case "darkgreen" : case "dagr":return this.EGet(EColor.DarkGreen);
                case "darkkhaki" : case "dakh":return this.EGet(EColor.DarkKhaki);
                case "darkmagenta" : case "dama":return this.EGet(EColor.DarkMagenta);
                case "darkolivegreen" : case "daol":return this.EGet(EColor.DarkOliveGreen);
                case "darkorange" : case "daor":return this.EGet(EColor.DarkOrange);
                case "darkorchid" : case "daoc":return this.EGet(EColor.DarkOrchid);
                case "darkred" : case "dare":return this.EGet(EColor.DarkRed);
                case "darksalmon" : case "dasa":return this.EGet(EColor.DarkSalmon);
                case "darkseagreen" : case "dase":return this.EGet(EColor.DarkSeaGreen);
                case "darkslateblue" : case "dsbu":return this.EGet(EColor.DarkSlateBlue);
                case "darkslategray" : case "dsge":return this.EGet(EColor.DarkSlateGray);
                case "darkslategrey" : case "dsga":return this.EGet(EColor.DarkSlateGrey);
                case "darkturquoise" : case "dsge":return this.EGet(EColor.DarkTurquoise);
                case "darkviolet" : case "devi":return this.EGet(EColor.DarkViolet);
                case "deeppink" : case "depi":return this.EGet(EColor.DeepPink);
                case "deepskyblue" : case "dsbu":return this.EGet(EColor.DeepSkyBlue);
                case "dimgray" : case "diga":return this.EGet(EColor.DimGray);
                case "dimgrey" : case "dige":return this.EGet(EColor.DimGrey);
                case "dodgerblue" : case "dobu":return this.EGet(EColor.DodgerBlue);
                case "firebrick" : case "fibr":return this.EGet(EColor.FireBrick);
                case "floralwhite" : case "flwh":return this.EGet(EColor.FloralWhite);
                case "forestgreen" : case "fogr":return this.EGet(EColor.ForestGreen);
                case "fuchsia" : case "fu":return this.EGet(EColor.Fuchsia);
                case "gainsboro" : case "ga":return this.EGet(EColor.Gainsboro);
                case "ghostwhite" : case "gowh":return this.EGet(EColor.GhostWhite);
                case "gold" : case "go":return this.EGet(EColor.Gold);
                case "goldenrod" : case "goro":return this.EGet(EColor.GoldenRod);
                case "gray" : case "ga":return this.EGet(EColor.Gray);
                case "grey" : case "ge":return this.EGet(EColor.Grey);
                case "green": case "gr": return this.EGet(EColor.Green);
                case "greenYellow" : case "grye":return this.EGet(EColor.GreenYellow);
                case "honeydew" : case "ho":return this.EGet(EColor.HoneyDew);
                case "hotPink" : case "hopi":return this.EGet(EColor.HotPink);
                case "indianred" : case "inre":return this.EGet(EColor.IndianRed );
                case "indigo" : case "in":return this.EGet(EColor.Indigo );
                case "ivory" : case "iv":return this.EGet(EColor.Ivory);
                case "khaki" : case "kh":return this.EGet(EColor.Khaki);
                case "lavender" : case "la":return this.EGet(EColor.Lavender);
                case "lavenderblush" : case "labl":return this.EGet(EColor.LavenderBlush);
                case "lawngreen" : case "lagr":return this.EGet(EColor.LawnGreen);
                case "lemonchiffon" : case "lech":return this.EGet(EColor.LemonChiffon);
                case "lightblue" : case "libu":return this.EGet(EColor.LightBlue);
                case "lightcoral" : case "lico":return this.EGet(EColor.LightCoral);
                case "lightcyan" : case "licy":return this.EGet(EColor.LightCyan);
                case "lightgoldenrodyellow" : case "ligy":return this.EGet(EColor.LightGoldenRodYellow);
                case "lightggray" : case "lige":return this.EGet(EColor.LightGray);
                case "lightgrey" : case "liga":return this.EGet(EColor.LightGrey);
                case "lightgreen" : case "ligr":return this.EGet(EColor.LightGreen);
                case "lightpink" : case "lipi":return this.EGet(EColor.LightPink);
                case "lightsalmon" : case "lisa":return this.EGet(EColor.LightSalmon);
                case "lightseagreen" : case "lsgr":return this.EGet(EColor.LightSeaGreen);
                case "lightskyblue" : case "lsbu":return this.EGet(EColor.LightSkyBlue);
                case "Lightslategray" : case "lsga":return this.EGet(EColor.LightSlateGray);
                case "lightslategrey" : case "lsge":return this.EGet(EColor.LightSlateGrey);
                case "lightsteelblue" : case "ltbu":return this.EGet(EColor.LightSteelBlue);
                case "lightyellow" : case "liye":return this.EGet(EColor.LightYellow);
                case "lime" : case "li":return this.EGet(EColor.Lime);
                case "limegreen" : case "ligr":return this.EGet(EColor.LimeGreen);
                case "linen" : case "li":return this.EGet(EColor.Linen);
                case "magenta" : case "mg":return this.EGet(EColor.Magenta);
                case "maroon" : case "mr":return this.EGet(EColor.Maroon);
                case "mediumaquamarine" : case "meaq":return this.EGet(EColor.MediumAquaMarine);
                case "mediumblue" : case "mebu":return this.EGet(EColor.MediumBlue);
                case "mediumorchid" : case "meor":return this.EGet(EColor.MediumOrchid);
                case "mediumpurple" : case "mepu":return this.EGet(EColor.MediumPurple);
                case "mediumseagreen" : case "mese":return this.EGet(EColor.MediumSeaGreen);
                case "mediumslateblue" : case "mesl":return this.EGet(EColor.MediumSlateBlue);
                case "mediumspringgreen" : case "mesp":return this.EGet(EColor.MediumSpringGreen);
                case "mediumturquoise" : case "metu":return this.EGet(EColor.MediumTurquoise);
                case "mediumvioletred" : case "mevr":return this.EGet(EColor.MediumVioletRed);
                case "midnightblue" : case "mibu":return this.EGet(EColor.MidnightBlue);
                case "mintcream" : case "micr":return this.EGet(EColor.MintCream);
                case "mistyrose" : case "miro":return this.EGet(EColor.MistyRose);
                case "moccasin" : case "mo":return this.EGet(EColor.Moccasin);
                case "navajowhite" : case "nawh":return this.EGet(EColor.NavajoWhite);
                case "navy" : case "na":return this.EGet(EColor.Navy);
                case "oldlace" : case "olla":return this.EGet(EColor.OldLace);
                case "olive" : case "ol":return this.EGet(EColor.Olive);
                case "olivedrab" : case "lodr":return this.EGet(EColor.OliveDrab);
                case "orange" : case "or":return this.EGet(EColor.Orange);
                case "orangered" : case "orre":return this.EGet(EColor.OrangeRed);
                case "orchid" : case "oc":return this.EGet(EColor.Orchid);
                case "palegoldenrod" : case "pago":return this.EGet(EColor.PaleGoldenRod);
                case "palegreen" : case "pagr":return this.EGet(EColor.PaleGreen);
                case "paleturquoise" : case "patu":return this.EGet(EColor.PaleTurquoise);
                case "palevioletred" : case "pavr":return this.EGet(EColor.PaleVioletRed);
                case "papayawhip" : case "pa":return this.EGet(EColor.PapayaWhip);
                case "peachpuff" : case "pepu":return this.EGet(EColor.PeachPuff);
                case "peru" : case "pe":return this.EGet(EColor.Peru);
                case "pink" : case "pi":return this.EGet(EColor.Pink);
                case "plum" : case "pl":return this.EGet(EColor.Plum);
                case "powderblue" : case "po":return this.EGet(EColor.PowderBlue);
                case "purple" : case "pu":return this.EGet(EColor.Purple);
                case "rebeccapurple" : case "repu":return this.EGet(EColor.RebeccaPurple);
                case "red" : case "re":return this.EGet(EColor.Red);
                case "rosybrown" : case "robo":return this.EGet(EColor.RosyBrown);
                case "royalblue" : case "robu":return this.EGet(EColor.RoyalBlue);
                case "saddlebrown" : case "sabr":return this.EGet(EColor.SaddleBrown);
                case "salmon" : case "sa":return this.EGet(EColor.Salmon);
                case "sandybrown" : case "sabr":return this.EGet(EColor.SandyBrown);
                case "seagreen" : case "segr":return this.EGet(EColor.SeaGreen);
                case "seashell" : case "sesh":return this.EGet(EColor.SeaShell);
                case "sienna" : case "se":return this.EGet(EColor.Sienna);
                case "silver" : case "si":return this.EGet(EColor.Silver);
                case "skyblue" : case "skbu":return this.EGet(EColor.SkyBlue);
                case "slateblue" : case "slbu":return this.EGet(EColor.SlateBlue);
                case "slategray" : case "slga":return this.EGet(EColor.SlateGray);
                case "slategrey" : case "slge":return this.EGet(EColor.SlateGrey);
                case "snow" : case "sn":return this.EGet(EColor.Snow);
                case "springgreen" : case "spgr":return this.EGet(EColor.SpringGreen);
                case "steelblue" : case "stbu":return this.EGet(EColor.SteelBlue);
                case "tan" : case "ta":return this.EGet(EColor.Tan);
                case "teal" : case "te":return this.EGet(EColor.Teal);
                case "thistle" : case "th":return this.EGet(EColor.Thistle);
                case "tomato" : case "to":return this.EGet(EColor.Tomato);
                case "turquoise" : case "tu":return this.EGet(EColor.Turquoise);
                case "violet" : case "vi":return this.EGet(EColor.Violet);
                case "wheat" : case "we":return this.EGet(EColor.Wheat);
                case "white": case "wh": case "ab":return this.EGet(EColor.White);
                case "whitesmoke" : case "whsm":return this.EGet(EColor.WhiteSmoke);
                case "yellow": case "ye": return this.EGet(EColor.Yellow);
                case "yellowgreen" : case "yegr":return this.EGet(EColor.YellowGreen);
            }
        }
    }
    public static EGet(pEColor: EColor, pCL: boolean = false) {
        switch (pEColor) {
            default: return null;
            case EColor.AliceBlue: return "AliceBlue"
            case EColor.AntiqueWhite: return "AntiqueWhite"
            case EColor.Aqua: return "Aqua"
            case EColor.Aquamarine: return "Aquamarine"
            case EColor.Azure: return "Azure"
            case EColor.Beige: return "Beige"
            case EColor.Bisque: return "Bisque"
            case EColor.Black: return "Black"
            case EColor.BlanchedAlmond: return "BlanchedAlmond"
            case EColor.Blue: return "Blue"
            case EColor.BlueViolet: return "BlueViolet"
            case EColor.Brown: return "Brown"
            case EColor.BurlyWood: return "BurlyWood"
            case EColor.CadetBlue: return "CadetBlue"
            case EColor.Chartreuse: return "Chartreuse"
            case EColor.Chocolate: return "Chocolate"
            case EColor.Coral: return "Coral"
            case EColor.CornflowerBlue: return "CornflowerBlue"
            case EColor.Cornsilk: return "Cornsilk"
            case EColor.Crimson: return "Crimson"
            case EColor.Cyan: return "Cyan"
            case EColor.DarkBlue: return "DarkBlue"
            case EColor.DarkCyan: return "DarkCyan"
            case EColor.DarkGoldenRod: return "DarkGoldenRod"
            case EColor.DarkGray: return "DarkGray"
            case EColor.DarkGrey: return "DarkGrey"
            case EColor.DarkGreen: return "DarkGreen"
            case EColor.DarkKhaki: return "DarkKhaki"
            case EColor.DarkMagenta: return "DarkMagenta"
            case EColor.DarkOliveGreen: return "DarkOliveGreen"
            case EColor.DarkOrange: return "DarkOrange"
            case EColor.DarkOrchid: return "DarkOrchid"
            case EColor.DarkRed: return "DarkRed"
            case EColor.DarkSalmon: return "DarkSalmon"
            case EColor.DarkSeaGreen: return "DarkSeaGreen"
            case EColor.DarkSlateBlue: return "DarkSlateBlue"
            case EColor.DarkSlateGray: return "DarkSlateGray"
            case EColor.DarkSlateGrey: return "DarkSlateGrey"
            case EColor.DarkTurquoise: return "DarkTurquoise"
            case EColor.DarkViolet: return "DarkViolet"
            case EColor.DeepPink: return "DeepPink"
            case EColor.DeepSkyBlue: return "DeepSkyBlue"
            case EColor.DimGray: return "DimGray"
            case EColor.DimGrey: return "DimGrey"
            case EColor.DodgerBlue: return "DodgerBlue"
            case EColor.FireBrick: return "FireBrick"
            case EColor.FloralWhite: return "FloralWhite"
            case EColor.ForestGreen: return "ForestGreen"
            case EColor.Fuchsia: return "Fuchsia"
            case EColor.Gainsboro: return "Gainsboro"
            case EColor.GhostWhite: return "GhostWhite"
            case EColor.Gold: return "Gold"
            case EColor.GoldenRod: return "GoldenRod"
            case EColor.Gray: return "Gray"
            case EColor.Grey: return "Grey"
            case EColor.Green: return "Green"
            case EColor.GreenYellow: return "GreenYellow"
            case EColor.HoneyDew: return "HoneyDew"
            case EColor.HotPink: return "HotPink"
            case EColor.IndianRed: return "IndianRed "
            case EColor.Indigo: return "Indigo "
            case EColor.Ivory: return "Ivory"
            case EColor.Khaki: return "Khaki"
            case EColor.Lavender: return "Lavender"
            case EColor.LavenderBlush: return "LavenderBlush"
            case EColor.LawnGreen: return "LawnGreen"
            case EColor.LemonChiffon: return "LemonChiffon"
            case EColor.LightBlue: return "LightBlue"
            case EColor.LightCoral: return "LightCoral"
            case EColor.LightCyan: return "LightCyan"
            case EColor.LightGoldenRodYellow: return "LightGoldenRodYellow"
            case EColor.LightGray: return "LightGray"
            case EColor.LightGrey: return "LightGrey"
            case EColor.LightGreen: return "LightGreen"
            case EColor.LightPink: return "LightPink"
            case EColor.LightSalmon: return "LightSalmon"
            case EColor.LightSeaGreen: return "LightSeaGreen"
            case EColor.LightSkyBlue: return "LightSkyBlue"
            case EColor.LightSlateGray: return "LightSlateGray"
            case EColor.LightSlateGrey: return "LightSlateGrey"
            case EColor.LightSteelBlue: return "LightSteelBlue"
            case EColor.LightYellow: return "LightYellow"
            case EColor.Lime: return "Lime"
            case EColor.LimeGreen: return "LimeGreen"
            case EColor.Linen: return "Linen"
            case EColor.Magenta: return "Magenta"
            case EColor.Maroon: return "Maroon"
            case EColor.MediumAquaMarine: return "MediumAquaMarine"
            case EColor.MediumBlue: return "MediumBlue"
            case EColor.MediumOrchid: return "MediumOrchid"
            case EColor.MediumPurple: return "MediumPurple"
            case EColor.MediumSeaGreen: return "MediumSeaGreen"
            case EColor.MediumSlateBlue: return "MediumSlateBlue"
            case EColor.MediumSpringGreen: return "MediumSpringGreen"
            case EColor.MediumTurquoise: return "MediumTurquoise"
            case EColor.MediumVioletRed: return "MediumVioletRed"
            case EColor.MidnightBlue: return "MidnightBlue"
            case EColor.MintCream: return "MintCream"
            case EColor.MistyRose: return "MistyRose"
            case EColor.Moccasin: return "Moccasin"
            case EColor.NavajoWhite: return "NavajoWhite"
            case EColor.Navy: return "Navy"
            case EColor.OldLace: return "OldLace"
            case EColor.Olive: return "Olive"
            case EColor.OliveDrab: return "OliveDrab"
            case EColor.Orange: return "Orange"
            case EColor.OrangeRed: return "OrangeRed"
            case EColor.Orchid: return "Orchid"
            case EColor.PaleGoldenRod: return "PaleGoldenRod"
            case EColor.PaleGreen: return "PaleGreen"
            case EColor.PaleTurquoise: return "PaleTurquoise"
            case EColor.PaleVioletRed: return "PaleVioletRed"
            case EColor.PapayaWhip: return "PapayaWhip"
            case EColor.PeachPuff: return "PeachPuff"
            case EColor.Peru: return "Peru"
            case EColor.Pink: return "Pink"
            case EColor.Plum: return "Plum"
            case EColor.PowderBlue: return "PowderBlue"
            case EColor.Purple: return "Purple"
            case EColor.RebeccaPurple: return "RebeccaPurple"
            case EColor.Red: return "Red"
            case EColor.RosyBrown: return "RosyBrown"
            case EColor.RoyalBlue: return "RoyalBlue"
            case EColor.SaddleBrown: return "SaddleBrown"
            case EColor.Salmon: return "Salmon"
            case EColor.SandyBrown: return "SandyBrown"
            case EColor.SeaGreen: return "SeaGreen"
            case EColor.SeaShell: return "SeaShell"
            case EColor.Sienna: return "Sienna"
            case EColor.Silver: return "Silver"
            case EColor.SkyBlue: return "SkyBlue"
            case EColor.SlateBlue: return "SlateBlue"
            case EColor.SlateGray: return "SlateGray"
            case EColor.SlateGrey: return "SlateGrey"
            case EColor.Snow: return "Snow"
            case EColor.SpringGreen: return "SpringGreen"
            case EColor.SteelBlue: return "SteelBlue"
            case EColor.Tan: return "Tan"
            case EColor.Teal: return "Teal"
            case EColor.Thistle: return "Thistle"
            case EColor.Tomato: return "Tomato"
            case EColor.Turquoise: return "Turquoise"
            case EColor.Violet: return "Violet"
            case EColor.Wheat: return "Wheat"
            case EColor.White: return "White"
            case EColor.WhiteSmoke: return "WhiteSmoke"
            case EColor.Yellow: return "Yellow"
            case EColor.YellowGreen: return "YellowGreen"
        }
    }

}
export enum EColor {
    Inherit = "inherit",
    AliceBlue = "AliceBlue",
    AntiqueWhite = "AntiqueWhite",
    Aqua = "Aqua",
    Aquamarine = "Aquamarine",
    Azure = "Azure",
    Beige = "Beige",
    Bisque = "Bisque",
    Black = "Black",
    BlanchedAlmond = "BlanchedAlmond",
    Blue = "Blue",
    BlueViolet = "BlueViolet",
    Brown = "Brown",
    BurlyWood = "BurlyWood",
    CadetBlue = "CadetBlue",
    Chartreuse = "Chartreuse",
    Chocolate = "Chocolate",
    Coral = "Coral",
    CornflowerBlue = "CornflowerBlue",
    Cornsilk = "Cornsilk",
    Crimson = "Crimson",
    Cyan = "Cyan",
    DarkBlue = "DarkBlue",
    DarkCyan = "DarkCyan",
    DarkGoldenRod = "DarkGoldenRod",
    DarkGray = "DarkGray",
    DarkGrey = "DarkGrey",
    DarkGreen = "DarkGreen",
    DarkKhaki = "DarkKhaki",
    DarkMagenta = "DarkMagenta",
    DarkOliveGreen = "DarkOliveGreen",
    DarkOrange = "DarkOrange",
    DarkOrchid = "DarkOrchid",
    DarkRed = "DarkRed",
    DarkSalmon = "DarkSalmon",
    DarkSeaGreen = "DarkSeaGreen",
    DarkSlateBlue = "DarkSlateBlue",
    DarkSlateGray = "DarkSlateGray",
    DarkSlateGrey = "DarkSlateGrey",
    DarkTurquoise = "DarkTurquoise",
    DarkViolet = "DarkViolet",
    DeepPink = "DeepPink",
    DeepSkyBlue = "DeepSkyBlue",
    DimGray = "DimGray",
    DimGrey = "DimGrey",
    DodgerBlue = "DodgerBlue",
    FireBrick = "FireBrick",
    FloralWhite = "FloralWhite",
    ForestGreen = "ForestGreen",
    Fuchsia = "Fuchsia",
    Gainsboro = "Gainsboro",
    GhostWhite = "GhostWhite",
    Gold = "Gold",
    GoldenRod = "GoldenRod",
    Gray = "Gray",
    Grey = "Grey",
    Green = "Green",
    GreenYellow = "GreenYellow",
    HoneyDew = "HoneyDew",
    HotPink = "HotPink",
    IndianRed = "IndianRed ",
    Indigo = "Indigo ",
    Ivory = "Ivory",
    Khaki = "Khaki",
    Lavender = "Lavender",
    LavenderBlush = "LavenderBlush",
    LawnGreen = "LawnGreen",
    LemonChiffon = "LemonChiffon",
    LightBlue = "LightBlue",
    LightCoral = "LightCoral",
    LightCyan = "LightCyan",
    LightGoldenRodYellow = "LightGoldenRodYellow",
    LightGray = "LightGray",
    LightGrey = "LightGrey",
    LightGreen = "LightGreen",
    LightPink = "LightPink",
    LightSalmon = "LightSalmon",
    LightSeaGreen = "LightSeaGreen",
    LightSkyBlue = "LightSkyBlue",
    LightSlateGray = "LightSlateGray",
    LightSlateGrey = "LightSlateGrey",
    LightSteelBlue = "LightSteelBlue",
    LightYellow = "LightYellow",
    Lime = "Lime",
    LimeGreen = "LimeGreen",
    Linen = "Linen",
    Magenta = "Magenta",
    Maroon = "Maroon",
    MediumAquaMarine = "MediumAquaMarine",
    MediumBlue = "MediumBlue",
    MediumOrchid = "MediumOrchid",
    MediumPurple = "MediumPurple",
    MediumSeaGreen = "MediumSeaGreen",
    MediumSlateBlue = "MediumSlateBlue",
    MediumSpringGreen = "MediumSpringGreen",
    MediumTurquoise = "MediumTurquoise",
    MediumVioletRed = "MediumVioletRed",
    MidnightBlue = "MidnightBlue",
    MintCream = "MintCream",
    MistyRose = "MistyRose",
    Moccasin = "Moccasin",
    NavajoWhite = "NavajoWhite",
    Navy = "Navy",
    OldLace = "OldLace",
    Olive = "Olive",
    OliveDrab = "OliveDrab",
    Orange = "Orange",
    OrangeRed = "OrangeRed",
    Orchid = "Orchid",
    PaleGoldenRod = "PaleGoldenRod",
    PaleGreen = "PaleGreen",
    PaleTurquoise = "PaleTurquoise",
    PaleVioletRed = "PaleVioletRed",
    PapayaWhip = "PapayaWhip",
    PeachPuff = "PeachPuff",
    Peru = "Peru",
    Pink = "Pink",
    Plum = "Plum",
    PowderBlue = "PowderBlue",
    Purple = "Purple",
    RebeccaPurple = "RebeccaPurple",
    Red = "Red",
    RosyBrown = "RosyBrown",
    RoyalBlue = "RoyalBlue",
    SaddleBrown = "SaddleBrown",
    Salmon = "Salmon",
    SandyBrown = "SandyBrown",
    SeaGreen = "SeaGreen",
    SeaShell = "SeaShell",
    Sienna = "Sienna",
    Silver = "Silver",
    SkyBlue = "SkyBlue",
    SlateBlue = "SlateBlue",
    SlateGray = "SlateGray",
    SlateGrey = "SlateGrey",
    Snow = "Snow",
    SpringGreen = "SpringGreen",
    SteelBlue = "SteelBlue",
    Tan = "Tan",
    Teal = "Teal",
    Thistle = "Thistle",
    Tomato = "Tomato",
    Turquoise = "Turquoise",
    Violet = "Violet",
    Wheat = "Wheat",
    White = "White",
    WhiteSmoke = "WhiteSmoke",
    Yellow = "Yellow",
    YellowGreen = "YellowGreen"
}
