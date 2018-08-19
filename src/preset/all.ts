import { Lexer } from "../components/lexer";
import { Image } from "../rules/inline/image";
import { Text } from "../rules/block/text";
import { HardNewline } from "../rules/block/hard-newline";
import { Hr } from "../rules/block/hr";

const lexer = new Lexer();
lexer.addRule(Hr);
lexer.addRule(Image);
lexer.addRule(HardNewline);
lexer.addRule(Text);

export { lexer as all };
