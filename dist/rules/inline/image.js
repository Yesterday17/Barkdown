"use strict";
exports.__esModule = true;
var inline_1 = require("../../api/rules/inline");
var Image = new inline_1.InlineRule("image");
exports.Image = Image;
Image.setRegex(/^!\[([^\]]+)\] ?\(([^\)]+)\)/);
