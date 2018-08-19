import { Lexer } from "../components/lexer";
import { Renderer } from "../components/renderer";
import { HardNewline } from "../rules/block/hard-newline";
import { Hr } from "../rules/block/hr";
import { Text } from "../rules/block/text";
import { Image } from "../rules/inline/image";

const lexer = new Lexer();
lexer.addRule(Hr);
lexer.addRule(Image);
lexer.addRule(HardNewline);
lexer.addRule(Text);

const renderer = new Renderer(lexer);

export let all = { lexer: lexer, renderer: renderer };
