"use strict";
exports.__esModule = true;
var inline_1 = require("./inline");
var image = new inline_1.InlineRule('image');
image.setRegex(/^!\[([^\]]+)\] {0,1}\(([^\)]+)\)/);
exports["default"] = image;
