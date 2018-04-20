"use strict";
exports.__esModule = true;
var rule_1 = require("../../api/rule");
var Image = new rule_1.Rule("image");
exports.Image = Image;
Image.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
