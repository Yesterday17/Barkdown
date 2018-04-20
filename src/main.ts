import { Rule } from "./api/rules/rule";
import { Token } from "./api/token";
import { Lexer } from "./components/lexer";

class Barked {
  // Components
  protected lexer: Lexer;

  // Variables
  private token: Token[];

  constructor(lex: Lexer = Lexer.blankLexer) {
    this.lexer = lex;
  }

  public parse(): string {
    return "";
  }
}

const barked = new Barked();

export default barked;
