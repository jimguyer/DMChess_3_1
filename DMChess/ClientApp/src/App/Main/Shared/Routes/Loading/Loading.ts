import { Component, OnInit } from '@angular/core';
import { IACtl, ICtl, Ctl } from '../../../../Common/Comps/Ctl/Ctl';
import { EImg, IAImg, IImg, Img } from '../../../../Common/Ctls/Img';
import { ELabel, IALabel, ILabel, Label } from '../../../../Common/Ctls/Label';

import { Dft } from '../../../../Main/Shared/Modules/Default';
import { GM } from '../../../../Main/Shared/Modules/Global';

@Component({ templateUrl: './Loading.html' })

export class Loading {
    VM: IVM; static VM: IVM;
    GM: any; static GM: any;

    constructor() {
        //console.log("Loading.Constructor");
        this.VM = Loading.VM;
        this.GM = GM;
    }

    ngOnInit() {
        //console.log("Loading.ngOnInit");
        Loading.Size();
    }

    //#region Static

    public static Init() {
        //console.log("Loading.Init");
        //console.log("Loading.Init * GM.Src.Background =" + GM.Src.Background);
        var imgSrc = null;
        var imgIdx = Math.floor(Math.random() * 13);

        switch (imgIdx) {
          default:
          case 0: imgSrc = Dft.Src.Board.Piece.BlackKing; break;
          case 1: imgSrc = Dft.Src.Board.Piece.BlackQueen; break;
          case 2: imgSrc = Dft.Src.Board.Piece.BlackRook; break;
          case 3: imgSrc = Dft.Src.Board.Piece.BlackBishop; break;
          case 4: imgSrc = Dft.Src.Board.Piece.BlackKnight; break;
          case 5: imgSrc = Dft.Src.Board.Piece.BlackPawn; break;
          case 6: imgSrc = Dft.Src.Board.Piece.WhiteKing; break;
          case 7: imgSrc = Dft.Src.Board.Piece.WhiteQueen; break;
          case 8: imgSrc = Dft.Src.Board.Piece.WhiteRook; break;
          case 9: imgSrc = Dft.Src.Board.Piece.WhiteBishop; break;
          case 10: imgSrc = Dft.Src.Board.Piece.WhiteKnight; break;
          case 11: imgSrc = Dft.Src.Board.Piece.WhitePawn; break;
        }
        //console.log("imgIdx=" + imgIdx + " * imgSrc=" + imgSrc)
        this.VM = {
            Label: Label.Init({ Type: ELabel.TACenter, Z: 1, T: 3, F: "2BBGeorgia" }, false),
            Img: Img.Init({ Z: 2, X: "C", T: 5, W: 5, H: 5, Src: imgSrc }, false),
        };
        var vm = this.VM;
        //console.log("Loading.Init * vm.Label.Style=" + JSON.stringify(vm.Label.Style));
        //console.log("Loading.Init * vm.Img.Style=" + JSON.stringify(vm.Img.Style));
        GM.Msg = "Loading...";

    }

    public static Size() {
        //console.log("Loading.Size * GM.Sized.Loading=" + GM.Sized.Loading);
        //if (GM.Sized.Loading) return;
        var vm = this.VM;
        Ctl.Size(vm.Label, false);
        Ctl.Size(vm.Img, false);
        GM.Sized.Loading = true;
        //console.log("Loading.Style * vm.Label.Size=" + JSON.stringify(vm.Label.Style));
        //console.log("Loading.Size * vm.Label.Size=" + JSON.stringify(vm.Label.Size));
        //console.log("Loading.Size * vm.Img.Size=" + JSON.stringify(vm.Img.Size));
    }
    //#endregion
}
interface IVM { Label: ILabel, Img: IImg }
