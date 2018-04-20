"use strict";
exports.__esModule = true;
var lexer_1 = require("./components/lexer");
var Barked = (function () {
    function Barked(lex) {
        if (lex === void 0) { lex = lexer_1.Lexer.blankLexer; }
        this.lexer = lex;
    }
    Barked.prototype.parse = function () {
        return "";
    };
    return Barked;
}());
var barked = new Barked();
exports["default"] = barked;
