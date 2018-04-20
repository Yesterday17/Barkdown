"use strict";
exports.__esModule = true;
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
    return Rule;
}());
exports.Rule = Rule;
