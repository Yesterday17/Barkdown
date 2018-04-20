"use strict";
exports.__esModule = true;
var block_1 = require("../../api/rules/block");
var code = new block_1.BlockRule("code");
code.setRegex(/     /);
exports["default"] = code;
