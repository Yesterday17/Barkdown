"use strict";
exports.__esModule = true;
var token_1 = require("./token");
var Rule = (function () {
    function Rule(rname) {
        this.name = "";
        this.description = "";
        this.regex = new RegExp("");
        this.name = rname;
    }
    Rule.prototype.setDescription = function (desc) {
        this.description = desc;
    };
    Rule.prototype.setRegex = function (reg) {
        this.regex = reg;
    };
    Rule.prototype.getRegex = function () {
        return this.regex;
    };
    Rule.prototype.lex = function (src) {
        var token = new token_1.Token(this.name);
        var p = [];
        if ((p = this.getRegex().exec(src))) {
            var ans = this.handle(p);
            if (ans[0]) {
                token.putValue(ans[1]);
                return token;
            }
        }
        return token_1.Token.blank;
    };
    Rule.prototype.handle = function (data) {
        return [false, []];
    };
    return Rule;
}());
exports.Rule = Rule;
