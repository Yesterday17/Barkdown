import { Lexer } from "../dist/components/lexer";
import { Image } from "../dist/rules/inline/image";

const lexer = new Lexer();
const str = `![233](2333333)`;

console.log(lexer.addRule(Image));

lexer.debug();

console.log(Image.lex(str));
