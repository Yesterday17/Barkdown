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
var token_1 = require("../../api/token");
var RuleImage = (function (_super) {
    __extends(RuleImage, _super);
    function RuleImage() {
        var _this = _super.call(this, "Image") || this;
        _this.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
        return _this;
    }
    RuleImage.prototype.lex = function (src) {
        var token = new token_1.Token(this.name);
        var p = [];
        if ((p = this.getRegex().exec(src))) {
            token.putValue(p[1], p[2]);
            return token;
        }
        return token_1.Token.blank;
    };
    return RuleImage;
}(rule_1.Rule));
var Image = new RuleImage();
exports.Image = Image;
