"use strict";
exports.__esModule = true;
var rule_1 = require("../../../api/rule");
var Bilihr = new rule_1.Rule("Bilihr");
exports.Bilihr = Bilihr;
Bilihr.setRegex(/^((?:(?:\* ?){3,})|(?:(?:- ?){3,})|(?:(?:_ ?){3,}))(?:[\*-_] ?)* *\n/);
