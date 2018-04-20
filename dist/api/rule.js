"use strict";
exports.__esModule = true;
var token_1 = require("./token");
var Rule = (function () {
    function Rule(rname) {
        this.name = rname;
    }
    Rule.prototype.setDescription = function (desc) {
        this.description = desc;
    };
    Rule.prototype.setRegex = function (reg) {
        this.regex = reg;
    };
    Rule.prototype.lex = function (src) {
        return token_1.Token.blank;
    };
    return Rule;
}());
exports.Rule = Rule;