"use strict";
exports.__esModule = true;
var token_1 = require("../api/token");
var Lexer = (function () {
    function Lexer() {
        this.rules = {};
    }
    Lexer.prototype.addRule = function (rule) {
        if (this.rules[rule.name] !== undefined) {
            return false;
        }
        this.rules[rule.name] = rule;
        return true;
    };
    Lexer.prototype.delRule = function (rule) {
        if (this.rules[rule.name] !== undefined) {
            delete this.rules[rule.name];
        }
    };
    Lexer.prototype.lex = function (src) {
        var tokens = Array();
        while (src) {
            for (var i in this.rules) {
                var token = this.rules[i].lex(src);
                if (token !== token_1.Token.blank) {
                    console.log(token);
                    src = src.substring(token.getRaw().length);
                    tokens.push(token);
                    break;
                }
            }
        }
        return tokens;
    };
    Lexer.prototype.debug = function () {
        console.log(this.rules);
    };
    Lexer.blank = new Lexer();
    return Lexer;
}());
exports.Lexer = Lexer;
exports.defaultLexer = new Lexer();
exports.blankLexer = new Lexer();
