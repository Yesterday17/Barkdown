"use strict";
exports.__esModule = true;
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
