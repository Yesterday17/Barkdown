import { Lexer, Image } from "../build/barked";

const lexer = new Lexer();
const src = `![233](2333333)`;

console.log(lexer.addRule(Image));

lexer.debug();

console.log(lexer.lex(src));
