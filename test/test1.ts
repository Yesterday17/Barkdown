import { Lexer } from "../dist/components/lexer";
import { Image } from "../dist/rules/inline/image";

const lexer = new Lexer();

lexer.addRule(Image);
lexer.debug();
