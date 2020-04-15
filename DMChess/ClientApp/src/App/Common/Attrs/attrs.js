"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../../Common/Modules/Util");
var Attrs = /** @class */ (function () {
    function Attrs() {
    }
    Attrs.Parse = function (pAttrs, pCL) {
        //#region Init
        if (pCL === void 0) { pCL = false; }
        if (pCL) {
            //console.log("StyleSvc.Parse * pStyle=" + pStyle);
            //console.log("StyleSvc.Parse * pStyle.length=" + pStyle.length);
        }
        if (pAttrs === undefined || pAttrs === null)
            return;
        pAttrs = pAttrs.toString().trim();
        var parse = { Alphas: [], AlphaNums: [], Nums: [], Pascals: [], Pascalx2s: [] };
        var blockType;
        var leftParents = 0;
        var alphas = "", alphaNums = "", numAlphas = "", nums = "", pascals = "", pascalx2s = "";
        //#endregion
        for (var x = 0; x < pAttrs.length; x++) {
            var a = pAttrs.substr(x, 1);
            if (pCL) {
                //console.log("Util.Parse.for * a=" + a);
            }
            var isNum = Util_1.Util.IsNumDot(a);
            if (Util_1.Util.IsNumDot(a) && leftParents === 0) {
                //#region Num
                if (blockType === eBlockType.Num) { //Nochange, still doing Nums
                    //#region No Switch
                    nums += a;
                    numAlphas += a;
                    pascals += a; //Add to Nums, numAlphas, & Pascals
                    if (alphaNums.length > 0)
                        alphaNums += a; //Already collected some AlphaNums, add to the 2nd half
                    //#endregion
                }
                else { //Switch to collecting Nums.
                    //#region Switch to Num
                    blockType = eBlockType.Num; //Switch to collecting Nums. 
                    if (alphas.length > 0) {
                        parse.Alphas.push(alphas);
                        alphas = "";
                    } //Save and reset Alphas
                    if (numAlphas.length > 0) {
                        parse.AlphaNums.push(numAlphas);
                        numAlphas = "";
                    } //If any numAlphas, save and reset
                    if (pascals.length > 0) {
                        parse.Pascals.push(pascals);
                        pascals = "";
                    } //If any Pascals, Save and reset Pascals
                    nums = a;
                    numAlphas = a;
                    pascals = a; //Add first Num
                    if (alphaNums.length > 0)
                        alphaNums += a; //Have some AlphaNums, Add Num to second half
                    //#endregion
                }
                //#endregion
            }
            else {
                //#region Alpha
                if (Util_1.Util.IsCommaSpace(a) && leftParents === 0 || a === ")" && leftParents === 1) {
                    //#region Hard Break
                    if (a === ")" && leftParents === 1) {
                        leftParents = 0;
                        alphas += a;
                        alphaNums += a;
                        numAlphas += a;
                    }
                    if (pCL) {
                        //console.log("Alpha - Comment or spaceUtil.Parse.for * a=" + a);
                    }
                    if (alphas.length > 0) {
                        parse.Alphas.push(alphas);
                        alphas = "";
                    } //Save and reset Alphas
                    if (alphaNums.length > 0) {
                        parse.AlphaNums.push(alphaNums);
                        alphaNums = "";
                    } //Save and reset AlphaNums
                    if (numAlphas.length > 0) {
                        parse.AlphaNums.push(numAlphas);
                        numAlphas = "";
                    } //Save and reset numAlphas   
                    if (nums.length > 0) {
                        parse.Nums.push(+nums);
                        nums = "";
                    } //Save and reset Nums
                    if (pascals.length > 0) {
                        parse.Pascals.push(pascals);
                        pascals = "";
                    } //If any Pascals, Save and reset Pascals
                    //#endregion
                }
                else {
                    if (pCL) {
                        //console.log("Alpha - Not comment or spaceUtil.Parse.for * a=" + a);
                    }
                    if (a === "(")
                        leftParents++;
                    if (a === ")")
                        leftParents--;
                    if (blockType === eBlockType.Alpha || leftParents > 0) {
                        //#region No Switch
                        alphas += a;
                        alphaNums += a; //Add to Alphas, AlphaNums & Pascals
                        if (numAlphas.length > 0)
                            numAlphas += a; //Already collected some numAlphas, add to the 2nd half
                        //#endregion
                    }
                    else {
                        //#region Switch to Alpha
                        blockType = eBlockType.Alpha; //Switch to collecting Alphas. 
                        if (nums.length > 0) {
                            parse.Nums.push(+nums);
                            nums = "";
                        } //Save and reset Nums
                        if (alphaNums.length > 0) {
                            parse.AlphaNums.push(alphaNums);
                            alphaNums = "";
                        } //If any AlphaNums, save and reset
                        if (pascals.length > 0) {
                            parse.Pascals.push(pascals);
                            pascals = "";
                        } //If any Pascals, Save and reset Pascals
                        alphas = a;
                        alphaNums = a; //Add first Alpha
                        if (numAlphas.length > 0) {
                            numAlphas += a;
                            if (a === "%") {
                                parse.AlphaNums.push(numAlphas);
                                numAlphas = "";
                            }
                        } //Have some numAlphas, Add Alpha to second half
                        //#endregion
                    }
                    if (Util_1.Util.ChaUpper(a)) {
                        if (pascals.length > 0) {
                            parse.Pascals.push(pascals);
                            pascals = "";
                        }
                    } //If any Pascals, Save and reset Pascals
                    pascals += a;
                }
                if (pCL) {
                    //console.log("Alpha - Not comment or spaceUtil.Parse.for * alphaNums=" + alphaNums);
                    //console.log("Alpha - Not comment or spaceUtil.Parse.for * numAlphas=" + numAlphas);
                }
                //#endregion
            }
        }
        //#region Last Block
        if (alphas.length > 0)
            parse.Alphas.push(alphas); //Save Alphas
        if (alphaNums.length > 0)
            parse.AlphaNums.push(alphaNums); //Save AlphaNums
        if (numAlphas.length > 0)
            parse.AlphaNums.push(numAlphas); //Save numAlphas   
        if (nums.length > 0)
            parse.Nums.push(+nums); //Save Nums 
        if (pascals.length > 0)
            parse.Pascals.push(pascals); //Save Pascals
        if (pascalx2s.length > 0)
            parse.Pascals.push(pascalx2s); //Save Pascalx2s
        //#endregion
        return parse;
    };
    return Attrs;
}());
exports.Attrs = Attrs;
;
var eBlockType;
(function (eBlockType) {
    eBlockType[eBlockType["Alpha"] = 0] = "Alpha";
    eBlockType[eBlockType["Num"] = 1] = "Num";
})(eBlockType || (eBlockType = {}));
//# sourceMappingURL=Attrs.js.map