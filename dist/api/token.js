"use strict";
exports.__esModule = true;
var Token = (function () {
    function Token(t, val) {
        this.type = t;
        this.value = val;
    }
    Token.blank = new Token(null, null);
    return Token;
}());
exports.Token = Token;
