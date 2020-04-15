import { ISize } from '../../Common/Modules/Size';
import { Dft } from '../../Main/Shared/Modules/Default';
import { GM } from '../../Main/Shared/Modules/Global';
//import { isNumeric } from 'rxjs/util/isNumeric';

export class Util {
  //public static IsAlpha(pVar: string, pCL: boolean = false) { return !isNumeric(pVar); }
  public static IsCommaSpace(pVar: string, pCL: boolean = false) { return pVar === "," || pVar >= "0" && pVar <= " "; };
  public static IsNum(pVar, pCL: boolean = false) { return !isNaN(pVar); }
  public static IsNumDot(pVar: string, pCL: boolean = false) { return pVar === "." || pVar >= "0" && pVar <= "9"; };
  public static IsPercent(pVar: string, pCL: boolean = false) { return this.IsNum(pVar.toString().substr(0, pVar.length - 1)) && pVar.toString().substr(pVar.length - 1, 1) === "%"; }
  public static IsChaAlpha(pVar: string, pCL: boolean = false) { return pVar >= "A" && pVar <= "Z" || pVar >= "a" && pVar <= "z"; };
  public static IsSide(pVar: string, pCL: boolean) { return (pVar === "T" || pVar === "R" || pVar === "B" || pVar === "L"); }

  public static ChaUpper(pVar: string, pCL: boolean = false) { return pVar >= "A" && pVar <= "Z"; };
  public static ChaLower(pVar: string, pCL: boolean = false) { return pVar >= "a" && pVar <= "z"; };


  public static Bool(pEvent, pObj) {
    //console.log("UtilitySvc.BoolFunc." + pEvent + " * pObj=" + JSON.stringify(pObj));
    switch (pEvent) {
      case "YesNo": return pObj.Bool ? "Yes" : "No";
      case "YN": return pObj.Bool ? "Y" : "N";
      case "WinLoss": return pObj.Bool ? "Win" : "Loss";
      case "X": return pObj.Bool ? "X" : "O";
    }
  };

  public static Img(pEvent, pObj) {
    //console.log("Util.Img * pEvent=" + pEvent);
    //console.log("Util.Img * pObj=" + JSON.stringify(pObj));
    var img, canvas, context;
    switch (pEvent) {


      //#region case "CropStep":
      case "CropStep":
        //console.log("Util.Img.CropStep * pObj.Crop=" + pObj.Crop);
        //console.log("Util.Img.CropStep *  pObj.BaseSize=" + JSON.stringify(pObj.BaseSize));
        //console.log("Util.Img.CropStep *  pObj.CropSize=" + JSON.stringify(pObj.CropSize));
        //console.log("DM.Step=" + pObj.Step);
        var bs = pObj.BaseSize; var cs = pObj.CropSize; var step: number = pObj.Step, stepX2 = pObj.Step * 2;
        //*****************************************************************************************************************************
        var m = this.Img("GetCropMargins", { BaseSize: pObj.BaseSize, CropSize: pObj.CropSize });
        //*****************************************************************************************************************************
        //console.log("Util.Click_Crop * m=" + JSON.stringify(m));
        //console.log("Util.Click_Crop * cs=" + JSON.stringify(cs));
        switch (pObj.Crop) {
          case "CropLeft": if (m.L > 0) cs.X = m.L > stepX2 ? cs.X - stepX2 : bs.X; else { cs.Y += step; cs.S -= stepX2; } break;
          case "CropUp": if (m.T > 0) cs.Y = m.T > stepX2 ? cs.Y - stepX2 : bs.Y; else { cs.X += step; cs.S -= stepX2; } break;
          case "CropRight": if (m.R > 0) cs.X = m.R > stepX2 ? cs.X += stepX2 : cs.X + m.R; else { cs.X += stepX2; cs.Y += step; cs.S -= stepX2; } break;
          case "CropDown": if (m.B > 0) cs.Y = m.B > stepX2 ? cs.Y += stepX2 : cs.Y + m.B; else { cs.X += step; cs.Y += stepX2; cs.S -= stepX2; } break;
          case "CropMinus": cs.S -= stepX2; cs.X += step; cs.Y += step; break;
          //#region case "Plus":
          case "CropPlus":
            if (m.L > 0 && m.T > 0) {                                                                                             //console.log("Not docked to Left or Top");
              if (m.L >= step && m.T >= step) { cs.X -= step; cs.Y -= step; cs.S += step; }                                       //console.log("Left & Up Full step");
              else { if (m.L < m.T) { cs.X -= m.L; cs.Y -= m.L; cs.S += m.L; } else { cs.X -= m.T; cs.Y -= m.T; cs.S += m.T; } }  //console.log("Left & Up partial based on Left");
            }
            else if (m.L > 0) { if (m.L >= step) { cs.X -= step; cs.S += step; } else { cs.X -= m.L; cs.S += m.L; } }             //console.log("Left Full/Partial Step");
            else if (m.T > 0) { if (m.T >= step) { cs.Y -= step; cs.S += step; } else { cs.Y -= m.L; cs.S += m.L; } }             //console.log("Up Full/Partial Step");
            //*****************************************************************************************************************************
            m = this.Img("GetCropMargins", { BaseSize: pObj.BaseSize, CropSize: pObj.CropSize });
            //*****************************************************************************************************************************
            if (m.R > 0 && m.B > 0) { if (m.R >= step && m.B >= step) cs.S += step; else cs.S = m.R < m.B ? cs.S += m.R : cs.S += m.B } //console.log("Down & Right Full/Partial Step");
            else if (m.R > 0) { if (m.R >= step) { cs.Y -= step; cs.S += step; } else { cs.Y -= m.R; cs.S += m.R; } }                   //console.log("Right Full/Partial Step");
            else if (m.B > 0) { if (m.B >= step) { cs.X -= step; cs.S += step; } else { cs.X -= m.B; cs.S += m.B; } }                   //console.log("Up Full/Partial Step");

        }
        //console.log("Util.Click_Crop * cs=" +  JSON.stringify(cs));
        return cs;



      //#region case "GetCropMargins":

      case "GetCropMargins":
        //console.log("Util.Img.GetCropMargins");
        //console.log("Util.Img.GetCropMargins * pObj.BaseSize=" + JSON.stringify(pObj.BaseSize));
        //console.log("Util.Img.GetCropMargins * pObj.CropSize=" + JSON.stringify(pObj.CropSize));
        var decimals = 100;
        var m: any = { L: 0, T: 0, R: 0, B: 0 };
        m.L = Math.floor((pObj.CropSize.X - pObj.BaseSize.X) * decimals) / decimals;
        m.T = Math.floor((pObj.CropSize.Y - pObj.BaseSize.Y) * decimals) / decimals;
        m.R = Math.floor((pObj.BaseSize.W - pObj.CropSize.S - m.L) * decimals) / decimals;
        m.B = Math.floor((pObj.BaseSize.H - pObj.CropSize.S - m.T) * decimals) / decimals;
        //console.log("Util.Img.GetCropMargins * m=" + JSON.stringify(m));
        return m;


      //#region case "GetCropSize":

      case "GetCropSize":
        //console.log("Util.Img.GetCropSizeMax");
        //console.log("Util.Img.GetCropSizeMax * pObj.BaseSize=" + JSON.stringify(pObj.BaseSize));
        if (pObj.BaseSize.W < pObj.BaseSize.H)
          return { X: pObj.BaseSize.X, Y: pObj.BaseSize.Y + (pObj.BaseSize.H - pObj.BaseSize.W) / 2, S: pObj.BaseSize.W }
        else
          return { X: pObj.BaseSize.X + (pObj.BaseSize.W - pObj.BaseSize.H) / 2, Y: pObj.BaseSize.Y, S: pObj.BaseSize.H }


      //#region case "GetCropSrc":

      case "GetCropSrc":
        //console.log("Util.Img.GetCropSrc");
        //console.log("Util.Img.GetCropSrc * pObj.BaseSize=" + JSON.stringify(pObj.BaseSize));
        //console.log("Util.Img.GetCropSrc * pObj.CropSize=" + JSON.stringify(pObj.CropSize));
        //console.log("Util.Img.GetCropSrc * pObj.RawImg.src.length=" + pObj.RawImg.src.length);
        //console.log("Util.Img.GetCropSrc * pObj.RawImg.width=" + pObj.RawImg.width);
        //console.log("Util.Img.GetCropSrc * pObj.RawImg.height=" + pObj.RawImg.height);
        var wMult = pObj.RawImg.width / pObj.BaseSize.W; var hMult = pObj.RawImg.height / pObj.BaseSize.H;
        canvas = document.createElement('canvas'); canvas.width = pObj.CropSize.S * wMult; canvas.height = pObj.CropSize.S * hMult;
        var cut = { X: (pObj.CropSize.X - pObj.BaseSize.X) * wMult, Y: (pObj.CropSize.Y - pObj.BaseSize.Y) * hMult };
        context = canvas.getContext('2d'); context.drawImage(pObj.RawImg, cut.X, cut.Y, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
        //return canvas.toDataURL('image/jpeg');
        //console.log("Util.Img.GetCropSrc * wMult=" + wMult);
        //console.log("Util.Img.GetCropSrc * hMult=" + hMult);
        //console.log("Util.Img.GetCropSrc * canvas.width=" + canvas.width + " * canvas.height=" + canvas.height);
        //console.log("Util.Img.GetCropSrc * cut=" + JSON.stringify(cut));
        //console.log("Util.Img.GetCropSrc * pObj.CropSize=" + JSON.stringify(pObj.CropSize));
        return canvas.toDataURL('image/jpeg');



      //#region case "GetRotateSize":
      case "GetRotateSize":
        //console.log("UtilitySvc.ImgFunc.Init");
        var size = { X: 0, Y: 0, W: 0, H: 0, Mult: 0 };
        var imgRatio = pObj.Img.height / pObj.Img.width;
        var maxRatio = pObj.Max.H / pObj.Max.W;
        if (maxRatio > imgRatio) { size.W = pObj.Max.W; size.H = pObj.Max.W * imgRatio; size.X = pObj.Max.X; }         // Proportionally too Wide
        else { size.W = pObj.Max.H / imgRatio; size.H = pObj.Max.H; size.X = pObj.Max.X + (pObj.Max.W - size.W) / 2; } // Proportionally too Tall
        return { X: size.X, Y: pObj.Max.Y, W: size.W, H: size.H };


      //#region case "GetRotateSrc":
      case "GetRotateSrc":
        //console.log("UtilitySvc.PhotoFunc.Rotate * pObj.Img.width =" + pObj.Img.width + " * pObj.Img.height =" + pObj.Img.height);
        //console.log("UtilitySvc.PhotoFunc.Rotate * pObj.Rotate =" + pObj.Rotate);
        img = pObj.Img;
        canvas = document.createElement('canvas');
        context = canvas.getContext('2d');
        context.canvas.width = img.height;
        context.canvas.height = img.width;
        var center = (pObj.Rotate == "RotateLeft") ? img.width / 2 : img.height / 2;
        context.translate(center, center);
        context.rotate((pObj.Rotate == "RotateLeft") ? Math.PI * 1.5 : Math.PI * .5);
        context.translate(-center, -center);
        context.drawImage(img, 0, 0, img.width, img.height);
        return canvas.toDataURL('image/jpeg');


    }
  }

  public static Phone(pEvent, pObj) {
    //console.log("this.PhoneFunc * pEvent=" + pEvent);

    switch (pEvent) {
      //case "Cat":
      //  var phoneExpanded: string = this.Phone("Expand", { Number: pObj.Number });
      //  if (pObj.Carrier == null || pObj.Carrier == "" || pObj.Carrier == "Select" && pObj.Number != "") return phoneExpanded;
      //  else return pObj.Carrier + " * " + phoneExpanded;
      //  break;

      case "Digits":
        //console.log("=================");
        //console.log("this.PhoneFunc.Digits * pObj.Digits=" + pObj.Number);
        //console.log("this.PhoneFunc.Digits * pObj.Digits.length=" + String(pObj.Digits).length);
        var pNumber = String(pObj.Number);
        var digits: string = "";
        for (var x = 0; x < pNumber.length; x++) {
          //console.log("number.charCodeAt(x)=" + number.charCodeAt(x));
          var char = pNumber.substring(x, x + 1);
          if (digits == "" && char == "1") continue;
          if (48 <= pNumber.charCodeAt(x) && pNumber.charCodeAt(x) <= 57) digits += char;
        }
        //console.log("Util.Phone.Digits * digits=" + digits);
        //console.log("=================");
        return Number(digits);

      case "Expand":
        //console.log("Util.Phone.Expand * pObj.Digits=" + pObj.Digits);
        //console.log("Util.Phone.Expand * pObj.Digits.length=" + String(pObj.Digits).length);
        var number: string = "";
        var pDigits = String(pObj.Digits);
        var pDigits_Length = pDigits.length;
        if (pDigits_Length != 0) number = "1(";
        if (pDigits_Length > 0) number += pDigits.substr(0, 3);
        if (pDigits_Length == 3) number += ")";
        if (pDigits_Length > 3) number += ")" + pDigits.substr(3, 3);
        if (pDigits_Length == 6) number += "-";
        if (pDigits_Length > 6) number += "-" + pDigits.substr(6, pDigits_Length - 6);
        //console.log("Util.Phone.Expand * number=" + number);
        return number;
      default: alert("Util.Phone * Unknown pEvent" + pEvent);
    }
  }

  public static Time = function (pEvent, pObj) {
    //console.log("Util.Time * pEvent=" + pEvent);
    //console.log("Util.Time * pObj=" + JSON.stringify(pObj));

    var time, hours, minutes, seconds;
    switch (pEvent) {
      case "AmtInc":
        //console.log("pObj.Inc=" + pObj.Inc + " * pObj.Amt=" + pObj.Amt);
        switch (pObj.Inc) {
          default: return "Unknown";
          case "M":
            if (pObj.Short) {
              switch (pObj.Amt) {
                case 1: return "1 M";
                case 2: return "2 Ms";
                case 3: return "3 Ms";
                case 4: return "4 Ms";
                case 5: return "5 Ms";
                case 6: return "6 Ms";
                case 7: return "7 Ms";
                case 8: return "8 Ms";
              }
            }
            else {
              switch (pObj.Amt) {
                case 1: return "1 Minute";
                case 2: return "2 Minutes";
                case 3: return "3 Minutes";
                case 4: return "4 Minutes";
                case 5: return "5 Minutes";
                case 6: return "6 Minutes";
                case 7: return "7 Minutes";
                case 8: return "8 Minutes";
              }
            }
            break;
          case "Q":
            if (pObj.Short) {
              switch (pObj.Amt) {
                case 1: return "15 Ms";
                case 2: return "30 Ms";
                case 3: return "45 Ms";
                case 4: return "1 H";
                case 5: return "75 Ms";
                case 6: return "90 Ms";
                case 7: return "105 Ms";
                case 8: return "2 Hours";
              }
            }
            else {
              switch (pObj.Amt) {
                case 1: return "15 Minutes";
                case 2: return "30 Minutes";
                case 3: return "45 Minutes";
                case 4: return "1 Hour";
                case 5: return "75 Minutes";
                case 6: return "90 Minutes";
                case 7: return "105 Minutes";
                case 8: return "2 Hours";
              }
            }
            break;
          case "H":
            if (pObj.Short) {
              switch (pObj.Amt) {
                case 1: return "1 H";
                case 2: return "2 Hs";
                case 3: return "3 Hs";
                case 4: return "4 Hs";
                case 5: return "5 Hs";
                case 6: return "6 Hs";
                case 7: return "7 Hs";
                case 8: return "8 Hs";
              }
            } else {
              switch (pObj.Amt) {
                case 1: return "1 Hour";
                case 2: return "2 Hours";
                case 3: return "3 Hours";
                case 4: return "4 Hours";
                case 5: return "5 Hours";
                case 6: return "6 Hours";
                case 7: return "7 Hours";
                case 8: return "8 Hours";
              }
            }

            break;
          case "D":
            if (pObj.Short) {
              switch (pObj.Amt) {
                case 1: return "1 D";
                case 2: return "2 Ds";
                case 3: return "3 Ds";
                case 4: return "4 Ds";
                case 5: return "5 Ds";
                case 6: return "6 Ds";
                case 7: return "7 Ds";
                case 8: return "8 Ds";
              }
            }
            else {
              switch (pObj.Amt) {
                case 1: return "1 Day";
                case 2: return "2 Days";
                case 3: return "3 Days";
                case 4: return "4 Days";
                case 5: return "5 Days";
                case 6: return "6 Days";
                case 7: return "7 Days";
                case 8: return "8 Days";
              }
            }
            break;
        }
        break;



      case "Inc":
        switch (pObj.Inc) {
          default: return pObj.Inc;
          case "M": return "Minutes";
          case "Q": return "Quarters";
          case "H": return "Hours";
          case "D": return "Days";
        }

      case "Show":
        //console.log("this.ShowTimeFunc pSeconds = " + pSeconds)
        //var sec_num = parseInt(this, 10); // don't forget the second param
        hours = Math.floor(pObj.Seconds / 3600);
        minutes = Math.floor((pObj.Seconds - (hours * 3600)) / 60);
        seconds = pObj.Seconds - (hours * 3600) - (minutes * 60);
        //console.log("aa hours=" + hours + " * minutes=" + minutes + " * seconds=" + seconds);
        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        time = hours + ':' + minutes + ':' + seconds;
        //console.log("bb hours=" + hours + " * minutes=" + minutes + " * seconds=" + seconds);
        //console.log("time=" + time);
        return time;
    }
  };

  public static Audio(pType: string) {
    if (GM.AudioOn) {
      switch (pType) {
        default:
        case "Chime": Dft.Audio.Chime.play(); return;
        case "Click": Dft.Audio.Click.play(); return;
        case "Error": Dft.Audio.Error.play(); return;
        case "Ping": Dft.Audio.Ping.play(); return;
      }
    }
  };
}
