"use strict";
exports.__esModule = true;
var lexer_1 = require("../dist/components/lexer");
var image_1 = require("../dist/rules/inline/image");
var lexer = new lexer_1.Lexer();
console.log(lexer.addRule(image_1.Image));
console.log(lexer.addRule(image_1.Image));
lexer.debug();
