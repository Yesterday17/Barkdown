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
var rule_1 = require("../rule");
var InlineRule = (function (_super) {
    __extends(InlineRule, _super);
    function InlineRule(name) {
        return _super.call(this, name) || this;
    }
    return InlineRule;
}(rule_1.Rule));
exports.InlineRule = InlineRule;
