"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var rule_1 = require("../../../api/rule");
var RuleBiliHr = (function (_super) {
    __extends(RuleBiliHr, _super);
    function RuleBiliHr() {
        var _this = _super.call(this, "BiliHr") || this;
        _this.setRegex(/^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/);
        return _this;
    }
    return RuleBiliHr;
}(rule_1.Rule));
var Bilihr = new RuleBiliHr();
exports.Bilihr = Bilihr;
