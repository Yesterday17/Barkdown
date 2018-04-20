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
    Lexer.prototype.debug = function () {
        console.log(this.rules);
    };
    Lexer.blankLexer = new Lexer();
    return Lexer;
}());
exports.Lexer = Lexer;
exports.defaultLexer = new Lexer();
exports.blankLexer = new Lexer();
