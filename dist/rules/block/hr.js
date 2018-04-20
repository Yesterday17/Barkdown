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
var rule_1 = require("../../api/rule");
var RuleHr = (function (_super) {
    __extends(RuleHr, _super);
    function RuleHr() {
        var _this = _super.call(this, "Hr") || this;
        _this.setRegex(/^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/);
        return _this;
    }
    RuleHr.prototype.handle = function (data) {
        return [false, []];
    };
    return RuleHr;
}(rule_1.Rule));
var Hr = new RuleHr();
exports.Hr = Hr;
