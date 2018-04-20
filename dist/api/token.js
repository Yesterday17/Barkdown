"use strict";
exports.__esModule = true;
var Token = (function () {
    function Token(t) {
        this.type = "";
        this.value = [];
        this.raw = "";
        this.type = t;
    }
    Token.prototype.setRaw = function (r) {
        this.raw = r;
    };
    Token.prototype.getRaw = function () {
        return this.raw;
    };
    Token.prototype.putValue = function () {
        var val = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            val[_i] = arguments[_i];
        }
        this.value.push(val);
    };
    Token.prototype.getValue = function () {
        return this.value;
    };
    Token.blank = new Token(null);
    return Token;
}());
exports.Token = Token;
