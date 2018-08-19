import { Lexer } from "../components/lexer";
import { Renderer } from "../components/renderer";
import { ATHHeading } from "../rules/block/atx-heading";
import { HardNewline } from "../rules/block/hard-newline";
import { Text } from "../rules/block/text";
import { ThematicBreak } from "../rules/block/thematic-break";
import { Image } from "../rules/inline/image";
import { SetextHeading } from "../rules/block/setext-heading";

const lexer = new Lexer();
lexer.addRule(ATHHeading);
lexer.addRule(SetextHeading);
lexer.addRule(ThematicBreak);
lexer.addRule(HardNewline);
lexer.addRule(Image);
lexer.addRule(Text);

const renderer = new Renderer(lexer);

export let all = { lexer: lexer, renderer: renderer };
