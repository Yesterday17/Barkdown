"use strict";
exports.__esModule = true;
var rule_1 = require("../../api/rule");
var Hr = new rule_1.Rule("Hr");
exports.Hr = Hr;
Hr.setRegex(/^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/);
