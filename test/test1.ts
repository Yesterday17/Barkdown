import { Lexer } from "../dist/components/lexer";
import { Image } from "../dist/rules/inline/image";

const lexer = new Lexer();

console.log(lexer.addRule(Image));
console.log(lexer.addRule(Image));

lexer.debug();

lexer.delRule(Image);
lexer.debug();
